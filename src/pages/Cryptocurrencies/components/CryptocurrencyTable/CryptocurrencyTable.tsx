import { useState, useEffect } from 'react';
import { useGetCoinsQuery } from '../../../../services/cryptoAPI';
import CoinList from './CoinList';
import { useSelector } from 'react-redux';
import { CryptocurrencyHeader } from './CryptocurrencyHeader';
import { RootState } from '../../../../store/store';
import { CoinData } from './types';

export default function CryptocurrencyTable() {
  const { data } = useGetCoinsQuery(1);

  const searchQuery = useSelector((state: RootState) => state.searchBar);

  const [filteredData, setFilteredData] = useState([]);

  interface CoinListProps {
    data: CoinData[];
  }

  useEffect(() => {
    if (data) {
      const filtered = data.filter((coin: CoinData) =>
        coin.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredData(filtered);
    }
  }, [data, searchQuery]);

  return (
    <div>
      <CryptocurrencyHeader />
      <CoinList data={filteredData} />
    </div>
  );
}
