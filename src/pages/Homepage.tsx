// import { CoinSummaryData } from '../components/CoinSummaryData/CoinSummaryData';
import TrendingCategories from '../components/TrendingCategories/TrendingCategories';
import { TrendingCoins } from '../components/TrendingCoins/TrendingCoins';

const Homepage = () => {
  return (
    <div className="ml-60">
      <main className="flex">
        <TrendingCoins />
        <TrendingCategories />
      </main>
      {/* <CoinSummaryData /> */}
    </div>
  );
};

export default Homepage;
