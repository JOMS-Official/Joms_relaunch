"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Rocket } from "lucide-react";
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

export default function ProductsSection({ darkMode }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    duration: 20,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Auto-advance every 3s; restart timer whenever the slide changes (swipe, dots, or autoplay).
  useEffect(() => {
    if (!emblaApi) return;
    const id = window.setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);
    return () => window.clearInterval(id);
  }, [emblaApi, selectedIndex]);

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

      <div className="flex flex-col items-center text-center py-12">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8"
          style={{
            background: darkMode
              ? "rgba(255,255,255,0.06)"
              : "rgba(0,0,0,0.05)",
            border: darkMode
              ? "1px solid rgba(255,255,255,0.1)"
              : "1px solid rgba(0,0,0,0.08)",
          }}
        >
          <Rocket size={24} style={{ color: darkMode ? "#E2E8F0" : "#1E293B" }} />
        </div>

        <h2
          className="text-4xl sm:text-5xl lg:text-6xl mb-5"
          style={{
            fontFamily: "'Sora', sans-serif",
            lineHeight: 1.15,
          }}
        >
          Launching
          <br />
          Soon
        </h2>

        <Link
          to="/contact"
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
          className="w-full max-w-lg mx-auto mb-10"
          aria-roledescription="carousel"
          aria-label="Launching soon updates"
        >
          <div ref={emblaRef} className="overflow-hidden cursor-grab active:cursor-grabbing">
            <div className="flex touch-pan-y">
              {slideTexts.map((text, i) => (
                <div
                  key={i}
                  className="min-w-0 shrink-0 grow-0 basis-full px-1"
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} of ${slideTexts.length}`}
                >
                  <p
                    className="text-sm sm:text-base"
                    style={{
                      color: muted,
                      lineHeight: 1.8,
                    }}
                  >
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
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
                onClick={() => emblaApi?.scrollTo(i)}
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
