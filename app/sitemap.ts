import { MetadataRoute } from "next";
import { blogPosts } from "@/lib/data/blog-posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://quild.in";

  // Define static core routes
  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/initiatives",
    "/community",
    "/blog",
    "/careers",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.8,
  }));

  // Map dynamic blog posts
  const dynamicBlogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => {
    let dateStr = new Date().toISOString();
    try {
      if (post.date) {
        const parsedDate = new Date(post.date);
        if (!isNaN(parsedDate.getTime())) {
          dateStr = parsedDate.toISOString();
        }
      }
    } catch (e) {
      // Ignore invalid dates and stick to fallback date
    }

    return {
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: dateStr,
      changeFrequency: "monthly",
      priority: 0.6,
    };
  });

  return [...staticRoutes, ...dynamicBlogRoutes];
}
