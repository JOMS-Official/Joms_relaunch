import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import JomsLogoMark from "./JomsLogoMark";
import { useHomeSectionNav } from "../hooks/useHomeSectionNav";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Blogs", to: "/blog" },
  { label: "Careers", to: "/careers" },
];

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (v: boolean) => void;
}

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { goToSection } = useHomeSectionNav();

  const linkIsActive = (to: string) => {
    if (to === "/") return location.pathname === "/";
    if (to === "/blog") return location.pathname === "/blog" || location.pathname.startsWith("/blog/");
    if (to === "/careers")
      return location.pathname === "/careers" || location.pathname.startsWith("/careers/");
    return location.pathname === to;
  };

  const handleNavClick = (e: React.MouseEvent, to: string) => {
    setMobileOpen(false);
    if (goToSection(to)) {
      e.preventDefault();
      return;
    }

    // Same page as nav target: scroll to top (matches Blog → Blogs on /blog)
    if (to === "/" && location.pathname === "/") {
      e.preventDefault();
      if (location.hash) navigate({ pathname: "/" }, { replace: true });
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (to === "/blog" && location.pathname === "/blog") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (to === "/careers" && location.pathname === "/careers") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={
        darkMode
          ? "fixed top-0 left-0 z-50 w-full overflow-visible border-b border-transparent bg-[#0f172a] py-3 md:border-white/[0.08] md:bg-[rgba(15,23,42,0.92)] md:backdrop-blur-[12px]"
          : "fixed top-0 left-0 z-50 w-full overflow-visible border-b border-transparent bg-white py-3 md:border-black/[0.06] md:bg-[rgba(255,255,255,0.92)] md:backdrop-blur-[12px]"
      }
    >
      <div className="relative mx-auto flex h-12 items-center justify-between gap-3 px-6">
        {/* Keeps layout width; logo is absolutely positioned so a 150×150 mark does not stretch the bar */}
        <div
          className="w-[150px] shrink-0 max-[380px]:w-[min(150px,calc(100vw-8rem))]"
          aria-hidden
        />

        <Link
          to="/"
          aria-label="JOMS — home"
          onClick={(e) => handleNavClick(e, "/")}
          className="absolute left-6 top-1/2 z-20 flex h-[150px] w-[150px] max-[380px]:h-[min(150px,calc(100vw-8rem))] max-[380px]:w-[min(150px,calc(100vw-8rem))] -translate-y-1/2 items-center justify-start"
          style={{}}
        >
          <JomsLogoMark darkMode={darkMode} className="max-h-full max-w-full" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-10 ml-5 xl:gap-12 xl:ml-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={(e) => handleNavClick(e, link.to)}
              className="text-base transition-colors hover:opacity-100"
              style={{
                opacity: linkIsActive(link.to) ? 1 : 0.7,
                color: darkMode ? "#E2E8F0" : "#1E293B"}}
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
                : "rgba(0,0,0,0.05)"}}
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className="lg:hidden p-2 rounded-xl"
            style={{
              background: darkMode
                ? "rgba(255,255,255,0.1)"
                : "rgba(0,0,0,0.05)"}}
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
            className="lg:hidden mt-4 pb-4 flex flex-col gap-4 overflow-hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={(e) => handleNavClick(e, link.to)}
                className="text-base py-2 px-3 rounded-lg transition-all"
                style={{
                  background: darkMode
                    ? "rgba(255,255,255,0.05)"
                    : "rgba(0,0,0,0.03)"}}
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
