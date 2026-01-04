export default function NewsCard({ article }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "1rem",
        width: "300px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      }}
    >
      {article.urlToImage && (
        <img
          src={article.urlToImage}
          alt={article.title}
          style={{ width: "100%", borderRadius: "6px" }}
        />
      )}
      <h3 style={{ marginTop: "0.5rem" }}>{article.title}</h3>
      <p style={{ fontSize: "0.9rem", color: "#555" }}>
        {article.description || "No description available."}
      </p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        Read more →
      </a>
    </div>
  );
}
