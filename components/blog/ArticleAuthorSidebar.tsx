import type { BlogPost } from "@/lib/data/blog-posts";

export default function ArticleAuthorSidebar({ post }: { post: BlogPost }) {
  return (
    <div
      className="article-author-sidebar"
      style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
    >
      <div
        className="article-author-top"
        style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}
      >
        <div
          className="article-author-avatar"
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            background: "var(--sage)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "var(--font-cormorant)",
            fontSize: "0.95rem",
            fontWeight: 700,
            color: "#fff",
            flexShrink: 0,
            overflow: "hidden",
          }}
        >
          {post.authorPhoto ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={post.authorPhoto}
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          ) : (
            post.authorInitials
          )}
        </div>

        <div className="article-author-meta" style={{ paddingTop: "0.1rem" }}>
          <div
            style={{
              fontFamily: "var(--font-jetbrains-mono)",
              fontSize: "0.8rem",
              fontWeight: 700,
              color: "var(--ink)",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              lineHeight: 1.1,
            }}
          >
            BY {post.author}
          </div>
          <div
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "0.9rem",
              fontWeight: 400,
              color: "var(--muted)",
              lineHeight: 1.2,
              marginTop: "0.25rem",
            }}
          >
            {post.tag}
          </div>
        </div>
      </div>

      {post.authorBio && (
        <p
          className="article-author-bio"
          style={{
            fontFamily: "var(--font-dm-sans)",
            fontSize: "0.9rem",
            color: "var(--ink)",
            lineHeight: 1.5,
            margin: 0,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {post.authorBio}
        </p>
      )}
    </div>
  );
}
