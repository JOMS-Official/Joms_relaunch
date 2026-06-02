/** Same portrait as the home team carousel card (must stay in sync). */
export const SWAROOP_CARD_IMAGE =
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=520&h=700&fit=crop&q=80";

export type TeamMemberProfile = {
  slug: string;
  name: string;
  roleShort: string;
  roleDisplay: string;
  image: string;
  linkedinUrl: string;
  paragraphs: string[];
};

export const SWAROOP_SLUG = "swaroop-jayaram";

export const teamMemberProfiles: TeamMemberProfile[] = [
  {
    slug: SWAROOP_SLUG,
    name: "Swaroop Jayaram",
    roleShort: "Founder & CEO",
    roleDisplay: "FOUNDER & CEO",
    image: "/src/assets/Swaroop.jpg",
    linkedinUrl: "https://www.linkedin.com/",
    paragraphs: [
      "Swaroop Jayaram is the Founder & CEO of JOMS (Just One More Step). His career has been shaped by a simple belief: meaningful progress comes from consistent, intentional steps forward—not from noise or shortcuts, but from clarity, discipline, and the courage to build what should exist.",
      "Across years of experience at the intersection of technology and business, he has watched the digital landscape mature—and still leave too many people behind. Outdated platforms, brittle ecosystems, and short-term thinking inspired him to start JOMS: a company focused on next-generation platforms that earn trust over time.",
      "Today he leads strategy, culture, and vision with a bias toward craftsmanship, transparency, and long-term partnerships. JOMS is engineered for scale, but grounded in human outcomes: products that feel inevitable because they are built with care.",
      "He stewards a remote-first, global team united by shared standards: ship with integrity, listen harder than you speak, and never confuse motion for progress. That ethos shows up in how JOMS hires, how it ships, and how it treats every stakeholder.",
      "Whether you are a future teammate, partner, or investor, the invitation is the same—take one more intentional step with us. The next chapter of interconnected digital platforms may start with a single conversation.",
    ],
  },
];

export function getTeamMemberProfileBySlug(slug: string | undefined): TeamMemberProfile | undefined {
  if (!slug) return undefined;
  return teamMemberProfiles.find((p) => p.slug === slug);
}
