import CoinRow from './CoinRow';

interface CoinProps {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_change_percentage_24h: number;
  market_cap_rank: number;
  price_change_percentage_24h: number;
  price_change_percentage_1h_in_currency: number;
  price_change_percentage_7d_in_currency: number;
}

interface CoinListProps {
  data: CoinProps[];
}

const CoinList: React.FC<CoinListProps> = ({ data }) => (
  <div className="mx-auto max-w-screen-lg">
    {data.length > 0 ? (
      data.map((coin: CoinProps) => <CoinRow key={coin.id} coin={coin} />)
    ) : (
      <p className="text-center pt-36 md:p-36 md:text-xl">
        This cryptocurrency does not exist. Please try searching again.
      </p>
    )}
  </div>
);

export default CoinList;
