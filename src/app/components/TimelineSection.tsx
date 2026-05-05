import { useEffect, useRef, useState } from "react";
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
  const [activeIndex, setActiveIndex] = useState(-1);
  const [fillPercent, setFillPercent] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const viewportTrigger = window.innerHeight * 0.75;
      const timelineRect = timelineRef.current.getBoundingClientRect();

      let lastActiveIdx = -1;
      let lastActivePct = 0;

      dotRefs.current.forEach((dot, i) => {
        if (!dot) return;
        const dotRect = dot.getBoundingClientRect();
        const dotCenter = dotRect.top + dotRect.height / 2;

        if (dotCenter < viewportTrigger) {
          lastActiveIdx = i;
          const pct =
            ((dotRect.top + dotRect.height / 2 - timelineRect.top) /
              timelineRect.height) *
            100;
          lastActivePct = Math.min(pct, 100);
        }
      });

      setActiveIndex(lastActiveIdx);
      setFillPercent(lastActivePct);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

      {/* Desktop */}
      <div
        ref={timelineRef}
        className="relative max-w-4xl mx-auto hidden md:block"
      >
        {/* Base track */}
        <div
          className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
          style={{
            background: darkMode
              ? "rgba(79,70,229,0.2)"
              : "rgba(79,70,229,0.15)",
          }}
        />

        {/* Green fill */}
        <div
          className="absolute left-1/2 top-0 w-0.5 -translate-x-1/2 origin-top"
          style={{
            height: `${fillPercent}%`,
            background: "linear-gradient(to bottom, #22c55e, #16a34a)",
            boxShadow: "0 0 8px rgba(34,197,94,0.5)",
            transition: "height 0.55s cubic-bezier(0.4,0,0.2,1)",
          }}
        />

        {milestones.map((m, i) => {
          const isActive = i <= activeIndex;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative grid grid-cols-[1fr_auto_1fr] items-center gap-10 mb-20 last:mb-0"
            >
              <div className="text-right pr-4">
                <p
                  className="text-sm mb-1"
                  style={{
                    color: isActive ? "#4ade80" : "#7C3AED",
                    fontWeight: 600,
                    transition: "color 0.5s ease",
                  }}
                >
                  {m.year}
                </p>
                <h3
                  className="text-4xl lg:text-5xl"
                  style={{
                    fontFamily: "'Sora', sans-serif",
                    fontWeight: 600,
                    color: isActive
                      ? darkMode
                        ? "rgba(248,250,252,0.85)"
                        : "rgba(2,6,23,0.75)"
                      : darkMode
                      ? "rgba(248,250,252,0.08)"
                      : "rgba(2,6,23,0.06)",
                    lineHeight: 1.1,
                    transition: "color 0.7s ease",
                  }}
                >
                  {m.title}
                </h3>
              </div>

              <div
                className="relative z-10 flex items-center justify-center"
                ref={(el: HTMLDivElement | null) => (dotRefs.current[i] = el)}
              >
                <div
                  className="w-3.5 h-3.5 rounded-full"
                  style={{
                    background: isActive
                      ? "radial-gradient(circle, #4ade80, #22c55e)"
                      : darkMode
                      ? "rgba(148,130,186,0.4)"
                      : "rgba(79,70,229,0.3)",
                    boxShadow: isActive
                      ? "0 0 14px rgba(34,197,94,0.8), 0 0 28px rgba(34,197,94,0.3)"
                      : "0 0 8px rgba(79,70,229,0.2)",
                    transform: isActive ? "scale(1.35)" : "scale(1)",
                    transition:
                      "background 0.5s ease, box-shadow 0.5s ease, transform 0.4s cubic-bezier(0.34,1.56,0.64,1)",
                  }}
                />
              </div>

              <div className="pl-4">
                <p
                  className="text-sm sm:text-base max-w-xs"
                  style={{
                    color: isActive
                      ? darkMode
                        ? "rgba(248,250,252,0.8)"
                        : "rgba(2,6,23,0.8)"
                      : darkMode
                      ? "rgba(248,250,252,0.2)"
                      : "rgba(2,6,23,0.2)",
                    lineHeight: 1.7,
                    transition: "color 0.7s ease",
                  }}
                >
                  {m.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Mobile */}
      <div className="relative pl-8 md:hidden">
        <div
          className="absolute left-3 top-0 bottom-0 w-px"
          style={{
            background: darkMode
              ? "rgba(79,70,229,0.2)"
              : "rgba(79,70,229,0.15)",
          }}
        />

        {milestones.map((m, i) => {
          const isActive = i <= activeIndex;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative mb-14 last:mb-0"
            >
              <div
                className="absolute top-1 z-10 w-3 h-3 rounded-full"
                style={{
                  left: "-21px",
                  background: isActive
                    ? "radial-gradient(circle, #4ade80, #22c55e)"
                    : darkMode
                    ? "rgba(148,130,186,0.4)"
                    : "rgba(79,70,229,0.3)",
                  boxShadow: isActive
                    ? "0 0 12px rgba(34,197,94,0.8)"
                    : "0 0 8px rgba(79,70,229,0.2)",
                  transform: isActive ? "scale(1.3)" : "scale(1)",
                  transition:
                    "background 0.5s ease, box-shadow 0.5s ease, transform 0.4s cubic-bezier(0.34,1.56,0.64,1)",
                }}
              />

              <p
                className="text-xs mb-1"
                style={{
                  color: isActive ? "#4ade80" : "#7C3AED",
                  fontWeight: 600,
                  transition: "color 0.5s ease",
                }}
              >
                {m.year}
              </p>
              <h3
                className="text-2xl mb-2"
                style={{
                  fontFamily: "'Sora', sans-serif",
                  fontWeight: 600,
                  color: isActive
                    ? darkMode
                      ? "rgba(248,250,252,0.85)"
                      : "rgba(2,6,23,0.75)"
                    : darkMode
                    ? "rgba(248,250,252,0.1)"
                    : "rgba(2,6,23,0.08)",
                  lineHeight: 1.1,
                  transition: "color 0.7s ease",
                }}
              >
                {m.title}
              </h3>
              <p
                className="text-sm"
                style={{
                  color: isActive
                    ? darkMode
                      ? "rgba(248,250,252,0.8)"
                      : "rgba(2,6,23,0.8)"
                    : darkMode
                    ? "rgba(248,250,252,0.2)"
                    : "rgba(2,6,23,0.2)",
                  lineHeight: 1.7,
                  transition: "color 0.7s ease",
                }}
              >
                {m.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}