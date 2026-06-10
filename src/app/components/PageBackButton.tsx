import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";

interface Props {
  darkMode: boolean;
  className?: string;
}

export default function PageBackButton({ darkMode, className = "" }: Props) {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate(-1)}
      aria-label="Go back"
      className={
        "inline-flex h-10 w-10 items-center justify-center rounded-full transition-all hover:scale-105 hover:opacity-90 " +
        className
      }
      style={{
        background: darkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.05)",
        border: darkMode
          ? "1px solid rgba(255,255,255,0.12)"
          : "1px solid rgba(0,0,0,0.08)",
        color: darkMode ? "#F8FAFC" : "#020617"}}
    >
      <ArrowLeft size={20} strokeWidth={1.75} aria-hidden />
    </button>
  );
}
