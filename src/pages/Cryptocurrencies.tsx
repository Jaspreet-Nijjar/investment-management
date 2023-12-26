import CryptocurrencyTable from '../components/CryptocurrencyTable/CryptocurrencyTable';
// import SearchBar from '../components/SearchBar/SearchBar';
import { CoinSummaryData } from '../components/CoinSummaryData/CoinSummaryData';
import MarketCapCard from '../components/CryptocurrencyCards/MarketCapCard';
import TradingVolumeCard from '../components/CryptocurrencyCards/TradingVolumeCard';
import TrendingCoinsCard from '../components/CryptocurrencyCards/TrendingCoinsCard';

const Cryptocurrencies = () => {
  return (
    <>
      <CoinSummaryData />

      <main className="pb-32">
        <h1 className="text-center mt-4 text-xl font-semibold md:text-2xl">
          Cryptocurrency Prices by Market Cap
        </h1>
        <p className="text-center text-sm p-2">
          Discover all global cryptocurrencies available, highlighted from the
          highest market cap. Click on the product name to explore further
          details about the cryptocurrency.
        </p>
        {/* <SearchBar placeholder="Search Cryptocurrencies" /> */}

        <div className="flex flex-col pb-8 md:flex-row px-8">
          <section className="flex flex-col items-center justify-center px-6">
            <MarketCapCard />
            <TradingVolumeCard />
          </section>

          <section className="flex flex-col items-center">
            <TrendingCoinsCard />
          </section>
        </div>

        <CryptocurrencyTable />
      </main>
    </>
  );
};

export default Cryptocurrencies;
