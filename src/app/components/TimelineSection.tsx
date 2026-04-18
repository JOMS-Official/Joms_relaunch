import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import SectionWrapper from "./SectionWrapper";

interface Props {
  darkMode: boolean;
}

const milestones = [
  { year: "2024", title: "JOMS Vision Founded", description: "The idea crystallized — building products that move humanity forward, one step at a time." },
  { year: "2025", title: "Core Product Architecture", description: "Engineering the backbone of our marketplace and mobile platform infrastructure." },
  { year: "2025", title: "Beta Development", description: "Prototyping, testing, and iterating on our core products with early believers." },
  { year: "Next", title: "Global Launch", description: "Scaling our platforms to serve millions worldwide." },
];

export default function TimelineSection({ darkMode }: Props) {
  return (
    <SectionWrapper id="timeline">
      <div className="text-center mb-16">
        <p className="text-sm mb-4 tracking-widest uppercase" style={{ color: "#7C3AED" }}>
          Our Journey
        </p>
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl"
          style={{ fontFamily: "'Sora', sans-serif", lineHeight: 1.15 }}
        >
          The Journey Has{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #4F46E5, #7C3AED)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Begun
          </span>
        </h2>
      </div>

      <div className="relative max-w-3xl mx-auto">
        {/* Timeline line */}
        <div
          className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px"
          style={{
            background: darkMode
              ? "linear-gradient(to bottom, rgba(79,70,229,0.5), rgba(124,58,237,0.2), transparent)"
              : "linear-gradient(to bottom, rgba(79,70,229,0.3), rgba(124,58,237,0.1), transparent)",
          }}
        />

        {milestones.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className={`relative flex items-start gap-6 mb-12 ${
              i % 2 === 0
                ? "md:flex-row md:text-right"
                : "md:flex-row-reverse md:text-left"
            } flex-row text-left`}
          >
            {/* Content */}
            <div className="flex-1 hidden md:block">
              {((i % 2 === 0) ? true : false) && (
                <div className="md:pr-8">
                  <div
                    className="inline-block px-3 py-1 rounded-full text-xs mb-2"
                    style={{
                      background: m.year === "Next"
                        ? "linear-gradient(135deg, #50C878, #4F46E5)"
                        : "linear-gradient(135deg, #4F46E5, #7C3AED)",
                      color: "white",
                    }}
                  >
                    {m.year}
                  </div>
                  <h3 className="text-lg mb-1" style={{ fontFamily: "'Sora', sans-serif" }}>
                    {m.title}
                  </h3>
                  <p
                    className="text-sm"
                    style={{
                      color: darkMode ? "rgba(248,250,252,0.6)" : "rgba(2,6,23,0.5)",
                    }}
                  >
                    {m.description}
                  </p>
                </div>
              )}
            </div>

            {/* Dot */}
            <div className="relative z-10 flex-shrink-0">
              <div
                className="w-3 h-3 rounded-full mt-2"
                style={{
                  background: "linear-gradient(135deg, #4F46E5, #7C3AED)",
                  boxShadow: "0 0 15px rgba(79,70,229,0.5)",
                }}
              />
            </div>

            {/* Content for odd or mobile */}
            <div className={`flex-1 ${i % 2 === 0 ? "md:hidden" : ""}`}>
              <div className={i % 2 !== 0 ? "md:pl-8" : ""}>
                <div
                  className="inline-block px-3 py-1 rounded-full text-xs mb-2"
                  style={{
                    background: m.year === "Next"
                      ? "linear-gradient(135deg, #50C878, #4F46E5)"
                      : "linear-gradient(135deg, #4F46E5, #7C3AED)",
                    color: "white",
                  }}
                >
                  {m.year}
                </div>
                <h3 className="text-lg mb-1" style={{ fontFamily: "'Sora', sans-serif" }}>
                  {m.title}
                </h3>
                <p
                  className="text-sm"
                  style={{
                    color: darkMode ? "rgba(248,250,252,0.6)" : "rgba(2,6,23,0.5)",
                  }}
                >
                  {m.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p
            className="text-xl mb-6"
            style={{
              fontFamily: "'Sora', sans-serif",
              background: "linear-gradient(135deg, #4F46E5, #7C3AED)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Your Step Could Be Next
          </p>
          <Link
            to="/careers"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-white transition-all hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #4F46E5, #7C3AED)",
              boxShadow: "0 8px 30px rgba(79,70,229,0.4)",
            }}
          >
            Join Us <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
