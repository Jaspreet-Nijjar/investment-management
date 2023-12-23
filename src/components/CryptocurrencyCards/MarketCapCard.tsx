import { useGetCoinSummaryDataQuery } from '../../services/cryptoAPI';
import LoadingSpinner from '../../shared/LoadingSpinner/LoadingSpinner';

const MarketCapCard = () => {
  const { data, isLoading, isError } = useGetCoinSummaryDataQuery(1);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <p>There is currently an error, please try again.</p>;
  }

  return (
    <div className="border border-gray-200 rounded md:w-96">
      <h1>{data.total_market_cap}</h1>
    </div>
  );
};

export default MarketCapCard;
