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

/** Pill badge for listings that are closing soon */
export function careerClosingSoonTag(darkMode: boolean): CSSProperties {
  if (darkMode) {
    return {
      color: "#FDE68A",
      border: "1px solid rgba(251, 191, 36, 0.45)",
      background: "rgba(251, 191, 36, 0.12)",
    };
  }
  return {
    color: "#92400E",
    border: "1px solid #D97706",
    background: "#FEF3C7",
    boxShadow: "0 1px 2px rgba(180, 83, 9, 0.08)",
  };
}

export function careerClosingSoonTextColor(darkMode: boolean): string {
  return darkMode ? "#FCD34D" : "#B45309";
}
