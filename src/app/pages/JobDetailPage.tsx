import React, { useEffect, useState } from "react";
import { Link, useOutletContext, useParams } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, Briefcase, MapPin, Clock, X, Upload } from "lucide-react";
import { getCareerJobById, isJobListingOpen } from "../data/careersJobs";
import {
  emailLooksValid,
  nameLooksValid,
  nameValidationMessage,
  urlLooksValid,
} from "../utils/formValidation";
import { submitJobApplication } from "../../firebase/submitJobApplication";
import applicationSuccessIcon from "../../assets/application-success-icon.png";
import {
  careerClosingSoonTag,
  careerClosingSoonTextColor,
  careerGlassDeptTag,
  careerGlassIconBox,
} from "../careersGlass";

function detailIconBox(darkMode: boolean): React.CSSProperties {
  return { ...careerGlassIconBox(darkMode), width: 48, height: 48 };
}

function contentCardStyle(darkMode: boolean): React.CSSProperties {
  return {
    background: darkMode ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.95)",
    border: darkMode ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(0,0,0,0.06)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)"};
}

const HELLO_EMAIL = "hello@joms.in";

function renderTextWithHelloEmail(text: string, darkMode: boolean) {
  const idx = text.indexOf(HELLO_EMAIL);
  if (idx === -1) return text;
  const emailColor = darkMode ? "rgba(248,250,252,0.6)" : "rgba(2,6,23,0.5)";
  return (
    <>
      {text.slice(0, idx)}
      <a href={`mailto:${HELLO_EMAIL}`} className="hover:opacity-90" style={{ color: emailColor }}>
        {HELLO_EMAIL}
      </a>
      {text.slice(idx + HELLO_EMAIL.length)}
    </>
  );
}

export default function JobDetailPage() {
  const { jobId } = useParams();
  const { darkMode } = useOutletContext<{ darkMode: boolean }>();
  const id = Number(jobId);
  const job = Number.isFinite(id) ? getCareerJobById(id) : undefined;

  const [showApplication, setShowApplication] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [touched, setTouched] = useState({
    firstName: false,
    lastName: false,
    email: false,
    portfolio: false});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [jobId]);

  useEffect(() => {
    if (showApplication) {
      setFirstName("");
      setLastName("");
      setPhone("");
      setEmail("");
      setPortfolio("");
      setResumeFile(null);
      setSubmitError("");
      setIsSubmitting(false);
    }
  }, [showApplication]);

  const showFieldHint = (value: string, fieldTouched: boolean) =>
    fieldTouched || value.trim().length > 0;

  const firstNameError = showFieldHint(firstName, touched.firstName)
    ? nameValidationMessage(firstName)
    : "";
  const lastNameError = showFieldHint(lastName, touched.lastName)
    ? nameValidationMessage(lastName, { minLength: 1 })
    : "";
  const emailError =
    touched.email && !emailLooksValid(email) ? "Enter a valid email address." : "";
  const portfolioError =
    touched.portfolio && portfolio.trim() && !urlLooksValid(portfolio)
      ? "Enter a valid URL (e.g. www.joms.in or https://…)."
      : "";

  const portfolioValid = !portfolio.trim() || urlLooksValid(portfolio);

  const canSubmit =
    nameLooksValid(firstName) &&
    nameLooksValid(lastName, { minLength: 1 }) &&
    phone.trim() !== "" &&
    emailLooksValid(email) &&
    resumeFile !== null &&
    portfolioValid;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ firstName: true, lastName: true, email: true, portfolio: true });
    if (!canSubmit || !job || !resumeFile || isSubmitting) return;

    setIsSubmitting(true);
    setSubmitError("");

    try {
      await submitJobApplication({
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        phone: phone.trim(),
        email: email.trim(),
        portfolio,
        jobId: job.id,
        jobTitle: job.title,
        department: job.department,
        resumeFile,
      });
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setShowApplication(false);
      }, 3000);
    } catch (error) {
      const message =
        error instanceof Error && error.message
          ? error.message
          : "Something went wrong. Please try again.";
      setSubmitError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const muted = darkMode ? "rgba(160,160,160,0.95)" : "rgba(2,6,23,0.55)";
  const bodyText = darkMode ? "rgba(248,250,252,0.75)" : "rgba(2,6,23,0.75)";

  if (!job) {
    return (
      <div className="pt-24 px-6 pb-20 max-w-3xl mx-auto text-center">
        <p style={{ color: muted }}>Role not found.</p>
        <Link to="/careers" className="inline-flex items-center gap-2 mt-6 text-sm" style={{ color: "#A78BFA" }}>
          <ArrowLeft size={16} /> Back to Careers
        </Link>
      </div>
    );
  }

  if (!isJobListingOpen(job)) {
    return (
      <div className="pt-24 px-6 pb-20 max-w-3xl mx-auto text-center">
        <p style={{ color: muted }}>This role is no longer accepting applications.</p>
        <Link to="/careers" className="inline-flex items-center gap-2 mt-6 text-sm" style={{ color: "#A78BFA" }}>
          <ArrowLeft size={16} /> View open roles
        </Link>
      </div>
    );
  }

  const glassInput =
    "glass-form-input w-full px-3 py-2 rounded-lg text-[16px] sm:text-[13px] leading-snug outline-none transition-[box-shadow,border-color] backdrop-blur-xl " +
    (darkMode
      ? "glass-form-input--dark bg-white/[0.08] border border-white/[0.14] text-[#F8FAFC] placeholder:text-slate-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_2px_12px_rgba(0,0,0,0.12)] focus:ring-1 focus:ring-violet-500/35 focus:border-violet-400/40"
      : "glass-form-input--light bg-white/65 border border-black/[0.1] text-[#020617] placeholder:text-slate-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_2px_8px_rgba(0,0,0,0.05)] focus:ring-1 focus:ring-violet-500/30 focus:border-violet-400/45");
  const glassFileRow =
    "flex items-center gap-2.5 px-3 py-2 rounded-lg cursor-pointer border border-dashed backdrop-blur-xl transition-colors " +
    (darkMode
      ? "bg-white/[0.06] border-white/20 hover:border-white/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
      : "bg-white/50 border-black/15 hover:border-black/25 shadow-sm");
  const labelClass = "text-[11px] font-medium mb-1 block " + (darkMode ? "text-slate-500" : "text-slate-600");

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 min-h-[80vh]">
      <div className="max-w-6xl mx-auto">
        <Link
          to="/careers"
          className="inline-flex items-center gap-2 text-sm mb-10 transition-opacity hover:opacity-90"
          style={{ color: "#A78BFA" }}
        >
          <ArrowLeft size={18} />
          Back to Careers
        </Link>

        <header className="flex flex-col sm:flex-row sm:items-start gap-6 mb-12">
          <div style={detailIconBox(darkMode)}>
            <Briefcase size={22} style={{ color: darkMode ? "#F8FAFC" : "#020617" }} strokeWidth={1.75} />
          </div>
          <div className="flex-1 min-w-0">
            <h1
              className="text-section-title-sm font-bold mb-4"
              style={{lineHeight: 1.15 }}
            >
              {job.title}
            </h1>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <span className="inline-flex items-center gap-1.5 text-sm" style={{ color: muted }}>
                <MapPin size={15} /> {job.location}
              </span>
              <span className="inline-flex items-center gap-1.5 text-sm" style={{ color: muted }}>
                <Clock size={15} /> {job.type}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium" style={careerGlassDeptTag(darkMode)}>
                {job.department}
              </span>
              {job.listingStatus === "closing_soon" ? (
                <span
                  className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide"
                  style={careerClosingSoonTag(darkMode)}
                >
                  Closing soon
                </span>
              ) : null}
            </div>
          </div>
        </header>

        <div className="grid lg:grid-cols-[1fr_384px] gap-8 lg:gap-10 items-start">
          <div className="space-y-6">
            {[
              { title: "About Us", body: job.aboutUs },
              { title: "Role Overview", body: job.roleOverview },
            ].map((block) => (
              <div key={block.title} className="rounded-2xl p-6" style={contentCardStyle(darkMode)}>
                <h2 className="text-base font-semibold mb-3" style={{}}>
                  {block.title}
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: bodyText }}>
                  {block.body}
                </p>
              </div>
            ))}

            {job.detailSections.map((sec, secIdx) => (
              <div key={`${sec.title}-${secIdx}`} className="rounded-2xl p-6" style={contentCardStyle(darkMode)}>
                <h2 className="text-base font-semibold mb-4" style={{}}>
                  {sec.title}
                </h2>
                <ul className="space-y-3">
                  {sec.items.map((r, itemIdx) => (
                    <li key={`${secIdx}-${itemIdx}`} className="flex items-start gap-3 text-sm" style={{ color: bodyText }}>
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: "#7B5CFF", boxShadow: "0 0 8px rgba(123,92,255,0.5)" }}
                      />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="rounded-2xl p-6" style={contentCardStyle(darkMode)}>
              <h2 className="text-base font-semibold mb-3" style={{}}>
                How to Apply
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: bodyText }}>
                {renderTextWithHelloEmail(job.howToApply, darkMode)}
              </p>
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 space-y-4 w-full max-w-[384px] lg:max-w-none lg:w-[384px]">
            <div
              className="rounded-2xl p-6 box-border w-full max-w-[384px] min-h-[238px] flex flex-col"
              style={contentCardStyle(darkMode)}
            >
              <h3 className="text-sm font-semibold mb-4 shrink-0" style={{}}>
                Quick Info
              </h3>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt style={{ color: muted }}>Department</dt>
                  <dd className="mt-0.5 font-medium">{job.department}</dd>
                </div>
                <div>
                  <dt style={{ color: muted }}>Location</dt>
                  <dd className="mt-0.5 font-medium">{job.location}</dd>
                </div>
                <div>
                  <dt style={{ color: muted }}>Type</dt>
                  <dd className="mt-0.5 font-medium">{job.type}</dd>
                </div>
                {job.listingStatus === "closing_soon" ? (
                  <div>
                    <dt style={{ color: muted }}>Status</dt>
                    <dd className="mt-0.5 font-medium" style={{ color: careerClosingSoonTextColor(darkMode) }}>
                      Closing soon
                    </dd>
                  </div>
                ) : null}
              </dl>
            </div>
            <button
              type="button"
              onClick={() => setShowApplication(true)}
              className="w-full max-w-[384px] py-3.5 rounded-xl text-white text-sm font-medium transition-transform hover:scale-[1.02]"
              style={{
                background: "linear-gradient(90deg, #4F46E5, #7B5CFF)",
                boxShadow: "0 8px 24px rgba(79,70,229,0.45)"}}
            >
              Apply Now
            </button>
          </aside>
        </div>
      </div>

      <AnimatePresence>
        {showApplication && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "rgba(2,6,23,0.65)", backdropFilter: "blur(12px)" }}
          >
            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className={
                "relative flex flex-col overflow-hidden shadow-xl " +
                (submitted
                  ? "w-[min(512px,calc(100vw-1.5rem))] h-[294px] rounded-[20px]"
                  : "rounded-xl w-[min(440px,calc(100vw-1.5rem))] max-h-[min(93vh,800px)]")
              }
              style={
                submitted
                  ? {
                      background: "#0B1120",
                      border: "1px solid rgba(255,255,255,0.08)",
                      boxShadow: "0 24px 60px rgba(0,0,0,0.55)"}
                  : {
                      background: darkMode ? "rgba(15,23,42,0.98)" : "rgba(255,255,255,0.98)",
                      border: darkMode ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(0,0,0,0.07)",
                      boxShadow: darkMode ? "0 20px 50px rgba(0,0,0,0.45)" : "0 20px 50px rgba(0,0,0,0.1)"}
              }
            >
              <button
                type="button"
                onClick={() => {
                  setShowApplication(false);
                  setSubmitted(false);
                }}
                className={
                  "absolute z-10 p-1.5 rounded-lg hover:opacity-80 transition-opacity " +
                  (submitted ? "top-5 right-5" : "top-3 right-3")
                }
                style={{ color: submitted ? "#F8FAFC" : darkMode ? "#F8FAFC" : "#020617" }}
                aria-label="Close"
              >
                <X size={18} strokeWidth={1.75} />
              </button>

              {submitted ? (
                <div className="flex h-full flex-col items-center justify-center px-8 text-center">
                  <div
                    className="mb-4 flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.06] backdrop-blur-md"
                    aria-hidden
                  >
                    <img
                      src={applicationSuccessIcon}
                      alt=""
                      className="h-[52px] w-[52px] object-contain"
                      width={52}
                      height={52}
                    />
                  </div>
                  <h3
                    className="mb-2 text-[26px] font-bold leading-tight text-white"
                    style={{}}
                  >
                    Application Sent!
                  </h3>
                  <p className="text-base font-normal text-[#94A3B8]">
                    We're excited to review your application.
                  </p>
                </div>
              ) : (
                <div className="flex flex-col max-h-[min(93vh,800px)] min-h-0">
                  <div
                    className="px-5 pt-5 pb-2 shrink-0 border-b"
                    style={{ borderColor: darkMode ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)" }}
                  >
                    <h3
                      className="text-[15px] font-semibold leading-snug pr-8 mb-0.5 line-clamp-2"
                      style={{color: darkMode ? "#F8FAFC" : "#020617" }}
                    >
                      Apply for {job.title}
                    </h3>
                    <p className="text-xs" style={{ color: darkMode ? "rgba(148,163,184,0.9)" : "rgba(2,6,23,0.5)" }}>
                      Fill in your details below
                    </p>
                  </div>

                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="flex flex-col flex-1 min-h-0 px-5 pb-4 pt-3"
                  >
                    <div className="scrollbar-hide flex-1 min-h-0 overflow-y-auto space-y-2.5 pr-0.5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        <div>
                          <label className={labelClass}>First Name</label>
                          <input
                            name="firstName"
                            type="text"
                            autoComplete="given-name"
                            placeholder="First name"
                            className={glassInput}
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            onBlur={() => setTouched((t) => ({ ...t, firstName: true }))}
                          />
                          {firstNameError ? (
                            <p className="mt-1 text-[10px] text-red-400">{firstNameError}</p>
                          ) : null}
                        </div>
                        <div>
                          <label className={labelClass}>Last Name</label>
                          <input
                            name="lastName"
                            type="text"
                            autoComplete="family-name"
                            placeholder="Last name"
                            className={glassInput}
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            onBlur={() => setTouched((t) => ({ ...t, lastName: true }))}
                          />
                          {lastNameError ? (
                            <p className="mt-1 text-[10px] text-red-400">{lastNameError}</p>
                          ) : null}
                        </div>
                      </div>
                      <div>
                        <label className={labelClass}>Contact Number</label>
                        <input
                          name="phone"
                          type="tel"
                          autoComplete="tel"
                          placeholder="+91 Enter your phone"
                          className={glassInput}
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Email ID</label>
                        <input
                          name="email"
                          type="email"
                          autoComplete="email"
                          placeholder="your@email.com"
                          className={glassInput}
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                        />
                        {emailError ? (
                          <p className="mt-1 text-[10px] text-red-400">{emailError}</p>
                        ) : null}
                      </div>
                      <div>
                        <label className={labelClass}>Job Role</label>
                        <input
                          type="text"
                          readOnly
                          value={job.title}
                          className={glassInput + " cursor-not-allowed opacity-90"}
                        />
                      </div>
                      <div>
                        <div className={labelClass}>Resume</div>
                        <label className={glassFileRow}>
                          <Upload size={16} style={{ color: "#A78BFA" }} />
                          <span
                            className="text-[13px] truncate flex-1 min-w-0"
                            style={{ color: darkMode ? "rgba(248,250,252,0.55)" : "rgba(2,6,23,0.5)" }}
                          >
                            {resumeFile ? resumeFile.name : "Choose file…"}
                          </span>
                          <input
                            name="resume"
                            type="file"
                            accept=".pdf,.doc,.docx"
                            className="sr-only"
                            onChange={(e) => setResumeFile(e.target.files?.[0] ?? null)}
                          />
                        </label>
                      </div>
                      <div>
                        <label className={labelClass}>Portfolio Link (optional)</label>
                        <input
                          name="portfolio"
                          type="text"
                          autoComplete="url"
                          placeholder="www.yourportfolio.com (optional)"
                          className={glassInput}
                          value={portfolio}
                          onChange={(e) => setPortfolio(e.target.value)}
                          onBlur={() => setTouched((t) => ({ ...t, portfolio: true }))}
                        />
                        {portfolioError ? (
                          <p className="mt-1 text-[10px] text-red-400">{portfolioError}</p>
                        ) : null}
                      </div>
                    </div>

                    <div
                      className="shrink-0 pt-3 mt-1 space-y-2.5 border-t"
                      style={{ borderColor: darkMode ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)" }}
                    >
                      {submitError ? (
                        <p className="text-center text-[11px] text-red-400">{submitError}</p>
                      ) : null}
                      <button
                        type="submit"
                        disabled={!canSubmit || isSubmitting}
                        className={
                          "w-full py-2.5 rounded-lg text-[13px] font-medium transition-all " +
                          (canSubmit && !isSubmitting
                            ? "text-white hover:scale-[1.01] cursor-pointer"
                            : "cursor-not-allowed text-white/70")
                        }
                        style={{
                          background: canSubmit && !isSubmitting
                            ? "linear-gradient(135deg, #4F46E5, #7C3AED)"
                            : darkMode
                            ? "rgba(255,255,255,0.1)"
                            : "rgba(0,0,0,0.12)",
                          boxShadow: canSubmit && !isSubmitting ? "0 6px 18px rgba(79,70,229,0.38)" : "none",
                          opacity: canSubmit && !isSubmitting ? 1 : 0.65}}
                      >
                        {isSubmitting ? "Submitting..." : "Submit Application"}
                      </button>
                      <p
                        className="text-center text-[10px] leading-snug px-0.5"
                        style={{ color: darkMode ? "rgba(148,163,184,0.85)" : "rgba(2,6,23,0.48)" }}
                      >
                        By submitting, you agree to our{" "}
                        <Link to="/terms-of-service" className="underline underline-offset-2 hover:text-violet-400">
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link to="/privacy" className="underline underline-offset-2 hover:text-violet-400">
                          Privacy Policy
                        </Link>
                        .
                      </p>
                    </div>
                  </form>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
