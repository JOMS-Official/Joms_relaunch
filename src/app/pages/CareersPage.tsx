import { useState } from "react";
import { useOutletContext } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Search, MapPin, Clock, ChevronDown, CheckCircle, X, Briefcase } from "lucide-react";
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
    location: "Remote",
    type: "Full-time",
    description: "Shape the visual identity and user experience of JOMS products. Design intuitive interfaces for complex marketplace and mobile platform features.",
    requirements: ["4+ years product design experience", "Figma expertise", "Design systems experience", "User research skills"],
  },
  {
    id: 3,
    title: "Backend Engineer (Node.js)",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Architect scalable backend systems that power our marketplace ecosystem. Build APIs, data pipelines, and real-time services.",
    requirements: ["4+ years Node.js/TypeScript", "Database design (PostgreSQL)", "API design and microservices", "Cloud infrastructure (AWS/GCP)"],
  },
  {
    id: 4,
    title: "Growth Marketing Manager",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    description: "Drive user acquisition and engagement for our platform launches. Develop and execute data-driven marketing strategies.",
    requirements: ["3+ years growth marketing", "Analytics proficiency", "Content strategy experience", "Startup experience preferred"],
  },
];

const departments = ["All", "Engineering", "Design", "Marketing"];

export default function CareersPage() {
  const { darkMode } = useOutletContext<{ darkMode: boolean }>();
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");
  const [selectedJob, setSelectedJob] = useState<typeof jobs[0] | null>(null);
  const [showApplication, setShowApplication] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const filtered = jobs.filter(
    (j) =>
      (department === "All" || j.department === department) &&
      j.title.toLowerCase().includes(search.toLowerCase())
  );

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

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <div
            className="flex items-center gap-3 flex-1 px-4 py-3 rounded-xl"
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
              className="flex-1 bg-transparent outline-none text-sm"
              style={{ color: darkMode ? "#F8FAFC" : "#020617" }}
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {departments.map((d) => (
              <button
                key={d}
                onClick={() => setDepartment(d)}
                className="px-4 py-2 rounded-xl text-sm transition-all"
                style={{
                  background:
                    department === d
                      ? "linear-gradient(135deg, #4F46E5, #7C3AED)"
                      : darkMode
                      ? "rgba(255,255,255,0.06)"
                      : "rgba(0,0,0,0.03)",
                  color: department === d ? "white" : darkMode ? "rgba(248,250,252,0.7)" : "rgba(2,6,23,0.6)",
                  border:
                    department === d
                      ? "none"
                      : darkMode
                      ? "1px solid rgba(255,255,255,0.1)"
                      : "1px solid rgba(0,0,0,0.06)",
                }}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        {/* Job listings */}
        <div className="space-y-4">
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
