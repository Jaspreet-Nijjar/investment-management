import CryptocurrencyTable from '../components/CryptocurrencyTable/CryptocurrencyTable';
import SearchBar from '../components/SearchBar/SearchBar';

const Cryptocurrencies = () => {
  return (
    <div className="ml-36 pt-6">
      <h1 className="text-center ml-24 text-xl font-semibold md:text-2xl">
        All Cryptocurrencies
      </h1>
      <p className="text-center ml-24">
        Discover and explore our full list of available cryptocurrencies
      </p>
      <SearchBar placeholder="Search Cryptocurrencies" />
      <CryptocurrencyTable />
    </div>
  );
};

export default Cryptocurrencies;
