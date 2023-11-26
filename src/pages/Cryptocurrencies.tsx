import CryptocurrencyTable from '../components/CryptocurrencyTable/CryptocurrencyTable';
import SearchBar from '../components/SearchBar/SearchBar';

const Cryptocurrencies = () => {
  return (
    <div className="ml-36">
      <SearchBar placeholder="Search Cryptocurrencies" />
      <CryptocurrencyTable />
    </div>
  );
};

export default Cryptocurrencies;
