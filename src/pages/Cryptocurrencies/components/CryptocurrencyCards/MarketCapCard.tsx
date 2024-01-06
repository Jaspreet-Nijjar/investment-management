import { useGetCoinSummaryDataQuery } from '../../../../services/cryptoAPI';
import Indicators from '../../../../components/common/Indicators';
import LoadingSpinner from '../../../../components/common/LoadingSpinner';
import { formatNumber } from '../../../../utilities/formatNumber';

const MarketCapCard = () => {
  const { data, isLoading, isError } = useGetCoinSummaryDataQuery(1);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <p>There is currently an error, please try again.</p>;
  }

  return (
    <div className="mt-4 border p-4 border-gray-200 rounded w-72">
      <h1 className="text-xl font-bold tracking-wide">
        ${formatNumber(data.data.total_market_cap.usd)}
      </h1>
      <div className="flex items-center">
        <p className="text-gray-500 text-md">Market Capitalisation</p>
        <Indicators data={data.data.market_cap_change_percentage_24h_usd} />
      </div>
    </div>
  );
};

export default MarketCapCard;
