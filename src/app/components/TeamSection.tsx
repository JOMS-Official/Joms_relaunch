import { Linkedin } from "lucide-react";
import GlassCard from "./GlassCard";
import SectionWrapper from "./SectionWrapper";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Props {
  darkMode: boolean;
}

const teamMembers = [
  {
    name: "Priya Sharma",
    role: "Lead Engineer",
    image:
      "https://images.unsplash.com/photo-1712174766230-cb7304feaafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHNvZnR3YXJlJTIwZW5naW5lZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzI3OTIwMTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "Alex Chen",
    role: "Product Designer",
    image:
      "https://images.unsplash.com/photo-1761522001672-5f1d45ce1b10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBkZXNpZ25lciUyMGNyZWF0aXZlJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcyNzkyMDE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "Maya Patel",
    role: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1659353220597-71b8c6a56259?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHByb2R1Y3QlMjBtYW5hZ2VyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcyNzkyMDE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "Daniel Park",
    role: "Backend Architect",
    image:
      "https://images.unsplash.com/photo-1610541533071-4a072a3aae45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBiYWNrZW5kJTIwZGV2ZWxvcGVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcyNzkyMDIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export default function TeamSection({ darkMode }: Props) {
  return (
    <SectionWrapper id="team">
      <div className="text-center mb-16">
        <p
          className="text-sm mb-4 tracking-widest uppercase"
          style={{ color: "#7C3AED" }}
        >
          Our Team
        </p>
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl"
          style={{ fontFamily: "'Sora', sans-serif", lineHeight: 1.15 }}
        >
          The Minds{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #4F46E5, #7C3AED)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Behind JOMS
          </span>
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member) => (
          <GlassCard
            key={member.name}
            darkMode={darkMode}
            className="group text-center"
          >
            <div
              className="w-24 h-24 rounded-2xl overflow-hidden mx-auto mb-4 transition-transform group-hover:scale-105"
              style={{
                border: "2px solid rgba(79,70,229,0.2)",
              }}
            >
              <ImageWithFallback
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3
              className="text-lg mb-1"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              {member.name}
            </h3>
            <p
              className="text-sm mb-4"
              style={{
                color: darkMode
                  ? "rgba(248,250,252,0.6)"
                  : "rgba(2,6,23,0.5)",
              }}
            >
              {member.role}
            </p>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-8 h-8 rounded-lg opacity-0 group-hover:opacity-100 transition-all"
              style={{
                background: darkMode
                  ? "rgba(79,70,229,0.2)"
                  : "rgba(79,70,229,0.1)",
                color: "#7C3AED",
              }}
            >
              <Linkedin size={14} />
            </a>
          </GlassCard>
        ))}
      </div>
    </SectionWrapper>
  );
}
