import React, { useCallback, useRef } from "react";
import { Link } from "react-router";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { SWAROOP_CARD_IMAGE, SWAROOP_SLUG } from "../data/teamMemberProfiles";

interface Props {
  darkMode: boolean;
}

const CARD_W = 220;
const CARD_H = (346.66 * CARD_W) / 260;
const CARD_GAP = 14;

const teamMembers: {
  name: string;
  role: string;
  /** Omit until a portrait is available; card shows an empty placeholder slot. */
  image?: string;
  slug?: string;
}[] = [
  {
    name: "Swaroop Jayaram",
    role: "Founder & CEO",
    image: "/src/assets/Swaroop.jpg",
    slug: SWAROOP_SLUG,
  },
  {
    name: "Bhavana G",
    role: "Head of Operations",
    image: "/src/assets/Bhavana.webp",
  },
  {
    name: "Amarnath Bagineni",
    role: "Chief Technology Officer",
  },
  {
    name: "Sangeeta M",
    role: "Head of Partnerships & Growth",
  },
  {
    name: "Punith C A",
    role: "Finance Manager",
  },
  {
    name: "Srinivas C",
    role: "Senior Data Architect",
  },
  {
    name: "Deepak",
    role: "Senior Mobile Architect",
  },
  {
    name: "Megha K",
    role: "Senior Data Scientist",
  },
  {
    name: "Soniya Patil",
    role: "Front-end Developer",
  },
  {
    name: "Ashwin S",
    role: "Backend Developer",
    image: "/src/assets/Ashwin.jpg",
  },
  {
    name: "Vishal HM",
    role: "UI/UX Designer",
    image: "/src/assets/vishal.webp",
  },
  {
    name: "Tejas K",
    role: "AI Research Engineer",
    image: "/src/assets/unnamed.webp",
  },
  {
    name: "Sujala",
    role: "Talent Acquisition Specialist",
  },
  {
    name: "Kavya",
    role: "Data Research Expert",
  },
];

export default function TeamSection({ darkMode }: Props) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByDirection = useCallback((dir: "prev" | "next") => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-team-card]");
    const step = (card?.offsetWidth ?? CARD_W) + CARD_GAP;
    el.scrollBy({ left: dir === "prev" ? -step : step, behavior: "smooth" });
  }, []);

  return (
    <SectionWrapper id="team">
      <div className="text-center mb-12 sm:mb-16">
        <p
          className="text-sm mb-4 tracking-widest uppercase"
          style={{ color: "#7C3AED" }}
        >
          Our Team
        </p>
        <h2
          className="text-section-title-home mb-4"
          style={{ fontFamily: "'Sora', sans-serif", lineHeight: 1.15 }}
        >
          People Who Challenge the Status Quo
        </h2>
        <p
          className="text-sm sm:text-base max-w-2xl mx-auto px-2"
          style={{
            color: darkMode ? "rgba(248,250,252,0.5)" : "rgba(2,6,23,0.55)",
            lineHeight: 1.7,
          }}
        >
          A team united by bold ideas, deep integrity and an unwavering belief that the right technology built by the right people changes everything.
        </p>
      </div>

      <div className="relative flex items-center gap-2 sm:gap-4">
        <button
          type="button"
          aria-label="Previous team members"
          onClick={() => scrollByDirection("prev")}
          className="z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-opacity hover:opacity-90 sm:h-12 sm:w-12"
          style={{
            background: darkMode ? "rgba(15,23,42,0.75)" : "rgba(255,255,255,0.85)",
            border: darkMode
              ? "1px solid rgba(255,255,255,0.15)"
              : "1px solid rgba(0,0,0,0.1)",
            color: darkMode ? "#F8FAFC" : "#0F172A",
            backdropFilter: "blur(8px)",
          }}
        >
          <ChevronLeft size={22} strokeWidth={1.75} />
        </button>

        <div
          ref={scrollerRef}
          className="flex min-w-0 flex-1 gap-4 overflow-x-auto scroll-smooth py-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {teamMembers.map((member) => {
            const cardStyle = {
              width: `min(${CARD_W}px, calc(100vw - 7rem))`,
              aspectRatio: `${CARD_W} / ${CARD_H}`,
              scrollSnapAlign: "start" as const,
            };
            const cardInner = (
              <>
                {member.image ? (
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                ) : (
                  <div
                    aria-hidden
                    className="absolute inset-0 h-full w-full"
                    style={{
                      background: darkMode
                        ? "linear-gradient(160deg, rgba(79,70,229,0.22) 0%, rgba(15,23,42,0.95) 55%, rgba(15,23,42,1) 100%)"
                        : "linear-gradient(160deg, rgba(79,70,229,0.14) 0%, rgba(226,232,240,0.65) 45%, rgba(241,245,249,0.98) 100%)",
                    }}
                  />
                )}
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.35) 45%, transparent 72%)",
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-3 p-4 text-left">
                  <div className="min-w-0">
                    <h3
                      className="text-base font-semibold text-white sm:text-lg"
                      style={{ fontFamily: "'Sora', sans-serif" }}
                    >
                      {member.name}
                    </h3>
                    <p
                      className="mt-0.5 text-xs sm:text-sm"
                      style={{ color: "rgba(248,250,252,0.65)" }}
                    >
                      {member.role}
                    </p>
                  </div>
                  {member.slug ? (
                    <div
                      className="pointer-events-none flex shrink-0 flex-col items-end justify-end self-end"
                      aria-hidden
                    >
                      <div
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.35)" }}
                      >
                        <ArrowUpRight
                          size={19}
                          strokeWidth={2}
                          className="shrink-0"
                        />
                      </div>
                    </div>
                  ) : null}
                </div>
              </>
            );
            return (
              <div
                key={member.name}
                data-team-card
                className="relative shrink-0 overflow-hidden rounded-2xl"
                style={cardStyle}
              >
                {member.slug ? (
                  <Link
                    to={`/team/${member.slug}`}
                    className="group absolute inset-0 block rounded-2xl ring-offset-2 transition hover:ring-2 hover:ring-violet-500/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500"
                    aria-label={`View profile: ${member.name}`}
                  >
                    {cardInner}
                  </Link>
                ) : (
                  <div className="absolute inset-0">{cardInner}</div>
                )}
              </div>
            );
          })}
        </div>

        <button
          type="button"
          aria-label="Next team members"
          onClick={() => scrollByDirection("next")}
          className="z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-opacity hover:opacity-90 sm:h-12 sm:w-12"
          style={{
            background: darkMode ? "rgba(15,23,42,0.75)" : "rgba(255,255,255,0.85)",
            border: darkMode
              ? "1px solid rgba(255,255,255,0.15)"
              : "1px solid rgba(0,0,0,0.1)",
            color: darkMode ? "#F8FAFC" : "#0F172A",
            backdropFilter: "blur(8px)",
          }}
        >
          <ChevronRight size={22} strokeWidth={1.75} />
        </button>
      </div>
    </SectionWrapper>
  );
}
