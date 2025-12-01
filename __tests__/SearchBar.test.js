import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SearchBar from '../components/SearchBar';

beforeEach(()=> { global.fetch = jest.fn(); });

test('renders and performs search', async () => {
  const fake = { articles: [ { title:'T1', description:'D1' } ] };
  fetch.mockResolvedValueOnce({ ok:true, json: async ()=> fake });
  render(<SearchBar />);
  const input = screen.getByPlaceholderText(/Search news/i);
  fireEvent.change(input, { target: { value: 'bitcoin' }});
  fireEvent.click(screen.getByRole('button', { name: /search/i }));
  await waitFor(()=> expect(fetch).toHaveBeenCalled());
});
