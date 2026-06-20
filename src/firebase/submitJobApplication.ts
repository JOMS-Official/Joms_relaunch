import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage, getFirebaseConfigError } from "./firebase";

const MAX_RESUME_BYTES_FOR_FALLBACK = 600_000;

const CAREERS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwWvB2NYYlWzqBxRYH7LfOwJaHrpv46uakYDnBbtdmJGlKYUH_yv4VgH9bgbA0R1LOctQ/exec";

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

export async function submitJobApplication(data: JobApplicationInput): Promise<void> {
  const resumeBase64 = await fileToBase64(data.resumeFile);

  await fetch(CAREERS_SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
    body: JSON.stringify({
      firstName: data.firstName,
      lastName: data.lastName,
      phone: data.phone,
      email: data.email,
      portfolio: data.portfolio?.trim() || "",
      jobId: data.jobId,
      jobTitle: data.jobTitle,
      department: data.department,
      resumeFileName: data.resumeFile.name,
      resumeContentType: data.resumeFile.type || "application/pdf",
      resumeBase64,
    }),
  });
}
