import { motion } from "motion/react";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  darkMode?: boolean;
  hover?: boolean;
  style?: React.CSSProperties;
}

export default function GlassCard({
  children,
  className = "",
  darkMode = true,
  hover = true,
  style,
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -6, scale: 1.02 } : undefined}
      transition={{ duration: 0.3 }}
      className={`rounded-2xl p-6 ${className}`}
      style={{
        background: darkMode
          ? "rgba(255,255,255,0.06)"
          : "rgba(255,255,255,0.8)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: darkMode
          ? "1px solid rgba(255,255,255,0.12)"
          : "1px solid rgba(0,0,0,0.06)",
        boxShadow: darkMode
          ? "0 8px 32px rgba(0,0,0,0.3)"
          : "0 8px 32px rgba(0,0,0,0.06)",
        ...style,
      }}
    >
      {children}
    </motion.div>
  );
}
