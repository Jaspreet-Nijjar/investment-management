import { useGetTrendingCoinsQuery } from '../../services/cryptoAPI';

export const TrendingCoins = () => {
  const { data } = useGetTrendingCoinsQuery(1);

  console.log(data);

  return <div>Trending Coins</div>;
};
