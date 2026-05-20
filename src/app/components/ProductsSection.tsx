"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Link } from "react-router";
import SectionWrapper from "./SectionWrapper";

interface Props {
  darkMode: boolean;
}

const slideTexts = [
  "Something big is on the horizon. Our first product is nearly ready and it's built to change how ambitious people connect, gather and grow.",
  "A smarter way to find the right people, in the right rooms, at exactly the right time.",
  "From intimate roundtables to large-scale gatherings; discover and host events that don't just connect people, they move things forward.",
  "Your next venture deserves more than a great idea; access to the ecosystem that turns vision into execution.",
  "Your network should work as hard as your ambition; build meaningful relationships that open doors, spark collaboration, and create lasting opportunities.",
];

const textBlurbVariants = {
  initial: { opacity: 0, y: 16 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.58,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: {
      duration: 0.34,
      ease: [0.4, 0, 0.2, 1],
    },
  },
} as const;

export default function ProductsSection({ darkMode }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const goTo = (index: number) => {
    setSelectedIndex(
      ((index % slideTexts.length) + slideTexts.length) % slideTexts.length,
    );
  };

  const goNext = () =>
    setSelectedIndex((i) => (i + 1) % slideTexts.length);
  const goPrev = () =>
    setSelectedIndex((i) => (i - 1 + slideTexts.length) % slideTexts.length);

  // Longer dwell time; timer resets when the slide changes (dots or swipe).
  useEffect(() => {
    const id = window.setInterval(() => {
      setSelectedIndex((i) => (i + 1) % slideTexts.length);
    }, 5800);
    return () => window.clearInterval(id);
  }, [selectedIndex]);

  const muted = darkMode ? "rgba(248,250,252,0.5)" : "rgba(2,6,23,0.5)";

  return (
    <SectionWrapper id="products">
      {/* Top separator line */}
      <div
        className="w-full h-px mb-16"
        style={{
          background: darkMode
            ? "linear-gradient(90deg, transparent 0%, rgba(79,70,229,0.5) 50%, transparent 100%)"
            : "linear-gradient(90deg, transparent 0%, rgba(79,70,229,0.3) 50%, transparent 100%)",
        }}
      />

      <div className="flex flex-col items-center py-12">
        <h2
          className="text-center text-section-title-home sm:text-section-title-home-xl mb-5 whitespace-nowrap max-w-full"
          style={{
            fontFamily: "'Sora', sans-serif",
            lineHeight: 1.15,
          }}
        >
          Launching Soon
        </h2>

        <Link
          to="/contact#connect"
          className="inline-flex items-center justify-center px-7 py-3.5 sm:px-8 sm:py-4 rounded-2xl text-white text-sm sm:text-base font-medium transition-all hover:scale-105 mb-8"
          style={{
            background: "linear-gradient(135deg, #4F46E5, #7C3AED)",
            boxShadow: "0 8px 30px rgba(79,70,229,0.35)",
            fontFamily: "'Sora', sans-serif",
          }}
        >
          Be the first to know
        </Link>

        <div
          className="w-full max-w-lg mx-auto mb-10 min-h-[7.5rem] sm:min-h-[6.75rem]"
          aria-roledescription="carousel"
          aria-label="Launching soon updates"
        >
          <motion.div
            className="overflow-hidden cursor-grab active:cursor-grabbing px-1 select-none touch-pan-y"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.12}
            onDragEnd={(_, { offset, velocity }) => {
              const swipe = offset.x + velocity.x * 0.15;
              if (swipe < -40) {
                goNext();
              } else if (swipe > 40) {
                goPrev();
              }
            }}
            role="region"
            aria-live="polite"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.p
                key={selectedIndex}
                className="text-sm sm:text-base text-justify"
                style={{
                  color: muted,
                  lineHeight: 1.8,
                }}
                variants={textBlurbVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                role="group"
                aria-roledescription="slide"
                aria-label={`${selectedIndex + 1} of ${slideTexts.length}`}
              >
                {slideTexts[selectedIndex]}
              </motion.p>
            </AnimatePresence>
          </motion.div>
        </div>

        <div
          className="flex items-center justify-center gap-2 flex-wrap"
          role="tablist"
          aria-label="Choose slide"
        >
          {slideTexts.map((_, i) => {
            const active = i === selectedIndex;
            return (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={active}
                aria-label={`Slide ${i + 1}`}
                onClick={() => goTo(i)}
                className="w-2 h-2 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
                style={{
                  background: active
                    ? "#4F46E5"
                    : darkMode
                      ? "rgba(79,70,229,0.3)"
                      : "rgba(79,70,229,0.25)",
                  transform: active ? "scale(1.25)" : "scale(1)",
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Bottom separator line */}
      <div
        className="w-full h-px mt-16"
        style={{
          background: darkMode
            ? "linear-gradient(90deg, transparent 0%, rgba(79,70,229,0.5) 50%, transparent 100%)"
            : "linear-gradient(90deg, transparent 0%, rgba(79,70,229,0.3) 50%, transparent 100%)",
        }}
      />
    </SectionWrapper>
  );
}
