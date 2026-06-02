import type { CSSProperties, FormEvent } from "react";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import {
  TrendingUp,
  Shield,
  Globe,
  Mail,
  Sparkles,
  MapPin,
  X,
  FileText,
  User,
  Phone,
  Building2,
  Link2} from "lucide-react";
import GlassCard from "../components/GlassCard";
import SectionWrapper from "../components/SectionWrapper";
import applicationSuccessIcon from "../../assets/application-success-icon.png";

const goldDividerStyle: CSSProperties = {
  height: 1,
  background:
    "linear-gradient(90deg, transparent 0%, rgba(212, 175, 55, 0.85) 50%, transparent 100%)"};

const highlights = [
  {
    icon: TrendingUp,
    title: "High-Growth Market",
    description: "We’re operating at the intersection of networking, events and community-driven technology; industries rapidly evolving with the next generation of founders, creators, and professionals."},
  {
    icon: Shield,
    title: "Lean Startup",
    description: "Built with discipline from day one, we focus on smart execution, sustainable growth, and creating real value before chasing scale."},
  {
    icon: Globe,
    title: "Global Vision",
    description: "While our journey starts from India, our ambition is global. We’re designing experiences and ecosystems that can connect ambitious people across borders, industries and communities."},
];

export default function InvestorsPage() {
  const { darkMode } = useOutletContext<{ darkMode: boolean }>();

  const [showPitchModal, setShowPitchModal] = useState(false);
  const [pitchSubmitted, setPitchSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [website, setWebsite] = useState("");

  useEffect(() => {
    if (!showPitchModal) return;
    setPitchSubmitted(false);
    setName("");
    setPhone("");
    setEmail("");
    setCompany("");
    setLocation("");
    setWebsite("");
  }, [showPitchModal]);

  const emailLooksValid = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

  const canSubmitPitch =
    name.trim() !== "" &&
    phone.trim() !== "" &&
    email.trim() !== "" &&
    emailLooksValid(email) &&
    company.trim() !== "" &&
    location.trim() !== "";

  const handlePitchSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!canSubmitPitch) return;
    setPitchSubmitted(true);
    window.setTimeout(() => {
      setPitchSubmitted(false);
      setShowPitchModal(false);
    }, 3000);
  };

  const glassInput =
    "w-full px-3.5 py-2.5 rounded-lg text-[13px] leading-snug outline-none transition-[box-shadow,border-color] backdrop-blur-xl " +
    (darkMode
      ? "bg-white/[0.08] border border-white/[0.14] text-[#F8FAFC] placeholder:text-slate-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_2px_12px_rgba(0,0,0,0.12)] focus:ring-1 focus:ring-amber-500/35 focus:border-amber-400/40"
      : "bg-white/65 border border-black/[0.1] text-[#020617] placeholder:text-slate-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_2px_8px_rgba(0,0,0,0.05)] focus:ring-1 focus:ring-amber-500/30 focus:border-amber-400/45");

  const labelClass =
    "text-[11px] font-medium mb-2 flex items-center gap-1.5 " +
    (darkMode ? "text-slate-500" : "text-slate-600");

  return (
    <div className="pt-14 sm:pt-16 lg:pt-20">
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
              color: "#D4AF37"}}
          >
            <Sparkles size={14} /> Invest in the Future
          </motion.div>
          <h1
            className="text-section-title mb-6"
            style={{lineHeight: 1.1 }}
          >
            Partner With{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #D4AF37, #B8860B)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"}}
            >
              the Future
            </span>
          </h1>
          <p
            className="max-w-2xl mx-auto text-base mb-10"
            style={{
              color: darkMode ? "rgba(248,250,252,0.6)" : "rgba(2,6,23,0.5)",
              lineHeight: 1.8,
              textAlign: "justify",
              textAlignLast: "center"}}
          >
            We're building more than a product, we're building the infrastructure
            for meaningful connections, ambitious communities and opportunity at
            scale. If you believe in long-term vision, thoughtful execution and
            category-defining innovation, we'd love to connect.
          </p>
          <button
            type="button"
            onClick={() => setShowPitchModal(true)}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl text-sm font-semibold transition-all hover:scale-[1.02]"
            style={{
              background: "linear-gradient(135deg, #D4AF37, #B8860B)",
              color: "#0B0E14"}}
          >
            Request Pitch Deck
          </button>
        </div>

        {/* Highlights — same structure as VisionMissionValues; gold palette */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-20">
          {highlights.map((h) => (
            <div key={h.title} className="relative pl-6 text-left">
              <div
                className="absolute left-0 top-0"
                style={{
                  width: 3,
                  height: 48,
                  background: "linear-gradient(180deg, #D4AF37 0%, rgba(0,0,0,0) 100%)",
                  borderRadius: 2}}
              />
              <h.icon
                size={32}
                className="mb-6"
                strokeWidth={1.5}
                style={{ color: "#D4AF37" }}
              />
              <h3
                className="text-xl mb-3"
                style={{color: darkMode ? "#F8FAFC" : "#020617"}}
              >
                {h.title}
              </h3>
              <p
                className="text-sm"
                style={{
                  color: darkMode ? "rgba(248,250,252,0.6)" : "rgba(2,6,23,0.6)",
                  lineHeight: 1.7}}
              >
                {h.description}
              </p>
            </div>
          ))}
        </div>

        {/* Why JOMS — no card; gold gradient dividers */}
        <div className="max-w-3xl mx-auto w-full mb-10">
          <div className="w-full" style={goldDividerStyle} aria-hidden />
          <h3
            className="text-section-title-sm my-10 text-center"
            style={{}}
          >
            <span style={{ color: darkMode ? "#F8FAFC" : "#020617" }}>Why </span>
            <span style={{ color: "#D4AF37" }}>JOMS?</span>
          </h3>
          <div className="space-y-4 text-left">
            <p
              className="text-sm"
              style={{
                color: darkMode ? "#94A3B8" : "rgba(2,6,23,0.65)",
                lineHeight: 1.8}}
            >
              The global digital economy is accelerating. Marketplaces, mobile
              platforms, and digital ecosystems are reshaping how billions of
              people transact, connect, and create value. Yet most of the
              platforms people rely on today were designed a decade ago.
            </p>
            <p
              className="text-sm"
              style={{
                color: darkMode ? "#94A3B8" : "rgba(2,6,23,0.65)",
                lineHeight: 1.8}}
            >
              JOMS is building the next generation. We're engineering platforms
              from the ground up with modern architectures, intelligent systems,
              and user-first design principles. Our approach is bootstrapped,
              lean, and focused on product-market fit before scale.
            </p>
            <p
              className="text-sm"
              style={{
                color: darkMode ? "#94A3B8" : "rgba(2,6,23,0.65)",
                lineHeight: 1.8}}
            >
              We're looking for investors who think long-term, value
              craftsmanship, and want to partner with a team that's committed
              to building products that matter.
            </p>
            <p
              className="text-sm italic pt-2"
              style={{
                color: darkMode ? "#94A3B8" : "rgba(2,6,23,0.65)",
                lineHeight: 1.8}}
            >
              &ldquo;Every great collaboration starts with a single conversation. We believe the next
              big thing could begin with your message.&rdquo;
            </p>
            <p
              className="text-sm pt-1"
              style={{ color: darkMode ? "#FFFFFF" : "#020617", fontStyle: "normal" }}
            >
              — JOMS Team
            </p>
          </div>
          <div className="w-full mt-10" style={goldDividerStyle} aria-hidden />
        </div>

        {/* Contact cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto w-full mb-20">
          <GlassCard darkMode={darkMode} hover={false}>
            <div className="flex items-start gap-4">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                style={{
                  background: "rgba(124, 58, 237, 0.2)",
                  border: "1px solid rgba(167, 139, 250, 0.35)",
                  boxShadow: "0 0 20px rgba(124, 58, 237, 0.15)"}}
              >
                <Mail size={20} style={{ color: "#A78BFA" }} strokeWidth={1.75} />
              </div>
              <div>
                <p
                  className="text-sm font-semibold mb-1"
                  style={{ color: darkMode ? "#F8FAFC" : "#020617" }}
                >
                  Email Us
                </p>
                <a
                  href="mailto:hello@joms.in"
                  className="text-sm transition-opacity hover:opacity-90 hover:underline"
                  style={{
                    color: darkMode ? "rgba(248,250,252,0.6)" : "rgba(2,6,23,0.5)"}}
                >
                  hello@joms.in
                </a>
              </div>
            </div>
          </GlassCard>
          <GlassCard darkMode={darkMode} hover={false}>
            <div className="flex items-start gap-4">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                style={{
                  background: "rgba(124, 58, 237, 0.2)",
                  border: "1px solid rgba(167, 139, 250, 0.35)",
                  boxShadow: "0 0 20px rgba(124, 58, 237, 0.15)"}}
              >
                <MapPin size={20} style={{ color: "#A78BFA" }} strokeWidth={1.75} />
              </div>
              <div>
                <p
                  className="text-sm font-semibold mb-1"
                  style={{ color: darkMode ? "#F8FAFC" : "#020617" }}
                >
                  Location
                </p>
                <p className="text-sm" style={{ color: "#94A3B8" }}>
                  Remote-first, Global Team
                </p>
              </div>
            </div>
          </GlassCard>
        </div>
      </SectionWrapper>

      <AnimatePresence>
        {showPitchModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "rgba(2,6,23,0.65)", backdropFilter: "blur(12px)" }}
          >
            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className={
                "relative flex flex-col overflow-hidden shadow-xl " +
                (pitchSubmitted
                  ? "w-[min(512px,calc(100vw-1.5rem))] h-[294px] rounded-[20px]"
                  : "rounded-xl w-[min(500px,calc(100vw-1.5rem))] max-h-[min(94vh,820px)] min-h-[min(560px,85vh)]")
              }
              style={
                pitchSubmitted
                  ? {
                      background: "#0B1120",
                      border: "1px solid rgba(255,255,255,0.08)",
                      boxShadow: "0 24px 60px rgba(0,0,0,0.55)"}
                  : {
                      background: darkMode ? "rgba(15,23,42,0.98)" : "rgba(255,255,255,0.98)",
                      border: darkMode ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(0,0,0,0.07)",
                      boxShadow: darkMode ? "0 20px 50px rgba(0,0,0,0.45)" : "0 20px 50px rgba(0,0,0,0.1)"}
              }
            >
              <button
                type="button"
                onClick={() => {
                  setShowPitchModal(false);
                  setPitchSubmitted(false);
                }}
                className={
                  "absolute z-10 p-1.5 rounded-lg hover:opacity-80 transition-opacity " +
                  (pitchSubmitted ? "top-5 right-5" : "top-3 right-3")
                }
                style={{ color: pitchSubmitted ? "#F8FAFC" : darkMode ? "#F8FAFC" : "#020617" }}
                aria-label="Close"
              >
                <X size={18} strokeWidth={1.75} />
              </button>

              {pitchSubmitted ? (
                <div className="flex h-full flex-col items-center justify-center px-8 text-center">
                  <div
                    className="mb-4 flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.06] backdrop-blur-md"
                    aria-hidden
                  >
                    <img
                      src={applicationSuccessIcon}
                      alt=""
                      className="h-[52px] w-[52px] object-contain"
                      width={52}
                      height={52}
                    />
                  </div>
                  <h3
                    className="mb-2 text-[26px] font-bold leading-tight text-white"
                    style={{}}
                  >
                    Request Sent!
                  </h3>
                  <p className="text-base font-normal text-[#94A3B8]">
                    We&apos;ll share our pitch deck with you soon.
                  </p>
                </div>
              ) : (
                <div className="flex min-h-0 flex-1 flex-col">
                  <div
                    className="flex shrink-0 items-start gap-4 border-b px-6 pb-5 pt-6 pr-12"
                    style={{ borderColor: darkMode ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)" }}
                  >
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                      style={{
                        background: "rgba(212,175,55,0.12)",
                        border: "1px solid rgba(212,175,55,0.45)",
                        boxShadow: "0 0 16px rgba(212,175,55,0.12)"}}
                    >
                      <FileText size={20} style={{ color: "#D4AF37" }} strokeWidth={1.75} />
                    </div>
                    <div className="min-w-0 pt-0.5 text-left">
                      <h3
                        className="text-[16px] font-semibold leading-snug"
                        style={{color: darkMode ? "#F8FAFC" : "#020617" }}
                      >
                        Request Pitch Deck
                      </h3>
                      <p
                        className="mt-1 text-xs leading-snug"
                        style={{ color: darkMode ? "rgba(148,163,184,0.95)" : "rgba(2,6,23,0.55)" }}
                      >
                        Fill in your details and we&apos;ll share our pitch deck with you.
                      </p>
                    </div>
                  </div>

                  <form
                    onSubmit={handlePitchSubmit}
                    className="flex min-h-0 flex-1 flex-col px-6 pb-6 pt-5"
                  >
                    <div className="scrollbar-hide max-h-[min(58vh,500px)] min-h-0 flex-1 space-y-4 overflow-y-auto pr-1">
                      <div>
                        <label className={labelClass} htmlFor="pitch-name">
                          <User size={14} strokeWidth={1.75} />
                          Name <span className="text-amber-500/90">*</span>
                        </label>
                        <input
                          id="pitch-name"
                          name="name"
                          type="text"
                          autoComplete="name"
                          placeholder="Enter your full name"
                          className={glassInput}
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div>
                        <label className={labelClass} htmlFor="pitch-phone">
                          <Phone size={14} strokeWidth={1.75} />
                          Phone <span className="text-amber-500/90">*</span>
                        </label>
                        <input
                          id="pitch-phone"
                          name="phone"
                          type="tel"
                          autoComplete="tel"
                          placeholder="+91 (IN) Enter your phone"
                          className={glassInput}
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>
                      <div>
                        <label className={labelClass} htmlFor="pitch-email">
                          <Mail size={14} strokeWidth={1.75} />
                          E-mail <span className="text-amber-500/90">*</span>
                        </label>
                        <input
                          id="pitch-email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          placeholder="Enter Email"
                          className={glassInput}
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-x-4">
                        <div>
                          <label className={labelClass} htmlFor="pitch-company">
                            <Building2 size={14} strokeWidth={1.75} />
                            Company <span className="text-amber-500/90">*</span>
                          </label>
                          <input
                            id="pitch-company"
                            name="company"
                            type="text"
                            autoComplete="organization"
                            placeholder="Company Name"
                            className={glassInput}
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                          />
                        </div>
                        <div>
                          <label className={labelClass} htmlFor="pitch-location">
                            <MapPin size={14} strokeWidth={1.75} />
                            Location <span className="text-amber-500/90">*</span>
                          </label>
                          <input
                            id="pitch-location"
                            name="location"
                            type="text"
                            autoComplete="address-level1"
                            placeholder="Location"
                            className={glassInput}
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                          />
                        </div>
                      </div>
                      <div>
                        <label className={labelClass} htmlFor="pitch-website">
                          <Link2 size={14} strokeWidth={1.75} />
                          Company Website (optional)
                        </label>
                        <input
                          id="pitch-website"
                          name="website"
                          type="url"
                          autoComplete="url"
                          placeholder="https://yourcompany.com"
                          className={glassInput}
                          value={website}
                          onChange={(e) => setWebsite(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="mt-6 shrink-0">
                      <button
                        type="submit"
                        disabled={!canSubmitPitch}
                        className={
                          "w-full rounded-xl py-3.5 text-[13px] font-semibold transition-all " +
                          (canSubmitPitch ? "text-[#0B0E14] hover:scale-[1.01]" : "cursor-not-allowed opacity-60")
                        }
                        style={{
                          background: canSubmitPitch
                            ? "linear-gradient(135deg, #D4AF37, #B8860B)"
                            : darkMode
                              ? "rgba(255,255,255,0.12)"
                              : "rgba(0,0,0,0.1)",
                          boxShadow: canSubmitPitch ? "0 8px 24px rgba(212,175,55,0.35)" : "none"}}
                      >
                        Request Pitch Deck
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}