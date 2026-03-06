import BlogCategoryRow from "@/components/blog/BlogCategoryRow";
import BlogFeatured from "@/components/blog/BlogFeatured";
import BlogHero from "@/components/blog/BlogHero";
import BlogNewsletter from "@/components/blog/BlogNewsletter";

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
