import React from "react";
import jomsLogo from "../../assets/joms website.svg";

type Props = {
  darkMode: boolean;
  className?: string;
};

/**
 * 150×150 wordmark (`src/assets/joms website.svg`).
 * In the navbar, wrap with absolute positioning + -translate-y-1/2 so the bar stays short.
 */
export default function JomsLogoMark({ darkMode, className = "" }: Props) {
  return (
    <img
      src={jomsLogo}
      alt="JOMS — Just One More Step"
      className={`block h-[150px] w-[150px] object-contain object-left shrink-0 ${className}`}
      width={150}
      height={150}
      style={{
        filter: darkMode ? undefined : "brightness(0)",
      }}
    />
  );
}
