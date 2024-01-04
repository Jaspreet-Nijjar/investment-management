import CoinRow from './CoinRow';
import { CoinData } from './types';

interface CoinListProps {
  data: CoinData[];
}

const CoinList: React.FC<CoinListProps> = ({ data }) => (
  <div className="mx-auto max-w-screen-lg">
    {data.length > 0 ? (
      data.map((coin: CoinData) => <CoinRow key={coin.id} coin={coin} />)
    ) : (
      <p className="text-center pt-36 md:p-36 md:text-xl">
        This cryptocurrency does not exist. Please try searching again.
      </p>
    )}
  </div>
);

export default CoinList;
