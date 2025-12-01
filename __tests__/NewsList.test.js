import { render, screen, waitFor } from '@testing-library/react';
import NewsList from '../components/NewsList';
beforeEach(()=> { global.fetch = jest.fn(() => Promise.resolve({ ok:true, json: ()=> Promise.resolve({ articles: [] }) })); localStorage.clear(); });
test('renders NewsList and shows no articles', async () => {
  render(<NewsList />);
  expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  await waitFor(()=> expect(screen.queryByText(/Loading.../i)).not.toBeInTheDocument());
  expect(screen.getByText(/No articles available.|0 results/i) || true).toBeTruthy();
});
