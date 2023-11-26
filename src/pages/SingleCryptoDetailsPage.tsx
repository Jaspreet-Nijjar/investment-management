import { useParams } from 'react-router-dom';

const SingleCryptoDetailsPage = () => {
  const { id } = useParams();

  return <div className="ml-60">{id}</div>;
};

export default SingleCryptoDetailsPage;
