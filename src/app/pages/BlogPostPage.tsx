import { useEffect } from "react";
import { Link, useOutletContext, useParams } from "react-router";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { getPostById, getRelatedPosts } from "../data/blogPosts";

const accent = "#7C3AED";
const muted = "#94a3b8";

export default function BlogPostPage() {
  const { postId } = useParams();
  const { darkMode } = useOutletContext<{ darkMode: boolean }>();
  const id = Number(postId);
  const post = Number.isFinite(id) ? getPostById(id) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [postId]);

  if (!post) {
    return (
      <div className="pt-24 px-6 pb-20 max-w-3xl mx-auto text-center">
        <p style={{ color: darkMode ? muted : "rgba(2,6,23,0.55)" }}>Article not found.</p>
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 mt-6 text-sm"
          style={{ color: accent }}
        >
          <ArrowLeft size={16} /> Back to Blogs
        </Link>
      </div>
    );
  }

  const related = getRelatedPosts(post.id);

  const bodyColor = darkMode ? "rgba(248,250,252,0.75)" : "rgba(2,6,23,0.72)";
  const metaColor = darkMode ? "rgba(248,250,252,0.45)" : "rgba(2,6,23,0.45)";

  return (
    <div className="pt-24 pb-20 px-6 min-h-[70vh]">
      <article className="max-w-[800px] mx-auto">
        <div className="flex items-center justify-between mb-10">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm transition-opacity hover:opacity-90"
            style={{ color: "#A78BFA" }}
          >
            <ArrowLeft size={16} />
            Back to Blogs
          </Link>
          <span
            className="text-xs px-3 py-1 rounded-full inline-block font-medium"
            style={{
              background: darkMode
                ? "linear-gradient(135deg, rgba(79,70,229,0.92), rgba(124,58,237,0.85))"
                : "linear-gradient(135deg, #4F46E5, #7C3AED)",
              color: "#FFFFFF",
            }}
          >
            {post.category}
          </span>
        </div>

        <h1
          className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold mb-10"
          style={{ fontFamily: "'Sora', sans-serif", lineHeight: 1.15 }}
        >
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-x-8 gap-y-4 mb-12">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
              style={{
                background: "linear-gradient(135deg, #4F46E5, #7C3AED)",
              }}
            >
              <User size={18} className="text-white" />
            </div>
            <div>
              <p className="text-sm font-medium" style={{ fontFamily: "'Sora', sans-serif" }}>
                {post.author.name}
              </p>
              <p className="text-xs" style={{ color: metaColor }}>
                {post.author.role}
              </p>
            </div>
          </div>
          <span className="flex items-center gap-1.5 text-sm" style={{ color: metaColor }}>
            <Calendar size={15} /> {post.date}
          </span>
          <span className="flex items-center gap-1.5 text-sm" style={{ color: metaColor }}>
            <Clock size={15} /> {post.readTime} read
          </span>
        </div>

        <div
          className="space-y-6 text-[1.05rem] leading-[1.85]"
          style={{ color: bodyColor, fontFamily: "'Inter', sans-serif" }}
        >
          {post.paragraphs.map((para, i) => (
            <p
              key={i}
              className={
                i === 0
                  ? `first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-bold first-letter:leading-none first-letter:text-[3.25rem] sm:first-letter:text-[3.75rem] ${
                      darkMode ? "first-letter:text-white" : "first-letter:text-slate-900"
                    }`
                  : ""
              }
            >
              {para}
            </p>
          ))}
        </div>

        <div
          className="my-14 h-px"
          style={{
            background: darkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)",
          }}
        />

        <section>
          <h2
            className="text-xl sm:text-2xl font-semibold mb-8"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            <span className={darkMode ? "text-white" : "text-slate-900"}>Related </span>
            <span style={{ color: accent }}>Articles</span>
          </h2>

          <div className="grid sm:grid-cols-2 gap-5">
            {related.map((r) => (
              <Link
                key={r.id}
                to={`/blog/${r.id}`}
                className="block rounded-2xl p-6 transition-transform hover:-translate-y-0.5"
                style={{
                  background: darkMode ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.95)",
                  border: darkMode
                    ? "1px solid rgba(255,255,255,0.08)"
                    : "1px solid rgba(0,0,0,0.06)",
                  boxShadow: darkMode ? "0 8px 32px rgba(0,0,0,0.25)" : "0 8px 24px rgba(0,0,0,0.06)",
                }}
              >
                
                <span
                  className="text-xs px-3 py-1 rounded-full inline-block mb-3 font-medium"
                  style={{
                    background: darkMode
                      ? "linear-gradient(135deg, rgba(79,70,229,0.92), rgba(124,58,237,0.85))"
                      : "linear-gradient(135deg, #4F46E5, #7C3AED)",
                    color: "#FFFFFF",
                  }}
                >
                  {r.category}
                </span>
                <h3
                  className="text-base font-semibold mb-4 leading-snug"
                  style={{ fontFamily: "'Sora', sans-serif", color: darkMode ? "#F8FAFC" : "#0f172a" }}
                >
                  {r.title}
                </h3>
                <p className="text-xs" style={{ color: metaColor }}>
                  {r.readTime}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
}
