import { motion } from "motion/react";
import SectionWrapper from "./SectionWrapper";

interface Props {
  darkMode: boolean;
}

const milestones = [
  {
    year: "2024",
    title: "Innovation",
    description: "Embracing cutting-edge technologies to elevate our offerings.",
  },
  {
    year: "2025",
    title: "Community",
    description: "Collaborating with visionary partners to amplify social impact.",
  },
  {
    year: "2025",
    title: "Globalization",
    description: "Expanding our footprint into global markets.",
  },
];

export default function TimelineSection({ darkMode }: Props) {
  return (
    <SectionWrapper id="timeline">
      <div className="text-center mb-20">
        <p
          className="text-sm mb-4 tracking-widest uppercase"
          style={{ color: "#7C3AED" }}
        >
          Our Journey
        </p>
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl mb-4"
          style={{ fontFamily: "'Sora', sans-serif", lineHeight: 1.15 }}
        >
          The Journey Has Begun
        </h2>
        <p
          className="text-sm sm:text-base"
          style={{
            color: darkMode ? "rgba(248,250,252,0.5)" : "rgba(2,6,23,0.5)",
          }}
        >
          Every great company starts with a single step. Here's how ours began.
        </p>
      </div>

      {/* Desktop: centered 3-column layout */}
      <div className="relative max-w-4xl mx-auto hidden md:block">
        {/* Center vertical line */}
        <div
          className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
          style={{
            background: darkMode
              ? "linear-gradient(to bottom, rgba(79,70,229,0.4), rgba(124,58,237,0.15), transparent)"
              : "linear-gradient(to bottom, rgba(79,70,229,0.3), rgba(124,58,237,0.1), transparent)",
          }}
        />

        {milestones.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="relative grid grid-cols-[1fr_auto_1fr] items-center gap-10 mb-20 last:mb-0"
          >
            {/* Left - Year + Title */}
            <div className="text-right pr-4">
              <p
                className="text-sm mb-1"
                style={{ color: "#7C3AED", fontWeight: 600 }}
              >
                {m.year}
              </p>
              <h3
                className="text-4xl lg:text-5xl"
                style={{
                  fontFamily: "'Sora', sans-serif",
                  fontWeight: 600,
                  color: darkMode
                    ? "rgba(248,250,252,0.12)"
                    : "rgba(2,6,23,0.08)",
                  lineHeight: 1.1,
                }}
              >
                {m.title}
              </h3>
            </div>

            {/* Center - Dot */}
            <div className="relative z-10 flex items-center justify-center">
              <div
                className="w-3 h-3 rounded-full"
                style={{
                  background: darkMode
                    ? "rgba(148,130,186,0.6)"
                    : "rgba(79,70,229,0.4)",
                  boxShadow: "0 0 10px rgba(79,70,229,0.3)",
                }}
              />
            </div>

            {/* Right - Description */}
            <div className="pl-4">
              <p
                className="text-sm sm:text-base max-w-xs"
                style={{
                  color: darkMode
                    ? "rgba(248,250,252,0.45)"
                    : "rgba(2,6,23,0.45)",
                  lineHeight: 1.7,
                }}
              >
                {m.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile: left-aligned line with content to the right */}
      <div className="relative pl-8 md:hidden">
        {/* Left vertical line */}
        <div
          className="absolute left-3 top-0 bottom-0 w-px"
          style={{
            background: darkMode
              ? "linear-gradient(to bottom, rgba(79,70,229,0.4), rgba(124,58,237,0.15), transparent)"
              : "linear-gradient(to bottom, rgba(79,70,229,0.3), rgba(124,58,237,0.1), transparent)",
          }}
        />

        {milestones.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative mb-14 last:mb-0"
          >
            {/* Dot on the line */}
            <div
              className="absolute -left-8 top-1 w-3 h-3 rounded-full z-10"
              style={{
                background: darkMode
                  ? "rgba(148,130,186,0.6)"
                  : "rgba(79,70,229,0.4)",
                boxShadow: "0 0 10px rgba(79,70,229,0.3)",
                left: "-21px",
              }}
            />

            <p
              className="text-xs mb-1"
              style={{ color: "#7C3AED", fontWeight: 600 }}
            >
              {m.year}
            </p>
            <h3
              className="text-2xl mb-2"
              style={{
                fontFamily: "'Sora', sans-serif",
                fontWeight: 600,
                color: darkMode
                  ? "rgba(248,250,252,0.15)"
                  : "rgba(2,6,23,0.1)",
                lineHeight: 1.1,
              }}
            >
              {m.title}
            </h3>
            <p
              className="text-sm"
              style={{
                color: darkMode
                  ? "rgba(248,250,252,0.45)"
                  : "rgba(2,6,23,0.45)",
                lineHeight: 1.7,
              }}
            >
              {m.description}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
