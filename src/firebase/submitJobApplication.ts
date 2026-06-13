import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage, getFirebaseConfigError } from "./firebase";

const MAX_RESUME_BYTES_FOR_FALLBACK = 600_000;

export type JobApplicationInput = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  portfolio?: string;
  jobId: number;
  jobTitle: string;
  department: string;
  resumeFile: File;
};

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result;
      if (typeof result !== "string") {
        reject(new Error("Could not read resume file."));
        return;
      }
      resolve(result.split(",")[1] ?? "");
    };
    reader.onerror = () => reject(new Error("Could not read resume file."));
    reader.readAsDataURL(file);
  });
}

async function uploadResumeToStorage(jobId: number, resumeFile: File): Promise<string | null> {
  if (!storage) return null;

  const safeName = resumeFile.name.replace(/[^\w.-]/g, "_");
  const storagePath = `jobApplications/${jobId}/${Date.now()}_${safeName}`;
  const storageRef = ref(storage, storagePath);

  await uploadBytes(storageRef, resumeFile, {
    contentType: resumeFile.type || "application/pdf",
  });
  return getDownloadURL(storageRef);
}

function toSubmitError(error: unknown): string {
  const code =
    typeof error === "object" && error !== null && "code" in error
      ? String((error as { code: string }).code)
      : "";

  if (code === "permission-denied") {
    return "Firestore blocked the save. In Firebase Console → Firestore → Rules, allow create on jobApplications.";
  }

  const message = error instanceof Error ? error.message : "";
  if (import.meta.env.DEV && message) return message;

  return "Could not save your application. Please try again.";
}

export async function submitJobApplication(data: JobApplicationInput): Promise<void> {
  const configError = getFirebaseConfigError();
  if (configError || !db) {
    throw new Error(configError ?? "Firebase is not configured.");
  }

  let resumeUrl: string | null = null;
  let resumeBase64: string | null = null;
  let resumeContentType: string | null = null;
  let resumeStoredInFirestore = false;

  try {
    resumeUrl = await uploadResumeToStorage(data.jobId, data.resumeFile);
  } catch (storageError) {
    if (import.meta.env.DEV) {
      console.warn("Storage upload failed — saving via Firestore fallback.", storageError);
    }
    if (data.resumeFile.size <= MAX_RESUME_BYTES_FOR_FALLBACK) {
      resumeBase64 = await fileToBase64(data.resumeFile);
      resumeContentType = data.resumeFile.type || "application/pdf";
      resumeStoredInFirestore = true;
    }
  }

  try {
    await addDoc(collection(db, "jobApplications"), {
      firstName: data.firstName,
      lastName: data.lastName,
      phone: data.phone,
      email: data.email,
      portfolio: data.portfolio?.trim() || null,
      jobId: data.jobId,
      jobTitle: data.jobTitle,
      department: data.department,
      resumeFileName: data.resumeFile.name,
      resumeUrl,
      resumeBase64,
      resumeContentType,
      resumeStoredInFirestore,
      timestamp: serverTimestamp(),
    });
  } catch (error) {
    throw new Error(toSubmitError(error));
  }
}
