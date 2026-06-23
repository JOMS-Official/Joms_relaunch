import React, { useLayoutEffect, useState } from "react";
import { useOutletContext } from "react-router";
import { motion } from "motion/react";
import { Send, CheckCircle, Mail, MapPin } from "lucide-react";
import GlassCard from "../components/GlassCard";
import SectionWrapper from "../components/SectionWrapper";
import { emailLooksValid, nameLooksValid } from "../utils/formValidation";

export default function ContactPage() {
  const { darkMode } = useOutletContext<{ darkMode: boolean }>();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [touched, setTouched] = useState({ name: false, email: false });

  const nameError = touched.name && !nameLooksValid(name) ? "Enter a valid name (letters only, no numbers)." : "";
  const emailError =
    touched.email && email.trim() && !emailLooksValid(email)
      ? "Enter a valid email address."
      : touched.email && !email.trim()
        ? "Email is required."
        : "";

  const canSubmit =
    nameLooksValid(name) && emailLooksValid(email) && message.trim().length > 0;

  const CONTACT_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwwNjaufaET7AXOIXr9PnTN-I46K7s7btZdI37m68QdoMzShWwDyQy4o5i6BIIs47UZyA/exec";

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  setTouched({ name: true, email: true });

  if (!canSubmit) return;

  try {
    await fetch(CONTACT_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    setSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");
  } catch (err) {
    console.error("Contact form submission failed:", err);
    alert("Failed to send message. Please try again.");
  }
};

  return (
    <div className="pt-14 sm:pt-16 lg:pt-20">
      <SectionWrapper className="!pt-8 !pb-6 md:!pt-10 md:!pb-8">
        <div id="connect" className="text-center mb-6 sm:mb-8 scroll-mt-28">
          <p className="text-sm mb-2 tracking-widest uppercase text-[#7C3AED] dark:text-[#EAB308]">
            Contact
          </p>
          <h1
            className="text-section-title mb-3"
            style={{lineHeight: 1.1 }}
          >
            Let's{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #4F46E5, #7C3AED)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"}}
            >
              Connect
            </span>
          </h1>
          <p
            className="max-w-2xl mx-auto text-sm sm:text-base"
            style={{ color: darkMode ? "rgba(248,250,252,0.6)" : "rgba(2,6,23,0.5)" }}
          >
            Have a question, partnership idea, or want to learn more? We'd love to
            hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto items-start">
          {/* Contact form */}
          <GlassCard darkMode={darkMode} hover={false} className="!p-5">
            {submitted ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-12"
              >
                <CheckCircle size={56} style={{ color: "#50C878" }} className="mx-auto mb-6" />
                <h3 className="text-2xl mb-2" style={{}}>
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
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div>
                  <label className="text-xs mb-2 block" style={{ color: darkMode ? "rgba(248,250,252,0.6)" : "rgba(2,6,23,0.5)" }}>
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onBlur={() => setTouched((t) => ({ ...t, name: true }))}
                    className="w-full px-4 py-3 rounded-xl bg-transparent text-base outline-none transition-all focus:ring-2 focus:ring-[#4F46E5]/30"
                    style={{
                      background: darkMode ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.03)",
                      border: darkMode ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(0,0,0,0.08)",
                      color: darkMode ? "#F8FAFC" : "#020617",
                      fontSize: "16px"}}
                  />
                  {nameError ? (
                    <p className="mt-1.5 text-xs text-red-400">{nameError}</p>
                  ) : null}
                </div>
                <div>
                  <label className="text-xs mb-2 block" style={{ color: darkMode ? "rgba(248,250,252,0.6)" : "rgba(2,6,23,0.5)" }}>
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                    className="w-full px-4 py-3 rounded-xl bg-transparent text-base outline-none transition-all focus:ring-2 focus:ring-[#4F46E5]/30"
                    style={{
                      background: darkMode ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.03)",
                      border: darkMode ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(0,0,0,0.08)",
                      color: darkMode ? "#F8FAFC" : "#020617",
                      fontSize: "16px"}}
                  />
                  {emailError ? (
                    <p className="mt-1.5 text-xs text-red-400">{emailError}</p>
                  ) : null}
                </div>
                <div>
                  <label className="text-xs mb-2 block" style={{ color: darkMode ? "rgba(248,250,252,0.6)" : "rgba(2,6,23,0.5)" }}>
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Enter your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-transparent text-base outline-none resize-none transition-all focus:ring-2 focus:ring-[#4F46E5]/30"
                    style={{
                      background: darkMode ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.03)",
                      border: darkMode ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(0,0,0,0.08)",
                      color: darkMode ? "#F8FAFC" : "#020617",
                      fontSize: "16px"}}
                  />
                </div>
                <button
                  type="submit"
                  disabled={!canSubmit}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white text-sm transition-all hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                  style={{
                    background: "linear-gradient(135deg, #4F46E5, #7C3AED)",
                    boxShadow: "0 8px 30px rgba(79,70,229,0.4)"}}
                >
                  <Send size={16} /> Send Message
                </button>
              </form>
            )}
          </GlassCard>

          {/* Contact info */}
          <div className="space-y-4">
            <GlassCard darkMode={darkMode} hover={false} className="!p-5">
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #4F46E5, #7C3AED)" }}
                >
                  <Mail size={18} className="text-white" />
                </div>
                <div>
                  <h4 className="text-sm mb-1" style={{}}>
                    Email Us
                  </h4>
                  <a
                    href="mailto:hello@joms.in"
                    className="text-sm hover:underline hover:opacity-90"
                    style={{
                      color: darkMode ? "rgba(248,250,252,0.6)" : "rgba(2,6,23,0.5)"}}
                  >
                    hello@joms.in
                  </a>
                </div>
              </div>
            </GlassCard>

            <GlassCard darkMode={darkMode} hover={false} className="!p-5">
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #4F46E5, #7C3AED)" }}
                >
                  <MapPin size={18} className="text-white" />
                </div>
                <div>
                  <h4 className="text-sm mb-1" style={{}}>
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

            <GlassCard darkMode={darkMode} hover={false} className="!p-5">
              <p
                className="text-sm italic"
                style={{
                  color: darkMode ? "rgba(248,250,252,0.5)" : "rgba(2,6,23,0.5)",
                  lineHeight: 1.6}}
              >
                "Every great collaboration starts with a single conversation.
                We believe the next big thing could begin with your message."
              </p>
              <p className="text-xs mt-2" style={{ color: darkMode ? "#FFFFFF" : "#020617" }}>
                — JOMS Team
              </p>
            </GlassCard>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
