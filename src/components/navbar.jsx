import { Link } from "react-router-dom";

export default function navbar() {
  const categories = ["technology", "business", "sports", "entertainment", "health", "science"];
  return (
    <nav style={{ background: "#f97316", padding: "1rem", textAlign: "center" }}>
      <Link to="/" style={{ color: "white", marginRight: "1rem", fontWeight: "bold", fontSize: "1.2rem" }}>
        📰 News Reader
      </Link>
      {categories.map((cat) => (
        <Link
          key={cat}
          to={`/category/${cat}`}
          style={{ color: "white", marginRight: "1rem", textTransform: "capitalize" }}
        >
          {cat}
        </Link>
      ))}
    </nav>
  );
}
