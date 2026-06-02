import { Linkedin, Quote } from "lucide-react";
import GlassCard from "./GlassCard";
import SectionWrapper from "./SectionWrapper";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Props {
  darkMode: boolean;
}

const FOUNDER_IMAGE =
  "https://images.unsplash.com/photo-1662302392561-b1deecd3579d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBpbmRpYW4lMjBtYWxlJTIwQ0VPJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcyNzkyMDE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

export default function FounderSection({ darkMode }: Props) {
  return (
    <SectionWrapper id="founder">
      <div className="text-center mb-16">
        <p
          className="text-sm mb-4 tracking-widest uppercase text-[#7C3AED] dark:text-[#EAB308]"
        >
          Leadership
        </p>
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl"
          style={{lineHeight: 1.15 }}
        >
          Meet the{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #4F46E5, #7C3AED)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"}}
          >
            Founder
          </span>
        </h2>
      </div>

      <GlassCard darkMode={darkMode} hover={false} className="max-w-3xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0">
            <div
              className="w-32 h-32 rounded-2xl overflow-hidden"
              style={{
                border: "2px solid rgba(79,70,229,0.3)",
                boxShadow: "0 0 30px rgba(79,70,229,0.2)"}}
            >
              <ImageWithFallback
                src={FOUNDER_IMAGE}
                alt="Swaroop Jayaram"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3
              className="text-2xl mb-1"
              style={{}}
            >
              Swaroop Jayaram
            </h3>
            <p
              className="text-sm mb-4"
              style={{ color: "#7C3AED" }}
            >
              Founder & CEO
            </p>
            <div className="relative">
              <Quote
                size={20}
                className="absolute -top-2 -left-2 opacity-30"
                style={{ color: "#7C3AED" }}
              />
              <p
                className="text-lg italic pl-6"
                style={{
                  color: darkMode
                    ? "rgba(248,250,252,0.7)"
                    : "rgba(2,6,23,0.6)",
                  lineHeight: 1.7}}
              >
                Building products that move humanity one step closer to the
                future.
              </p>
            </div>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-xl text-sm transition-all hover:scale-105"
              style={{
                background: darkMode
                  ? "rgba(79,70,229,0.15)"
                  : "rgba(79,70,229,0.08)",
                border: "1px solid rgba(79,70,229,0.2)",
                color: "#7C3AED"}}
            >
              <Linkedin size={16} /> Connect on LinkedIn
            </a>
          </div>
        </div>
      </GlassCard>
    </SectionWrapper>
  );
}
