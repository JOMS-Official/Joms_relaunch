import React, { useEffect } from "react";
import { Link, useOutletContext } from "react-router";
import {
  ArrowRight,
  Briefcase,
  Calendar,
  ChevronRight,
  Clock,
  GraduationCap,
  MapPin,
  Rocket,
  Target,
  User,
} from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";
import GlassCard from "../components/GlassCard";
import { getInternshipJobs } from "../data/careersJobs";
import { careerGlassIconBox } from "../careersGlass";

const green = "#34D399";
const muted = (dark: boolean) => (dark ? "rgba(248,250,252,0.65)" : "rgba(2,6,23,0.55)");
const subtext = "#94A3B8";

function internDeptTag(dark: boolean): React.CSSProperties {
  return {
    background: "rgba(52, 211, 153, 0.12)",
    border: "1px solid rgba(52, 211, 153, 0.45)",
    color: dark ? "#FFFFFF" : "#065f46",
    boxShadow: "0 0 16px rgba(52, 211, 153, 0.12)",
  };
}

const features = [
  {
    icon: User,
    title: "Dedicated Mentorship",
    body: "Learn closely from founders, innovators and industry professionals who guide your growth at every step.",
  },
  {
    icon: Briefcase,
    title: "Build Real Things",
    body: "Solve real problems, collaborate with cross-functional teams and gain hands-on experience that goes beyond classroom learning.",
  },
  {
    icon: Rocket,
    title: "Grow Faster",
    body: "Build practical skills, strengthen your portfolio and gain real-world exposure that helps you stand out from day one.",
  },
  {
    icon: Target,
    title: "Path to Full-Time",
    body: "Top-performing interns get the opportunity to transition into full-time roles and continue building with us.",
  },
];

const applySteps = [
  "Browse available internship roles below.",
  "Click on a role to view the full description and requirements.",
  "Click “Apply Now” and complete the application form with accurate details.",
  "Upload your resume and any optional links we should review.",
  "Submit and watch your inbox and we'll follow up if there's a mutual fit.",
];

export default function InternshipsPage() {
  const { darkMode } = useOutletContext<{ darkMode: boolean }>();
  const internships = getInternshipJobs();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToOpenings = () => {
    document.getElementById("open-positions")?.scrollIntoView({ behavior: "smooth" });
  };

  const glassPanel =
    "rounded-2xl p-6 backdrop-blur-xl border " +
    (darkMode
      ? "bg-white/[0.04] border-white/[0.1] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
      : "bg-white/80 border-black/[0.06] shadow-sm");

  return (
    <div className="pt-35">
      {/* Hero */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-12 md:pb-16 text-center">
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6"
          style={{
            color: green,
            border: "1px solid rgba(52, 211, 153, 0.45)",
            background: darkMode ? "rgba(52, 211, 153, 0.08)" : "rgba(16, 185, 129, 0.08)",
            boxShadow: "0 0 24px rgba(52, 211, 153, 0.12)",
          }}
        >
          <GraduationCap size={14} strokeWidth={2} />
          Internship Program
        </div>
        <h1
          className="text-section-title font-bold mb-6"
          style={{
            fontFamily: "'Sora', sans-serif",
            lineHeight: 1.1,
            color: darkMode ? "#F8FAFC" : "#020617",
          }}
        >
          Internships for Builders and Problem Solvers
        </h1>
        <p
          className="max-w-2xl mx-auto text-lg mb-10"
          style={{
            color: darkMode ? muted(true) : subtext,
            textAlign: "justify",
            textAlignLast: "center",
          }}
        >
          Build skills that matter through hands-on internships designed for curious thinkers, creators, and future
          entrepreneurs.
        </p>
        <button
          type="button"
          onClick={scrollToOpenings}
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold text-[#020617] transition-transform hover:scale-[1.02]"
          style={{
            background: "linear-gradient(90deg, #34D399, #38BDF8)",
            color: "#020617",
          }}
        >
          Explore Internships
          <ArrowRight size={18} strokeWidth={2} className="text-[#020617]" />
        </button>
      </section>

      {/* Features — layout + gradient line aligned with VisionMissionValues */}
      <SectionWrapper className="!pt-4">
  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {features.map((f) => (
            <div key={f.title} className="relative pl-6 text-left">
              <div
                className="absolute left-0 top-0"
                style={{
                  width: 3,
                  height: 48,
                  background: "linear-gradient(180deg, #2563EB 0%, rgba(0,0,0,0) 100%)",
                  borderRadius: 2,
                }}
              />
              <f.icon
                size={32}
                className="mb-6"
                strokeWidth={1.75}
                style={{ color: green }}
              />
              <h3
                className="text-xl mb-3"
                style={{ fontFamily: "'Sora', sans-serif", color: darkMode ? "#F8FAFC" : "#020617" }}
              >
                {f.title}
              </h3>
              <p className="text-sm" style={{ color: subtext, lineHeight: 1.7 }}>
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Duration & qualifications */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-14 md:pb-20">
        <div className="grid md:grid-cols-2 gap-6">
          <div className={glassPanel}>
            <div className="flex items-start gap-4">
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
                style={{
                  ...careerGlassIconBox(darkMode),
                  width: 48,
                  height: 48,
                  borderRadius: 9999,
                }}
              >
                <Calendar size={22} style={{ color: green }} strokeWidth={1.75} />
              </div>
              <div>
                <h3
                  className="text-base font-semibold mb-2"
                  style={{ fontFamily: "'Sora', sans-serif", color: darkMode ? "#F8FAFC" : "#020617" }}
                >
                  Duration
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: subtext }}>
                3-6 months, flexible start dates with both part-time and full-time options based on your university guidelines.
                </p>
              </div>
            </div>
          </div>
          <div className={glassPanel}>
            <div className="flex items-start gap-4">
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
                style={{
                  ...careerGlassIconBox(darkMode),
                  width: 48,
                  height: 48,
                  borderRadius: 9999,
                }}
              >
                <GraduationCap size={22} style={{ color: green }} strokeWidth={1.75} />
              </div>
              <div>
                <h3
                  className="text-base font-semibold mb-2"
                  style={{ fontFamily: "'Sora', sans-serif", color: darkMode ? "#F8FAFC" : "#020617" }}
                >
                  Qualifications
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: subtext }}>
                Currently enrolled or recently graduated. Strong communication and genuine interest in technology, creative problem solving and designs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to apply */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-14 md:pb-20">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-start">
          <div>
            <h2
              className="text-section-title-sm font-bold mb-4"
              style={{
                fontFamily: "'Sora', sans-serif",
                lineHeight: 1.2,
                color: darkMode ? "#F8FAFC" : "#020617",
              }}
            >
              How to Apply
            </h2>
            <p className="text-sm sm:text-base leading-relaxed" style={{ color: subtext }}>
              We keep the process simple and transparent. Follow the steps and we’ll take it from there.
            </p>
          </div>
          <div
            className={
              "space-y-0 rounded-2xl overflow-hidden border " +
              (darkMode ? "border-white/10 bg-white/[0.03]" : "border-black/10 bg-black/[0.02]")
            }
          >
            {applySteps.map((step, i) => (
              <div
                key={i}
                className={
                  "flex gap-4 px-5 py-4 border-b last:border-b-0 " +
                  (darkMode ? "border-white/[0.06]" : "border-black/[0.06]")
                }
              >
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold"
                  style={{
                    background: darkMode ? "rgba(148, 163, 184, 0.15)" : "rgba(148, 163, 184, 0.2)",
                    color: darkMode ? "#CBD5E1" : "#475569",
                  }}
                >
                  {i + 1}
                </span>
                <p className="text-sm leading-relaxed pt-1" style={{ color: darkMode ? muted(true) : "rgba(2,6,23,0.75)" }}>
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open positions */}
      <SectionWrapper id="open-positions" className="!pt-0 !pb-16 md:!pb-24">
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold tracking-[0.2em] uppercase mb-3 text-center"
            style={{ color: green }}
          >
            Open Positions
          </p>
          <h2
            className="text-section-title-compact font-bold"
            style={{ fontFamily: "'Sora', sans-serif", color: darkMode ? "#F8FAFC" : "#020617" }}
          >
            Available Internships
          </h2>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {internships.map((job) => (
            <Link key={job.id} to={`/careers/${job.id}`} className="block group">
              <GlassCard darkMode={darkMode} className="!p-0 overflow-hidden" hover>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6">
                  <div className="flex items-start gap-4 min-w-0">
                    <div style={careerGlassIconBox(darkMode)}>
                      <Briefcase
                        size={18}
                        style={{ color: darkMode ? "rgba(248,250,252,0.95)" : "#020617" }}
                        strokeWidth={1.75}
                      />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg" style={{ fontFamily: "'Sora', sans-serif" }}>
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-3 mt-2 items-center">
                        <span
                          className="inline-flex items-center gap-1 text-xs"
                          style={{ color: darkMode ? "rgba(248,250,252,0.5)" : "rgba(2,6,23,0.5)" }}
                        >
                          <MapPin size={12} /> {job.location}
                        </span>
                        <span
                          className="inline-flex items-center gap-1 text-xs"
                          style={{ color: darkMode ? "rgba(248,250,252,0.5)" : "rgba(2,6,23,0.5)" }}
                        >
                          <Clock size={12} /> {job.type}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-medium" style={internDeptTag(darkMode)}>
                          {job.department}
                        </span>
                        {job.listingStatus === "closing_soon" ? (
                          <span
                            className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wide"
                            style={{
                              color: "#FDE68A",
                              border: "1px solid rgba(251, 191, 36, 0.45)",
                              background: "rgba(251, 191, 36, 0.12)",
                            }}
                          >
                            Closing soon
                          </span>
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex items-center justify-center sm:justify-end shrink-0 rounded-xl p-2 transition-all group-hover:translate-x-0.5"
                    style={{
                      background: darkMode ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)",
                      border: darkMode ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(0,0,0,0.06)",
                    }}
                    aria-hidden
                  >
                    <ChevronRight size={20} style={{ color: "#A78BFA" }} strokeWidth={2} />
                  </div>
                </div>
              </GlassCard>
            </Link>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
