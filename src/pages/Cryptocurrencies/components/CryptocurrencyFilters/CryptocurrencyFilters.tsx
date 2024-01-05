import { useSelector, useDispatch } from 'react-redux';
import {
  setMarketCapFilter,
  setPriceFilter,
  setDayPriceChangeFilter,
  setCirculatingSupplyFilter,
} from './cryptocurrencyFilterSlice';

const CryptocurrencyFilters = () => {
  const dispatch = useDispatch();
  const priceFilter = useSelector(
    (state) => state.cryptocurrencyFilter.priceFilter
  );

  const marketCapFilter = useSelector(
    (state) => state.cryptocurrencyFilter.marketCapFilter
  );

  const dayPriceChangeFilter = useSelector(
    (state) => state.cryptocurrencyFilter.dayPriceChangeFilter
  );

  const circulatingSupplyFilter = useSelector(
    (state) => state.cryptocurrencyFilter.setCirculatingSupplyFilter
  );

  const handleFilterChange = (e) => {
    const selectedPriceRange = e.target.value;
    dispatch(setPriceFilter(selectedPriceRange));
  };

  const handleMarketCapFilterChange = (e) => {
    const selectedRange = e.target.value;
    dispatch(setMarketCapFilter(selectedRange));
  };

  const handleDayPriceChangeFilter = (e) => {
    const selectedRange = e.target.value;
    dispatch(setDayPriceChangeFilter(selectedRange));
  };

  const handleCirculatingSupplyFilter = (e) => {
    const selectedRange = e.target.value;
    dispatch(setCirculatingSupplyFilter(selectedRange));
  };

  return (
    <div className="mt-4 border p-4 border-gray-200 rounded h-full grid grid-cols-2 gap-4">
      <div>
        <label
          className="text-sm text-center font-bold text-gray-500 mb-2"
          htmlFor="price"
        >
          Price
        </label>
        <select
          className="flex flex-col text-sm border border-gray-300 rounded"
          id="price"
          value={priceFilter}
          onChange={handleFilterChange}
        >
          <option value="all">All</option>
          <option value="<0.001">&lt; $0.001</option>
          <option value="<10">&lt; $10</option>
          <option value="<100">&lt; $100</option>
          <option value="<1000">&lt; $1000</option>
          <option value=">1000">&gt; $1000</option>
        </select>
      </div>

      <div>
        <label
          className="text-sm text-center font-bold text-gray-500 mb-2"
          htmlFor="marketCap"
        >
          Market Cap
        </label>
        <select
          className="flex flex-col text-sm border border-gray-300 rounded"
          id="marketCap"
          value={marketCapFilter}
          onChange={handleMarketCapFilterChange}
        >
          <option value="all">All</option>
          <option value="<100000">&lt; $100,000</option>
          <option value="<500000">&lt; $500,000</option>
          <option value="<1000000">&lt; $1 Million</option>
          <option value="<5000000">&lt; $5 Million</option>
          <option value="<1000000000"> $1 Billion</option>
          <option value=">1000000000">&gt; $1 Billion</option>
        </select>
      </div>

      <div>
        <label
          className="text-sm text-center font-bold text-gray-500 mb-2"
          htmlFor="dayPriceChange"
        >
          24hr Change
        </label>
        <select
          className="flex flex-col text-sm border border-gray-300 rounded"
          id="dayPriceChange"
          value={dayPriceChangeFilter}
          onChange={handleDayPriceChangeFilter}
        >
          <option value="all">All</option>
          <option value="<50">&lt; -50%</option>
          <option value="<10">&lt; -10%</option>
          <option value=">5">&gt; 5%</option>
          <option value=">50">&gt; 50%</option>
        </select>
      </div>

      <div>
        <label
          className="text-sm text-center font-bold text-gray-500 mb-2"
          htmlFor="circulatingSupply"
        >
          Circulating Supply
        </label>
        <select
          className="flex flex-col text-sm border border-gray-300 rounded"
          id="dayPriceChange"
          value={circulatingSupplyFilter}
          onChange={handleCirculatingSupplyFilter}
        >
          <option value="all">All</option>
          <option value="<100000">&lt; $100,000</option>
          <option value="<500000">&lt; $500,000</option>
          <option value="<1000000">&lt; $1 Million</option>
          <option value="<5000000">&gt; $5 Million</option>
          <option value=">1000000000">&gt; $1 Billion</option>
        </select>
      </div>
    </div>
  );
};

export default CryptocurrencyFilters;
