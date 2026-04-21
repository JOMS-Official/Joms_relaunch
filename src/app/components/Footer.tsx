import React from "react";
import { Link } from "react-router";
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

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
      { label: "Blog", to: "/blog" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", to: "/blog" },
      { label: "Terms Of services", to: "/blog" },
      { label: "Disclaimers", to: "/blog" },
      { label: "Cookies Policy", to: "/blog" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Startup Blogs", to: "/blog" },
      { label: "Tech Insights", to: "/contact" },
      { label: "Pitch Deck", to: "/blog" },
    ],
  },
];

const socials = [
  { icon: Twitter, href: "https://twitter.com" },
  { icon: Linkedin, href: "https://linkedin.com" },
  { icon: Github, href: "https://github.com" },
  { icon: Instagram, href: "https://instagram.com" },
];

export default function Footer({ darkMode }: Props) {
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white"
                style={{
                  background: "linear-gradient(135deg, #4F46E5, #7C3AED)",
                }}
              >
                <span className="text-sm" style={{ fontFamily: "'Sora', sans-serif" }}>J</span>
              </div>
              <span
                className="text-xl"
                style={{
                  fontFamily: "'Sora', sans-serif",
                  background: "linear-gradient(135deg, #4F46E5, #7C3AED)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                JOMS
              </span>
            </div>
            <p
              className="text-sm mb-6"
              style={{
                color: darkMode
                  ? "rgba(248,250,252,0.5)"
                  : "rgba(2,6,23,0.5)",
                lineHeight: 1.7,
              }}
            >
              One Step Closer to the Future.
            </p>
            <div className="flex gap-3">
              {socials.map((s, i) => (
                <a
                  key={i}
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
