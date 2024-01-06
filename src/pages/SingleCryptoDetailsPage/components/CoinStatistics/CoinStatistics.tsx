import millify from 'millify';
import { formatNumber } from '../../../../utilities/formatNumber';

const CoinStatistics = ({ data }) => {
  return (
    <section className="text-sm text-gray-400 grid grid-cols-2 border-t border-gray-200 pt-4 sm:w-54 md:w-96">
      <div className="pb-6">
        <p>Market Cap</p>
        <p className="text-black">
          {millify(data?.market_data?.market_cap?.usd)}
        </p>
      </div>

      <div>
        <p>Circulating Supply</p>
        <p className="text-black">
          {millify(data?.market_data?.circulating_supply)}
        </p>
      </div>

      <div>
        <p>Total Supply</p>
        <p className="text-black">{millify(data?.market_data?.total_supply)}</p>
      </div>

      <div>
        <p>Max Supply</p>
        <p className="text-black">{millify(data?.market_data?.max_supply)}</p>
      </div>

      <div className="pt-6">
        <p> All-Time-High</p>
        <p className="text-black">
          ${formatNumber(data?.market_data?.ath?.usd)}
        </p>
      </div>

      <div className="pt-6">
        <p> All-Time-Low</p>
        <p className="text-black">
          ${formatNumber(data?.market_data?.atl?.usd)}
        </p>
      </div>
    </section>
  );
};

export default CoinStatistics;
