import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router";

interface HeroProps {
  darkMode: boolean;
}

const orbitCards = [
  { label: "Mobile Platforms", angle: 0 },
  { label: "Marketplace Ecosystem", angle: 120 },
  { label: "Future Products (Beta)", angle: 240 },
];

export default function HeroSection({ darkMode }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 px-4">
      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(79,70,229,0.4), transparent 70%)",
        }}
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(124,58,237,0.4), transparent 70%)",
        }}
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-1/3 w-64 h-64 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(37,99,235,0.3), transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
        {/* Left - Text */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-sm"
              style={{
                background: darkMode
                  ? "rgba(79,70,229,0.15)"
                  : "rgba(79,70,229,0.08)",
                border: "1px solid rgba(79,70,229,0.3)",
                color: "#7C3AED",
              }}
            >
              <Sparkles size={14} />
              Just One More Step
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-6"
            style={{
              fontFamily: "'Sora', sans-serif",
              lineHeight: 1.1,
            }}
          >
            Building the Future.{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #4F46E5, #7C3AED, #2563EB)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              One Step at a Time.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl mb-10 max-w-xl mx-auto lg:mx-0"
            style={{
              color: darkMode ? "rgba(248,250,252,0.7)" : "rgba(2,6,23,0.6)",
              lineHeight: 1.7,
            }}
          >
            JOMS is building the next generation of digital platforms — from
            intelligent mobile applications to scalable marketplaces designed
            for the future.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Link
              to="/#vision"
              onClick={() =>
                document
                  .getElementById("vision")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-white transition-all hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #4F46E5, #7C3AED)",
                boxShadow: "0 8px 30px rgba(79,70,229,0.4)",
              }}
            >
              Explore Our Vision
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              to="/careers"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl transition-all hover:scale-105"
              style={{
                background: darkMode
                  ? "rgba(255,255,255,0.08)"
                  : "rgba(0,0,0,0.05)",
                border: darkMode
                  ? "1px solid rgba(255,255,255,0.15)"
                  : "1px solid rgba(0,0,0,0.1)",
              }}
            >
              Join Our Journey
            </Link>
          </motion.div>
        </div>

        {/* Right - Animated sphere with orbiting cards */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-72 h-72 sm:w-96 sm:h-96">
            {/* Central sphere */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-8 rounded-full"
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
              className="absolute inset-16 rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 70% 30%, rgba(124,58,237,0.5), transparent 60%)",
              }}
            />

            {/* Orbiting cards */}
            {orbitCards.map((card, i) => (
              <motion.div
                key={card.label}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.5,
                }}
                className="absolute inset-0"
                style={{
                  transform: `rotate(${card.angle}deg)`,
                }}
              >
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.5,
                  }}
                  className="absolute -top-2 left-1/2 -translate-x-1/2 px-4 py-2 rounded-xl text-xs whitespace-nowrap"
                  style={{
                    background: darkMode
                      ? "rgba(255,255,255,0.08)"
                      : "rgba(255,255,255,0.9)",
                    backdropFilter: "blur(20px)",
                    border: darkMode
                      ? "1px solid rgba(255,255,255,0.15)"
                      : "1px solid rgba(0,0,0,0.08)",
                    boxShadow: "0 4px 20px rgba(79,70,229,0.2)",
                  }}
                >
                  {card.label}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
