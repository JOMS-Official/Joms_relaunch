import { useOutletContext } from "react-router";
import { motion } from "motion/react";
import { TrendingUp, Shield, Globe, Mail, FileText, Sparkles } from "lucide-react";
import GlassCard from "../components/GlassCard";
import SectionWrapper from "../components/SectionWrapper";

interface Props {}

const highlights = [
  {
    icon: TrendingUp,
    title: "High-Growth Market",
    description: "Targeting a $500B+ global digital marketplace and mobile platform ecosystem.",
  },
  {
    icon: Shield,
    title: "Bootstrapped & Lean",
    description: "Capital-efficient from day one. Every dollar creates real product value.",
  },
  {
    icon: Globe,
    title: "Global Vision",
    description: "Building platforms designed to scale across markets, cultures, and geographies.",
  },
];

export default function InvestorsPage() {
  const { darkMode } = useOutletContext<{ darkMode: boolean }>();

  return (
    <div className="pt-24">
      <SectionWrapper>
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-sm"
            style={{
              background: "rgba(212,175,55,0.1)",
              border: "1px solid rgba(212,175,55,0.3)",
              color: "#D4AF37",
            }}
          >
            <Sparkles size={14} /> Investor Relations
          </motion.div>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl mb-6"
            style={{ fontFamily: "'Sora', sans-serif", lineHeight: 1.1 }}
          >
            Partner With{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #D4AF37, #B8860B)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              the Future
            </span>
          </h1>
          <p
            className="max-w-2xl mx-auto text-lg"
            style={{ color: darkMode ? "rgba(248,250,252,0.6)" : "rgba(2,6,23,0.5)" }}
          >
            JOMS is building next-generation digital platforms. We're seeking
            strategic partners who believe in long-term value creation through
            technology that serves people.
          </p>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {highlights.map((h) => (
            <GlassCard key={h.title} darkMode={darkMode}>
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{
                  background: "linear-gradient(135deg, #D4AF37, #B8860B)",
                }}
              >
                <h.icon size={22} className="text-white" />
              </div>
              <h3 className="text-lg mb-2" style={{ fontFamily: "'Sora', sans-serif" }}>
                {h.title}
              </h3>
              <p
                className="text-sm"
                style={{
                  color: darkMode ? "rgba(248,250,252,0.6)" : "rgba(2,6,23,0.5)",
                  lineHeight: 1.7,
                }}
              >
                {h.description}
              </p>
            </GlassCard>
          ))}
        </div>

        {/* Story section */}
        <GlassCard darkMode={darkMode} hover={false} className="max-w-3xl mx-auto mb-20">
          <h3
            className="text-2xl mb-6 text-center"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Why{" "}
            <span style={{ color: "#D4AF37" }}>JOMS?</span>
          </h3>
          <div className="space-y-4">
            <p
              className="text-sm"
              style={{
                color: darkMode ? "rgba(248,250,252,0.65)" : "rgba(2,6,23,0.6)",
                lineHeight: 1.8,
              }}
            >
              The global digital economy is accelerating. Marketplaces, mobile
              platforms, and digital ecosystems are reshaping how billions of
              people transact, connect, and create value. Yet most of the
              platforms people rely on today were designed a decade ago.
            </p>
            <p
              className="text-sm"
              style={{
                color: darkMode ? "rgba(248,250,252,0.65)" : "rgba(2,6,23,0.6)",
                lineHeight: 1.8,
              }}
            >
              JOMS is building the next generation. We're engineering platforms
              from the ground up with modern architectures, intelligent systems,
              and user-first design principles. Our approach is bootstrapped,
              lean, and focused on product-market fit before scale.
            </p>
            <p
              className="text-sm"
              style={{
                color: darkMode ? "rgba(248,250,252,0.65)" : "rgba(2,6,23,0.6)",
                lineHeight: 1.8,
              }}
            >
              We're looking for investors who think long-term, value
              craftsmanship, and want to partner with a team that's committed
              to building products that matter.
            </p>
          </div>
        </GlassCard>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="mailto:investors@joms.co"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-sm transition-all hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #D4AF37, #B8860B)",
              color: "white",
              boxShadow: "0 8px 30px rgba(212,175,55,0.3)",
            }}
          >
            <FileText size={18} /> Request Pitch Deck
          </a>
          <a
            href="mailto:hello@joms.co"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-sm transition-all hover:scale-105"
            style={{
              background: darkMode ? "rgba(255,255,252,0.06)" : "rgba(0,0,0,0.03)",
              border: darkMode ? "1px solid rgba(255,255,252,0.12)" : "1px solid rgba(0,0,0,0.08)",
            }}
          >
            <Mail size={18} /> Send Email
          </a>
        </div>
      </SectionWrapper>
    </div>
  );
}