export default function NewsCard({ item }) {
  return (
    <article className="news-card">
      <div className={`news-image news-image-${item.variant}`} role="img" aria-label="Article illustration">
        <div className="news-people" aria-hidden="true"><i /><i /><i /><i /><i /></div><time>{item.date}</time>
      </div>
      <h3>{item.title}</h3>
    </article>
  );
}
