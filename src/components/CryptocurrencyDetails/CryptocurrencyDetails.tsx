import { useGetSingleCoinQuery } from '../../services/cryptoAPI';
import CryptocurrencyInformation from './CryptocurrencyInformation';

const CryptocurrencyDetails = ({ id }) => {
  const { data } = useGetSingleCoinQuery(id);

  return (
    <div>
      <CryptocurrencyInformation data={data} />
    </div>
  );
};

export default CryptocurrencyDetails;
