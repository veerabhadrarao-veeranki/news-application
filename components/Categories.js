'use client';
const CATEGORIES = ['general','technology','business','sports','entertainment','health','science'];
export default function Categories() {
  function select(cat) {
    localStorage.setItem('news_category', cat);
    window.location.reload();
  }
  return (
    <div className="flex gap-2 overflow-x-auto py-3">
      {CATEGORIES.map(c=>(
        <button key={c} onClick={()=>select(c)} className="px-3 py-2 bg-white border rounded-md text-sm shadow-sm whitespace-nowrap">{c}</button>
      ))}
    </div>
  );
}
