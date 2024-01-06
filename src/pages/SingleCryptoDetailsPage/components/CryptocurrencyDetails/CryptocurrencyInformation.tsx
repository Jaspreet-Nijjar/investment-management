import { Link } from 'react-router-dom';

const CryptocurrencyInformation = ({ data }) => {
  return (
    <main className="pb-32">
      <section className="text-sm">
        <h1 className="pt-10 text-gray-500">Further Information</h1>
        <Link to={data.links.homepage[0]}>{data.name} Homepage</Link>
      </section>
    </main>
  );
};

export default CryptocurrencyInformation;
