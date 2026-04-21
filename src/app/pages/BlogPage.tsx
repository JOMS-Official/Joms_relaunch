import { useState } from "react";
import { Link, useOutletContext } from "react-router";
import { Calendar, ArrowRight } from "lucide-react";
import GlassCard from "../components/GlassCard";
import SectionWrapper from "../components/SectionWrapper";
import { blogPosts } from "../data/blogPosts";

const categories = ["All", "Startup Building", "Product Updates", "Founder Insights", "Tech Articles"];

export default function BlogPage() {
  const { darkMode } = useOutletContext<{ darkMode: boolean }>();
  const [category, setCategory] = useState("All");

  const filtered = blogPosts.filter(
    (p) => category === "All" || p.category === category
  );

  return (
    <div className="pt-24">
      <SectionWrapper>
        <div className="text-center mb-16">
          <p className="text-sm mb-4 tracking-widest uppercase" style={{ color: "#7C3AED" }}>
            Blog
          </p>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl mb-6"
            style={{ fontFamily: "'Sora', sans-serif", lineHeight: 1.1 }}
          >
            Insights &{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #4F46E5, #7C3AED)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Ideas
            </span>
          </h1>
          <p
            className="max-w-2xl mx-auto"
            style={{ color: darkMode ? "rgba(248,250,252,0.6)" : "rgba(2,6,23,0.5)" }}
          >
            Thoughts on building, shipping, and scaling from the JOMS team.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className="px-4 py-2 rounded-xl text-sm transition-all"
              style={{
                background:
                  category === c
                    ? "linear-gradient(135deg, #4F46E5, #7C3AED)"
                    : darkMode
                    ? "rgba(255,255,255,0.06)"
                    : "rgba(0,0,0,0.03)",
                color: category === c ? "white" : darkMode ? "rgba(248,250,252,0.7)" : "rgba(2,6,23,0.6)",
                border:
                  category === c
                    ? "none"
                    : darkMode
                    ? "1px solid rgba(255,255,255,0.1)"
                    : "1px solid rgba(0,0,0,0.06)",
              }}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Blog grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post) => (
            <Link key={post.id} to={`/blog/${post.id}`} className="block">
            <GlassCard darkMode={darkMode} className="group flex flex-col cursor-pointer h-full">
              {/* Color header bar */}
              <div className="h-1.5 rounded-full mb-6 w-16" style={{ background: post.gradient }} />
              <span
                className="text-xs px-3 py-1 rounded-full w-fit mb-4"
                style={{
                  background: darkMode ? "rgba(79,70,229,0.15)" : "rgba(79,70,229,0.08)",
                  color: "#7C3AED",
                }}
              >
                {post.category}
              </span>
              <h3 className="text-lg mb-3 flex-1" style={{ fontFamily: "'Sora', sans-serif", lineHeight: 1.4 }}>
                {post.title}
              </h3>
              <p
                className="text-sm mb-4"
                style={{
                  color: darkMode ? "rgba(248,250,252,0.55)" : "rgba(2,6,23,0.5)",
                  lineHeight: 1.7,
                }}
              >
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between mt-auto pt-4" style={{ borderTop: darkMode ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(0,0,0,0.04)" }}>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 text-xs" style={{ color: darkMode ? "rgba(248,250,252,0.4)" : "rgba(2,6,23,0.4)" }}>
                    <Calendar size={12} /> {post.date}
                  </span>
                  <span className="text-xs" style={{ color: darkMode ? "rgba(248,250,252,0.4)" : "rgba(2,6,23,0.4)" }}>
                    {post.readTime}
                  </span>
                </div>
                <ArrowRight
                  size={16}
                  className="opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1"
                  style={{ color: "#7C3AED" }}
                />
              </div>
            </GlassCard>
            </Link>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
