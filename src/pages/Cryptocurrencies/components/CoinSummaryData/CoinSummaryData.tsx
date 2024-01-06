import millify from 'millify';
import { CiCoinInsert } from 'react-icons/ci';
import { BsCurrencyExchange } from 'react-icons/bs';
import { SiCoinmarketcap } from 'react-icons/si';
import { FaBitcoin, FaEthereum } from 'react-icons/fa';
import Indicators from '../../../../components/common/Indicators';

interface CoinSummaryDataProps {
  data: {
    data: {
      active_cryptocurrencies: number;
      markets: number;
      market_cap_change_percentage_24h_usd: number;
      total_market_cap: {
        usd: number;
      };
      total_volume: {
        usd: number;
      };
      market_cap_percentage: {
        btc: number;
        eth: number;
      };
    };
  };
}

export const CoinSummaryData: React.FC<CoinSummaryDataProps> = ({ data }) => {
  if (!data?.data) {
    return null;
  }

  return (
    <section className="overflow-hidden text-xs text-white bg-black p-2 flex justify-around">
      <div className="flex gap-1 items-center">
        <CiCoinInsert size={20} />
        <p>Coins: </p>
        <span className="text-orange-400">
          {data?.data?.active_cryptocurrencies}
        </span>
      </div>

      <div className="flex gap-1 items-center">
        <BsCurrencyExchange size={15} />
        <p>Exchanges:</p>
        <p className="text-orange-400">{data?.data?.markets}</p>
      </div>

      <div className="hidden md:flex gap-1 items-center">
        <SiCoinmarketcap size={15} />
        <p>Market Cap:</p>
        <p className="text-orange-400 items-center">
          ${millify(data?.data?.total_market_cap?.usd)}
        </p>
        <Indicators
          data={data?.data?.market_cap_change_percentage_24h_usd}
          fontSize="text-xs"
        />
      </div>

      <div className="hidden md:flex gap-1 items-center">
        <p>24h Vol:</p>
        <p className="text-orange-400">
          ${millify(data?.data?.total_volume?.usd)}
        </p>
      </div>

      <div className="hidden lg:flex items-center gap-2">
        <FaBitcoin size="20" color="orange" />
        <p>{data?.data?.market_cap_percentage?.btc.toFixed(0)}%</p>
        <div className="relative w-16 h-2 bg-gray-200 rounded">
          <div
            className="absolute left-0 top-0 h-full bg-orange-400 rounded"
            style={{ width: `${data?.data?.market_cap_percentage?.btc}%` }}
          ></div>
        </div>
      </div>

      <div className="hidden lg:flex items-center gap-2">
        <FaEthereum size="20" color="#444971" />
        <p>{data?.data?.market_cap_percentage?.eth.toFixed(0)}%</p>
        <div className="relative w-16 h-2 bg-gray-200 rounded">
          <div
            className="absolute left-0 top-0 h-full bg-orange-400 rounded"
            style={{ width: `${data?.data?.market_cap_percentage?.eth}%` }}
          ></div>
        </div>
      </div>
    </section>
  );
};
