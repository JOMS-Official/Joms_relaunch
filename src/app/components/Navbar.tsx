import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Vision", to: "/#vision" },
  { label: "Products", to: "/#products" },
  { label: "Team", to: "/#team" },
  { label: "Careers", to: "/careers" },
  { label: "Blog", to: "/blog" },
  { label: "Investors", to: "/investors" },
  { label: "Contact", to: "/contact" },
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
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl rounded-2xl px-6 py-3"
      style={{
        background: darkMode ? "rgba(15,23,42,0.7)" : "rgba(255,255,255,0.7)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: darkMode
          ? "1px solid rgba(255,255,255,0.1)"
          : "1px solid rgba(0,0,0,0.08)",
        boxShadow: darkMode
          ? "0 8px 32px rgba(0,0,0,0.3)"
          : "0 8px 32px rgba(0,0,0,0.08)",
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
          <Link
            to="/contact"
            className="hidden sm:block px-5 py-2 rounded-xl text-white text-sm transition-all hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #4F46E5, #7C3AED)",
              boxShadow: "0 4px 15px rgba(79,70,229,0.4)",
            }}
          >
            Get Started
          </Link>
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
