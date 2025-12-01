import { render, screen, fireEvent } from '@testing-library/react';
import Categories from '../components/Categories';
test('selecting category sets localStorage', () => {
  render(<Categories />);
  const btn = screen.getByText('technology');
  fireEvent.click(btn);
  expect(localStorage.getItem('news_category')).toBe('technology');
});
