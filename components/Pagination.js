'use client';
export default function Pagination({ page=1, setPage }) {
  return (
    <div className="mt-6 flex items-center justify-center gap-4">
      <button onClick={()=> page>1 && setPage(page-1)} className="px-3 py-1 border rounded-md bg-white">Prev</button>
      <span className="font-medium">Page {page}</span>
      <button onClick={()=> setPage(page+1)} className="px-3 py-1 border rounded-md bg-white">Next</button>
    </div>
  );
}
