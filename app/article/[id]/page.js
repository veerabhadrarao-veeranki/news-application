'use client';
import { useEffect, useState } from 'react';
export default function ArticlePage({ params }) {
  const { id } = params;
  const [article, setArticle] = useState(null);
  useEffect(() => {
    const raw = sessionStorage.getItem('article-' + id);
    if (raw) setArticle(JSON.parse(raw));
  }, [id]);
  if (!article) return <div className="text-center py-12">Article not found. Open from homepage.</div>;
  return (
    <article className="space-y-4">
      <h1 className="text-3xl font-bold">{article.title}</h1>
      <p className="text-sm text-gray-500">{article.source?.name} • {new Date(article.publishedAt).toLocaleString()}</p>
      {article.urlToImage && <img src={article.urlToImage} alt="" className="w-full rounded-lg shadow" />}
      <p className="text-gray-700 leading-relaxed">{article.content || article.description}</p>
      <a href={article.url} target="_blank" rel="noreferrer" className="text-blue-600 font-medium">Read original →</a>
    </article>
  );
}
