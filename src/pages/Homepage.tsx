import { CoinSummaryData } from '../components/CoinSummaryData/CoinSummaryData';
import { TrendingCoins } from '../components/TrendingCoins/TrendingCoins';

const Homepage = () => {
  return (
    <div>
      <p>HomePage</p>
      <CoinSummaryData />
      <TrendingCoins />
    </div>
  );
};

export default Homepage;
