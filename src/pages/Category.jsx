import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NewsCard from "../components/NewsCard";

export default function Category() {
  const { type } = useParams();
  const [articles, setArticles] = useState([]);
  const API_KEY = "api_key"; // Replace with your NewsAPI.org key

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&category=${type}&pageSize=12&apiKey=${API_KEY}`
        );
        setArticles(res.data.articles);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCategory();
  }, [type]);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>{type.charAt(0).toUpperCase() + type.slice(1)} News</h2>
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
