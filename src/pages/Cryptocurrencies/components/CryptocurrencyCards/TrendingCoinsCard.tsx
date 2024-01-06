import { useGetTrendingCoinsQuery } from '../../../../services/cryptoAPI';
import LoadingSpinner from '../../../../components/common/LoadingSpinner';
import TrendingCoin from './TrendingCoin';

const TrendingCoinsCard = () => {
  const { data, isLoading } = useGetTrendingCoinsQuery(1);

  const trendingCoins = data && data.coins ? data.coins.slice(0, 3) : [];

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="mt-4 border p-4 border-gray-200 rounded h-full">
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
