import React, { useState } from "react";
import { useOutletContext } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import {
  Search,
  MapPin,
  Clock,
  ChevronDown,
  CheckCircle,
  X,
  Briefcase,
  SlidersHorizontal,
  ChevronRight,
} from "lucide-react";
import GlassCard from "../components/GlassCard";
import SectionWrapper from "../components/SectionWrapper";

const jobs = [
  {
    id: 1,
    title: "Senior React Native Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Build the mobile experiences that millions will rely on. You'll architect and implement core features of our smart mobile platforms using React Native, working closely with design and product.",
    requirements: ["5+ years React Native experience", "Strong TypeScript skills", "Experience with state management", "Mobile performance optimization"],
  },
  {
    id: 2,
    title: "Product Designer",
    department: "Design",
    location: "Hybrid",
    type: "Full-time",
    description: "Shape the visual identity and user experience of JOMS products. Design intuitive interfaces for complex marketplace and mobile platform features.",
    requirements: ["4+ years product design experience", "Figma expertise", "Design systems experience", "User research skills"],
  },
  {
    id: 3,
    title: "Backend Engineer (Node.js)",
    department: "Engineering",
    location: "Remote",
    type: "Contract",
    description: "Architect scalable backend systems that power our marketplace ecosystem. Build APIs, data pipelines, and real-time services.",
    requirements: ["4+ years Node.js/TypeScript", "Database design (PostgreSQL)", "API design and microservices", "Cloud infrastructure (AWS/GCP)"],
  },
  {
    id: 4,
    title: "Growth Marketing Manager",
    department: "Marketing",
    location: "On-site",
    type: "Part-time",
    description: "Drive user acquisition and engagement for our platform launches. Develop and execute data-driven marketing strategies.",
    requirements: ["3+ years growth marketing", "Analytics proficiency", "Content strategy experience", "Startup experience preferred"],
  },
];

const departmentOptions = ["All", "Engineering", "Design", "Marketing"];
const jobTypeOptions = ["All", "Full-time", "Part-time", "Contract"];
const locationOptions = ["All", "Remote", "Hybrid", "On-site"];

export default function CareersPage() {
  const { darkMode } = useOutletContext<{ darkMode: boolean }>();
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");
  const [jobType, setJobType] = useState("All");
  const [locationFilter, setLocationFilter] = useState("All");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<typeof jobs[0] | null>(null);
  const [showApplication, setShowApplication] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const activeFilterCount =
    (department !== "All" ? 1 : 0) +
    (jobType !== "All" ? 1 : 0) +
    (locationFilter !== "All" ? 1 : 0);

  const filtered = jobs.filter((j) => {
    if (department !== "All" && j.department !== department) return false;
    if (jobType !== "All" && j.type !== jobType) return false;
    if (locationFilter !== "All" && j.location !== locationFilter) return false;
    if (!j.title.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setShowApplication(false);
      setSelectedJob(null);
    }, 3000);
  };

  return (
    <div className="pt-24">
      <SectionWrapper>
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm mb-4 tracking-widest uppercase" style={{ color: "#7C3AED" }}>
            Careers
          </p>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl mb-6"
            style={{ fontFamily: "'Sora', sans-serif", lineHeight: 1.1 }}
          >
            Build the{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #4F46E5, #7C3AED)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Future With Us
            </span>
          </h1>
          <p
            className="max-w-2xl mx-auto text-lg"
            style={{ color: darkMode ? "rgba(248,250,252,0.6)" : "rgba(2,6,23,0.5)" }}
          >
            We're looking for exceptional people who believe the best technology
            is yet to be built. Join a team where every step counts.
          </p>
        </div>

        {/* Search + filter trigger */}
        <div className="flex flex-col sm:flex-row gap-3 mb-10 items-stretch sm:items-center">
          <div
            className="flex items-center gap-3 flex-1 min-w-0 px-4 py-3 rounded-xl"
            style={{
              background: darkMode ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.03)",
              border: darkMode ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(0,0,0,0.06)",
            }}
          >
            <Search size={18} style={{ color: darkMode ? "rgba(248,250,252,0.4)" : "rgba(2,6,23,0.4)" }} />
            <input
              type="text"
              placeholder="Search roles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 bg-transparent outline-none text-sm min-w-0"
              style={{ color: darkMode ? "#F8FAFC" : "#020617" }}
            />
          </div>
          <button
            type="button"
            aria-expanded={filtersOpen}
            onClick={() => setFiltersOpen((v) => !v)}
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all hover:opacity-95 shrink-0"
            style={{
              background: darkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.05)",
              border: darkMode ? "1px solid rgba(255,255,255,0.12)" : "1px solid rgba(0,0,0,0.08)",
              color: darkMode ? "#F8FAFC" : "#020617",
            }}
          >
            <SlidersHorizontal size={18} style={{ color: "#A78BFA" }} />
            <span>Filters</span>
            {activeFilterCount > 0 && (
              <span
                className="min-w-[1.25rem] h-5 px-1.5 rounded-full text-xs flex items-center justify-center font-semibold text-white"
                style={{ background: "linear-gradient(135deg, #4F46E5, #7C3AED)" }}
              >
                {activeFilterCount}
              </span>
            )}
          </button>
        </div>

        {/* Job listings — filter panel floats over this block only */}
        <div className="relative">
          <AnimatePresence>
            {filtersOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="absolute inset-0 z-10 rounded-2xl"
                style={{ background: "rgba(0,0,0,0.35)" }}
                aria-hidden
                onClick={() => setFiltersOpen(false)}
              />
            )}
          </AnimatePresence>

          <AnimatePresence>
            {filtersOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="absolute z-20 right-0 top-0 w-[min(320px,100%)] h-[382px] rounded-2xl flex flex-col overflow-hidden shadow-2xl"
                style={{
                  background: darkMode ? "#0f1419" : "#f8fafc",
                  border: darkMode ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(0,0,0,0.08)",
                  boxShadow: darkMode
                    ? "0 20px 50px rgba(0,0,0,0.55)"
                    : "0 20px 50px rgba(0,0,0,0.12)",
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-start justify-between gap-2 px-4 pt-4 pb-2 shrink-0">
                  <h2
                    className="text-base font-semibold"
                    style={{ fontFamily: "'Sora', sans-serif", color: darkMode ? "#F8FAFC" : "#020617" }}
                  >
                    Filter Roles
                  </h2>
                  <button
                    type="button"
                    onClick={() => setFiltersOpen(false)}
                    className="p-1 rounded-lg transition-opacity hover:opacity-80 shrink-0"
                    style={{ color: darkMode ? "#F8FAFC" : "#020617" }}
                    aria-label="Close filters"
                  >
                    <X size={18} />
                  </button>
                </div>

                <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain px-4 pb-3">
                  {(
                    [
                      {
                        label: "Department",
                        options: departmentOptions,
                        value: department,
                        set: setDepartment,
                      },
                      {
                        label: "Job Type",
                        options: jobTypeOptions,
                        value: jobType,
                        set: setJobType,
                      },
                      {
                        label: "Location",
                        options: locationOptions,
                        value: locationFilter,
                        set: setLocationFilter,
                      },
                    ] as const
                  ).map((section, idx) => (
                    <div key={section.label} className={idx > 0 ? "mt-5" : ""}>
                      <div className="flex items-center justify-between mb-2">
                        <span
                          className="text-xs"
                          style={{ color: darkMode ? "rgba(248,250,252,0.45)" : "rgba(2,6,23,0.45)" }}
                        >
                          {section.label}
                        </span>
                        <ChevronRight size={14} style={{ color: "#A78BFA" }} aria-hidden />
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {section.options.map((opt) => {
                          const selected = section.value === opt;
                          return (
                            <button
                              key={opt}
                              type="button"
                              onClick={() => section.set(opt)}
                              className="px-3 py-1.5 rounded-full text-xs transition-all"
                              style={{
                                background: selected
                                  ? "linear-gradient(135deg, #4F46E5, #7C3AED)"
                                  : darkMode
                                  ? "rgba(255,255,255,0.07)"
                                  : "rgba(0,0,0,0.05)",
                                color: selected
                                  ? "#fff"
                                  : darkMode
                                  ? "rgba(248,250,252,0.65)"
                                  : "rgba(2,6,23,0.65)",
                                border: selected
                                  ? "none"
                                  : darkMode
                                  ? "1px solid rgba(255,255,255,0.08)"
                                  : "1px solid rgba(0,0,0,0.06)",
                              }}
                            >
                              {opt}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  className="shrink-0 px-4 pt-3 pb-4 flex items-center justify-between gap-2"
                  style={{
                    borderTop: darkMode ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(0,0,0,0.08)",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => {
                      setDepartment("All");
                      setJobType("All");
                      setLocationFilter("All");
                    }}
                    className="text-xs transition-opacity hover:opacity-80"
                    style={{ color: darkMode ? "rgba(248,250,252,0.45)" : "rgba(2,6,23,0.5)" }}
                  >
                    Clear all
                  </button>
                  <button
                    type="button"
                    onClick={() => setFiltersOpen(false)}
                    className="px-4 py-2 rounded-xl text-xs font-medium text-white transition-transform hover:scale-[1.02]"
                    style={{
                      background: "linear-gradient(135deg, #4F46E5, #7C3AED)",
                      boxShadow: "0 4px 16px rgba(79,70,229,0.35)",
                    }}
                  >
                    Done
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        <div className="space-y-4 relative z-0">
          {filtered.map((job) => (
            <GlassCard key={job.id} darkMode={darkMode} className="cursor-pointer" hover>
              <div
                onClick={() => setSelectedJob(selectedJob?.id === job.id ? null : job)}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "linear-gradient(135deg, #4F46E5, #7C3AED)",
                    }}
                  >
                    <Briefcase size={18} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg" style={{ fontFamily: "'Sora', sans-serif" }}>
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 mt-2">
                      <span className="inline-flex items-center gap-1 text-xs" style={{ color: darkMode ? "rgba(248,250,252,0.5)" : "rgba(2,6,23,0.5)" }}>
                        <MapPin size={12} /> {job.location}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs" style={{ color: darkMode ? "rgba(248,250,252,0.5)" : "rgba(2,6,23,0.5)" }}>
                        <Clock size={12} /> {job.type}
                      </span>
                      <span
                        className="px-2 py-0.5 rounded-full text-xs"
                        style={{
                          background: darkMode ? "rgba(79,70,229,0.15)" : "rgba(79,70,229,0.08)",
                          color: "#7C3AED",
                        }}
                      >
                        {job.department}
                      </span>
                    </div>
                  </div>
                </div>
                <ChevronDown
                  size={20}
                  className="transition-transform flex-shrink-0"
                  style={{
                    transform: selectedJob?.id === job.id ? "rotate(180deg)" : "rotate(0deg)",
                    color: darkMode ? "rgba(248,250,252,0.4)" : "rgba(2,6,23,0.4)",
                  }}
                />
              </div>

              <AnimatePresence>
                {selectedJob?.id === job.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div
                      className="mt-6 pt-6"
                      style={{
                        borderTop: darkMode ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(0,0,0,0.06)",
                      }}
                    >
                      <p
                        className="text-sm mb-4"
                        style={{
                          color: darkMode ? "rgba(248,250,252,0.65)" : "rgba(2,6,23,0.6)",
                          lineHeight: 1.7,
                        }}
                      >
                        {job.description}
                      </p>
                      <h4 className="text-sm mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>
                        Requirements
                      </h4>
                      <ul className="space-y-2 mb-6">
                        {job.requirements.map((r) => (
                          <li
                            key={r}
                            className="flex items-center gap-2 text-sm"
                            style={{
                              color: darkMode ? "rgba(248,250,252,0.6)" : "rgba(2,6,23,0.5)",
                            }}
                          >
                            <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#7C3AED" }} />
                            {r}
                          </li>
                        ))}
                      </ul>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowApplication(true);
                        }}
                        className="px-6 py-3 rounded-xl text-white text-sm transition-all hover:scale-105"
                        style={{
                          background: "linear-gradient(135deg, #4F46E5, #7C3AED)",
                          boxShadow: "0 4px 15px rgba(79,70,229,0.4)",
                        }}
                      >
                        Apply Now
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </GlassCard>
          ))}

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p style={{ color: darkMode ? "rgba(248,250,252,0.5)" : "rgba(2,6,23,0.5)" }}>
                No roles found. Try a different search or filter.
              </p>
            </div>
          )}
        </div>
        </div>
      </SectionWrapper>

      {/* Application Modal */}
      <AnimatePresence>
        {showApplication && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(10px)" }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-lg rounded-2xl p-8 relative"
              style={{
                background: darkMode ? "rgba(15,23,42,0.95)" : "rgba(255,255,255,0.95)",
                border: darkMode ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(0,0,0,0.08)",
              }}
            >
              <button
                onClick={() => { setShowApplication(false); setSubmitted(false); }}
                className="absolute top-4 right-4 p-2 rounded-lg hover:opacity-70"
              >
                <X size={20} />
              </button>

              {submitted ? (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="text-center py-8"
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <CheckCircle size={64} style={{ color: "#50C878" }} className="mx-auto mb-6" />
                  </motion.div>
                  <h3 className="text-2xl mb-2" style={{ fontFamily: "'Sora', sans-serif" }}>
                    Application Sent!
                  </h3>
                  <p
                    className="text-sm"
                    style={{ color: darkMode ? "rgba(248,250,252,0.6)" : "rgba(2,6,23,0.5)" }}
                  >
                    We're excited to review your application.
                  </p>
                </motion.div>
              ) : (
                <>
                  <h3 className="text-xl mb-1" style={{ fontFamily: "'Sora', sans-serif" }}>
                    Apply for {selectedJob?.title}
                  </h3>
                  <p
                    className="text-sm mb-6"
                    style={{ color: darkMode ? "rgba(248,250,252,0.5)" : "rgba(2,6,23,0.5)" }}
                  >
                    Fill in your details below
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {["Full Name", "Email Address", "LinkedIn URL"].map((label) => (
                      <div key={label}>
                        <label className="text-xs mb-1 block" style={{ color: darkMode ? "rgba(248,250,252,0.6)" : "rgba(2,6,23,0.5)" }}>
                          {label}
                        </label>
                        <input
                          type={label.includes("Email") ? "email" : "text"}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-transparent text-sm outline-none"
                          style={{
                            background: darkMode ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.03)",
                            border: darkMode ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(0,0,0,0.08)",
                            color: darkMode ? "#F8FAFC" : "#020617",
                          }}
                        />
                      </div>
                    ))}
                    <div>
                      <label className="text-xs mb-1 block" style={{ color: darkMode ? "rgba(248,250,252,0.6)" : "rgba(2,6,23,0.5)" }}>
                        Why JOMS?
                      </label>
                      <textarea
                        rows={3}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-transparent text-sm outline-none resize-none"
                        style={{
                          background: darkMode ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.03)",
                          border: darkMode ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(0,0,0,0.08)",
                          color: darkMode ? "#F8FAFC" : "#020617",
                        }}
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full px-6 py-3 rounded-xl text-white text-sm transition-all hover:scale-[1.02]"
                      style={{
                        background: "linear-gradient(135deg, #4F46E5, #7C3AED)",
                        boxShadow: "0 4px 15px rgba(79,70,229,0.4)",
                      }}
                    >
                      Submit Application
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
