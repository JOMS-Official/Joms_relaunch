import React, { useState } from "react";
import { Link, useOutletContext } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Search, MapPin, Clock, X, Briefcase, SlidersHorizontal, ArrowRight } from "lucide-react";
import GlassCard from "../components/GlassCard";
import SectionWrapper from "../components/SectionWrapper";
import { careersJobs } from "../data/careersJobs";
import { careerClosingSoonTag, careerGlassDeptTag, careerGlassIconBox } from "../careersGlass";

const departmentOptions = ["All", "Leadership", "Engineering", "Design", "Marketing", "Finance"];
const jobTypeOptions = ["All", "Full-time", "Internship", "Part-time", "Contract"];
const locationOptions = ["All", "Remote", "Hybrid", "On-site", "Bangalore"];

export default function CareersPage() {
  const { darkMode } = useOutletContext<{ darkMode: boolean }>();
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");
  const [jobType, setJobType] = useState("All");
  const [locationFilter, setLocationFilter] = useState("All");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const activeFilterCount =
    (department !== "All" ? 1 : 0) +
    (jobType !== "All" ? 1 : 0) +
    (locationFilter !== "All" ? 1 : 0);

  const filtered = careersJobs.filter((j) => {
    if (department !== "All" && j.department !== department) return false;
    if (jobType !== "All" && j.type !== jobType) return false;
    if (locationFilter !== "All" && j.location !== locationFilter) return false;
    if (!j.title.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="pt-8">
      <SectionWrapper>
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm mb-4 tracking-widest uppercase text-[#7C3AED] dark:text-[#EAB308]">
            Careers
          </p>
          <h1
            className="text-section-title-xl mb-6"
            style={{lineHeight: 1.1 }}
          >
            Build the{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #4F46E5, #7C3AED)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"}}
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
          <div className="mt-8 flex justify-center">
            <Link
              to="/careers/internships"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all hover:opacity-95 hover:shadow-[0_0_28px_rgba(52,211,153,0.2)]"
              style={{
                color: "#34D399",
                border: "1px solid rgba(52, 211, 153, 0.45)",
                background: darkMode ? "rgba(52, 211, 153, 0.06)" : "rgba(16, 185, 129, 0.08)",
                boxShadow: "0 0 20px rgba(52, 211, 153, 0.12)"}}
            >
              Looking for internships? Explore our intern program
              <ArrowRight size={16} strokeWidth={2} />
            </Link>
          </div>
        </div>

        {/* Search + filter trigger */}
        <div className="flex flex-col sm:flex-row gap-3 mb-10 items-stretch sm:items-center">
          <div
            className="flex items-center gap-3 flex-1 min-w-0 px-4 py-3 rounded-xl"
            style={{
              background: darkMode ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.03)",
              border: darkMode ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(0,0,0,0.06)"}}
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
              color: darkMode ? "#F8FAFC" : "#020617"}}
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
                className="absolute z-20 right-0 top-0 w-[min(320px,100%)] h-[382px] rounded-2xl flex flex-col overflow-hidden"
                style={{
                  background: darkMode
                    ? "rgba(255,255,255,0.08)"
                    : "rgba(255,255,255,0.72)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: darkMode
                    ? "1px solid rgba(255,255,255,0.14)"
                    : "1px solid rgba(0,0,0,0.08)",
                  boxShadow: darkMode
                    ? "0 8px 32px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.06)"
                    : "0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.8)"}}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-start justify-between gap-2 px-4 pt-4 pb-2 shrink-0">
                  <h2
                    className="text-base font-semibold"
                    style={{color: darkMode ? "#F8FAFC" : "#020617" }}
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

                <div className="scrollbar-hide flex-1 min-h-0 overflow-y-auto overflow-x-hidden overscroll-contain px-4 pb-4">
                  {(
                    [
                      {
                        label: "Department",
                        options: departmentOptions,
                        value: department,
                        set: setDepartment},
                      {
                        label: "Job Type",
                        options: jobTypeOptions,
                        value: jobType,
                        set: setJobType},
                      {
                        label: "Location",
                        options: locationOptions,
                        value: locationFilter,
                        set: setLocationFilter},
                    ] as const
                  ).map((section, idx) => (
                    <div key={section.label} className={idx > 0 ? "mt-5" : ""}>
                      <div className="mb-2">
                        <span
                          className="text-xs"
                          style={{ color: darkMode ? "rgba(248,250,252,0.45)" : "rgba(2,6,23,0.45)" }}
                        >
                          {section.label}
                        </span>
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
                                  : "1px solid rgba(0,0,0,0.06)"}}
                            >
                              {opt}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        <div className="space-y-4 relative z-0">
          {filtered.map((job) => (
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
                      <h3 className="text-lg" style={{}}>
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
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-medium" style={careerGlassDeptTag(darkMode)}>
                          {job.department}
                        </span>
                        {job.listingStatus === "closing_soon" ? (
                          <span
                            className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wide"
                            style={careerClosingSoonTag(darkMode)}
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
                      border: darkMode ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(0,0,0,0.06)"}}
                    aria-hidden
                  >
                    <ArrowRight
                      size={20}
                      style={{ color: "#A78BFA" }}
                      strokeWidth={2}
                    />
                  </div>
                </div>
              </GlassCard>
            </Link>
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
    </div>
  );
}
