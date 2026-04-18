import { Globe, Smartphone, Layers } from "lucide-react";
import GlassCard from "./GlassCard";
import SectionWrapper from "./SectionWrapper";

interface Props {
  darkMode: boolean;
}

const products = [
  {
    icon: Globe,
    title: "Next-Gen Marketplace",
    description:
      "A reimagined marketplace infrastructure powered by intelligent matching, real-time data, and frictionless transactions.",
  },
  {
    icon: Smartphone,
    title: "Smart Mobile Platforms",
    description:
      "Mobile-first experiences built for speed, accessibility, and scale — designed to serve millions from day one.",
  },
  {
    icon: Layers,
    title: "Future Digital Ecosystem",
    description:
      "An interconnected suite of tools and services that form the backbone of tomorrow's digital economy.",
  },
];

export default function ProductsSection({ darkMode }: Props) {
  return (
    <SectionWrapper id="products">
      <div className="text-center mb-16">
        <p
          className="text-sm mb-4 tracking-widest uppercase"
          style={{ color: "#7C3AED" }}
        >
          Products
        </p>
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl mb-4"
          style={{ fontFamily: "'Sora', sans-serif", lineHeight: 1.15 }}
        >
          Something Powerful Is{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #4F46E5, #7C3AED)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Brewing
          </span>
        </h2>
        <p
          className="max-w-2xl mx-auto"
          style={{
            color: darkMode ? "rgba(248,250,252,0.6)" : "rgba(2,6,23,0.5)",
          }}
        >
          We're crafting three pillars of innovation. Each one is a step toward
          a future where technology truly serves people.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {products.map((product) => (
          <GlassCard key={product.title} darkMode={darkMode} className="relative group overflow-hidden">
            {/* Beta badge */}
            <div
              className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs"
              style={{
                background: "linear-gradient(135deg, #4F46E5, #7C3AED)",
                color: "white",
              }}
            >
              Beta
            </div>
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
              style={{
                background: darkMode
                  ? "rgba(79,70,229,0.15)"
                  : "rgba(79,70,229,0.08)",
                border: "1px solid rgba(79,70,229,0.2)",
              }}
            >
              <product.icon size={26} style={{ color: "#7C3AED" }} />
            </div>
            <h3
              className="text-xl mb-3"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              {product.title}
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
              {product.description}
            </p>
            {/* Blur overlay */}
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: darkMode
                  ? "linear-gradient(to top, rgba(2,6,23,0.4), transparent)"
                  : "linear-gradient(to top, rgba(248,250,252,0.3), transparent)",
              }}
            />
          </GlassCard>
        ))}
      </div>
    </SectionWrapper>
  );
}
