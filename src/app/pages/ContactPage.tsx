import { useState } from "react";
import { useOutletContext } from "react-router";
import { motion } from "motion/react";
import { Send, CheckCircle, Mail, MapPin } from "lucide-react";
import GlassCard from "../components/GlassCard";
import SectionWrapper from "../components/SectionWrapper";

export default function ContactPage() {
  const { darkMode } = useOutletContext<{ darkMode: boolean }>();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-24">
      <SectionWrapper>
        <div className="text-center mb-16">
          <p className="text-sm mb-4 tracking-widest uppercase" style={{ color: "#7C3AED" }}>
            Contact
          </p>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl mb-6"
            style={{ fontFamily: "'Sora', sans-serif", lineHeight: 1.1 }}
          >
            Let's{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #4F46E5, #7C3AED)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Connect
            </span>
          </h1>
          <p
            className="max-w-2xl mx-auto"
            style={{ color: darkMode ? "rgba(248,250,252,0.6)" : "rgba(2,6,23,0.5)" }}
          >
            Have a question, partnership idea, or want to learn more? We'd love to
            hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact form */}
          <GlassCard darkMode={darkMode} hover={false}>
            {submitted ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-12"
              >
                <CheckCircle size={56} style={{ color: "#50C878" }} className="mx-auto mb-6" />
                <h3 className="text-2xl mb-2" style={{ fontFamily: "'Sora', sans-serif" }}>
                  Message Sent!
                </h3>
                <p
                  className="text-sm mb-6"
                  style={{ color: darkMode ? "rgba(248,250,252,0.6)" : "rgba(2,6,23,0.5)" }}
                >
                  We'll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-sm underline"
                  style={{ color: "#7C3AED" }}
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-xs mb-2 block" style={{ color: darkMode ? "rgba(248,250,252,0.6)" : "rgba(2,6,23,0.5)" }}>
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl bg-transparent text-sm outline-none transition-all focus:ring-2 focus:ring-[#4F46E5]/30"
                    style={{
                      background: darkMode ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.03)",
                      border: darkMode ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(0,0,0,0.08)",
                      color: darkMode ? "#F8FAFC" : "#020617",
                    }}
                  />
                </div>
                <div>
                  <label className="text-xs mb-2 block" style={{ color: darkMode ? "rgba(248,250,252,0.6)" : "rgba(2,6,23,0.5)" }}>
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-transparent text-sm outline-none transition-all focus:ring-2 focus:ring-[#4F46E5]/30"
                    style={{
                      background: darkMode ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.03)",
                      border: darkMode ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(0,0,0,0.08)",
                      color: darkMode ? "#F8FAFC" : "#020617",
                    }}
                  />
                </div>
                <div>
                  <label className="text-xs mb-2 block" style={{ color: darkMode ? "rgba(248,250,252,0.6)" : "rgba(2,6,23,0.5)" }}>
                    Message
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Tell us what's on your mind..."
                    className="w-full px-4 py-3 rounded-xl bg-transparent text-sm outline-none resize-none transition-all focus:ring-2 focus:ring-[#4F46E5]/30"
                    style={{
                      background: darkMode ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.03)",
                      border: darkMode ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(0,0,0,0.08)",
                      color: darkMode ? "#F8FAFC" : "#020617",
                    }}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-white text-sm transition-all hover:scale-[1.02]"
                  style={{
                    background: "linear-gradient(135deg, #4F46E5, #7C3AED)",
                    boxShadow: "0 8px 30px rgba(79,70,229,0.4)",
                  }}
                >
                  <Send size={16} /> Send Message
                </button>
              </form>
            )}
          </GlassCard>

          {/* Contact info */}
          <div className="space-y-6">
            <GlassCard darkMode={darkMode} hover={false}>
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #4F46E5, #7C3AED)" }}
                >
                  <Mail size={18} className="text-white" />
                </div>
                <div>
                  <h4 className="text-sm mb-1" style={{ fontFamily: "'Sora', sans-serif" }}>
                    Email Us
                  </h4>
                  <p className="text-sm" style={{ color: "#7C3AED" }}>
                    hello@joms.co
                  </p>
                </div>
              </div>
            </GlassCard>

            <GlassCard darkMode={darkMode} hover={false}>
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #4F46E5, #7C3AED)" }}
                >
                  <MapPin size={18} className="text-white" />
                </div>
                <div>
                  <h4 className="text-sm mb-1" style={{ fontFamily: "'Sora', sans-serif" }}>
                    Location
                  </h4>
                  <p
                    className="text-sm"
                    style={{ color: darkMode ? "rgba(248,250,252,0.6)" : "rgba(2,6,23,0.5)" }}
                  >
                    Remote-first, Global Team
                  </p>
                </div>
              </div>
            </GlassCard>

            <GlassCard darkMode={darkMode} hover={false}>
              <p
                className="text-sm italic"
                style={{
                  color: darkMode ? "rgba(248,250,252,0.5)" : "rgba(2,6,23,0.5)",
                  lineHeight: 1.7,
                }}
              >
                "Every great collaboration starts with a single conversation.
                We believe the next big thing could begin with your message."
              </p>
              <p className="text-xs mt-3" style={{ color: "#7C3AED" }}>
                — The JOMS Team
              </p>
            </GlassCard>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
