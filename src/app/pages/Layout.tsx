import { useState, useLayoutEffect, useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { scrollToHomeSection } from "../utils/homeSectionNav";

export default function Layout() {
  const [darkMode, setDarkMode] = useState(true);
  const location = useLocation();

  useLayoutEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  // Reset scroll on route changes; skip when landing on home with a section hash (Vision, Team, etc.).
  useLayoutEffect(() => {
    if (location.pathname === "/" && location.hash) return;
    window.scrollTo(0, 0);
  }, [location.pathname, location.search, location.hash]);

  useEffect(() => {
    if (location.pathname !== "/" || !location.hash) return;
    const id = location.hash.replace(/^#/, "");
    if (!id) return;
    const timer = window.setTimeout(() => scrollToHomeSection(id), 50);
    return () => window.clearTimeout(timer);
  }, [location.pathname, location.hash]);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div
        className="min-h-screen transition-colors duration-500"
        style={{
          fontFamily: "'Inter', sans-serif",
          background: darkMode
            ? "linear-gradient(135deg, #020617 0%, #0F172A 50%, #020617 100%)"
            : "#F8FAFC",
          color: darkMode ? "#F8FAFC" : "#020617",
        }}
      >
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="site-main">
          <Outlet context={{ darkMode }} />
        </main>
        <Footer darkMode={darkMode} />
      </div>
    </div>
  );
}
