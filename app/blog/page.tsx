import BlogCategoryRow from "@/components/blog/BlogCategoryRow";
import BlogFeatured from "@/components/blog/BlogFeatured";
import BlogHero from "@/components/blog/BlogHero";
import BlogNewsletter from "@/components/blog/BlogNewsletter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Read the latest thoughts, engineering deep dives, and AI tool reviews from the Quild community.",
  alternates: { canonical: "https://quild.in/blog" },
  openGraph: {
    title: "Blogs | Quild",
    description: "Read the latest thoughts, engineering deep dives, and AI tool reviews from the Quild community.",
    url: "https://quild.in/blog",
  },
};

export default function BlogPage() {
  return (
    <main style={{ background: "var(--bg)" }}>
      <BlogHero />
      <BlogFeatured />
      <BlogCategoryRow
        category="FOR BUILDERS"
        tagline="Ship faster. Think deeper."
        tag="builders"
      />
      <BlogNewsletter />
      <BlogCategoryRow
        category="AI & TOOLS"
        tagline="What actually works in the real world."
        tag="ai-tools"
      />
      <BlogCategoryRow
        category="ENGINEERING"
        tagline="CS, robotics, systems, architecture."
        tag="engineering"
      />
    </main>
  );
}
