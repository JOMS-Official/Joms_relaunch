import { Eye, Rocket, Heart } from "lucide-react";
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
  },
  {
    icon: Rocket,
    title: "Mission",
    description:
      "To build intelligent, scalable mobile platforms and marketplaces that solve real problems, create real value, and redefine how the world interacts with technology.",
  },
  {
    icon: Heart,
    title: "Core Principles",
    description:
      "User-first design. Relentless innovation. Transparent leadership. Long-term thinking. We build with integrity, ship with urgency, and measure with impact.",
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
          Vision, Mission & Values
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
        {cards.map((card) => (
          <div
            key={card.title}
            className="relative pl-6"
          >
            <div
              className="absolute left-0 top-0"
              style={{
                width: 3,
                height: 48,
                background: "linear-gradient(180deg, #2563EB 0%, rgba(0,0,0,0) 100%)",
                borderRadius: 2,
              }}
            />
            <card.icon
              size={32}
              className="mb-6"
              strokeWidth={1.5}
              style={{ color: "#7C3AED" }}
            />
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
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
