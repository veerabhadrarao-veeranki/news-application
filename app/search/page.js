'use client';
import { useEffect, useState } from 'react';
import ArticleCard from '../../components/ArticleCard';
export default function SearchPage() {
  const [results, setResults] = useState([]);
  useEffect(() => {
    const raw = sessionStorage.getItem('search_results');
    if (raw) setResults(JSON.parse(raw));
  }, []);
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Search Results</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {results.length === 0 ? <p>No results.</p> : results.map((r,i) => <ArticleCard key={i} article={r} />)}
      </div>
    </div>
  );
}
