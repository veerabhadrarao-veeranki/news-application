'use client';
import { useEffect, useState } from 'react';
import ArticleCard from './ArticleCard';
import Pagination from './Pagination';
export default function NewsList() {
  const [category, setCategory] = useState(null);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  useEffect(()=> {
    const saved = localStorage.getItem('news_category') || 'general';
    setCategory(saved);
  }, []);
  useEffect(()=> {
    if (!category) return;
    fetchArticles();
  }, [category, page]);
  async function fetchArticles() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/news/top-headlines?category=${category}&page=${page}`);
      if (!res.ok) throw new Error('Failed');
      const data = await res.json();
      setArticles(data.articles || []);
    } catch(e) { setError(e.message); }
    finally { setLoading(false); }
  }
  if (!category) return <p>Loading...</p>;
  return (
    <section>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl font-semibold capitalize">{category} News</h2>
        <p className="text-sm text-gray-500">{articles.length} results</p>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-600">{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {articles.length === 0 && !loading && <p>No articles available.</p>}
        {articles.map((a,i)=> <ArticleCard key={i} article={a} />)}
      </div>
      <Pagination page={page} setPage={setPage} />
    </section>
  );
}
