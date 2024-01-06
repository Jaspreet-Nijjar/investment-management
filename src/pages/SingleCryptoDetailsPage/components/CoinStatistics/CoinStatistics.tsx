import millify from 'millify';
import { formatNumber } from '../../../../utilities/formatNumber';

const CoinStatistics = ({ data }) => {
  return (
    <section className="text-sm text-gray-400 grid grid-cols-2 border-t border-gray-200 pt-4 sm:w-54 md:w-96">
      <p className="pb-6">
        Market Cap
        <p className="text-black">
          {millify(data?.market_data?.market_cap?.usd)}
        </p>
      </p>
      <p>
        Circulating Supply
        <p className="text-black">
          {millify(data?.market_data?.circulating_supply)}
        </p>
      </p>
      <p>
        Total Supply
        <p className="text-black">{millify(data?.market_data?.total_supply)}</p>
      </p>
      <p>
        Max Supply
        <p className="text-black">{millify(data?.market_data?.max_supply)}</p>
      </p>

      <p className="pt-6">
        All-Time-High
        <p className="text-black">
          ${formatNumber(data?.market_data?.ath?.usd)}
        </p>
      </p>

      <p className="pt-6">
        All-Time-Low
        <p className="text-black">
          ${formatNumber(data?.market_data?.atl?.usd)}
        </p>
      </p>
    </section>
  );
};

export default CoinStatistics;
