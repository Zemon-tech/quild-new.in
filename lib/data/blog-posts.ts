export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category?: string;
  tag?: string;
  coverImage?: string;
  date: string;
  author: string;
  authorImage?: string;
  readTime: string;
  readTimeMinutes?: number;
  featured?: boolean;
  content: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "the-standard",
    title: "The standard we hold: builders first",
    excerpt:
      "What we mean by seriousness, and why it matters more than optics.",
    category: "Manifesto",
    tag: "builders",
    coverImage: "/the-best-builder.png",
    date: "Feb 12, 2026",
    author: "Quild Team",
    authorImage: "/logo.svg",
    readTime: "4 min",
    readTimeMinutes: 4,
    featured: true,
    content:
      "Quild is built around a simple idea: the builder is the unit of progress. We select for action, not credentials. We care about craft, not hype. If you ship consistently, you belong here.\n\nOur programs exist to compress cycles: from idea to prototype, prototype to user, user to iteration. The community is the compounding engine — a place to share what you're building, get fast feedback, and learn in public.",
  },
  {
    slug: "how-cohorts-work",
    title: "How cohorts work at Quild",
    excerpt:
      "Structure, accountability, and why the grid is not just visual — it's cultural.",
    category: "Operations",
    tag: "engineering",
    coverImage: "/build-public.png",
    date: "Jan 28, 2026",
    author: "Programs",
    authorImage: "/window.svg",
    readTime: "5 min",
    readTimeMinutes: 5,
    content:
      "A cohort is a structured season. Weekly shipping. Clear milestones. Minimal ceremony. We combine building sessions, critiques, and technical workshops.\n\nYou leave with a shipped artifact, a sharper process, and relationships with builders who operate at your pace.",
  },
  {
    slug: "apply-once-build-forever",
    title: "Apply once. Build forever.",
    excerpt:
      "What acceptance unlocks — and what it doesn't.",
    category: "Community",
    tag: "ai-tools",
    coverImage: "/ai-will-not.png",
    date: "Dec 18, 2025",
    author: "Community",
    authorImage: "/globe.svg",
    readTime: "3 min",
    readTimeMinutes: 3,
    content:
      "Quild isn't a subscription. It's a standard. If you're accepted, you're in — cohorts, workshops, events, and the network.\n\nThe expectation is simple: keep building, keep sharing, keep helping other builders build.",
  },
  {
    slug: "ship-before-you-talk",
    title: "Ship before you talk about shipping",
    excerpt: "The Quild rule that makes the biggest difference in week one.",
    category: "Builders",
    tag: "builders",
    coverImage: "/build-public.png",
    date: "Dec 05, 2025",
    author: "Shivang Kandoi",
    authorImage: "/window.svg",
    readTime: "3 min",
    readTimeMinutes: 3,
    content:
      "Shipping is the only honest metric. In Quild, your first week is about creating momentum: a small artifact, a public commit, a demo you can show.\n\nTalk comes later. Progress comes first.",
  },
  {
    slug: "using-ai-without-losing-your-mind",
    title: "Using AI without losing your thinking",
    excerpt: "How to stay the driver when the car can drive itself.",
    category: "AI & Tools",
    tag: "ai-tools",
    coverImage: "/repetitive-work.png",
    date: "Nov 22, 2025",
    author: "Satyajit Jena",
    authorImage: "/globe.svg",
    readTime: "6 min",
    readTimeMinutes: 6,
    content:
      "The best use of AI is not replacement — it's acceleration. Keep a tight loop: outline, attempt, verify, and write down what changed your mind.\n\nIf you can't explain the decision, you didn't make it.",
  },
  {
    slug: "build-in-public-not-marketing",
    title: "Build in public is not a marketing strategy",
    excerpt: "It's an accountability system. Here's how to make it work for you.",
    category: "Builders",
    tag: "builders",
    coverImage: "/build-public.png",
    date: "Nov 10, 2025",
    author: "Quild Team",
    authorImage: "/logo.svg",
    readTime: "4 min",
    readTimeMinutes: 4,
    content:
      "Build in public works when it forces clarity: weekly updates, concrete demos, honest constraints. The point isn't attention; it's cadence.\n\nCadence compounds.",
  },
  {
    slug: "the-two-hour-rule",
    title: "The two-hour rule for serious builders",
    excerpt: "Every day. No exceptions. This is what daily progress actually looks like.",
    category: "Builders",
    tag: "builders",
    coverImage: "/the-best-builder.png",
    date: "Oct 30, 2025",
    author: "Shivang Kandoi",
    authorImage: "/window.svg",
    readTime: "3 min",
    readTimeMinutes: 3,
    content:
      "Two hours is the minimum viable unit of deep work. Protect it. Same time, same ritual, same bar.\n\nIf you can do two hours daily, you can build anything.",
  },
  {
    slug: "cursor-vs-copilot",
    title: "Cursor vs Copilot: what we actually use",
    excerpt: "After 6 months of cohorts, here's what builders reach for first.",
    category: "AI & Tools",
    tag: "ai-tools",
    coverImage: "/ai-will-not.png",
    date: "Oct 18, 2025",
    author: "Satyajit Jena",
    authorImage: "/globe.svg",
    readTime: "5 min",
    readTimeMinutes: 5,
    content:
      "Tools are only useful if they reduce friction. We pick defaults that keep context tight: good navigation, predictable edits, and fast iteration.\n\nThe best tool is the one you don't think about.",
  },
  {
    slug: "prompting-for-engineers",
    title: "Prompting for engineers, not marketers",
    excerpt: "Technical prompting patterns that actually change what you ship.",
    category: "AI & Tools",
    tag: "ai-tools",
    coverImage: "/repetitive-work.png",
    date: "Oct 05, 2025",
    author: "Quild Team",
    authorImage: "/logo.svg",
    readTime: "4 min",
    readTimeMinutes: 4,
    content:
      "Treat prompts like interfaces: define inputs, define outputs, add tests. The best prompt is a spec you can rerun.\n\nEngineering is reproducibility.",
  },
  {
    slug: "systems-thinking",
    title: "Systems thinking is the real skill",
    excerpt: "Not React. Not Python. The mental model that makes everything else faster.",
    category: "Engineering",
    tag: "engineering",
    coverImage: "/about-belief.png",
    date: "Sep 28, 2025",
    author: "Satyajit Jena",
    authorImage: "/globe.svg",
    readTime: "7 min",
    readTimeMinutes: 7,
    content:
      "A system is constraints + feedback + incentives. If you can map those, you can debug organizations, software, and yourself.\n\nWrite the system down.",
  },
  {
    slug: "robotics-is-software-now",
    title: "Robotics is just software now",
    excerpt: "Why the line between CS and mechanical engineering is dissolving.",
    category: "Engineering",
    tag: "engineering",
    coverImage: "/about.png",
    date: "Sep 15, 2025",
    author: "Quild Team",
    authorImage: "/logo.svg",
    readTime: "5 min",
    readTimeMinutes: 5,
    content:
      "When hardware gets cheap and software gets powerful, iteration moves upstream. Robotics becomes a product problem: reliability, feedback loops, and deployment.\n\nThe stack is shifting.",
  },
  {
    slug: "document-your-decisions",
    title: "Document your decisions, not your code",
    excerpt: "The habit that separates good engineers from great ones.",
    category: "Engineering",
    tag: "engineering",
    coverImage: "/but-standing-still.png",
    date: "Aug 30, 2025",
    author: "Shivang Kandoi",
    authorImage: "/window.svg",
    readTime: "4 min",
    readTimeMinutes: 4,
    content:
      "Code changes. Decisions persist. Write down what you chose, what you rejected, and what you'd try next.\n\nFuture you is your first stakeholder.",
  },
];
