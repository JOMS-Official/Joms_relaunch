import { motion } from "motion/react";
import SectionWrapper from "./SectionWrapper";

interface Props {
  darkMode: boolean;
}

export default function FutureSection({ darkMode }: Props) {
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
            className="text-3xl sm:text-4xl lg:text-5xl mb-6"
            style={{ fontFamily: "'Sora', sans-serif", lineHeight: 1.15 }}
          >
            Technology Should{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #4F46E5, #7C3AED)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Move People Forward
            </span>
          </h2>
          <p
            className="text-lg mb-6"
            style={{
              color: darkMode ? "rgba(248,250,252,0.65)" : "rgba(2,6,23,0.6)",
              lineHeight: 1.8,
            }}
          >
            The world is overflowing with technology, yet too many products are
            built to extract value rather than create it. At JOMS, we believe
            the next wave of digital products should be intelligent, human-centered,
            and built to genuinely improve how people live, work, and connect.
          </p>
          <p
            className="text-lg"
            style={{
              color: darkMode ? "rgba(248,250,252,0.65)" : "rgba(2,6,23,0.6)",
              lineHeight: 1.8,
            }}
          >
            We're not just building apps — we're engineering ecosystems.
            From smart mobile platforms to marketplace infrastructure,
            every product we create is designed to scale globally while
            remaining deeply personal.
          </p>
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
            {/* Center glow */}
            <div
              className="absolute inset-24 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(79,70,229,0.5), rgba(124,58,237,0.3), transparent 70%)",
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
                  left: `${15 + i * 13}%`,
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
