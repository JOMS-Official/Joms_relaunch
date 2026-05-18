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
    description:
      "Courage drives us to build boldly, while Resilience keeps us growing through every challenge. Integrity guides every decision, and Social Responsibility ensures we create with purpose and accountability. Passion fuels everything we do to create meaningful impact.",
  },
];

const crispValues = [
  {
    name: "Courage",
    body:
      "We challenge convention. We take bold bets, ask hard questions and build things worth building even when the road isn't clear.",
  },
  {
    name: "Resilience",
    body:
      "Every setback sharpens us. We adapt, evolve, and move forward with greater intent because the mission is bigger than any obstacle.",
  },
  {
    name: "Integrity",
    body:
      "We do what we say. Honesty and transparency aren't policies for us; they're the foundation every product and partnership is built on.",
  },
  {
    name: "Social Responsibility",
    body:
      "We build with the world in mind. Inclusive by design, ethical by choice, and accountable to the communities we serve.",
  },
  {
    name: "Passion",
    body:
      "This isn't just a company. It's a calling. Everything we create carries the energy of people who genuinely care about what they're building.",
  },
];

export default function VisionMissionValues({ darkMode }: Props) {
  const muted = darkMode ? "rgba(248,250,252,0.65)" : "rgba(2,6,23,0.65)";
  const border = darkMode
    ? "1px solid rgba(255,255,255,0.1)"
    : "1px solid rgba(0,0,0,0.08)";
  const cardBg = darkMode
    ? "linear-gradient(145deg, rgba(79,70,229,0.12) 0%, rgba(15,23,42,0.6) 45%, rgba(15,23,42,0.85) 100%)"
    : "linear-gradient(145deg, rgba(79,70,229,0.06) 0%, rgba(255,255,255,0.95) 50%, rgba(248,250,252,0.98) 100%)";

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

      <div
        className="mt-16 lg:mt-20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10"
        style={{
          background: cardBg,
          border,
          boxShadow: darkMode
            ? "0 24px 80px rgba(0,0,0,0.35)"
            : "0 20px 60px rgba(79,70,229,0.08)",
        }}
      >
        <div className="mb-8 pb-8" style={{ borderBottom: border }}>
          <h3
            className="text-2xl sm:text-3xl lg:text-4xl"
            style={{ fontFamily: "'Sora', sans-serif", lineHeight: 1.2 }}
          >
            <span style={{ color: darkMode ? "#E2E8F0" : "#334155" }}>
              Values:{" "}
            </span>
            <span
              style={{
                background: "linear-gradient(135deg, #4F46E5, #7C3AED)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              C.R.I.S.P
            </span>
          </h3>
          <p
            className="text-xs sm:text-sm mt-3 max-w-2xl"
            style={{ color: muted, lineHeight: 1.6 }}
          >
            Courage · Resilience · Integrity · Social Responsibility · Passion
          </p>
        </div>

        <ul className="space-y-8 list-none m-0 p-0" role="list">
          {crispValues.map((item) => (
            <li key={item.name}>
              <h4
                className="text-base sm:text-lg font-semibold mb-2"
                style={{
                  fontFamily: "'Sora', sans-serif",
                  color: darkMode ? "rgba(248,250,252,0.95)" : "#0F172A",
                }}
              >
                {item.name}
              </h4>
              <p
                className="text-sm sm:text-[15px]"
                style={{ color: muted, lineHeight: 1.75 }}
              >
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  );
}
