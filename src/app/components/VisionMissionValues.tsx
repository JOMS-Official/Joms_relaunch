import { Eye, Rocket, Heart } from "lucide-react";
import GlassCard from "./GlassCard";
import SectionWrapper from "./SectionWrapper";

interface Props {
  darkMode: boolean;
}

const cards = [
  {
    icon: Eye,
    title: "Vision",
    description:
      "To be the catalyst for the next generation of digital platforms that empower billions of people to connect, transact, and grow — seamlessly.",
    gradient: "linear-gradient(135deg, #4F46E5, #7C3AED)",
  },
  {
    icon: Rocket,
    title: "Mission",
    description:
      "To build intelligent, scalable mobile platforms and marketplaces that solve real problems, create real value, and redefine how the world interacts with technology.",
    gradient: "linear-gradient(135deg, #2563EB, #4F46E5)",
  },
  {
    icon: Heart,
    title: "Core Principles",
    description:
      "User-first design. Relentless innovation. Transparent leadership. Long-term thinking. We build with integrity, ship with urgency, and measure with impact.",
    gradient: "linear-gradient(135deg, #7C3AED, #6D28D9)",
  },
];

export default function VisionMissionValues({ darkMode }: Props) {
  return (
    <SectionWrapper>
      <div className="text-center mb-16">
        <p
          className="text-sm mb-4 tracking-widest uppercase"
          style={{ color: "#7C3AED" }}
        >
          What Drives Us
        </p>
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl"
          style={{ fontFamily: "'Sora', sans-serif", lineHeight: 1.15 }}
        >
          Vision, Mission &{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #4F46E5, #7C3AED)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Values
          </span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <GlassCard key={card.title} darkMode={darkMode} className="group">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
              style={{ background: card.gradient }}
            >
              <card.icon size={22} className="text-white" />
            </div>
            <h3
              className="text-xl mb-3"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              {card.title}
            </h3>
            <p
              className="text-sm"
              style={{
                color: darkMode
                  ? "rgba(248,250,252,0.6)"
                  : "rgba(2,6,23,0.6)",
                lineHeight: 1.7,
              }}
            >
              {card.description}
            </p>
          </GlassCard>
        ))}
      </div>
    </SectionWrapper>
  );
}
