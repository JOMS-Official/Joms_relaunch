import React from "react";
import { Link } from "react-router";
import { Linkedin, Instagram } from "lucide-react";
import JomsLogoMark from "./JomsLogoMark";
import { useHomeSectionNav } from "../hooks/useHomeSectionNav";

interface Props {
  darkMode: boolean;
}

const footerLinks = [
  {
    title: "Company",
    links: [
      { label: "Vision", to: "/#vision" },
      { label: "Products", to: "/#products" },
      { label: "Team", to: "/#team" },
      { label: "Careers", to: "/careers" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", to: "/privacy" },
      { label: "Terms of Service", to: "/terms-of-service" },
      { label: "Disclaimer", to: "/disclaimer" },
      { label: "Cookies Policy", to: "/cookies-policy" },
    ],
  },
  {
    title: "Resources",
    links: [{ label: "Startup Blogs", to: "/blog" }],
  },
];

const socials = [
  { icon: Instagram, href: "https://instagram.com" },
  { icon: Linkedin, href: "https://linkedin.com" },
];

export default function Footer({ darkMode }: Props) {
  const { goToSection } = useHomeSectionNav();

  const handleFooterLinkClick = (e: React.MouseEvent, to: string) => {
    if (goToSection(to)) e.preventDefault();
  };

  return (
    <footer
      className="mt-20 pt-16 pb-8 px-4 sm:px-6 lg:px-8"
      style={{
        borderTop: darkMode
          ? "1px solid rgba(255,255,255,0.06)"
          : "1px solid rgba(0,0,0,0.06)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid items-start sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="min-w-0 flex flex-col">
            <div className="w-fit max-w-full shrink-0 -mt-8 sm:-mt-10 lg:-mt-12">
              <Link
                to="/"
                aria-label="JOMS — home"
                className="block w-[150px] max-w-full leading-none"
              >
                <JomsLogoMark
                  darkMode={darkMode}
                  className="object-left object-top -translate-y-2"
                />
              </Link>
            </div>
            <div className="-mt-12 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                  style={{
                    background: darkMode
                      ? "rgba(255,255,255,0.06)"
                      : "rgba(0,0,0,0.04)",
                    color: darkMode
                      ? "rgba(248,250,252,0.6)"
                      : "rgba(2,6,23,0.5)",
                  }}
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4
                className="text-sm mb-4"
                style={{
                  fontFamily: "'Sora', sans-serif",
                  color: darkMode
                    ? "rgba(248,250,252,0.9)"
                    : "rgba(2,6,23,0.9)",
                }}
              >
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      onClick={(e) => handleFooterLinkClick(e, link.to)}
                      className="text-sm transition-colors hover:opacity-100"
                      style={{
                        color: darkMode
                          ? "rgba(248,250,252,0.5)"
                          : "rgba(2,6,23,0.5)",
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{
            borderTop: darkMode
              ? "1px solid rgba(255,255,255,0.06)"
              : "1px solid rgba(0,0,0,0.06)",
          }}
        >
          <p
            className="text-xs"
            style={{
              color: darkMode
                ? "rgba(248,250,252,0.4)"
                : "rgba(2,6,23,0.4)",
            }}
          >
            &copy; {new Date().getFullYear()} JOMS — Just One More Step. All rights
            reserved.
          </p>
          <p
            className="text-xs"
            style={{
              color: darkMode
                ? "rgba(248,250,252,0.3)"
                : "rgba(2,6,23,0.3)",
            }}
          >
            Building the future, one step at a time.
          </p>
        </div>
      </div>
    </footer>
  );
}
