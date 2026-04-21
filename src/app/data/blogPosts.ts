export type BlogAuthor = {
  name: string;
  role: string;
};

export type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  gradient: string;
  /** Top accent bar on cards (solid or gradient) */
  accentLine: string;
  author: BlogAuthor;
  paragraphs: string[];
};

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Why We're Building JOMS — A Letter from the Founder",
    excerpt:
      "The world doesn't need more apps. It needs better platforms. Here's why we started JOMS and what drives every decision we make.",
    category: "Founder Insights",
    date: "Feb 15, 2025",
    readTime: "5 min",
    gradient: "linear-gradient(135deg, #4F46E5, #7C3AED)",
    accentLine: "#7C3AED",
    author: { name: "Swaroop Jayaram", role: "Founder & CEO" },
    paragraphs: [
      "The world doesn't need another app that promises the moon and delivers friction. What it needs are platforms that respect people's time, earn trust in small moments, and make complex marketplaces feel simple. That belief is why we started JOMS — not to chase trends, but to build something that lasts.",
      "Every product decision we make comes back to a single question: does this help someone take one more meaningful step toward their goal? Progress rarely arrives as a giant leap. It shows up as clarity after confusion, a connection that should have been easy, or a process that finally feels fair. We are obsessed with those steps.",
      "We're also building in the open, with humility. Marketplaces are hard. Trust is fragile. Technology is only as good as the humans it serves. So we're investing as much in thoughtful design and transparent operations as we are in scalable architecture — because one without the other doesn't hold up in the real world.",
      "Thank you for being early believers, critics, and partners. Whether you're a future user, teammate, or investor, we hope you'll hold us to the standard we set for ourselves: ship with care, listen harder than we talk, and never confuse motion for progress. This is just the beginning.",
    ],
  },
  {
    id: 2,
    title: "The Architecture Behind Scalable Marketplaces",
    excerpt:
      "A deep dive into the technical decisions powering our next-gen marketplace infrastructure, from event-driven architectures to real-time matching.",
    category: "Tech Articles",
    date: "Feb 8, 2025",
    readTime: "8 min",
    gradient: "linear-gradient(135deg, #2563EB, #4F46E5)",
    accentLine: "#60A5FA",
    author: { name: "JOMS Engineering", role: "Platform Team" },
    paragraphs: [
      "Scaling a marketplace isn't only about handling more requests per second — it's about keeping data consistent, decisions auditable, and failures boring. We've leaned on an event-driven core so that critical state changes propagate reliably without turning every feature into a distributed systems thesis.",
      "Real-time matching sits on top of clear domain boundaries. Services own their data; integrations happen through contracts we can version and observe. That gives us room to evolve pricing, trust signals, and discovery without rewiring the world every quarter.",
      "Observability is part of the architecture, not an afterthought. Traces, metrics, and structured logs tell us when latency creeps in or when a queue backs up — before users feel it. If you're building something similar, invest early in the glue: idempotency, retries with limits, and honest backpressure.",
    ],
  },
  {
    id: 3,
    title: "From Zero to One: Building a Startup in 2025",
    excerpt:
      "Lessons learned from the first year of building JOMS — from idea validation to assembling a world-class remote team.",
    category: "Startup Building",
    date: "Jan 28, 2025",
    readTime: "6 min",
    gradient: "linear-gradient(135deg, #7C3AED, #6D28D9)",
    accentLine: "#A78BFA",
    author: { name: "Swaroop Jayaram", role: "Founder & CEO" },
    paragraphs: [
      "Year one was less about having all the answers and more about learning which questions actually mattered. We talked to users until the patterns repeated, threw away prototypes without ego, and kept the team small enough that accountability stayed visible.",
      "Hiring remotely forced us to be deliberate about communication and documentation. Async by default doesn't mean slow — it means respectful. We invested in rituals that build trust across time zones: clear written specs, demo days, and honest retros.",
      "If you're at the zero-to-one stage, optimize for learning speed, not vanity metrics. Ship small, measure honestly, and protect your focus the way you'd protect runway — because in the early days, they're the same thing.",
    ],
  },
  {
    id: 4,
    title: "Product Update: Beta Program Launch",
    excerpt:
      "We're opening our beta program to early believers. Here's what's ready, what's coming, and how to get involved.",
    category: "Product Updates",
    date: "Jan 15, 2025",
    readTime: "4 min",
    gradient: "linear-gradient(135deg, #50C878, #4F46E5)",
    accentLine: "#34D399",
    author: { name: "Swaroop Jayaram", role: "Founder & CEO" },
    paragraphs: [
      "We're opening our beta to a limited group of partners who want to shape the product with us. Core flows are live, feedback loops are tight, and we're prioritizing stability alongside the features you've asked for most.",
      "What's coming next: deeper trust tooling, richer discovery, and integrations that meet you where you already work. We'll share a public roadmap soon; until then, beta participants get direct lines to the team.",
      "If you're interested, reach out through our contact page with a short note on what you're building — we'll follow up with next steps.",
    ],
  },
  {
    id: 5,
    title: "Designing for Trust in Digital Marketplaces",
    excerpt:
      "Trust is the currency of the internet. Here's how we're embedding trust into every pixel and API call of our marketplace platform.",
    category: "Tech Articles",
    date: "Jan 5, 2025",
    readTime: "7 min",
    gradient: "linear-gradient(135deg, #4F46E5, #2563EB)",
    accentLine: "#818CF8",
    author: { name: "JOMS Engineering", role: "Platform Team" },
    paragraphs: [
      "Trust isn't a badge on a landing page — it's the sum of predictable behavior, transparent policies, and fast recovery when something goes wrong. We design for moments of doubt: unclear pricing, delayed delivery, disputed outcomes.",
      "On the technical side, that means immutable audit trails where they matter, least-privilege access everywhere, and abuse-resistant flows that don't punish legitimate users. On the product side, it means plain language, visible SLAs, and human escalation paths that feel reachable.",
      "The goal is simple: reduce anxiety at every step. When users feel safe, they move faster — and marketplaces thrive.",
    ],
  },
  {
    id: 6,
    title: "The Power of Just One More Step",
    excerpt:
      "Our company name carries a philosophy. Progress isn't about giant leaps — it's about relentless, meaningful steps forward.",
    category: "Founder Insights",
    date: "Dec 20, 2024",
    readTime: "4 min",
    gradient: "linear-gradient(135deg, #D4AF37, #B8860B)",
    accentLine: "#EAB308",
    author: { name: "Swaroop Jayaram", role: "Founder & CEO" },
    paragraphs: [
      "JOMS stands for 'Just One More Step' — a reminder that momentum beats perfection. The best teams don't wait for certainty; they take the next step with enough clarity to learn and enough discipline to iterate.",
      "That philosophy shows up in how we ship: smaller releases, faster feedback, and a bias toward helping users make progress today rather than promising everything tomorrow.",
      "If you're building something hard, celebrate the small wins. They're not distractions from the mission — they're how the mission survives.",
    ],
  },
];

export function getPostById(id: number): BlogPost | undefined {
  return blogPosts.find((p) => p.id === id);
}

export function getRelatedPosts(currentId: number): BlogPost[] {
  const current = blogPosts.find((p) => p.id === currentId);
  if (!current) return [];
  const sameCat = blogPosts.filter(
    (p) => p.id !== currentId && p.category === current.category
  );
  const others = blogPosts.filter(
    (p) => p.id !== currentId && p.category !== current.category
  );
  return [...sameCat, ...others].slice(0, 2);
}
