import { useGetTrendingCoinsQuery } from '../../services/cryptoAPI';
import LoadingSpinner from '../../shared/LoadingSpinner/LoadingSpinner';
import TrendingCoin from './TrendingCoin';

const TrendingCoinsCard = () => {
  const { data, isLoading, isError } = useGetTrendingCoinsQuery(1);

  const trendingCoins = data && data.coins ? data.coins.slice(0, 3) : [];

  console.log(trendingCoins);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <p>There is currently an error.</p>;
  }

  return (
    <div className="ml-10 mt-4 border p-4 border-gray-200 rounded">
      <h1 className="text-md text-center font-bold text-gray-500 mb-2">
        Trending Coins
      </h1>

      <div>
        {trendingCoins.map((coin) => (
          <TrendingCoin coin={coin} key={coin.id} />
        ))}
      </div>
    </div>
  );
};

export default TrendingCoinsCard;
