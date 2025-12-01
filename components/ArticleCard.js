'use client';
import Link from 'next/link';
export default function ArticleCard({ article }) {
  const id = encodeURIComponent((article.publishedAt || '') + '|' + (article.title || ''));
  function openDetail(){ try { sessionStorage.setItem('article-' + id, JSON.stringify(article)); } catch(e){} }
  return (
    <article className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition">
      {article.urlToImage ? <img src={article.urlToImage} alt={article.title} className="w-full h-44 object-cover" /> : <div className="w-full h-44 bg-gray-100 flex items-center justify-center text-gray-400">No image</div>}
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-medium leading-tight">{article.title}</h3>
        <p className="text-sm text-gray-500">{article.source?.name} • {new Date(article.publishedAt).toLocaleString()}</p>
        <p className="text-gray-700 text-sm line-clamp-3">{article.description}</p>
        <Link href={'/article/' + id} onClick={openDetail} className="text-blue-600 font-medium block mt-2">Read more →</Link>
      </div>
    </article>
  );
}
