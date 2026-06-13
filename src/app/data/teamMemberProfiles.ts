import { SWAROOP_CARD_IMAGE } from "./teamImages";

export { SWAROOP_CARD_IMAGE };

export type TeamProfileBlock =
  | {
      kind: "heading";
      text: string;
      /** When true: if the heading contains ` - ` or `:`, each word in the phrase before that separator gets a highlighted first letter (e.g. Just One More Step → J O M S); otherwise only the very first character is highlighted. */
      accentFirstLetter?: boolean;
    }
  | { kind: "paragraph"; text: string }
  /** `emphasis: "white"` — list text and markers use strong contrast (white in dark mode). */
  | { kind: "bullets"; items: string[]; emphasis?: "white" };

export type TeamMemberProfile = {
  slug: string;
  name: string;
  roleShort: string;
  roleDisplay: string;
  company: string;
  image: string;
  linkedinUrl: string;
  /** Ordered sections: headings, body paragraphs, and bullet lists where the narrative reads as distinct points. */
  content: TeamProfileBlock[];
};

export const SWAROOP_SLUG = "swaroop-jayaram";

export const teamMemberProfiles: TeamMemberProfile[] = [
  {
    slug: SWAROOP_SLUG,
    name: "Swaroop Jayaram",
    roleShort: "Founder & CEO",
    roleDisplay: "FOUNDER & CEO",
    company: "JOMS Commerce & Technologies Pvt. Ltd.",
    image: SWAROOP_CARD_IMAGE,
    linkedinUrl: "https://www.linkedin.com/in/swaroopjayaram",
    content: [
      {
        kind: "paragraph",
        text:
          "Over more than a decade, I have worked at the intersection of talent, technology and business transformation across industries and multiple geographies. My career has spanned executive search and talent advisory at Wenger & Watson, Royal Dutch Shell and VMware. In each role, I worked directly with senior leadership on how organizations build capable teams for actual growth, adapt when their operating models are no longer fit for purpose and what separates a team that executes from one that merely intends to. That proximity to decision-making at scale gave me a form of pattern recognition that is difficult to acquire any other way. I saw consistently where organisations struggled, what early-stage founders lacked access to and what a platform built around those gaps could genuinely be worth. I left the corporate world to build it.",
      },

      { kind: "heading", text: "First Step Comes Before Clarity" },
      {
        kind: "paragraph",
        text:
          "I didn't start a company because I had a perfect plan. I started one because I had spent enough time inside large organisations, close enough to the real problems, to know that the tools most founders actually needed simply did not exist in one place.",
      },
      {
        kind: "paragraph",
        text:
          "That realization did not arrive overnight. It took over a decade of corporate experience, one failed venture, and a front-row seat to an ecosystem that is far harder to navigate than anyone publicly admits.",
      },

      { kind: "heading", text: "Invisible Years of Growth" },
      {
        kind: "paragraph",
        text:
          "My professional life began inside some of the most demanding environments a career can offer. At Wenger and Watson, one of India's most respected executive search and talent advisory firms, I worked closely with senior leaders across industries to solve complex talent challenges. It was precise, high-stakes work. The kind where you quickly learn that the difference between a good organisation and a great one almost always comes down to the quality of the people inside it and the systems that support them.",
      },
      {
        kind: "paragraph",
        text:
          "From there, I moved into the energy sector at Shell, later into VMware, leading large-scale talent and business transformation programmes across geographies. These were not roles where you sat in meetings and managed upward. They required understanding how organisations actually function under pressure, how decisions get made at the top and either executed or quietly buried further down, and what it genuinely takes to build teams that perform when conditions are imperfect, which is most of the time.",
      },
      {
        kind: "paragraph",
        text:
          "Working that closely with senior executives across industries gave me something that no MBA programme or accelerator cohort can fully replicate: an intuitive understanding of how businesses scale, where they break and what separates the ones that endure from the ones that do not.",
      },

      { kind: "heading", text: "From Consulting to Creation" },
      {
        kind: "paragraph",
        text:
          "Alongside my corporate roles, I spent considerable time in a consulting capacity, working across industries and geographies with organisations facing significant inflection points. These engagements confirmed something I had long suspected. The bottlenecks facing most organisations rarely live in strategy documents. They live in execution. In the gap between what leadership intends and what the organisation is actually capable of delivering. Bridging that gap consistently, across different contexts, sharpened the instinct I would later carry into building my own company.",
      },

      {
        kind: "heading",
        text: "First Venture: What I Built, What I Learned and What Broke",
      },
      {
        kind: "paragraph",
        text:
          "In 2024, I founded an online marketplace for Indian heritage and GI-tagged products. The idea came from genuine conviction, shaped in large part by my upbringing. My mother has long been involved in traditional paintings and handicrafts, and through her work I saw firsthand the skill, patience and cultural value behind Indian artisanal craftsmanship. Yet I also saw how often these artisans and traditions remained invisible to the audiences willing to pay what their work is truly worth. I believed a well-designed digital platform could help bridge that gap, preserving heritage while creating fairer access to global markets for authentic Indian craft traditions.",
      },
      {
        kind: "paragraph",
        text:
          "Parts of that belief turned out to be right. International demand for authentic Indian craft products is real and growing. The problem was everything else.",
      },
      {
        kind: "paragraph",
        text:
          "Domestically, heritage products occupy an unusual psychological space. They are admired as artefacts far more often than they are purchased as everyday objects. At the price points required to make the economics work for both artisans and the business, conversion rates told a difficult story. Consumers valued authenticity, but many still benchmarked handmade products against cheaper mass-produced alternatives.",
      },
      {
        kind: "paragraph",
        text:
          "The challenge was not customer interest. Although engagement and storytelling resonated strongly with customers, converting appreciation into repeat purchasing behaviour remained difficult. Educating customers on GI tags, provenance, and craftsmanship increased acquisition costs, while fragmented artisan supply chains made scaling operationally complex. The core insight was clear: the market respected heritage, but consistent willingness to pay premium prices for it was still maturing.",
      },
      {
        kind: "paragraph",
        text:
          "On the operational side, the model exposed structural problems I had underestimated. Supplier networks for heritage goods in India are deeply fragmented, spread across remote clusters with inconsistent production timelines and minimal digital infrastructure. Warehousing was expensive. Logistics were fragile. Return-to-origin costs ate into margins in ways that the early models had not fully accounted for. Every week revealed a new friction point that needed solving before the one before it had been properly resolved.",
      },
      {
        kind: "paragraph",
        text:
          "I learned what most first-time founders learn the hard way: building a marketplace is not primarily a technology problem. It is a coordination problem. And coordination problems at scale, especially across geographically dispersed, informally organised supplier networks, are brutally difficult to solve without significant capital or time. I had neither in the quantities the model required.",
      },
      {
        kind: "paragraph",
        text:
          "I made a decision to step back before the venture consumed more runway than the learnings justified. That decision was not easy. It felt, for a while, like failure in the most public sense of the word. In hindsight, it was the most expensive and most valuable education I have ever received.",
      },

      { kind: "heading", text: "Startup Ecosystem: Nothing Left. Nothing Right." },
      {
        kind: "paragraph",
        text:
          "While I was building my first venture, I was also navigating the broader startup ecosystem in search of support, funding, mentorship and infrastructure. What I encountered was, to put it plainly, not designed for early-stage founders without prior traction.",
      },
      {
        kind: "paragraph",
        text:
          "The most well-regarded incubator and accelerator programmes, the ones with the networks, the mentors, and the investor connections that actually move the needle, almost universally require demonstrated revenue or a working prototype before they consider your application. This creates a deeply circular problem: you need the support to build the prototype, but you need the prototype to access the support.",
      },
      {
        kind: "paragraph",
        text:
          "The cohort programmes that do accept early-stage founders often come with price tags that are difficult to justify for a bootstrapped company. When you are watching every rupee and trying to decide between investing in product development and paying for a programme that may or may not deliver on its stated value, the returns are rarely straightforward. I attended several of these conversations and many of them were more interested in optics than outcomes.",
      },
      {
        kind: "paragraph",
        text:
          "Building a prototype as a bootstrapped founder is genuinely expensive in ways that are rarely discussed openly. Development costs, design costs, infrastructure costs, basic legal and compliance costs. All of it lands simultaneously, before there is any revenue to offset it. The popular narrative around lean startups and scrappy iteration is real but incomplete. Scrappy still costs money and money at the earliest stage is the scarcest resource of all.",
      },
      {
        kind: "paragraph",
        text:
          "Then there is the team problem. Hiring the initial team members as a first-time founder, without a strong external signal of entrepreneurial credibility, without a brand and often without market rates to offer, is one of the most underestimated challenges in company building. Convincing someone to take a risk on an early-stage company with no track record requires a combination of vision, trust and honesty about what you do not yet know. I got some of those conversations right. I got others badly wrong and I learned from all of them.",
      },

      {
        kind: "heading",
        text: 'Just One More Step - One small step for a man, one giant leap for mankind',
        accentFirstLetter: true,
      },
      {
        kind: "paragraph",
        text:
          "Every one of those experiences, the corporate years, the consulting work, the first venture and the navigation of a startup ecosystem that is more difficult than it appears from the outside, pointed toward the same gap.",
      },
      {
        kind: "paragraph",
        text:
          "Founders at the earliest stage of their journey need more than just advice. They need access at a stage when they are still finding their footing:",
      },
      {
        kind: "bullets",
        emphasis: "white",
        items: [
          "The right people",
          "The right infrastructure",
          "The right opportunities",
        ],
      },
      {
        kind: "paragraph",
        text:
          "Most of what exists today either comes too late, costs too much or requires credentials that only exist after the help is no longer needed.",
      },
      {
        kind: "paragraph",
        text:
          "JOMS Commerce and Technologies was built around that insight. Not as a theoretical solution but as something I designed with the specific texture of the problem in mind because I had lived inside it.",
      },
      {
        kind: "paragraph",
        text:
          "At JOMS, we are building a scalable technology platform designed to reduce friction across the startup journey, connecting founders, professionals and businesses with the resources, communities and opportunities they need to build with greater confidence and less wasted time.",
      },

      { kind: "heading", text: "What Guides Me Through Uncertainty" },
      {
        kind: "paragraph",
        text:
          "I believe enduring companies are built on disciplined execution more often than on brilliant ideas. Ideas are common. The capacity to move through uncertainty, hold a team together, make hard calls with incomplete information and keep going when the early signals are discouraging, that is rare and that is what actually builds something.",
      },
      {
        kind: "paragraph",
        text:
          "I also believe the startup ecosystem has a structural empathy problem. It celebrates success fluently and discusses failure selectively. The honest, granular account of what it costs, financially and personally, to build something from nothing is still not told often enough or loudly enough. I intend for JOMS to be part of changing that.",
      },
      {
        kind: "paragraph",
        text:
          "If you are a founder in the early stages, an investor interested in what we are building or someone who simply wants to understand the thinking behind this company, I am genuinely glad you are here.",
      },
      {
        kind: "paragraph",
        text:
          "There is always JUST ONE MORE STEP worth taking.",
      },
    ],
  },
];

export function getTeamMemberProfileBySlug(
  slug: string | undefined,
): TeamMemberProfile | undefined {
  if (!slug) return undefined;
  return teamMemberProfiles.find((p) => p.slug === slug);
}
