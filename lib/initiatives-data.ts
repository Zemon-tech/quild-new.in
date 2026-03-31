export type InitiativeStatus = "active" | "completed" | "building" | "planned";
export type InitiativeCategory =
  | "COHORT"
  | "CREATOR"
  | "WORKSHOP"
  | "RESEARCH"
  | "NETWORK";

export interface Initiative {
  id: string;
  title: string;
  category: InitiativeCategory;
  discipline: string;
  status: InitiativeStatus;
  description: string;
  detail: string;
  cohortNumber?: string;
  year?: string;
  ctaLabel: string;
  ctaHref: string;
  ctaExternal?: boolean;
  isAnchor?: boolean;
  anchorDescriptor?: string;
  images: string[];
}

export const INITIATIVES: Initiative[] = [
  {
    id: "cohort-03",
    title: "Cohort 03",
    category: "COHORT",
    discipline: "Product Builders",
    status: "planned",
    description:
      "The upcoming cohort for builders who want to ship real products with strong systems thinking.",
    detail:
      "Built on lessons from Cohort 01 and Cohort 02, with a sharper focus on execution and outcomes.",
    cohortNumber: "03",
    year: "2026",
    ctaLabel: "NOTIFY ME ->",
    ctaHref: "/join",
    images: ["/hero.png", "/about-belief.png", "/careers.png"],
  },
  {
    id: "workshop-series",
    title: "Summit Series",
    category: "WORKSHOP",
    discipline: "Multi-disciplinary",
    status: "building",
    description: "A four-season series: Summer, Autumn, Spring, and Winter.",
    detail:
      "Founders, builders, engineers, and researchers in one room for focused discussion.",
    year: "2026",
    ctaLabel: "NOTIFY ME ->",
    ctaHref: "/join",
    images: ["/ai-will-not.png", "/the-best-builder.png"],
  },
  {
    id: "cohort-02",
    title: "Cohort 02",
    category: "COHORT",
    discipline: "Product Builders",
    status: "active",
    description:
      "The second cohort for builders making products with real users. Applications open now.",
    detail:
      "New vertical. Higher bar. Everything learned from Cohort 01, applied.",
    cohortNumber: "02",
    year: "2026",
    ctaLabel: "VISIT SITE →",
    ctaHref: "https://cohort.quild.in/",
    isAnchor: true,
    anchorDescriptor: "Where builders prove things.",
    images: ["/hero.png", "/about.png", "/careers.png"],
  },
  // Hidden for developers: Creator Program is temporarily removed from the website.
  {
    id: "cohort-01",
    title: "Cohort 01",
    category: "COHORT",
    discipline: "Product Builders",
    status: "completed",
    description:
      "The first proof. Completed. The cohort that showed the model works.",
    detail:
      "Small by choice. Serious by default. Every member who finished had something live.",
    cohortNumber: "01",
    year: "2025",
    ctaLabel: "VISIT SITE →",
    ctaHref: "https://cohort.quild.in/",
    ctaExternal: true,
    images: ["/about-belief.png", "/repetitive-work.png"],
  },
  {
    id: "research-vertical",
    title: "Research Vertical",
    category: "RESEARCH",
    discipline: "Multi-disciplinary",
    status: "building",
    description:
      "Independent research on how builders learn, ship, and grow. Early stage.",
    detail:
      "Partnering with professors, researchers, and practitioners in every field.",
    year: "2026",
    ctaLabel: "FOLLOW PROGRESS →",
    ctaHref: "/blog",
    images: ["/but-standing-still.png", "/footer.png"],
  },
  {
    id: "quild-network",
    title: "Quild Network",
    category: "NETWORK",
    discipline: "Multi-disciplinary",
    status: "planned",
    description:
      "A permanent alumni and peer network — builders, researchers, scientists, and founders.",
    detail:
      "A blockchain-based professional identity. One ID across every Quild initiative.",
    year: "TBD",
    ctaLabel: "COMING SOON",
    ctaHref: "#",
    isAnchor: true,
    anchorDescriptor: "Where builders stay connected.",
    images: ["/hero-mobile.png", "/hero.png"],
  },
  {
    id: "design-cohort",
    title: "Design Cohort",
    category: "COHORT",
    discipline: "Design",
    status: "planned",
    description: "The cohort model built for product designers. Date TBD.",
    detail:
      "Design and engineering are converging. Quild will build a cohort for designers who want to cross the line.",
    year: "2027",
    ctaLabel: "COMING SOON",
    ctaHref: "#",
    images: ["/about.png", "/careers.png"],
  },
  {
    id: "engineering-cohort",
    title: "Engineering Cohort",
    category: "COHORT",
    discipline: "Engineering",
    status: "planned",
    description:
      "For engineers building products, not just writing code. Date TBD.",
    detail:
      "Systems thinking. Product sense. AI as a tool. Quild for engineers.",
    year: "2027",
    ctaLabel: "COMING SOON",
    ctaHref: "#",
    images: ["/blog.png", "/about-belief.png"],
  },
];

export const STATUS_META: Record<
  InitiativeStatus,
  {
    label: string;
    dot: string; // CSS color value
    text: string; // CSS color value
    border: string; // CSS color value
    bg: string; // CSS color value — very faint tint for badge bg
  }
> = {
  active: {
    label: "HAPPENING NOW",
    dot: "#4A8C5C",
    text: "#4A8C5C",
    border: "#4A8C5C",
    bg: "rgba(74,140,92,0.07)",
  },
  completed: {
    label: "SHIPPED",
    dot: "var(--sage)",
    text: "var(--sage)",
    border: "var(--sage)",
    bg: "rgba(74,92,78,0.07)",
  },
  building: {
    label: "IN PROGRESS",
    dot: "#B8860B",
    text: "#B8860B",
    border: "#B8860B",
    bg: "rgba(184,134,11,0.07)",
  },
  planned: {
    label: "PLANNED",
    dot: "var(--border)",
    text: "var(--muted)",
    border: "var(--border)",
    bg: "transparent",
  },
};

export const CATEGORY_META: Record<
  InitiativeCategory,
  { tileNumber: string; tileBg: string }
> = {
  COHORT: { tileNumber: "true", tileBg: "var(--surface)" },
  CREATOR: { tileNumber: "false", tileBg: "var(--surface)" },
  WORKSHOP: { tileNumber: "false", tileBg: "var(--surface)" },
  RESEARCH: { tileNumber: "false", tileBg: "var(--surface)" },
  NETWORK: { tileNumber: "false", tileBg: "var(--void)" }, // Network tile is dark
};

export const FILTERS = [
  "ALL",
  "HAPPENING NOW",
  "SHIPPED",
  "IN PROGRESS",
  "PLANNED",
] as const;
export type Filter = (typeof FILTERS)[number];

export const FILTER_TO_STATUS: Record<Filter, InitiativeStatus | null> = {
  ALL: null,
  "HAPPENING NOW": "active",
  SHIPPED: "completed",
  "IN PROGRESS": "building",
  PLANNED: "planned",
};
