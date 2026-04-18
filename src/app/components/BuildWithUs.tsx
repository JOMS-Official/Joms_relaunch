import { Code, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router";
import GlassCard from "./GlassCard";
import SectionWrapper from "./SectionWrapper";

interface Props {
  darkMode: boolean;
}

const cards = [
  {
    icon: Code,
    title: "For Builders",
    description: "Join a team that's building the future of digital platforms. We value craft, ownership, and ambition.",
    cta: "Explore Careers",
    link: "/careers",
    gradient: "linear-gradient(135deg, #4F46E5, #7C3AED)",
  },
  {
    icon: TrendingUp,
    title: "For Investors",
    description: "Partner with a team that has a bold vision and the execution to match. Learn about the opportunity.",
    cta: "Request Pitch Deck",
    link: "/investors",
    gradient: "linear-gradient(135deg, #D4AF37, #B8860B)",
  },
  {
    icon: Users,
    title: "For Collaborators",
    description: "Whether you're a potential partner, advisor, or enthusiast — we'd love to hear from you.",
    cta: "Contact Us",
    link: "/contact",
    gradient: "linear-gradient(135deg, #2563EB, #4F46E5)",
  },
];

export default function BuildWithUs({ darkMode }: Props) {
  return (
    <SectionWrapper>
      <div className="text-center mb-16">
        <p className="text-sm mb-4 tracking-widest uppercase" style={{ color: "#7C3AED" }}>
          Build With Us
        </p>
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl"
          style={{ fontFamily: "'Sora', sans-serif", lineHeight: 1.15 }}
        >
          The Next Big Platform{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #4F46E5, #7C3AED)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Could Start Here
          </span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <GlassCard key={card.title} darkMode={darkMode} className="flex flex-col">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
              style={{ background: card.gradient }}
            >
              <card.icon size={22} className="text-white" />
            </div>
            <h3 className="text-xl mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>
              {card.title}
            </h3>
            <p
              className="text-sm mb-6 flex-1"
              style={{
                color: darkMode ? "rgba(248,250,252,0.6)" : "rgba(2,6,23,0.6)",
                lineHeight: 1.7,
              }}
            >
              {card.description}
            </p>
            <Link
              to={card.link}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm text-white transition-all hover:scale-105 w-fit"
              style={{
                background: card.gradient,
                boxShadow: `0 4px 15px ${card.gradient.includes("D4AF37") ? "rgba(212,175,55,0.3)" : "rgba(79,70,229,0.3)"}`,
              }}
            >
              {card.cta}
            </Link>
          </GlassCard>
        ))}
      </div>
    </SectionWrapper>
  );
}
