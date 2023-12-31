import TrendingCategories from '../components/TrendingCategories/TrendingCategories';
import { TrendingCoins } from '../components/TrendingCoins/TrendingCoins';

const Homepage = () => {
  return (
    <div>
      <main className="pb-32 grid grid-cols-1 md:grid-cols-2">
        <TrendingCoins />
        <TrendingCategories />
      </main>
    </div>
  );
};

export default Homepage;
