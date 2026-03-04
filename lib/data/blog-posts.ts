export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  featured?: boolean;
  content: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "the-standard",
    title: "The standard we hold: builders first",
    excerpt:
      "What we mean by seriousness, and why it matters more than optics.",
    date: "Feb 12, 2026",
    author: "Quild Team",
    readTime: "4 min",
    featured: true,
    content:
      "Quild is built around a simple idea: the builder is the unit of progress. We select for action, not credentials. We care about craft, not hype. If you ship consistently, you belong here.\n\nOur programs exist to compress cycles: from idea to prototype, prototype to user, user to iteration. The community is the compounding engine — a place to share what you're building, get fast feedback, and learn in public.",
  },
  {
    slug: "how-cohorts-work",
    title: "How cohorts work at Quild",
    excerpt:
      "Structure, accountability, and why the grid is not just visual — it's cultural.",
    date: "Jan 28, 2026",
    author: "Programs",
    readTime: "5 min",
    content:
      "A cohort is a structured season. Weekly shipping. Clear milestones. Minimal ceremony. We combine building sessions, critiques, and technical workshops.\n\nYou leave with a shipped artifact, a sharper process, and relationships with builders who operate at your pace.",
  },
  {
    slug: "apply-once-build-forever",
    title: "Apply once. Build forever.",
    excerpt:
      "What acceptance unlocks — and what it doesn't.",
    date: "Dec 18, 2025",
    author: "Community",
    readTime: "3 min",
    content:
      "Quild isn't a subscription. It's a standard. If you're accepted, you're in — cohorts, workshops, events, and the network.\n\nThe expectation is simple: keep building, keep sharing, keep helping other builders build.",
  },
];
