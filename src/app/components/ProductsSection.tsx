import { Rocket } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

interface Props {
  darkMode: boolean;
}

export default function ProductsSection({ darkMode }: Props) {
  return (
    <SectionWrapper id="products">
      {/* Top separator line */}
      <div
        className="w-full h-px mb-16"
        style={{
          background: darkMode
            ? "linear-gradient(90deg, transparent 0%, rgba(79,70,229,0.5) 50%, transparent 100%)"
            : "linear-gradient(90deg, transparent 0%, rgba(79,70,229,0.3) 50%, transparent 100%)",
        }}
      />

      <div className="flex flex-col items-center text-center py-12">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8"
          style={{
            background: darkMode
              ? "rgba(255,255,255,0.06)"
              : "rgba(0,0,0,0.05)",
            border: darkMode
              ? "1px solid rgba(255,255,255,0.1)"
              : "1px solid rgba(0,0,0,0.08)",
          }}
        >
          <Rocket size={24} style={{ color: darkMode ? "#E2E8F0" : "#1E293B" }} />
        </div>

        <h2
          className="text-4xl sm:text-5xl lg:text-6xl mb-6"
          style={{
            fontFamily: "'Sora', sans-serif",
            lineHeight: 1.15,
          }}
        >
          Launching{"\n"}Soon
        </h2>

        <p
          className="max-w-lg mx-auto mb-10 text-sm sm:text-base"
          style={{
            color: darkMode ? "rgba(248,250,252,0.5)" : "rgba(2,6,23,0.5)",
            lineHeight: 1.8,
          }}
        >
          Something powerful is brewing. Our products are being meticulously
          crafted behind the scenes — stay tuned for what's next.
        </p>

        <div className="flex items-center gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full"
              style={{
                background:
                  i === 1
                    ? "#4F46E5"
                    : darkMode
                      ? "rgba(79,70,229,0.3)"
                      : "rgba(79,70,229,0.25)",
              }}
            />
          ))}
        </div>
      </div>

      {/* Bottom separator line */}
      <div
        className="w-full h-px mt-16"
        style={{
          background: darkMode
            ? "linear-gradient(90deg, transparent 0%, rgba(79,70,229,0.5) 50%, transparent 100%)"
            : "linear-gradient(90deg, transparent 0%, rgba(79,70,229,0.3) 50%, transparent 100%)",
        }}
      />
    </SectionWrapper>
  );
}
