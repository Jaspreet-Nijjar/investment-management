import React from 'react';
import { Link } from 'react-router-dom';
import { useGetSingleCoinQuery } from '../../services/cryptoAPI';

interface TrendingCoinRowProps {
  coin: {
    id: number;
    name: string;
    thumb: string;
    current_price: number;
  };
}

const TrendingCoinRow: React.FC<TrendingCoinRowProps> = ({ coin }) => {
  const { data, isLoading, isError } = useGetSingleCoinQuery(coin.id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !data) {
    return <div>Error fetching data for {coin.name}</div>;
  }

  return (
    <div className="text-sm grid grid-cols-2 gap-6 text-center p-2">
      <div className="flex gap-4 items-center justify-center">
        <Link to={`/cryptocurrencies/crypto/${coin.id}`}>{coin.name}</Link>
        <img src={coin.thumb} alt="coin thumbnail logo" />
      </div>
      ${data.market_data.current_price.usd}
    </div>
  );
};

export default TrendingCoinRow;