import { useState, useEffect } from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Layout() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

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
        <Outlet context={{ darkMode }} />
        <Footer darkMode={darkMode} />
      </div>
    </div>
  );
}
