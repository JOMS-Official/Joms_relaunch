import { useCallback, useRef } from "react";
import { Link } from "react-router";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { SWAROOP_CARD_IMAGE, SWAROOP_SLUG } from "../data/teamMemberProfiles";

interface Props {
  darkMode: boolean;
}

const CARD_W = 260;
const CARD_GAP = 16;

const teamMembers: {
  name: string;
  role: string;
  image: string;
  slug?: string;
}[] = [
  {
    name: "Swaroop Jayaram",
    role: "Founder & CEO",
    image:  "/src/assets/Swaroop.jpg",
    slug: SWAROOP_SLUG,
  },
   {
    name: "Bhavana Gopala ",
    role: "Head Of Operations",
    image:
      "/src/assets/Bhavana.webp",
  },
 
  {
    name: "Vishal HM",
    role: "UI/UX Developer",
    image:
      "/src/assets/vishal.webp",
  },
  {
    name: "Ashwin S ",
    role: "Backend Developer",
    image:
      "/src/assets/Ashwin.jpg",
  },
   {
    name: "Tejas K ",
    role: "Research Engineer",
    image:
      "/src/assets/unnamed.webp",
  },
  {
    name: "Maya Patel",
    role: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1659353220597-71b8c6a56259?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
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
          className="text-3xl sm:text-4xl lg:text-5xl mb-4"
          style={{ fontFamily: "'Sora', sans-serif", lineHeight: 1.15 }}
        >
          The Minds Behind JOMS
        </h2>
        <p
          className="text-sm sm:text-base max-w-2xl mx-auto px-2"
          style={{
            color: darkMode ? "rgba(248,250,252,0.5)" : "rgba(2,6,23,0.55)",
            lineHeight: 1.7,
          }}
        >
          A passionate team of builders, designers, and visionaries working to
          create the future of digital platforms.
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
              width: "min(260px, calc(100vw - 7rem))",
              aspectRatio: `${CARD_W} / 346.66`,
              scrollSnapAlign: "start" as const,
            };
            const cardInner = (
              <>
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="absolute inset-0 h-full w-full object-cover"
                />
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
                      className="pointer-events-none flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md transition-transform group-hover:translate-x-0.5"
                      style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.35)" }}
                      aria-hidden
                    >
                      <ArrowRight size={18} strokeWidth={2.25} />
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
