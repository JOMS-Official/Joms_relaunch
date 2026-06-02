import React, { useEffect } from "react";

interface LegalPageShellProps {
  darkMode: boolean;
  title: string;
  /** e.g. "Last Updated On: 28th January 2025" */
  metaLine: string;
  children: React.ReactNode;
}

export function LegalPageShell({ darkMode, title, metaLine, children }: LegalPageShellProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const heading = darkMode ? "#F8FAFC" : "#020617";
  const body = darkMode ? "rgba(248,250,252,0.72)" : "rgba(2,6,23,0.75)";
  const muted = darkMode ? "rgba(248,250,252,0.45)" : "rgba(2,6,23,0.5)";

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 min-h-[70vh]">
      <div className="max-w-3xl mx-auto text-left">
        <h1
          className="text-section-title-compact font-bold mb-3"
          style={{ fontFamily: "'Sora', sans-serif", color: heading }}
        >
          {title}
        </h1>
        <p className="text-sm mb-8" style={{ color: muted }}>
          {metaLine}
        </p>
        <div
          className="h-px w-full mb-10"
          style={{
            background: darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
          }}
        />
        <article
          className="space-y-10 text-[15px] leading-[1.8] text-justify"
          style={{ color: body, fontFamily: "'Inter', sans-serif" }}
        >
          {children}
        </article>
      </div>
    </div>
  );
}

interface LegalH2Props {
  darkMode: boolean;
  children: React.ReactNode;
}

export function LegalH2({ darkMode, children }: LegalH2Props) {
  const sectionTitle = darkMode ? "#F8FAFC" : "#0f172a";
  return (
    <h2
      className="text-[calc(1.125rem-1px)] font-semibold"
      style={{ fontFamily: "'Sora', sans-serif", color: sectionTitle }}
    >
      {children}
    </h2>
  );
}
