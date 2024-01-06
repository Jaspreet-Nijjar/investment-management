import Indicators from '../../../../components/common/Indicators';
import LoadingSpinner from '../../../../components/common/LoadingSpinner';
import { formatNumber } from '../../../../utilities/formatNumber';

interface MarketCapCardProps {
  data: {
    data: {
      market_cap_change_percentage_24h_usd: number;
      total_market_cap: {
        usd: number;
      };
    };
  };
}

const MarketCapCard: React.FC<MarketCapCardProps> = ({ data }) => {
  if (!data?.data) {
    return <LoadingSpinner />;
  }

  return (
    <div className="mt-4 border p-4 border-gray-200 rounded w-72">
      <h1 className="text-xl font-bold tracking-wide">
        ${formatNumber(data?.data?.total_market_cap?.usd)}
      </h1>
      <div className="flex items-center">
        <p className="text-gray-500 text-md">Market Capitalisation</p>
        <Indicators data={data?.data?.market_cap_change_percentage_24h_usd} />
      </div>
    </div>
  );
};

export default MarketCapCard;
