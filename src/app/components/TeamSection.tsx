import { useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Props {
  darkMode: boolean;
}

const CARD_W = 260;
const CARD_GAP = 16;

const teamMembers = [
  {
    name: "Swaroop Jayaram",
    role: "Founder & CEO",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=520&h=700&fit=crop&q=80",
  },
  {
    name: "Ananya Reddy",
    role: "Director of Operations",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=520&h=700&fit=crop&q=80",
  },
  {
    name: "Priya Sharma",
    role: "Lead Engineer",
    image:
      "https://images.unsplash.com/photo-1712174766230-cb7304feaafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    name: "Alex Chen",
    role: "Product Designer",
    image:
      "https://images.unsplash.com/photo-1761522001672-5f1d45ce1b10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
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
          {teamMembers.map((member) => (
            <div
              key={member.name}
              data-team-card
              className="relative shrink-0 overflow-hidden rounded-2xl"
              style={{
                width: "min(260px, calc(100vw - 7rem))",
                aspectRatio: `${CARD_W} / 346.66`,
                scrollSnapAlign: "start",
              }}
            >
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
              <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
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
            </div>
          ))}
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
