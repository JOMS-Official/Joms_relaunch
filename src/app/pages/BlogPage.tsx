import { useState } from "react";
import { useOutletContext } from "react-router";
import { Calendar, ArrowRight } from "lucide-react";
import GlassCard from "../components/GlassCard";
import SectionWrapper from "../components/SectionWrapper";

const categories = ["All", "Startup Building", "Product Updates", "Founder Insights", "Tech Articles"];

const posts = [
  {
    id: 1,
    title: "Why We're Building JOMS — A Letter from the Founder",
    excerpt: "The world doesn't need more apps. It needs better platforms. Here's why we started JOMS and what drives every decision we make.",
    category: "Founder Insights",
    date: "Feb 15, 2025",
    readTime: "5 min",
    gradient: "linear-gradient(135deg, #4F46E5, #7C3AED)",
  },
  {
    id: 2,
    title: "The Architecture Behind Scalable Marketplaces",
    excerpt: "A deep dive into the technical decisions powering our next-gen marketplace infrastructure, from event-driven architectures to real-time matching.",
    category: "Tech Articles",
    date: "Feb 8, 2025",
    readTime: "8 min",
    gradient: "linear-gradient(135deg, #2563EB, #4F46E5)",
  },
  {
    id: 3,
    title: "From Zero to One: Building a Startup in 2025",
    excerpt: "Lessons learned from the first year of building JOMS — from idea validation to assembling a world-class remote team.",
    category: "Startup Building",
    date: "Jan 28, 2025",
    readTime: "6 min",
    gradient: "linear-gradient(135deg, #7C3AED, #6D28D9)",
  },
  {
    id: 4,
    title: "Product Update: Beta Program Launch",
    excerpt: "We're opening our beta program to early believers. Here's what's ready, what's coming, and how to get involved.",
    category: "Product Updates",
    date: "Jan 15, 2025",
    readTime: "4 min",
    gradient: "linear-gradient(135deg, #50C878, #4F46E5)",
  },
  {
    id: 5,
    title: "Designing for Trust in Digital Marketplaces",
    excerpt: "Trust is the currency of the internet. Here's how we're embedding trust into every pixel and API call of our marketplace platform.",
    category: "Tech Articles",
    date: "Jan 5, 2025",
    readTime: "7 min",
    gradient: "linear-gradient(135deg, #4F46E5, #2563EB)",
  },
  {
    id: 6,
    title: "The Power of Just One More Step",
    excerpt: "Our company name carries a philosophy. Progress isn't about giant leaps — it's about relentless, meaningful steps forward.",
    category: "Founder Insights",
    date: "Dec 20, 2024",
    readTime: "4 min",
    gradient: "linear-gradient(135deg, #D4AF37, #B8860B)",
  },
];

export default function BlogPage() {
  const { darkMode } = useOutletContext<{ darkMode: boolean }>();
  const [category, setCategory] = useState("All");

  const filtered = posts.filter(
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
            <GlassCard key={post.id} darkMode={darkMode} className="group flex flex-col cursor-pointer">
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
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
