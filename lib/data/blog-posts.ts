export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category?: string;
  tag?: string;
  coverImage?: string;
  imageCaption?: string;
  date: string;
  author: string;
  authorInitials?: string;
  authorImage?: string;
  authorPhoto?: string;
  authorBio?: string;
  readTime: string;
  readTimeMinutes?: number;
  featured?: boolean;
  content: string;
  seoTitle?: string;
  metaDescription?: string;
  keywords?: string[];
  ogImage?: string;
};

export const blogPosts: BlogPost[] = [
  // POST 01 - BUILDERS
  {
    slug: "the-standard-we-hold",
    title: "The Standard We Hold: What It Actually Means to Be a Serious Builder",
    excerpt: "Quild isn't for everyone — and that's the point. Here's the exact standard we hold every member to.",
    category: "Builders",
    tag: "BUILDERS",
    coverImage: "https://i.pinimg.com/1200x/e7/21/09/e72109cc232ba8cbfb7b5ec1ff832593.jpg",
    imageCaption: "Photo: Quild",
    date: "Feb 12, 2026",
    author: "Shivang Kandoi",
    authorInitials: "SK",
    authorPhoto: "https://zemonhouseofbuilders.in/shivang.png",
    authorBio: "Shivang builds tools and systems for builders. At Quild, he focuses on shipping velocity and craft.",
    readTime: "5 min",
    readTimeMinutes: 5,
    featured: true,
    seoTitle: "What Makes a Serious Builder? The Quild Standard Explained",
    metaDescription: "Quild isn't for everyone — and that's the point. Here's the exact standard we hold every member to, and why it makes the community stronger.",
    keywords: ["serious builder community", "builder mindset", "how to become a better developer", "builder accountability", "Quild community Delhi"],
    content: `<p>Most communities say they're selective. They mean it in the marketing sense — everyone is welcome as long as they pay. We mean it in the literal sense: not everyone should be here.</p>

<h2>What "serious" actually means</h2>
<p>Not about skill level — a beginner can be serious, a senior engineer can be unserious. Seriousness = showing up when it's inconvenient.</p>

<h2>The three behaviours we watch for</h2>
<p>Do they ship before they're ready? Do they ask for feedback before they think they're done? Do they document what they learned, not just what they built?</p>

<h2>Why the bar matters for everyone</h2>
<p>One person coasting lowers the room. The reason Quild cohorts work isn't the curriculum — it's the density of people who give a damn.</p>

<h2>How we enforce it (without being jerks)</h2>
<p>No formal scorecards. Peer pressure in the good sense — you don't want to be the one who didn't ship this week.</p>

<p>We built Quild for the person who was already trying hard in a room that didn't care. If that's you — the bar is high, but it's yours to clear.</p>`,
  },
  // POST 02 - BUILDERS
  {
    slug: "ship-before-you-talk",
    title: "Ship Before You Talk About Shipping",
    excerpt: "The single habit that separates builders who make things from builders who talk about making things.",
    category: "Builders",
    tag: "BUILDERS",
    coverImage: "https://i.pinimg.com/736x/a3/d2/74/a3d274a20a01a4acff57472cba40bf1a.jpg",
    imageCaption: "Illustration: Quild",
    date: "Dec 05, 2025",
    author: "Shivang Kandoi",
    authorInitials: "SK",
    authorPhoto: "https://zemonhouseofbuilders.in/shivang.png",
    authorBio: "Shivang builds tools and systems for builders. At Quild, he focuses on shipping velocity and craft.",
    readTime: "4 min",
    readTimeMinutes: 4,
    seoTitle: "Stop Talking About Your Side Project — Ship It First | Quild",
    metaDescription: "The single habit that separates builders who make things from builders who talk about making things. A lesson from Cohort 01.",
    keywords: ["how to ship side projects", "builder habits", "stop overthinking and build", "indie developer tips", "Quild cohort"],
    content: `<p>In Cohort 01, one of our members spent the first two weeks explaining what he was going to build. By week three, someone else had already shipped a simpler version of the same idea. The lesson wrote itself.</p>

<h2>The talk-to-ship ratio problem</h2>
<p>Every hour you spend describing something is an hour you didn't spend building it. Talking feels like progress — it releases the same satisfaction chemicals.</p>

<h2>What shipping before you're ready actually teaches you</h2>
<p>You learn what's wrong with the idea 10x faster with a live URL than with a doc. Real users reveal real problems.</p>

<h2>The Quild rule</h2>
<p>In every cohort session: show the thing, not the plan. If you can't show anything, you talk about what blocked you — not what you're going to do.</p>

<h2>How to start</h2>
<p>48-hour rule: whatever you're planning, make a version of it in 48 hours. It will be bad. Ship it anyway.</p>

<p>Talk is cheap. Links are not.</p>`,
  },
  // POST 03 - BUILDERS
  {
    slug: "build-in-public-is-accountability",
    title: "Build in Public Isn't a Marketing Strategy. It's an Accountability System.",
    excerpt: "Everyone says 'build in public' like it's a growth hack. At Quild, we use it as a commitment device.",
    category: "Builders",
    tag: "BUILDERS",
    coverImage: "https://i.pinimg.com/736x/47/de/df/47dedf53c5aec23d7b68c93653448486.jpg",
    imageCaption: "Photo: Quild",
    date: "Nov 10, 2025",
    author: "Quild Team",
    authorInitials: "QT",
    authorBio: "Quild is a builder-first community. We ship weekly, share work-in-progress, and iterate in public.",
    readTime: "4 min",
    readTimeMinutes: 4,
    seoTitle: "Why Building in Public Is Really About Accountability | Quild",
    metaDescription: "Everyone says 'build in public' like it's a growth hack. At Quild, we use it as a commitment device. Here's the difference.",
    keywords: ["build in public", "developer accountability", "indie hacker community", "building in public tips", "Quild builders"],
    content: `<p>Building in public got popular as a way to get followers. We use it for a completely different reason: to make it harder to quit.</p>

<h2>The audience is irrelevant</h2>
<p>You don't need 10,000 followers for build in public to work. Even one person watching changes your behaviour.</p>

<h2>How Quild uses it</h2>
<p>Weekly updates posted in the community — not for clout, for record. The question is always: "what changed this week?"</p>

<h2>What to actually post</h2>
<p>What you shipped (with a link if possible). What broke. What you changed your mind about. NOT: what you're going to do next week.</p>

<h2>The side effect</h2>
<p>After 4 weeks of build in public, your taste improves. You start making decisions you'd be comfortable explaining.</p>

<p>Post the update. Even if nobody reads it. Especially if nobody reads it.</p>`,
  },
  // POST 04 - AI & TOOLS
  {
    slug: "using-ai-without-losing-your-thinking",
    title: "Using AI Without Losing Your Thinking",
    excerpt: "AI makes you faster. It can also make you worse if you use it wrong. Here's the framework Quild teaches.",
    category: "AI & Tools",
    tag: "AI-TOOLS",
    coverImage: "https://i.pinimg.com/736x/05/c7/21/05c721269ec50303a652364eac0c6e30.jpg",
    imageCaption: "Photo: Quild",
    date: "Nov 22, 2025",
    author: "Satyajit Jena",
    authorInitials: "SJ",
    authorPhoto: "https://zemonhouseofbuilders.in/satyajit.png",
    authorBio: "Satyajit is the CTO and co-founder of Quild.",
    readTime: "6 min",
    readTimeMinutes: 6,
    seoTitle: "How to Use AI Tools Without Becoming Dependent on Them | Quild",
    metaDescription: "AI makes you faster. It can also make you worse if you use it wrong. Here's the framework Quild teaches in every cohort.",
    keywords: ["how to use AI tools effectively", "AI for developers", "cursor AI tips", "using ChatGPT for coding", "AI productivity for builders"],
    content: `<p>The best use of AI is not replacement — it's acceleration. There's a version of using AI that makes you faster and sharper. There's another version that makes you dependent and shallow.</p>

<h2>The dependency trap</h2>
<p>What it looks like: you can't write a function without asking Claude first. What it produces: code you can't debug, decisions you can't explain.</p>

<h2>The acceleration framework</h2>
<p>Outline it yourself first — even badly. Use AI to attempt, then verify the output against your own reasoning. Write down what changed your mind and why.</p>

<h2>The tools we use at Quild</h2>
<p>Cursor for code — best-in-class for context-aware completions. Claude for reasoning through architecture decisions. Perplexity for research that needs sources.</p>

<h2>The test</h2>
<p>Can you explain every decision in your codebase? If not — that's not AI's fault. That's how you used it.</p>

<p>If you can't explain the decision, you didn't make it. AI made it for you. That's the line.</p>`,
  },
  // POST 05 - AI & TOOLS
  {
    slug: "cursor-vs-copilot-what-we-use",
    title: "Cursor vs Copilot: What We Actually Reach For After 6 Months of Cohorts",
    excerpt: "After 6 months of running cohorts with real builders, here's which AI coding tool Quild members actually prefer.",
    category: "AI & Tools",
    tag: "AI-TOOLS",
    coverImage: "https://i.pinimg.com/736x/81/90/ea/8190ea7d9bab6033b433eabb72fdbd31.jpg",
    imageCaption: "Illustration: Quild",
    date: "Oct 18, 2025",
    author: "Satyajit Jena",
    authorInitials: "SJ",
    authorPhoto: "https://zemonhouseofbuilders.in/satyajit.png",
    authorBio: "Satyajit is the CTO and co-founder of Quild.",
    readTime: "5 min",
    readTimeMinutes: 5,
    seoTitle: "Cursor vs GitHub Copilot — A Builder's Honest Comparison | Quild",
    metaDescription: "After 6 months of running cohorts with real builders, here's which AI coding tool Quild members actually prefer and why.",
    keywords: ["Cursor vs Copilot", "best AI coding tool 2025", "Cursor AI review", "GitHub Copilot review", "AI tools for developers India"],
    content: `<p>We've watched a full cohort of builders go from zero AI tools to deeply embedded AI workflows. After tracking what they reach for and why, here's the honest breakdown.</p>

<h2>What we were looking for</h2>
<p>Speed of context understanding, quality of multi-file edits, ability to follow architectural decisions, trust.</p>

<h2>Cursor — what it does well</h2>
<p>Composer mode for multi-file changes is genuinely different. Context window across the entire repo is a multiplier for large projects.</p>

<h2>Copilot — what it does well</h2>
<p>Native GitHub integration is genuinely useful for PR reviews. Inline completions are still the fastest in the market.</p>

<h2>What Quild cohort members actually use</h2>
<p>Cursor won for project work — anything with more than 5 files. Copilot stayed for quick scripts and single-file utilities.</p>

<p>Pick the one that makes you faster on your actual work. Switch when it stops doing that.</p>`,
  },
  // POST 06 - AI & TOOLS
  {
    slug: "prompting-for-engineers",
    title: "Prompting for Engineers — Not Marketers",
    excerpt: "The prompting advice online is written for writers and marketers. Here's how engineers should actually think about prompting AI.",
    category: "AI & Tools",
    tag: "AI-TOOLS",
    coverImage: "https://i.pinimg.com/736x/55/d3/d2/55d3d2556aedbdc39c38b3b879ed6360.jpg",
    imageCaption: "Photo: Quild",
    date: "Oct 05, 2025",
    author: "Satyajit Jena",
    authorInitials: "SJ",
    authorPhoto: "https://zemonhouseofbuilders.in/satyajit.png",
    authorBio: "Satyajit is the CTO and co-founder of Quild.",
    readTime: "5 min",
    readTimeMinutes: 5,
    seoTitle: "How Engineers Should Write AI Prompts Differently | Quild",
    metaDescription: "The prompting advice online is written for writers and marketers. Here's how engineers should actually think about prompting AI.",
    keywords: ["AI prompting for developers", "engineering prompts for AI", "how to prompt Claude", "technical prompting tips", "prompt engineering 2025"],
    content: `<p>Most prompting advice is written for people who want AI to write emails. Engineers have completely different needs — and different failure modes.</p>

<h2>The engineer's failure modes</h2>
<p>Underspecifying constraints, not providing context about the existing codebase, accepting the first output without pushing back.</p>

<h2>The four things every engineering prompt needs</h2>
<p>Context: what exists already, what constraints exist. Goal: what you're actually trying to achieve. Format: how you want the output structured. Verification criteria: how will you know if the answer is correct?</p>

<h2>Concrete examples</h2>
<p>Bad prompt vs good prompt for: writing a function, debugging an error, architecture decisions.</p>

<h2>The meta-skill</h2>
<p>Good prompting is the same skill as good spec writing. If you can't write a clear prompt, you don't understand the problem well enough yet.</p>

<p>The quality of your prompt reveals the quality of your thinking. Fix the thinking first.</p>`,
  },
  // POST 07 - ENGINEERING
  {
    slug: "systems-thinking-for-builders",
    title: "Systems Thinking Is the Real Skill — Not React, Not Python",
    excerpt: "Frameworks come and go. The builders who last are the ones who understand how systems work.",
    category: "Engineering",
    tag: "ENGINEERING",
    coverImage: "https://i.pinimg.com/736x/e9/5a/e7/e95ae7f3dbec7d5f6d40cc6f1d01087d.jpg",
    imageCaption: "Illustration: Quild",
    date: "Sep 28, 2025",
    author: "Satyajit Jena",
    authorInitials: "SJ",
    authorPhoto: "https://zemonhouseofbuilders.in/satyajit.png",
    authorBio: "Satyajit is the CTO and co-founder of Quild.",
    readTime: "7 min",
    readTimeMinutes: 7,
    seoTitle: "Why Systems Thinking Matters More Than Any Framework | Quild",
    metaDescription: "Frameworks come and go. The builders who last are the ones who understand how systems work. Here's how Quild teaches this.",
    keywords: ["systems thinking software engineering", "how to become a better programmer", "software architecture fundamentals", "learn to code beyond tutorials", "Quild engineering"],
    content: `<p>Every year there's a new framework you're supposed to learn. Every year the engineers who understand systems are more valuable than the engineers who know the newest tool.</p>

<h2>What systems thinking actually is</h2>
<p>Not a tool, not a methodology — a mental model. Seeing how components relate, not just what they do. Understanding feedback loops.</p>

<h2>Why tutorials don't teach it</h2>
<p>Tutorials are optimised for completion, not understanding. "It works" is not the same as "I understand why it works".</p>

<h2>How to build it</h2>
<p>Read source code of tools you use. Draw your own diagrams before reading anyone else's. Debug without Stack Overflow for one week — just logs and docs.</p>

<h2>What it looks like in practice at Quild</h2>
<p>In Cohort 01, we required every member to explain their architecture to someone else before writing a line of code.</p>

<p>React will be replaced. Your ability to understand systems won't be.</p>`,
  },
  // POST 08 - ENGINEERING
  {
    slug: "document-your-decisions",
    title: "Document Your Decisions, Not Your Code",
    excerpt: "Comments explain what. Good documentation explains why. The habit that separates good engineers from great ones.",
    category: "Engineering",
    tag: "ENGINEERING",
    coverImage: "https://i.pinimg.com/736x/3e/20/5a/3e205a8f289efddf8f80ce23764724c3.jpg",
    imageCaption: "Photo: Quild",
    date: "Aug 30, 2025",
    author: "Satyajit Jena",
    authorInitials: "SJ",
    authorPhoto: "https://zemonhouseofbuilders.in/satyajit.png",
    authorBio: "Satyajit is the CTO and co-founder of Quild.",
    readTime: "4 min",
    readTimeMinutes: 4,
    seoTitle: "Why You Should Document Decisions Instead of Code | Quild",
    metaDescription: "Comments explain what. Good documentation explains why. The habit that separates good engineers from great ones — and how we build it at Quild.",
    keywords: ["software documentation best practices", "architecture decision records", "how to write better code documentation", "engineering habits", "developer best practices"],
    content: `<p>Your code explains what it does. The hard part — the part that actually matters — is knowing why it does it that way and not another way.</p>

<h2>The problem with documenting code</h2>
<p>Code comments go stale. Architecture decisions don't. "What" is obvious from the code. "Why" disappears the moment the person who made the decision leaves.</p>

<h2>What to document instead</h2>
<p>Architecture Decision Records (ADRs): one document per significant decision. Format: Context → Decision → Consequences.</p>

<h2>The Quild practice</h2>
<p>Every cohort member maintains a decision log. It's not formal — a Notion doc with bullet points is fine.</p>

<h2>The compound effect</h2>
<p>After 8 weeks: a record of how you think, not just what you built. This is the most valuable artifact of any project — more than the code itself.</p>

<p>Code is the output. Decisions are the work. Document the work.</p>`,
  },
  // POST 09 - COMMUNITY
  {
    slug: "how-cohorts-work",
    title: "How Cohorts Work at Quild — Structure, Accountability, and Why the Grid Is Cultural",
    excerpt: "Quild runs cohort programs, not courses. Here's exactly how they work, what we expect from members.",
    category: "Community",
    tag: "COMMUNITY",
    coverImage: "https://i.pinimg.com/1200x/a2/0e/d2/a20ed2cb3dd1bd8dfb1b09ad1bf6d43b.jpg",
    imageCaption: "Illustration: Quild",
    date: "Jan 28, 2026",
    author: "Shivang Kandoi",
    authorInitials: "SK",
    authorPhoto: "https://zemonhouseofbuilders.in/shivang.png",
    authorBio: "Shivang builds tools and systems for builders. At Quild, he focuses on shipping velocity and craft.",
    readTime: "5 min",
    readTimeMinutes: 5,
    seoTitle: "How Quild's Cohort Program Works — Structure & Accountability | Quild",
    metaDescription: "Quild runs cohort programs, not courses. Here's exactly how they work, what we expect from members, and why the structure matters.",
    keywords: ["Quild cohort program", "builder community India", "tech cohort Delhi", "how to join Quild", "software development cohort 2025"],
    content: `<p>A cohort is not a course. A course is passive — you watch, you learn, you leave. A cohort is a commitment — you show up, you build, you are accountable to the people next to you.</p>

<h2>The structure</h2>
<p>8-week programs, fixed cohort size (deliberately small). Weekly sync sessions — everyone shows what they shipped that week. No lectures.</p>

<h2>What we actually measure</h2>
<p>Not grades, not test scores. Progress visibility: is this person moving? Engagement quality: when they give feedback, is it useful? Consistency.</p>

<h2>The accountability mechanisms</h2>
<p>Async updates posted every week — not optional. Peer review pairs — you review someone's work, they review yours. End-of-cohort demo: build something real.</p>

<h2>What Cohort 01 taught us</h2>
<p>The members who shipped the most were not the most skilled — they were the most consistent. The biggest variable wasn't talent or time — it was environment.</p>

<p>We're not building a program. We're building a room where serious builders find each other.</p>`,
  },
  // POST 10 - COMMUNITY
  {
    slug: "apply-once-build-forever",
    title: "Apply Once. Build Forever. What Acceptance Into Quild Actually Unlocks",
    excerpt: "Getting into Quild isn't the achievement. What you build after is. Here's what membership actually gives you access to.",
    category: "Community",
    tag: "COMMUNITY",
    coverImage: "https://i.pinimg.com/1200x/58/01/1a/58011a854c28215a4c8d25ade6e0aa9a.jpg",
    imageCaption: "Photo: Quild",
    date: "Dec 18, 2025",
    author: "Quild Team",
    authorInitials: "QT",
    authorBio: "Quild is a builder-first community. We ship weekly, share work-in-progress, and iterate in public.",
    readTime: "3 min",
    readTimeMinutes: 3,
    seoTitle: "What Happens After You Join Quild — Benefits & Community Access | Quild",
    metaDescription: "Getting into Quild isn't the achievement. What you build after is. Here's what membership actually gives you access to.",
    keywords: ["Quild membership", "builder community benefits", "how to join Quild", "tech community India 2025", "developer community Delhi"],
    content: `<p>A lot of communities sell access. We sell nothing — you apply, we decide together if it's a fit, and if it is, you're in.</p>

<h2>What you get immediately</h2>
<p>Access to the current cohort's community channel. Peer connections with every member across all cohorts. Office hours with Shivang and Satyajit.</p>

<h2>What you earn over time</h2>
<p>Trust — the most valuable thing in any professional community. Visibility: builders who show up consistently become the ones people refer.</p>

<h2>What it doesn't unlock</h2>
<p>A job guarantee (we're honest about this). A shortcut — the work is still yours to do. Prestige for its own sake.</p>

<p>The application is a filter. The community is the thing. Apply when you're ready to show up.</p>`,
  },
  // POST 11 - COMMUNITY
  {
    slug: "two-founders-one-mission",
    title: "Two 19-Year-Olds, One Mission: Why We Started Quild",
    excerpt: "Shivang Kandoi and Satyajit Jena started Quild at 19 because they kept watching talented people stay stuck in the wrong room.",
    category: "Community",
    tag: "COMMUNITY",
    coverImage: "https://i.pinimg.com/736x/97/79/fa/9779fad3ff892b9c466beea75fa6fa3b.jpg",
    imageCaption: "Photo: Quild",
    date: "Feb 01, 2026",
    author: "Shivang Kandoi & Satyajit Jena",
    authorInitials: "SK",
    authorPhoto: "https://zemonhouseofbuilders.in/shivang.png",
    authorBio: "Shivang and Satyajit are 19-year-old CS students at USICT, GGSIPU, and co-founders of Quild.",
    readTime: "5 min",
    readTimeMinutes: 5,
    seoTitle: "The Story Behind Quild — Founded by Shivang Kandoi and Satyajit Jena | Quild",
    metaDescription: "Shivang Kandoi and Satyajit Jena started Quild at 19 because they kept watching talented people stay stuck in the wrong room. This is that story.",
    keywords: ["Quild founders", "Shivang Kandoi Satyajit Jena", "startup story India", "young founders Delhi", "builder community origin story"],
    content: `<p>We didn't start Quild because we had it figured out. We started it because we kept watching people smarter than us stay stuck — not because they couldn't build, but because nobody had built the room they needed.</p>

<h2>The problem we kept seeing</h2>
<p>Friends who were talented but building in isolation. The Delhi tech scene: opportunities exist, but community infrastructure is thin.</p>

<h2>Why us, why now</h2>
<p>We're 19. We study CS at USICT, GGSIPU. We have no investors, no famous advisors, no legacy to lean on.</p>

<h2>What we built and why</h2>
<p>Cohort programs: because accountability requires other people. Small by design: quality of builders over quantity of signups.</p>

<h2>What we want to build</h2>
<p>Start with software development, expand to design, product, AI/ML, robotics, mechanical engineering. Long game: the largest community of serious builders in the world.</p>

<p><strong>Shivang:</strong> I kept watching people smarter than me stay stuck because they didn't have the right environment. I decided to stop waiting for someone else to build it.</p>

<p><strong>Satyajit:</strong> I believe the best engineering happens when you're surrounded by people who care as much as you do. Quild is us building that environment from scratch.</p>`,
  },
  // POST 12 - COMMUNITY
  {
    slug: "delhi-to-everywhere",
    title: "Delhi to Everywhere — Why We Started Here and Where We're Going",
    excerpt: "Quild started in Delhi in 2025 with zero investors and a clear belief. Here's why we started here, what we've learned.",
    category: "Community",
    tag: "COMMUNITY",
    coverImage: "https://i.pinimg.com/1200x/e7/21/09/e72109cc232ba8cbfb7b5ec1ff832593.jpg",
    imageCaption: "Photo: Quild",
    date: "Feb 05, 2026",
    author: "Shivang Kandoi",
    authorInitials: "SK",
    authorPhoto: "https://zemonhouseofbuilders.in/shivang.png",
    authorBio: "Shivang builds tools and systems for builders. At Quild, he focuses on shipping velocity and craft.",
    readTime: "4 min",
    readTimeMinutes: 4,
    seoTitle: "Why Quild Started in Delhi and Plans to Go Global | Quild",
    metaDescription: "Quild started in Delhi in 2025 with zero investors and a clear belief. Here's why we started here, what we've learned, and where the community is going.",
    keywords: ["tech community Delhi", "Indian developer community", "builder community India 2025", "Quild expansion", "tech startups Delhi"],
    content: `<p>People ask why Delhi. The honest answer: because that's where we are, and we believe serious builders exist everywhere — not just in Bangalore or San Francisco.</p>

<h2>Why Delhi makes sense</h2>
<p>One of the largest student populations in India — USICT, DTU, NSUT, IGDTUW all within reach. Huge untapped builder talent.</p>

<h2>What we've learned from starting here</h2>
<p>Physical proximity matters even for digital builders. The first 20 members of any community set the culture for the next 200.</p>

<h2>The expansion plan</h2>
<p>Next: other Delhi-NCR engineering colleges and universities. Then: Bangalore, Mumbai, Hyderabad. Long term: remote-first cohorts for builders anywhere.</p>

<h2>What stays constant</h2>
<p>Small cohorts — always. High bar for entry — always. Zero investors changing the direction — for as long as we can manage it.</p>

<p>We started in Delhi because that's where we are. We'll go everywhere because that's where builders are.</p>`,
  },
  // POST 13 - BUILDERS
  {
    slug: "the-two-hour-rule",
    title: "The Two-Hour Rule for Serious Builders",
    excerpt: "Every day. No exceptions. This is what daily progress actually looks like.",
    category: "Builders",
    tag: "BUILDERS",
    coverImage: "https://i.pinimg.com/736x/b0/10/b3/b010b3665edda637c6f8ee130d6caef6.jpg",
    imageCaption: "Photo: Quild",
    date: "Oct 30, 2025",
    author: "Shivang Kandoi",
    authorInitials: "SK",
    authorPhoto: "https://zemonhouseofbuilders.in/shivang.png",
    authorBio: "Shivang builds tools and systems for builders. At Quild, he focuses on shipping velocity and craft.",
    readTime: "3 min",
    readTimeMinutes: 3,
    seoTitle: "The Two-Hour Rule for Daily Progress | Quild",
    metaDescription: "Every day. No exceptions. This is what daily progress actually looks like for serious builders.",
    keywords: ["daily builder habits", "how to ship consistently", "two hour rule", "builder discipline", "Quild productivity"],
    content: `<p>The most successful builders we know have one thing in common: they show up every day. Not just when they feel inspired. Every single day.</p>

<h2>What the two-hour rule actually is</h2>
<p>Spend two hours on your project every single day. No matter what. No excuses. No exceptions.</p>

<h2>Why two hours specifically</h2>
<p>Two hours is enough to make real progress. It's short enough that you can't say "I don't have time". It's long enough that compound effects kick in.</p>

<h2>The math of consistency</h2>
<p>Two hours daily = 730 hours yearly. That's 18 full work weeks. Most people don't get 18 weeks of focused work done in a year.</p>

<h2>How to make it stick</h2>
<p>Same time every day. Same place. No phone. No social media. Just you and the work.</p>

<p>Two hours daily beats eight hours once a week. Every single time.</p>`,
  },
  // POST 14 - BUILDERS
  {
    slug: "the-fear-of-shipping",
    title: "The Fear of Shipping Is the Real Blocker",
    excerpt: "Perfectionism isn't about quality. It's about fear. Here's how to move past it.",
    category: "Builders",
    tag: "BUILDERS",
    coverImage: "https://i.pinimg.com/1200x/e7/c8/bb/e7c8bb268b51784f64a719a08bd1a51a.jpg",
    imageCaption: "Photo: Quild",
    date: "Sep 20, 2025",
    author: "Shivang Kandoi",
    authorInitials: "SK",
    authorPhoto: "https://zemonhouseofbuilders.in/shivang.png",
    authorBio: "Shivang builds tools and systems for builders. At Quild, he focuses on shipping velocity and craft.",
    readTime: "4 min",
    readTimeMinutes: 4,
    seoTitle: "How to Overcome Fear of Shipping Your Projects | Quild",
    metaDescription: "Perfectionism isn't about quality. It's about fear. Here's how to move past it and actually ship your work.",
    keywords: ["fear of shipping", "perfectionism in coding", "how to launch projects", "builder mindset", "overcoming creative blocks"],
    content: `<p>Every builder knows the feeling. The project is 90% done, but you can't ship it. It needs one more feature, one more polish, one more week.</p>

<h2>What perfectionism really is</h2>
<p>Perfectionism isn't about high standards. It's about fear. Fear of criticism, fear of failure, fear of being seen.</p>

<h2>The cost of not shipping</h2>
<p>Unshipped projects teach you nothing. Shipped projects teach you everything. The market decides what's good, not your internal critic.</p>

<h2>The minimum viable ship</h2>
<p>What's the smallest version you can ship that still delivers value? Ship that. Then iterate based on real feedback.</p>

<h2>What we learned from Cohort 01</h2>
<p>The members who shipped the most weren't the most skilled. They were the ones who learned to hit publish before they felt ready.</p>

<p>Done is better than perfect. Perfect is never done anyway.</p>`,
  },
  // POST 15 - AI & TOOLS
  {
    slug: "ai-tools-that-actually-work",
    title: "AI Tools That Actually Work for Real Projects",
    excerpt: "After testing dozens of AI tools with Quild members, here's what we actually use in production.",
    category: "AI & Tools",
    tag: "AI-TOOLS",
    coverImage: "https://i.pinimg.com/736x/0d/5e/35/0d5e3546440e112a0d92a3a273160f7f.jpg",
    imageCaption: "Photo: Quild",
    date: "Sep 15, 2025",
    author: "Satyajit Jena",
    authorInitials: "SJ",
    authorPhoto: "https://zemonhouseofbuilders.in/satyajit.png",
    authorBio: "Satyajit is the CTO and co-founder of Quild.",
    readTime: "6 min",
    readTimeMinutes: 6,
    seoTitle: "AI Tools That Actually Work for Developers | Quild",
    metaDescription: "After testing dozens of AI tools with Quild members, here's what we actually use in production and what's just hype.",
    keywords: ["AI tools for developers", "best AI coding tools 2025", "AI productivity tools", "developer AI stack", "Quild AI recommendations"],
    content: `<p>We've tested every AI tool that promised to make developers faster. Most don't deliver. Here's what actually works in real projects.</p>

<h2>The tools that survived our testing</h2>
<p>Cursor for code completion with context. Claude for reasoning through complex problems. Perplexity for research with sources.</p>

<h2>The tools that didn't make the cut</h2>
<p>AI code review tools that miss obvious bugs. Auto-documentation that hallucinates APIs. Debug assistants that can't read logs.</p>

<h2>Our evaluation criteria</h2>
<p>Does it work on real codebases? Does it understand context? Does it save more time than it costs to verify?</p>

<h2>The stack we recommend</h2>
<p>Cursor for daily coding. Claude for architecture decisions. Perplexity for research. Everything else is optional.</p>

<p>The best AI tool is the one that makes you faster, not the one with the most features.</p>`,
  },
  // POST 16 - AI & TOOLS
  {
    slug: "the-future-of-coding",
    title: "The Future of Coding Isn't No-Code. It's AI-Assisted.",
    excerpt: "AI won't replace developers. It will replace developers who don't use AI. Here's how to stay ahead.",
    category: "AI & Tools",
    tag: "AI-TOOLS",
    coverImage: "https://i.pinimg.com/736x/ce/69/09/ce6909c91b31b53746c8b117ab443f46.jpg",
    imageCaption: "Photo: Quild",
    date: "Aug 25, 2025",
    author: "Satyajit Jena",
    authorInitials: "SJ",
    authorPhoto: "https://zemonhouseofbuilders.in/satyajit.png",
    authorBio: "Satyajit is the CTO and co-founder of Quild.",
    readTime: "5 min",
    readTimeMinutes: 5,
    seoTitle: "The Future of Coding: AI-Assisted Development | Quild",
    metaDescription: "AI won't replace developers. It will replace developers who don't use AI. Here's how to stay ahead in the AI era.",
    keywords: ["future of programming", "AI and software development", "will AI replace coders", "AI assisted coding", "developer skills 2025"],
    content: `<p>Everyone's talking about no-code tools replacing developers. They're missing the real story: AI is changing what it means to code.</p>

<h2>What no-code gets wrong</h2>
<p>No-code assumes programming is about syntax. It's not. It's about thinking through problems, managing complexity, making tradeoffs.</p>

<h2>What AI-assisted gets right</h2>
<p>AI handles the mechanical parts: syntax, boilerplate, patterns. You handle the thinking: architecture, decisions, debugging.</p>

<h2>The new developer skills</h2>
<p>Prompting becomes as important as typing. System design becomes more valuable than framework knowledge. Verification becomes critical.</p>

<h2>How Quild prepares builders</h2>
<p>We teach AI as a thinking partner, not a replacement. You still need to understand the fundamentals. You just work faster.</p>

<p>The best developers in 5 years won't be the best coders. They'll be the best thinkers with AI tools.</p>`,
  },
  // POST 17 - ENGINEERING
  {
    slug: "code-quality-is-team-productivity",
    title: "Code Quality Isn't About Cleanliness. It's About Team Productivity.",
    excerpt: "The real reason we write clean code isn't for ourselves. It's for the team that comes after us.",
    category: "Engineering",
    tag: "ENGINEERING",
    coverImage: "https://i.pinimg.com/1200x/1e/0d/50/1e0d50be17e200340708c9634515a610.jpg",
    imageCaption: "Photo: Quild",
    date: "Aug 10, 2025",
    author: "Satyajit Jena",
    authorInitials: "SJ",
    authorPhoto: "https://zemonhouseofbuilders.in/satyajit.png",
    authorBio: "Satyajit is the CTO and co-founder of Quild.",
    readTime: "5 min",
    readTimeMinutes: 5,
    seoTitle: "Code Quality and Team Productivity | Quild",
    metaDescription: "The real reason we write clean code isn't for ourselves. It's for the team that comes after us. Here's how to think about code quality.",
    keywords: ["code quality best practices", "clean code principles", "team productivity software", "software engineering standards", "code maintainability"],
    content: `<p>Junior developers think clean code is about following rules. Senior developers know it's about making the team faster.</p>

<h2>What clean code actually optimizes for</h2>
<p>Not the compiler. Not your future self. The next developer who has to change this code at 2 AM when something breaks.</p>

<h2>The productivity multiplier</h2>
<p>Good code is read 10x more than it's written. Every minute you spend making it clear saves 10 minutes for someone else.</p>

<h2>The real metrics</h2>
<p>How fast can a new team member contribute? How quickly can bugs be found? How safely can features be changed?</p>

<h2>What we practice at Quild</h2>
<p>Code reviews focused on clarity, not cleverness. Documentation that explains decisions, not mechanics. Tests that describe behavior.</p>

<p>Write code for humans. The computer will figure it out.</p>`,
  },
  // POST 18 - ENGINEERING
  {
    slug: "technical-debt-is-a-business-decision",
    title: "Technical Debt Isn't a Technical Problem. It's a Business Decision.",
    excerpt: "Every shortcut you take is a loan against future development time. Here's how to manage it wisely.",
    category: "Engineering",
    tag: "ENGINEERING",
    coverImage: "https://i.pinimg.com/736x/86/f2/50/86f25001d32c3c872d330790e6fa6689.jpg",
    imageCaption: "Photo: Quild",
    date: "Jul 28, 2025",
    author: "Shivang Kandoi",
    authorInitials: "SK",
    authorPhoto: "https://zemonhouseofbuilders.in/shivang.png",
    authorBio: "Shivang builds tools and systems for builders. At Quild, he focuses on shipping velocity and craft.",
    readTime: "4 min",
    readTimeMinutes: 4,
    seoTitle: "Managing Technical Debt as a Business Decision | Quild",
    metaDescription: "Every shortcut you take is a loan against future development time. Here's how to manage technical debt wisely.",
    keywords: ["technical debt management", "software engineering tradeoffs", "code quality vs speed", "engineering decisions", "technical debt strategy"],
    content: `<p>Technical debt gets treated like a dirty secret. It shouldn't be. It's a strategic tool when used intentionally.</p>

<h2>What technical debt actually is</h2>
<p>It's not bad code. It's a loan: you get speed now, you pay with complexity later. Sometimes that's the right trade.</p>

<h2>When to take on debt</h2>
<p>When you need to validate an idea quickly. When you're constrained by time. When the cost of being perfect exceeds the benefit.</p>

<h2>When to avoid debt</h2>
<p>When the code will change frequently. When multiple teams will work on it. When the cost of fixing grows exponentially.</p>

<h2>How we manage it at Quild</h2>
<p>We track it explicitly. We schedule time to pay it down. We communicate the tradeoffs to the whole team.</p>

<p>Good engineers don't avoid technical debt. They manage it like any other business decision.</p>`,
  },
];
