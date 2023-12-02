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
    </section>
  );
};
