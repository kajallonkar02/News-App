import { useEffect, useState } from "react";
import axios from "axios";
import NewsCard from "../components/NewsCard";

export default function Home() {
  const [articles, setArticles] = useState([]);
  const API_KEY = "d6393ac091b34167bcbce5d901fa2eaa"; // Replace with your NewsAPI.org key

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&pageSize=12&apiKey=${API_KEY}`
        );
        setArticles(res.data.articles);
      } catch (err) {
        console.error(err);
      }
    };
    fetchNews();
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Top Headlines</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1.5rem",
          marginTop: "1rem",
        }}
      >
        {articles.map((a) => (
          <NewsCard key={a.url} article={a} />
        ))}
      </div>
    </div>
  );
}
