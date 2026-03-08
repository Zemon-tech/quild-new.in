import { notFound } from "next/navigation";
import type { Metadata } from "next";
import React from "react";

import ArticleAuthorSidebar from "@/components/blog/ArticleAuthorSidebar";
import ArticleBody from "@/components/blog/ArticleBody";
import ArticleCover from "@/components/blog/ArticleCover";
import ArticleHeader from "@/components/blog/ArticleHeader";
import { blogPosts } from "@/lib/data/blog-posts";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  const title = post.seoTitle || post.title;
  const description = post.metaDescription || post.excerpt;
  const ogImage = post.ogImage || post.coverImage;

  return {
    title,
    description,
    keywords: post.keywords,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: ogImage ? [{ url: ogImage, alt: post.title }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const layoutWrapperStyles: React.CSSProperties = {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "3rem 4rem",
    display: "flex",
    gap: "4rem",
    alignItems: "flex-start",
  };

  const sidebarStyles: React.CSSProperties = {
    width: "200px",
    flexShrink: 0,
    position: "sticky",
    top: "80px",
    alignSelf: "flex-start",
  };

  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <ArticleCover image={post.coverImage} caption={post.imageCaption} />

      <div style={layoutWrapperStyles} className="article-layout">
        <aside style={sidebarStyles} className="article-sidebar">
          <ArticleAuthorSidebar post={post} />
        </aside>

        <article style={{ flex: 1, maxWidth: "680px" }}>
          <ArticleHeader post={post} />
          <ArticleBody content={post.content} />
        </article>
      </div>
    </main>
  );
}
