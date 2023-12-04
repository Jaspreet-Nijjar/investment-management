import { useParams } from 'react-router-dom';
import CryptocurrencyDetails from '../components/CryptocurrencyDetails/CryptocurrencyDetails';

const SingleCryptoDetailsPage = () => {
  const { id } = useParams();

  return (
    <div className="ml-60 p-6">
      <CryptocurrencyDetails id={id} />
    </div>
  );
};

export default SingleCryptoDetailsPage;
