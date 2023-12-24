import { useGetCoinSummaryDataQuery } from '../../services/cryptoAPI';
import millify from 'millify';
import { CiCoinInsert } from 'react-icons/ci';
import { BsCurrencyExchange } from 'react-icons/bs';
import { IoMdArrowDropup } from 'react-icons/io';
import { IoMdArrowDropdown } from 'react-icons/io';
import { SiCoinmarketcap } from 'react-icons/si';
import { FaBitcoin } from 'react-icons/fa';
import { FaEthereum } from 'react-icons/fa';

export const CoinSummaryData = () => {
  const { data, isLoading, isError } = useGetCoinSummaryDataQuery(1);

  if (isLoading || isError || !data) {
    return null;
  }
  return (
    <section className="overflow-hidden text-xs text-white bg-black p-2 flex justify-around">
      <div className="flex gap-1 items-center">
        <CiCoinInsert size={20} />
        <p>Coins: </p>
        <span className="text-orange-400">
          {data.data.active_cryptocurrencies}
        </span>
      </div>

      <div className="flex gap-1 items-center">
        <BsCurrencyExchange size={15} />
        <p>Exchanges:</p>
        <p className="text-orange-400">{data.data.markets}</p>
      </div>

      <div className="hidden md:flex gap-1 items-center">
        <SiCoinmarketcap size={15} />
        <p>Market Cap:</p>
        <p className="text-orange-400 items-center">
          ${millify(data.data.total_market_cap.usd)}
        </p>
        {data.data.market_cap_change_percentage_24h_usd > 0 ? (
          <>
            <IoMdArrowDropup size={20} color="#66FF99" />
            <p className="text-green-400">
              {Math.abs(data.data.market_cap_change_percentage_24h_usd).toFixed(
                1
              )}
              %
            </p>
          </>
        ) : (
          <>
            <IoMdArrowDropdown size={20} color="#ff0000" />
            <p className="text-red-400">
              {Math.abs(data.data.market_cap_change_percentage_24h_usd).toFixed(
                1
              )}
              %
            </p>
          </>
        )}
      </div>

      <div className="hidden md:flex gap-1 items-center">
        <p>24h Vol:</p>
        <p className="text-orange-400">
          ${millify(data.data.total_volume.usd)}
        </p>
      </div>

      <div className="hidden lg:flex items-center gap-2">
        <FaBitcoin size="20" color="orange" />
        <p>{data.data.market_cap_percentage.btc.toFixed(0)}%</p>
        <div className="relative w-16 h-2 bg-gray-200 rounded">
          <div
            className="absolute left-0 top-0 h-full bg-orange-400 rounded"
            style={{ width: `${data.data.market_cap_percentage.btc}%` }}
          ></div>
        </div>
      </div>

      <div className="hidden lg:flex items-center gap-2">
        <FaEthereum size="20" color="#444971" />
        <p>{data.data.market_cap_percentage.eth.toFixed(0)}%</p>
        <div className="relative w-16 h-2 bg-gray-200 rounded">
          <div
            className="absolute left-0 top-0 h-full bg-orange-400 rounded"
            style={{ width: `${data.data.market_cap_percentage.eth}%` }}
          ></div>
        </div>
      </div>
    </section>
  );
};
