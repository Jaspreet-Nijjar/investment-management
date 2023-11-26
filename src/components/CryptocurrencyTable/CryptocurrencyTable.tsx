import { useState, useEffect } from 'react';
import { useGetCoinsQuery } from '../../services/cryptoAPI';
import CoinList from './CoinList';
import { useSelector } from 'react-redux';
import { CryptocurrencyHeader } from './CryptocurrencyHeader';

export default function CryptocurrencyTable() {
  const { data } = useGetCoinsQuery(1);

  const searchQuery = useSelector((state) => String(state.searchBar) || '');

  const [filteredData, setFilteredData] = useState([]);

  interface CoinProps {
    id: string;
    name: string;
    symbol: string;
    image: string;
    current_price: number;
    market_cap: number;
    market_cap_change_percentage_24h: number;
    market_cap_rank: number;
    price_change_percentage_24h: number;
    price_change_percentage_1h_in_currency: number;
    price_change_percentage_7d_in_currency: number;
  }

  useEffect(() => {
    if (data) {
      const filtered = data.filter((coin: CoinProps) =>
        coin.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredData(filtered);
    }
  }, [data, searchQuery]);

  return (
    <div className="ml-24">
      <CryptocurrencyHeader />
      <CoinList data={filteredData} />
    </div>
  );
}
