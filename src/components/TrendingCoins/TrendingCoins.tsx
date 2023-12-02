import { useGetTrendingCoinsQuery } from '../../services/cryptoAPI';
import { TrendingCoinRowHeader } from './TrendingCoinRowHeader';

export const TrendingCoins = () => {
  const { data, isLoading } = useGetTrendingCoinsQuery(1);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="p-4 mt-4 mr-4 border border-gray-200 rounded md:w-96">
      <h2 className="text-center font-bold">Trending Coins</h2>
      <TrendingCoinRowHeader />
      <p className="hidden md:block text-sm mt-2 text-center">
        Discover the most trending cryptocurrencies today!{' '}
        <span className="font-bold">
          {data.coins[0].item.name}, {data.coins[1].item.name} and{' '}
          {data.coins[2].item.name}
        </span>{' '}
        have been the highest ranking searches in the last 3 hours.
      </p>
    </section>
  );
};
