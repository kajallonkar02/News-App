import { useState } from "react";
import axios from "axios";
import NewsCard from "../components/NewsCard";

export default function search() {
  const [query, setQuery] = useState("");
  const [articles, setArticles] = useState([]); 
 const API_KEY = "d6393ac091b34167bcbce5d901fa2eaa";


  const handleSearch = async () => {
    const res = await axios.get(
      `https://newsapi.org/v2/everything?q=${query}&language=en&pageSize=12&apiKey=${API_KEY}`
    );
    setArticles(res.data.articles);
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-4">🔍 Search News</h2>
      <div className="flex gap-2 mb-6">
        <input
          className="border rounded px-3 py-2 w-full"
          placeholder="Search for topics like 'AI' or 'Space'..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="bg-orange-600 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {articles.map((a) => (
          <NewsCard key={a.url} article={a} />
        ))}
      </div>
    </div>
  );
}
