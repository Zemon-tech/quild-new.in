export default function ArticleCover({
  image,
  caption,
}: {
  image?: string;
  caption?: string;
}) {
  return (
    <div className="article-cover">
      <div
        style={{
          width: "100%",
          height: "55vh",
          overflow: "hidden",
          background: "var(--surface)",
        }}
      >
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={image}
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              display: "block",
            }}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              background: "linear-gradient(135deg, var(--surface) 0%, var(--border) 100%)",
            }}
          />
        )}
      </div>

      {caption && (
        <div
          className="article-cover-caption"
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "0.5rem 4rem 0",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "0.72rem",
              color: "var(--muted)",
              lineHeight: 1.5,
              margin: 0,
            }}
          >
            {caption}
          </p>
        </div>
      )}
    </div>
  );
}
