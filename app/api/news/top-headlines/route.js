import fetch from 'node-fetch';
export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get('category') || 'general';
    const page = searchParams.get('page') || '1';
    const API_KEY = process.env.NEWSAPI_KEY;
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${encodeURIComponent(category)}&page=${encodeURIComponent(page)}&apiKey=${API_KEY}`;
    const r = await fetch(url);
    const data = await r.json();
    return new Response(JSON.stringify(data), { status: 200, headers: { 'Content-Type':'application/json' }});
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), { status: 500 });
  }
}
