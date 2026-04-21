import type { CSSProperties } from "react";

export function careerGlassIconBox(darkMode: boolean): CSSProperties {
  return {
    width: 40,
    height: 40,
    borderRadius: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    background: darkMode ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.85)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    border: darkMode ? "1px solid rgba(255,255,255,0.14)" : "1px solid rgba(0,0,0,0.08)",
    boxShadow: darkMode
      ? "0 8px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.06)"
      : "0 8px 32px rgba(0,0,0,0.08)",
  };
}

export function careerGlassDeptTag(darkMode: boolean): CSSProperties {
  return {
    background: darkMode ? "rgba(124, 58, 237, 0.18)" : "rgba(124, 58, 237, 0.12)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    border: darkMode ? "1px solid rgba(167, 139, 250, 0.35)" : "1px solid rgba(124, 58, 237, 0.25)",
    color: darkMode ? "#E9D5FF" : "#6D28D9",
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08)",
  };
}
