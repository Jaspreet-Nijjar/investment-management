import { Link } from 'react-router-dom';
import { useGetSingleCoinQuery } from '../../../../services/cryptoAPI';
import LoadingSpinner from '../../../../components/common/LoadingSpinner';
import Error from '../../../../components/common/Error';

interface TrendingCoinRowProps {
  coin: {
    id: number;
    name: string;
    thumb: string;
    current_price: number;
  };
}

const TrendingCoinRow: React.FC<TrendingCoinRowProps> = ({ coin }) => {
  const { data, isLoading } = useGetSingleCoinQuery(coin.id);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!data) {
    return <Error />;
  }

  return (
    <div className="text-sm grid grid-cols-2 gap-6 text-center p-2">
      <div className="flex gap-4 items-center justify-center">
        <Link
          className="hover:text-orange-500 transition ease-in 0.5s"
          to={`/cryptocurrencies/crypto/${coin.id}`}
        >
          {coin.name}
        </Link>
        <img src={coin.thumb} alt="coin thumbnail logo" />
      </div>
      ${data?.market_data.current_price.usd}
    </div>
  );
};

export default TrendingCoinRow;
