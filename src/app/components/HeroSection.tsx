import React from "react";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import { Link } from "react-router";

interface HeroProps {
  darkMode: boolean;
}

const mobileOrbitCards = [
  { label: "The Right People", angle: 0 },
  { label: "In The Right Place", angle: 120 },
  { label: "At The Right Time", angle: 240 },
];

const desktopOrbitCards = [
  { label: "The Right People", angle: 0 },
  { label: "In The Right Place", angle: 15 },
  { label: "At The Right Time", angle: 30 },
];

function MobileOrbitPill({
  label,
  angle,
  darkMode}: {
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
      <div
        className="absolute left-1/2 top-1/2"
        style={{ transform: "translate(-50%, calc(-50% - var(--orbit-r)))" }}
      >
        <motion.div
          animate={{ rotate: [-angle, -(angle + 360)] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-[10px] sm:text-xs whitespace-nowrap"
          style={{
            background: darkMode
              ? "rgba(255,255,255,0.08)"
              : "rgba(255,255,255,0.9)",
            backdropFilter: "blur(20px)",
            border: darkMode
              ? "1px solid rgba(255,255,255,0.15)"
              : "1px solid rgba(0,0,0,0.08)",
            boxShadow: "0 4px 20px rgba(79,70,229,0.2)",
            color: darkMode ? "#ffffff" : "#111111"}}
        >
          {label}
        </motion.div>
      </div>
    </motion.div>
  );
}

function DesktopOrbitPill({
  label,
  angle,
  darkMode}: {
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
          color: darkMode ? "#ffffff" : "#111111"}}
      >
        {label}
      </motion.div>
    </motion.div>
  );
}

export default function HeroSection({ darkMode }: HeroProps) {
  return (
    <section className="relative flex min-h-0 max-lg:min-h-[100svh] max-lg:items-start max-lg:justify-start lg:min-h-screen lg:items-center lg:justify-center overflow-hidden pt-32 pb-20 sm:pt-36 sm:pb-24 lg:pt-24 lg:pb-12 px-4 isolate">
      {/* Animated gradient orbs — opacity only (scale + blur behind backdrop-filter nav causes page shimmer) */}
      <motion.div
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 rounded-full blur-3xl"
        aria-hidden
        style={{
          background: "radial-gradient(circle, rgba(79,70,229,0.4), transparent 70%)"}}
      />
      <motion.div
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-56 sm:h-56 lg:w-80 lg:h-80 rounded-full blur-3xl"
        aria-hidden
        style={{
          background: "radial-gradient(circle, rgba(124,58,237,0.4), transparent 70%)"}}
      />
      <motion.div
        animate={{ opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute top-1/3 right-1/3 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 rounded-full blur-3xl"
        aria-hidden
        style={{
          background: "radial-gradient(circle, rgba(37,99,235,0.3), transparent 70%)"}}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-10 max-lg:gap-12 lg:gap-8 max-lg:pt-2">
        {/* Left - Text */}
        <div className="flex-1 w-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
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
                color: "#FFFFFF"}}
            >
              <Sparkles size={14} className="shrink-0 text-white" strokeWidth={2} style={{ color: "#FFFFFF" }} />
              Just One More Step
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mb-6 text-center lg:text-left"
            style={{lineHeight: 1.1 }}
          >
            Every Opportunity is{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #4F46E5, #7C3AED, #2563EB)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"}}
            >
              Just One More Step
            </span>{" "}
            Closer
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl mb-10 max-w-xl w-full mx-auto lg:mx-0 text-center lg:text-justify"
            style={{
              color: darkMode ? "rgba(248,250,252,0.7)" : "rgba(2,6,23,0.6)",
              lineHeight: 1.7}}
          >
            JOMS is redefining startup ecosystem with an all in one platform
            that helps founders validate ideas, build products, connect and
            scale efficiently.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-start"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-2xl text-white transition-all hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #4F46E5, #7C3AED)",
                boxShadow: "0 8px 30px rgba(79,70,229,0.4)"}}
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>

        {/* Right - Animated sphere with orbiting pills */}
        {/* Mobile */}
        <div className="flex flex-1 items-center justify-center w-full max-w-[min(100%,500px)] max-lg:mb-6 lg:hidden">
          <div className="relative w-[min(260px,78vw)] h-[min(260px,78vw)] sm:w-[340px] sm:h-[340px] [--orbit-r:88px] sm:[--orbit-r:118px]">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-8 sm:inset-12 rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, rgba(79,70,229,0.6), rgba(124,58,237,0.4), rgba(37,99,235,0.2), transparent 70%)",
                boxShadow:
                  "0 0 60px rgba(79,70,229,0.3), inset 0 0 60px rgba(124,58,237,0.2)"}}
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-14 sm:inset-20 rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 70% 30%, rgba(124,58,237,0.5), transparent 60%)"}}
            />
            {mobileOrbitCards.map((card) => (
              <MobileOrbitPill
                key={card.label}
                label={card.label}
                angle={card.angle}
                darkMode={darkMode}
              />
            ))}
          </div>
        </div>

        {/* Desktop — original layout */}
        <div className="hidden flex-1 lg:flex items-center justify-center">
          <div className="relative w-[500px] h-[500px]">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-16 rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, rgba(79,70,229,0.6), rgba(124,58,237,0.4), rgba(37,99,235,0.2), transparent 70%)",
                boxShadow:
                  "0 0 60px rgba(79,70,229,0.3), inset 0 0 60px rgba(124,58,237,0.2)"}}
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-28 rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 70% 30%, rgba(124,58,237,0.5), transparent 60%)"}}
            />
            {desktopOrbitCards.map((card) => (
              <DesktopOrbitPill
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
