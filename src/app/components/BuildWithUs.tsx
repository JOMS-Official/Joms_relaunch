import { Code, TrendingUp, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import SectionWrapper from "./SectionWrapper";

interface Props {
  darkMode: boolean;
}

const cards = [
  {
    icon: Code,
    title: "For Builders",
    description:
      "Join a team that's building the future of digital platforms. We value craft, ownership, and ambition.",
    cta: "Explore Careers",
    link: "/careers",
    lineGradient: "linear-gradient(180deg, #6366F1 0%, rgba(0,0,0,0) 100%)",
    accentColor: "#818CF8",
  },
  {
    icon: TrendingUp,
    title: "For Investors",
    description:
      "Partner with a team that has a bold vision and the execution to match. Learn about the opportunity.",
    cta: "Request Pitch Deck",
    link: "/investors",
    lineGradient: "linear-gradient(180deg, #D4AF37 0%, rgba(0,0,0,0) 100%)",
    accentColor: "#E5C158",
  },
  {
    icon: Users,
    title: "For Collaborators",
    description:
      "Whether you're a potential partner, advisor, or enthusiast — we'd love to hear from you.",
    cta: "Contact Us",
    link: "/contact",
    lineGradient: "linear-gradient(180deg, #3B82F6 0%, rgba(0,0,0,0) 100%)",
    accentColor: "#60A5FA",
  },
];

export default function BuildWithUs({ darkMode }: Props) {
  return (
    <SectionWrapper>
      <div className="text-center mb-16">
        <p
          className="text-sm mb-4 tracking-widest uppercase"
          style={{ color: "#7C3AED" }}
        >
          Build With Us
        </p>
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl"
          style={{ fontFamily: "'Sora', sans-serif", lineHeight: 1.15 }}
        >
          The Next Big Platform Could Start Here
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
        {cards.map((card) => (
          <div key={card.title} className="relative pl-6">
            <div
              className="absolute left-0 top-0"
              style={{
                width: 3,
                height: 48,
                background: card.lineGradient,
                borderRadius: 2,
              }}
            />
            <card.icon
              size={32}
              className="mb-6"
              strokeWidth={1.5}
              style={{ color: card.accentColor }}
            />
            <h3
              className="text-xl mb-3"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              {card.title}
            </h3>
            <p
              className="text-sm mb-6"
              style={{
                color: darkMode
                  ? "rgba(248,250,252,0.6)"
                  : "rgba(2,6,23,0.6)",
                lineHeight: 1.7,
              }}
            >
              {card.description}
            </p>
            <Link
              to={card.link}
              className="inline-flex items-center gap-1.5 text-sm font-medium transition-opacity hover:opacity-90"
              style={{ color: card.accentColor }}
            >
              {card.cta}
              <ArrowRight size={16} strokeWidth={2} />
            </Link>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
