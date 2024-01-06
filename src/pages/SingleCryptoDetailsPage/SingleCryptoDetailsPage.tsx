import { useParams } from 'react-router-dom';
import CryptocurrencyDetails from './components/CryptocurrencyDetails/CryptocurrencyDetails';

const SingleCryptoDetailsPage = () => {
  const { id } = useParams();

  return (
    <div className="p-8">
      <CryptocurrencyDetails id={id} />
    </div>
  );
};

export default SingleCryptoDetailsPage;
