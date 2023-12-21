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
  circulating_supply: number;
  total_supply: number;
}

interface CoinRowProps {
  coin: CoinProps;
}

export default function CoinRow({ coin }: CoinRowProps) {
  return (
    <div>
      <section
        className="text-xs grid grid-cols-2 md:grid-cols-4 lg:grid-cols-10 items-center gap-30 p-4 border-b border-gray-200"
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
          <Link to={`/cryptocurrencies/crypto/${coin.id}`}>
            <div className="hover:text-orange-500 transition ease-in 500">
              {coin.name} ({coin.symbol.toUpperCase()})
            </div>
          </Link>
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

        <div className="col-span-2">
          <div className="hidden md:flex justify-around text-xs">
            <p>${millify(coin.circulating_supply)}</p>
            <p>${millify(coin.total_supply)}</p>
          </div>
          <div className="hidden lg:block">
            <div className="relative w-28 h-2 bg-gray-200 rounded mx-auto">
              <div
                className="absolute left-0 top-0 h-full bg-orange-300 rounded"
                style={{
                  width: `${(
                    (coin.circulating_supply / coin.total_supply) *
                    100
                  ).toFixed(2)}%`,
                }}
              ></div>
            </div>
          </div>
        </div>

        <SparkLineChart coinId={coin.id} />
      </section>
    </div>
  );
}
