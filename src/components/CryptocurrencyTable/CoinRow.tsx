import SparkLineChart from '../../components/SparkLineChart/SparkLineChart';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { IoMdArrowDropup } from 'react-icons/io';
import { IoMdArrowDropdown } from 'react-icons/io';

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

interface CoinRowProps {
  coin: CoinProps;
}

export default function CoinRow({ coin }: CoinRowProps) {
  return (
    <div>
      <section
        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-10 items-center gap-30 p-4 border-b border-gray-200 text-sm"
        key={coin.id}
      >
        <div className="hidden md:block text-center">
          {coin.market_cap_rank}
        </div>
        <div className="flex items-center justify-center">
          <img
            src={coin.image}
            alt="image of coin"
            width={30}
            className="mr-2"
          />
          <p>
            {coin.name} ({coin.symbol.toUpperCase()})
          </p>
        </div>

        <div className="text-center">${coin.current_price}</div>

        <div
          className={`hidden lg:flex items-center justify-center ${
            coin.price_change_percentage_1h_in_currency < 0
              ? 'text-red-500'
              : 'text-green-500'
          }`}
        >
          {coin.price_change_percentage_1h_in_currency > 0 ? (
            <IoMdArrowDropup size={20} className="text-green-500" />
          ) : (
            <IoMdArrowDropdown size={20} className="text-red-500" />
          )}
          {Math.abs(coin.price_change_percentage_1h_in_currency).toFixed(1)}%
        </div>

        <div
          className={`hidden lg:flex items-center justify-center ${
            coin.price_change_percentage_24h < 0
              ? 'text-red-500'
              : 'text-green-500'
          }`}
        >
          {coin.price_change_percentage_24h > 0 ? (
            <IoMdArrowDropup size={20} className="text-green-500" />
          ) : (
            <IoMdArrowDropdown size={20} className="text-red-500" />
          )}
          {Math.abs(coin.price_change_percentage_24h).toFixed(1)}%
        </div>

        <div
          className={`hidden lg:flex items-center justify-center ${
            coin.price_change_percentage_7d_in_currency < 0
              ? 'text-red-500'
              : 'text-green-500'
          }`}
        >
          {coin.price_change_percentage_7d_in_currency > 0 ? (
            <IoMdArrowDropup size={20} className="text-green-500" />
          ) : (
            <IoMdArrowDropdown size={20} className="text-red-500" />
          )}
          {Math.abs(coin.price_change_percentage_7d_in_currency).toFixed(1)}%
        </div>

        <div className="hidden md:block text-center">
          ${millify(coin.market_cap)}
        </div>

        <SparkLineChart coinId={coin.id} />
        <Link
          className="hidden xl:block text-center text-orange-300 hover:text-orange-400 transition ease-in duration-300 font-bold"
          to={`/cryptocurrencies/crypto/${coin.id}`}
        >
          Details
        </Link>
      </section>
    </div>
  );
}
