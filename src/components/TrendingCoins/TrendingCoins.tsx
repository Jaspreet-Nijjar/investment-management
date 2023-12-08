import { useGetTrendingCoinsQuery } from '../../services/cryptoAPI';
import { TrendingCoinRowHeader } from './TrendingCoinRowHeader';
import TrendingCoinRow from './TrendingCoinRow';
import { Link } from 'react-router-dom';

export const TrendingCoins = () => {
  const { data, isLoading } = useGetTrendingCoinsQuery(1);

  const trendingCoins = data && data.coins ? data.coins.slice(0, 5) : [];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="mx-auto ml-4 mt-4 mr-4 border border-gray-200 rounded md:w-96">
      <h2 className="text-center font-bold">Trending Coins</h2>
      <p className="hidden md:block text-sm p-2 text-center">
        Discover the most trending cryptocurrencies.{' '}
        <span className="font-bold">
          {trendingCoins[0].item.name}, {trendingCoins[1].item.name} and{' '}
          {trendingCoins[2].item.name}
        </span>{' '}
        have been the highest ranking searches in the last 3 hours.
      </p>
      <TrendingCoinRowHeader />

      {trendingCoins.length > 0 ? (
        trendingCoins.map((coin) => (
          <TrendingCoinRow coin={coin.item} key={coin.item.id} />
        ))
      ) : (
        <div>No trending coins available</div>
      )}
      <div className="text-sm text-center mt-6 border border-orange-100 rounded p-2">
        Explore all Cryptocurrencies{' '}
        <Link
          className="text-orange-300 font-bold hover:text-orange-400 transition 0.5s ease-in"
          to="/cryptocurrencies"
        >
          here
        </Link>
      </div>
    </section>
  );
};
