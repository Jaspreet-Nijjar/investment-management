import { useGetCoinSummaryDataQuery } from '../../services/cryptoAPI';
import LoadingSpinner from '../../shared/LoadingSpinner/LoadingSpinner';
import { formatNumber } from '../../utilities/formatNumber';
import { IoMdArrowDropup } from 'react-icons/io';
import { IoMdArrowDropdown } from 'react-icons/io';

const MarketCapCard = () => {
  const { data, isLoading, isError } = useGetCoinSummaryDataQuery(1);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <p>There is currently an error, please try again.</p>;
  }

  return (
    <div className="ml-64 mt-4 border p-4 border-gray-200 rounded md:w-72">
      <h1 className="text-xl font-bold tracking-wide">
        ${formatNumber(data.data.total_market_cap.usd)}
      </h1>
      <div className="flex items-center">
        <p className="text-gray-500 text-md">Market Capitalisation</p>
        {data.data.market_cap_change_percentage_24h_usd > 0 ? (
          <IoMdArrowDropup size={20} className="text-green-500" />
        ) : (
          <IoMdArrowDropdown size={20} className="text-red-500" />
        )}
        <p
          className={`text-sm font-bold ${
            data.data.market_cap_change_percentage_24h_usd > 0
              ? 'text-green-500'
              : 'text-red-500'
          }`}
        >
          {data.data.market_cap_change_percentage_24h_usd.toFixed(1)}%
        </p>
      </div>
    </div>
  );
};

export default MarketCapCard;
