import type { BlogPost } from "@/lib/data/blog-posts";
import { blogPosts } from "@/lib/data/blog-posts";

export const getPostsByTag = (tag: string) =>
  blogPosts.filter((p) => (p.tag ?? "").toLowerCase() === tag.toLowerCase());

export const getFeaturedPosts = () => blogPosts.slice(0, 5);

export const allBlogPosts: BlogPost[] = blogPosts;
