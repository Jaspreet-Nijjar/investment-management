import CryptocurrencyTable from './components/CryptocurrencyTable/CryptocurrencyTable';
import SearchBar from '../../components/SearchBar/SearchBar';
import { CoinSummaryData } from './components/CoinSummaryData/CoinSummaryData';
import MarketCapCard from './components/CryptocurrencyCards/MarketCapCard';
import TradingVolumeCard from './components/CryptocurrencyCards/TradingVolumeCard';
import TrendingCoinsCard from './components/CryptocurrencyCards/TrendingCoinsCard';
import CryptocurrencyFilters from './components/CryptocurrencyFilters/CryptocurrencyFilters';
import Button from '../../components/common/Button';
import { useGetCoinSummaryDataQuery } from '../../services/cryptoAPI';

const Cryptocurrencies = () => {
  const { data } = useGetCoinSummaryDataQuery(1);

  return (
    <>
      <CoinSummaryData data={data} />

      <main className="pb-32">
        <h1 className="text-center mt-4 text-xl font-semibold md:text-2xl">
          Cryptocurrency Prices by Market Cap
        </h1>
        <p className="text-center text-sm px-8">
          Discover all global cryptocurrencies available, highlighted from the
          highest market cap. Click on the product name to explore further
          details about the cryptocurrency.
        </p>

        <div className="flex flex-col pb-8 justify-center gap-6 xl:flex-row px-8">
          <section className="flex flex-col items-center justify-center">
            <MarketCapCard data={data} />
            <TradingVolumeCard data={data} />
          </section>

          <section className="flex flex-col items-center">
            <TrendingCoinsCard />
          </section>

          <section className="flex flex-col items-center">
            <CryptocurrencyFilters />
          </section>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 mb-10 md:flex-row">
          <SearchBar placeholder="Search Cryptocurrencies" />
          <Button to="/portfolio">Portfolio</Button>
          <Button to="/portfolio">Buy Cryptocurrency</Button>
        </div>

        <CryptocurrencyTable />
      </main>
    </>
  );
};

export default Cryptocurrencies;
