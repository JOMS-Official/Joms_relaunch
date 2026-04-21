import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Blog", to: "/blog" },
  { label: "Careers", to: "/careers" },
];

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (v: boolean) => void;
}

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (to: string) => {
    setMobileOpen(false);
    if (to.startsWith("/#")) {
      const id = to.replace("/#", "");
      if (location.pathname === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className="fixed top-0 left-0 z-50 w-full px-6 py-3"
      style={{
        background: darkMode ? "rgba(15,23,42,0.85)" : "rgba(255,255,255,0.85)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: darkMode
          ? "1px solid rgba(255,255,255,0.08)"
          : "1px solid rgba(0,0,0,0.06)",
      }}
    >
      <div className="flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2"
          style={{ fontFamily: "'Sora', sans-serif" }}
        >
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white"
            style={{
              background: "linear-gradient(135deg, #4F46E5, #7C3AED)",
            }}
          >
            <span className="text-sm" style={{ fontFamily: "'Sora', sans-serif" }}>J</span>
          </div>
          <span
            className="text-xl"
            style={{
              fontFamily: "'Sora', sans-serif",
              background: "linear-gradient(135deg, #4F46E5, #7C3AED)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            JOMS
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to.startsWith("/#") && location.pathname === "/" ? link.to : link.to.startsWith("/#") ? "/" : link.to}
              onClick={() => handleNavClick(link.to)}
              className="text-sm transition-colors hover:opacity-100"
              style={{
                opacity:
                  location.pathname === link.to ||
                  (link.to === "/" && location.pathname === "/")
                    ? 1
                    : 0.7,
                color: darkMode ? "#E2E8F0" : "#1E293B",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-xl transition-all hover:scale-110"
            style={{
              background: darkMode
                ? "rgba(255,255,255,0.1)"
                : "rgba(0,0,0,0.05)",
            }}
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className="lg:hidden p-2 rounded-xl"
            style={{
              background: darkMode
                ? "rgba(255,255,255,0.1)"
                : "rgba(0,0,0,0.05)",
            }}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-4 pb-4 flex flex-col gap-3 overflow-hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to.startsWith("/#") ? "/" : link.to}
                onClick={() => handleNavClick(link.to)}
                className="text-sm py-2 px-3 rounded-lg transition-all"
                style={{
                  background: darkMode
                    ? "rgba(255,255,255,0.05)"
                    : "rgba(0,0,0,0.03)",
                }}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
