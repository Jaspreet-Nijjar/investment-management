import LoadingSpinner from '../../../../components/common/LoadingSpinner';
import { formatNumber } from '../../../../utilities/formatNumber';

interface TradingVolumeCardProps {
  data: {
    data: {
      total_volume: {
        usd: number;
      };
    };
  };
}

const TradingVolumeCard: React.FC<TradingVolumeCardProps> = ({ data }) => {
  if (!data?.data) {
    return <LoadingSpinner />;
  }

  return (
    <div className="mt-4 border p-4 border-gray-200 rounded w-72">
      <h1 className="text-xl font-bold tracking-wide">
        ${formatNumber(data?.data?.total_volume?.usd)}
      </h1>
      <p className="text-gray-500 text-md">24hr Trading Volume</p>
    </div>
  );
};

export default TradingVolumeCard;
