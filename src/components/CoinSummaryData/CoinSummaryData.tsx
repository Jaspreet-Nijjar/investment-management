import { useGetCoinSummaryDataQuery } from '../../services/cryptoAPI';
import millify from 'millify';

export const CoinSummaryData = () => {
  const { data } = useGetCoinSummaryDataQuery(1);

  return (
    <section className="ml-60 flex justify-around font-bold text-gray-500 ml-10 mt-4">
      <p>Coins: {data?.data?.active_cryptocurrencies}</p>
      <p>Exchanges: {data?.data?.markets}</p>
      <p>Market Cap: ${millify(data?.data?.total_market_cap?.usd)}</p>
      <p>24h Vol: ${millify(data?.data?.total_volume?.usd)}</p>

      <div className="flex gap-6">
        <p>
          Dominance: BTC {data?.data?.market_cap_percentage?.btc.toFixed(1)}%
        </p>
        <p>ETH {data?.data?.market_cap_percentage?.eth.toFixed(1)}%</p>
      </div>
    </section>
  );
};
