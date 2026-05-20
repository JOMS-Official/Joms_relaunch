import React from "react";
import { motion } from "motion/react";
import SectionWrapper from "./SectionWrapper";

interface Props {
  darkMode: boolean;
}

const pillars = [
  {
    title: "Human-Centred by Design",
    body:
      "Every product we build begins with one question: what does the person at the other end actually need? Not what's impressive but what's meaningful.",
  },
  {
    title: "Technology that Scales",
    body:
      "We engineer for longevity. Our products are built to grow with the communities and businesses they serve, robust, adaptive and future-ready.",
  },
  {
    title: "Impact that Endures",
    body:
      "We don't measure success in downloads alone. We measure it in the value we create for real people, real businesses and the world around us.",
  },
];

export default function FutureSection({ darkMode }: Props) {
  const muted =
    darkMode ? "rgba(248,250,252,0.65)" : "rgba(2,6,23,0.6)";
  return (
    <SectionWrapper id="vision">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        {/* Left text */}
        <div className="flex-1">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm mb-4 tracking-widest uppercase"
            style={{ color: "#7C3AED" }}
          >
            The Future We're Building
          </motion.p>
          <h2
            className="text-section-title-home mb-6"
            style={{ fontFamily: "'Sora', sans-serif", lineHeight: 1.15 }}
          >
            Innovation Built {" "}
            <span
              style={{
                background: "linear-gradient(135deg, #4F46E5, #7C3AED)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Around Entrepreneurs
            </span>
          </h2>
          <p
            className="text-lg mb-8"
            style={{
              color: muted,
              lineHeight: 1.8,
            }}
          >
            JOMS is building the infrastructure entrepreneurs need to transform ideas into scalable products and sustainable businesses.
          </p>

          <h3
            className="text-lg sm:text-xl font-semibold mb-6"
            style={{
              fontFamily: "'Sora', sans-serif",
              color: darkMode ? "rgba(248,250,252,0.95)" : "rgb(15,23,42)",
            }}
          >
            Our products revolve around these three pillars:
          </h3>

          <ul className="space-y-5 list-none m-0 p-0" role="list">
            {pillars.map((pillar, index) => (
              <motion.li
                key={pillar.title}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="flex gap-4 pl-1"
              >
                <span
                  className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full text-sm font-semibold"
                  style={{
                    background: darkMode
                      ? "rgba(124,58,237,0.2)"
                      : "rgba(79,70,229,0.1)",
                    color: "#7C3AED",
                    border: `1px solid ${
                      darkMode
                        ? "rgba(124,58,237,0.45)"
                        : "rgba(79,70,229,0.25)"
                    }`,
                  }}
                  aria-hidden
                >
                  {index + 1}
                </span>
                <div className="min-w-0 pt-0.5">
                  <p
                    className="font-semibold text-base sm:text-lg mb-1.5"
                    style={{
                      fontFamily: "'Sora', sans-serif",
                      color: darkMode
                        ? "rgba(248,250,252,0.95)"
                        : "rgb(15,23,42)",
                    }}
                  >
                    {pillar.title}
                  </p>
                  <p
                    className="text-base leading-relaxed m-0"
                    style={{ color: muted, lineHeight: 1.75 }}
                  >
                    {pillar.body}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Right visual */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-80 h-80">
            {/* Layered animated rings */}
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                transition={{
                  duration: 15 + i * 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute rounded-full"
                style={{
                  inset: `${i * 30}px`,
                  border: `1px solid ${
                    darkMode
                      ? `rgba(124,58,237,${0.3 - i * 0.08})`
                      : `rgba(79,70,229,${0.2 - i * 0.05})`
                  }`,
                }}
              />
            ))}
            {/* Center glow — highlight biased right to match dot orbit */}
            <div
              className="absolute inset-24 rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 70% 40%, rgba(79,70,229,0.5), rgba(124,58,237,0.3), transparent 70%)",
                boxShadow: "0 0 80px rgba(79,70,229,0.3)",
              }}
            />
            {/* Floating dots */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 2 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  background: "#7C3AED",
                  top: `${20 + i * 12}%`,
                  right: `${15 + i * 13}%`,
                  boxShadow: "0 0 10px rgba(124,58,237,0.5)",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
