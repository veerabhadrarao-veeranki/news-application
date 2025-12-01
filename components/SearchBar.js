'use client';
import { useState } from 'react';
export default function SearchBar() {
  const [q, setQ] = useState('');
  async function onSubmit(e) {
    e.preventDefault();
    const query = q.trim();
    if (!query) return;
    const res = await fetch(`/api/news/search?query=${encodeURIComponent(query)}`);
    if (!res.ok) { alert('Search failed'); return; }
    const data = await res.json();
    sessionStorage.setItem('search_results', JSON.stringify(data.articles || []));
    window.location.href = '/search';
  }
  return (
    <form onSubmit={onSubmit} className="bg-white p-3 rounded-lg shadow-sm flex gap-2">
      <input value={q} onChange={(e)=>setQ(e.target.value)} placeholder="Search news" className="flex-1 p-2 border rounded-md" />
      <button className="bg-blue-600 text-white px-4 rounded-md">Search</button>
    </form>
  );
}
