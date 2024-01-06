import { useParams } from 'react-router-dom';
import { useGetSingleCoinQuery } from '../../services/cryptoAPI';
import CoinDescription from './components/CoinDescription/CoinDescription';
import CoinStatistics from './components/CoinStatistics/CoinStatistics';
import CoinDetails from './components/CoinDetails/CoinDetails';
import CoinLinks from './components/CoinLinks/CoinLinks';
import { TrendingCoins } from '../Homepage/components/TrendingCoins/TrendingCoins';

const SingleCryptoDetailsPage = () => {
  const { id } = useParams();

  const { data } = useGetSingleCoinQuery(id);

  return (
    <div className="p-8 pb-16">
      <CoinDetails data={data} />
      <CoinStatistics data={data} />
      <CoinDescription data={data} />
      <TrendingCoins />
      <CoinLinks data={data} />
    </div>
  );
};

export default SingleCryptoDetailsPage;
