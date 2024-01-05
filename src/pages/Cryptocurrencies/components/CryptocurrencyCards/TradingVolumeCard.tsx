import { useGetCoinSummaryDataQuery } from '../../services/cryptoAPI';
import LoadingSpinner from '../../common/LoadingSpinner';
import { formatNumber } from '../../utilities/formatNumber';

const TradingVolumeCard = () => {
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
        ${formatNumber(data.data.total_volume.usd)}
      </h1>
      <p className="text-gray-500 text-md">24hr Trading Volume</p>
    </div>
  );
};

export default TradingVolumeCard;
