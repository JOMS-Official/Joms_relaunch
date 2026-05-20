import React from "react";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import { Link } from "react-router";

interface HeroProps {
  darkMode: boolean;
}

const orbitCards = [
  { label: "The Right People", angle: 0 },
  { label: "In The Right Place", angle: 15 },
  { label: "At The Right Time", angle: 30 },
];

function OrbitPill({
  label,
  angle,
  darkMode,
}: {
  label: string;
  angle: number;
  darkMode: boolean;
}) {
  return (
    <motion.div
      animate={{ rotate: [angle, angle + 360] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute inset-0"
    >
      <motion.div
        animate={{ rotate: [-angle, -(angle + 360)] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-8 left-1/2 -translate-x-1/2 px-4 py-2 rounded-xl text-xs whitespace-nowrap"
        style={{
          background: darkMode
            ? "rgba(255,255,255,0.08)"
            : "rgba(255,255,255,0.9)",
          backdropFilter: "blur(20px)",
          border: darkMode
            ? "1px solid rgba(255,255,255,0.15)"
            : "1px solid rgba(0,0,0,0.08)",
          boxShadow: "0 4px 20px rgba(79,70,229,0.2)",
          color: darkMode ? "#ffffff" : "#111111",
        }}
      >
        {label}
      </motion.div>
    </motion.div>
  );
}

export default function HeroSection({ darkMode }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12 px-4">
      {/* Animated gradient orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(79,70,229,0.4), transparent 70%)",
        }}
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(124,58,237,0.4), transparent 70%)",
        }}
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-1/3 w-64 h-64 rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(37,99,235,0.3), transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
        {/* Left - Text */}
        <div className="flex-1 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-start mb-8"
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm"
              style={{
                background: darkMode
                  ? "linear-gradient(135deg, rgba(79,70,229,0.52), rgba(124,58,237,0.45))"
                  : "linear-gradient(135deg, rgba(79,70,229,0.72), rgba(124,58,237,0.62))",
                border: darkMode
                  ? "1px solid rgba(255,255,255,0.14)"
                  : "1px solid rgba(255,255,255,0.22)",
                color: "#FFFFFF",
              }}
            >
              <Sparkles size={14} className="shrink-0 text-white" strokeWidth={2} style={{ color: "#FFFFFF" }} />
              Just One More Step
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mb-6 text-center lg:text-left"
            style={{ fontFamily: "'Sora', sans-serif", lineHeight: 1.1 }}
          >
            Every Opportunity is{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #4F46E5, #7C3AED, #2563EB)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Just One More Step
            </span>{" "}
            Closer
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl mb-10 max-w-xl w-full mx-auto lg:mx-0 text-justify"
            style={{
              color: darkMode ? "rgba(248,250,252,0.7)" : "rgba(2,6,23,0.6)",
              lineHeight: 1.7,
            }}
          >
            JOMS is redefining startup eco-system with an all-in-one platform
            that helps founders validate ideas, build products, connect and
            scale efficiently.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-start"
          >
            <Link
              to="/contact#connect"
              className="inline-flex items-center justify-center px-8 py-4 rounded-2xl text-white transition-all hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #4F46E5, #7C3AED)",
                boxShadow: "0 8px 30px rgba(79,70,229,0.4)",
              }}
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>

        {/* Right - Animated sphere with orbiting pills */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-[500px] h-[500px]">
            {/* Central sphere */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-16 rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, rgba(79,70,229,0.6), rgba(124,58,237,0.4), rgba(37,99,235,0.2), transparent 70%)",
                boxShadow:
                  "0 0 60px rgba(79,70,229,0.3), inset 0 0 60px rgba(124,58,237,0.2)",
              }}
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-28 rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 70% 30%, rgba(124,58,237,0.5), transparent 60%)",
              }}
            />

            {/* Orbiting pills */}
            {orbitCards.map((card) => (
              <OrbitPill
                key={card.label}
                label={card.label}
                angle={card.angle}
                darkMode={darkMode}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}