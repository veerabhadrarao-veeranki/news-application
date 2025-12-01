import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';
export default function Home() {
  return (
    <div className="space-y-6">
      <SearchBar />
      <Categories />
      <NewsList />
    </div>
  );
}
