export type CareerJob = {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  /** Short summary for listing cards */
  description: string;
  requirements: string[];
  /** Longer copy for detail page */
  aboutUs: string;
  roleOverview: string;
  howToApply: string;
};

export const careersJobs: CareerJob[] = [
  {
    id: 1,
    title: "Senior React Native Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description:
      "Build the mobile experiences that millions will rely on. You'll architect and implement core features of our smart mobile platforms using React Native, working closely with design and product.",
    requirements: [
      "5+ years of professional React Native development",
      "Strong TypeScript skills and experience with large codebases",
      "Experience with state management and mobile performance optimization",
      "Comfortable collaborating across design, product, and backend teams",
    ],
    aboutUs:
      "JOMS (Just One More Step) is building the next generation of marketplace and mobile platforms. We believe progress comes from meaningful steps — in product, in craft, and in how we work together.",
    roleOverview:
      "You will own core user-facing flows in our React Native apps, from architecture through release. You'll partner with design on polished UX, with backend on APIs and real-time features, and with leadership on roadmap and technical direction.",
    howToApply:
      "Submit your application with a resume and a short note on a mobile product you’re proud of. We review every application and will reach out if there’s a fit.",
  },
  {
    id: 2,
    title: "Product Designer",
    department: "Design",
    location: "Hybrid",
    type: "Full-time",
    description:
      "Shape the visual identity and user experience of JOMS products. Design intuitive interfaces for complex marketplace and mobile platform features.",
    requirements: [
      "4+ years product design experience in SaaS or consumer products",
      "Expert in Figma and design systems",
      "Experience with user research and usability testing",
      "Portfolio demonstrating end-to-end product thinking",
    ],
    aboutUs:
      "JOMS (Just One More Step) pairs ambitious product goals with a craft-first design culture. We care about clarity, trust, and delight in every interaction.",
    roleOverview:
      "You will drive discovery through delivery: flows, prototypes, and high-fidelity UI for web and mobile. You’ll work embedded with product and engineering in a hybrid-friendly environment.",
    howToApply:
      "Share your portfolio link and a few sentences on a problem you reframed for users. We’ll follow up with next steps for promising matches.",
  },
  {
    id: 3,
    title: "Backend Engineer (Node.js)",
    department: "Engineering",
    location: "Remote",
    type: "Contract",
    description:
      "Architect scalable backend systems that power our marketplace ecosystem. Build APIs, data pipelines, and real-time services.",
    requirements: [
      "4+ years Node.js and TypeScript in production",
      "PostgreSQL, API design, and service boundaries",
      "Experience with cloud infrastructure (AWS or GCP)",
      "Comfortable with observability, testing, and on-call practices",
    ],
    aboutUs:
      "JOMS (Just One More Step) builds reliable infrastructure for marketplaces that need to scale without losing trust. We value pragmatism and clear ownership.",
    roleOverview:
      "You will design and ship APIs, data models, and integrations that power matching, trust, and growth. This contract role focuses on high-impact backend delivery with our platform team.",
    howToApply:
      "Send your resume and highlight one system you scaled or simplified. We’ll schedule intro calls for strong matches.",
  },
  {
    id: 4,
    title: "Growth Marketing Manager",
    department: "Marketing",
    location: "On-site",
    type: "Part-time",
    description:
      "Drive user acquisition and engagement for our platform launches. Develop and execute data-driven marketing strategies.",
    requirements: [
      "3+ years growth or performance marketing",
      "Strong analytics and experiment design skills",
      "Content and campaign experience across channels",
      "Startup or high-growth environment preferred",
    ],
    aboutUs:
      "JOMS (Just One More Step) is bringing new marketplace experiences to market. Marketing here is grounded in narrative, measurement, and iteration.",
    roleOverview:
      "You will own campaigns and funnels across channels, partner with product on launches, and report on what moves the needle — on a part-time, on-site cadence aligned with our team.",
    howToApply:
      "Apply with your resume and one growth initiative you led end-to-end. We’ll reply to candidates we’d like to speak with.",
  },
];

export function getCareerJobById(id: number): CareerJob | undefined {
  return careersJobs.find((j) => j.id === id);
}
