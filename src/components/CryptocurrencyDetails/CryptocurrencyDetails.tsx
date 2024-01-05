import { useGetSingleCoinQuery } from '../../services/cryptoAPI';
import BuyCryptocurrencyForm from '../Forms/BuyCryptocurrencyForm';
import CryptocurrencyInformation from './CryptocurrencyInformation';

const CryptocurrencyDetails = ({ id }) => {
  const { data } = useGetSingleCoinQuery(id);

  return (
    <div>
      <CryptocurrencyInformation data={data} />
      <BuyCryptocurrencyForm data={data} />
    </div>
  );
};

export default CryptocurrencyDetails;
