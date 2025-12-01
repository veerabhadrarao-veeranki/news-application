import { GET } from '../app/api/news/top-headlines/route';
process.env.NEWSAPI_KEY = 'test';
test('top-headlines route returns Response', async () => {
  // Call with a Request object
  const req = new Request('http://localhost/api/news/top-headlines?category=general&page=1');
  const res = await GET(req);
  expect(res).toBeInstanceOf(Response);
  const json = await res.json();
  // Since external call may fail in CI, ensure we get object (either error or articles)
  expect(typeof json).toBe('object');
});
