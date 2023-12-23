import CryptocurrencyTable from '../components/CryptocurrencyTable/CryptocurrencyTable';
import SearchBar from '../components/SearchBar/SearchBar';
import { CoinSummaryData } from '../components/CoinSummaryData/CoinSummaryData';
import MarketCapCard from '../components/CryptocurrencyCards/MarketCapCard';
import TradingVolumeCard from '../components/CryptocurrencyCards/TradingVolumeCard';
import TrendingCoinsCard from '../components/CryptocurrencyCards/TrendingCoinsCard';

const Cryptocurrencies = () => {
  return (
    <>
      <CoinSummaryData />

      <main>
        <h1 className="text-center ml-24 mt-4 text-xl font-semibold md:text-2xl">
          All Cryptocurrencies
        </h1>
        <p className="text-center ml-24">
          Discover and explore our full list of available cryptocurrencies
        </p>
        <SearchBar placeholder="Search Cryptocurrencies" />

        <div className="flex">
          <section className="flex flex-col">
            <MarketCapCard />
            <TradingVolumeCard />
          </section>

          <section>
            <TrendingCoinsCard />
          </section>
        </div>

        <h1 className="ml-64 text-gray-600 py-6 font-bold">Market Overview</h1>
        <CryptocurrencyTable />
      </main>
    </>
  );
};

export default Cryptocurrencies;
