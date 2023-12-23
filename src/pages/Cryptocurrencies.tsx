import CryptocurrencyTable from '../components/CryptocurrencyTable/CryptocurrencyTable';
import SearchBar from '../components/SearchBar/SearchBar';
import { CoinSummaryData } from '../components/CoinSummaryData/CoinSummaryData';
import MarketCapCard from '../components/CryptocurrencyCards/MarketCapCard';
import TradingVolumeCard from '../components/CryptocurrencyCards/TradingVolumeCard';

const Cryptocurrencies = () => {
  return (
    <>
      <CoinSummaryData />
      <MarketCapCard />
      <TradingVolumeCard />
      <main>
        <h1 className="text-center ml-24 mt-4 text-xl font-semibold md:text-2xl">
          All Cryptocurrencies
        </h1>
        <p className="text-center ml-24">
          Discover and explore our full list of available cryptocurrencies
        </p>
        <SearchBar placeholder="Search Cryptocurrencies" />
        <CryptocurrencyTable />
      </main>
    </>
  );
};

export default Cryptocurrencies;
