import { useEffect } from "react";
import { Link, useOutletContext, useParams } from "react-router";
import { ArrowLeft, Linkedin } from "lucide-react";
import { getTeamMemberProfileBySlug } from "../data/teamMemberProfiles";

const accent = "#A78BFA";
const bodyMuted = "#D1D5DB";

export default function TeamMemberProfilePage() {
  const { memberSlug } = useParams();
  const { darkMode } = useOutletContext<{ darkMode: boolean }>();
  const profile = getTeamMemberProfileBySlug(memberSlug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [memberSlug]);

  if (!profile) {
    return (
      <div className="pt-24 px-6 pb-20 max-w-3xl mx-auto text-center">
        <p style={{ color: darkMode ? "#94A3B8" : "rgba(2,6,23,0.55)" }}>Profile not found.</p>
        <Link to="/" className="inline-flex items-center gap-2 mt-6 text-sm" style={{ color: accent }}>
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 min-h-[75vh]">
      <div className="max-w-[880px] mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm mb-10 transition-opacity hover:opacity-90"
          style={{ color: accent }}
        >
          <ArrowLeft size={18} strokeWidth={1.75} />
          Back to Home
        </Link>

        <header className="flex flex-col sm:flex-row gap-8 sm:gap-10 mb-10 sm:mb-12">
          <div className="shrink-0 mx-auto sm:mx-0 w-full max-w-[260px] sm:max-w-[280px]">
            <img
              src={profile.image}
              alt={profile.name}
              className="w-full rounded-2xl object-cover object-center shadow-xl aspect-[260/346.66]"
              style={{
                border: darkMode ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(0,0,0,0.08)",
              }}
            />
          </div>
          <div className="flex-1 min-w-0 text-center sm:text-left pt-0 sm:pt-2">
            <h1
              className="text-3xl sm:text-4xl lg:text-[2.5rem] font-bold mb-3"
              style={{
                fontFamily: "'Sora', sans-serif",
                lineHeight: 1.15,
                color: darkMode ? "#FFFFFF" : "#020617",
              }}
            >
              {profile.name}
            </h1>
            <p
              className="text-xs sm:text-sm font-semibold tracking-[0.2em] mb-6"
              style={{ color: "#7C3AED" }}
            >
              {profile.roleDisplay}
            </p>
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-opacity hover:opacity-90"
              style={{
                background: darkMode ? "rgba(124, 58, 237, 0.18)" : "rgba(124, 58, 237, 0.1)",
                border: darkMode ? "1px solid rgba(167, 139, 250, 0.35)" : "1px solid rgba(124, 58, 237, 0.25)",
                color: accent,
              }}
            >
              <Linkedin size={16} strokeWidth={1.75} />
              Connect on LinkedIn
            </a>
          </div>
        </header>

        <div
          className="h-px w-full mb-10 sm:mb-12"
          style={{
            background: darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
          }}
        />

        <div
          className="space-y-6 text-[1.05rem] leading-[1.85]"
          style={{
            color: darkMode ? bodyMuted : "rgba(2,6,23,0.78)",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          {profile.paragraphs.map((para, i) => (
            <p
              key={i}
              className={
                i === 0
                  ? `first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-bold first-letter:leading-none first-letter:text-[3rem] sm:first-letter:text-[3.25rem] ${
                      darkMode ? "first-letter:text-white" : "first-letter:text-slate-900"
                    }`
                  : ""
              }
            >
              {para}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
