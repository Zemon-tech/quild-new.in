export default function ArticleBody({ content }: { content: string }) {
  return (
    <div
      className="article-body"
      dangerouslySetInnerHTML={{ __html: content }}
      style={{}}
    />
  );
}
