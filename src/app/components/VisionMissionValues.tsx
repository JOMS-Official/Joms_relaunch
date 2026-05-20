import type { ReactNode } from "react";
import { Eye, Rocket, Heart } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

interface Props {
  darkMode: boolean;
}

const cards: {
  icon: typeof Eye;
  title: string;
  description: ReactNode;
}[] = [
  {
    icon: Eye,
    title: "Vision",
    description:
      "Inspire global transformation through innovation that elevates human experiences and creates a more compassionate, inclusive and sustainable world.",
  },
  {
    icon: Rocket,
    title: "Mission",
    description:
      "Enhancing experiences through passion, creativity, and technology to drive meaningful innovation and growth.",
  },
  {
    icon: Heart,
    title: "Core Principles",
    description: (
      <>
        <strong className="font-bold text-inherit">Courage</strong> drives
        us to build boldly, while{" "}
        <strong className="font-bold text-inherit">Resilience</strong>{" "}
        keeps us growing through every challenge.{" "}
        <strong className="font-bold text-inherit">Integrity</strong>{" "}
        guides every decision, and{" "}
        <strong className="font-bold text-inherit">
          Social Responsibility
        </strong>{" "}
        ensures we create with purpose and accountability.{" "}
        <strong className="font-bold text-inherit">Passion</strong> fuels
        everything we do to create meaningful impact.
      </>
    ),
  },
];

export default function VisionMissionValues({ darkMode }: Props) {
  const muted = darkMode ? "rgba(248,250,252,0.65)" : "rgba(2,6,23,0.65)";
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
          <div key={card.title} className="relative pl-6">
            <div
              className="absolute left-0 top-0"
              style={{
                width: 3,
                height: 48,
                background:
                  "linear-gradient(180deg, #2563EB 0%, rgba(0,0,0,0) 100%)",
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
