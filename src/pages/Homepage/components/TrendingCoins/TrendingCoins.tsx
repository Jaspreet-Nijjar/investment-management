import { useGetTrendingCoinsQuery } from '../../services/cryptoAPI';
import { TrendingCoinRowHeader } from './TrendingCoinRowHeader';
import TrendingCoinRow from './TrendingCoinRow';
import { Link } from 'react-router-dom';
import { FadeLoader } from 'react-spinners';
import ErrorState from '../../common/ErrorState';

export const TrendingCoins = () => {
  const { data, isLoading, isError } = useGetTrendingCoinsQuery(1);

  if (isLoading) {
    return <FadeLoader color="#FFA500" />;
  }

  if (isError) {
    return <ErrorState />;
  }

  const trendingCoins = data && data.coins ? data.coins.slice(0, 5) : [];

  interface CoinProps {
    item: {
      id: number;
      name: string;
      thumb: string;
      current_price: number;
    };
  }

  return (
    <main className="mt-8 mx-auto w-96">
      <section className="border border-gray-200 rounded">
        <h2 className="text-center font-bold">Trending Coins</h2>
        <p className="text-sm p-2 text-center">
          Discover the most trending cryptocurrencies.{' '}
          <span className="font-bold">
            {trendingCoins[0].item.name}, {trendingCoins[1].item.name} and{' '}
            {trendingCoins[2].item.name}
          </span>{' '}
          have been the highest ranking searches in the last 3 hours.
        </p>
        <TrendingCoinRowHeader />

        {trendingCoins.length > 0 ? (
          trendingCoins.map((coin: CoinProps) => (
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
    </main>
  );
};
