import { useGetTrendingCoinsQuery } from '../../services/cryptoAPI';

export const TrendingCoins = () => {
  const { data, isLoading } = useGetTrendingCoinsQuery(1);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log(data);

  return (
    <section>
      <h2>Trending Coins</h2>
    </section>
  );
};
