import TrendingCategories from '../components/TrendingCategories/TrendingCategories';
import { TrendingCoins } from '../components/TrendingCoins/TrendingCoins';

const Homepage = () => {
  return (
    <div>
      <main className="grid grid-cols-1 md:grid-cols-2 pb-32">
        <TrendingCoins />
        <TrendingCategories />
      </main>
    </div>
  );
};

export default Homepage;
