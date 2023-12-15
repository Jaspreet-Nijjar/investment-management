import millify from 'millify';
import DOMPurify from 'dompurify';
import { Link } from 'react-router-dom';

const CryptocurrencyInformation = ({ data }) => {
  if (!data) {
    return null;
  }

  console.log(data);

  return (
    <main>
      <section>
        <div className="flex items-center gap-4">
          {data && <img src={data.image.small} />}
          {data && <p className="text-xl">{data.name}</p>}
          {data && (
            <div className="text-sm bg-black text-white px-2 py-1 rounded">
              Rank #{data.market_cap_rank}
            </div>
          )}
        </div>
        <div>
          {data && (
            <p className="text-3xl font-bold mt-4">
              ${data.market_data.current_price.usd}
            </p>
          )}
        </div>

        <div className="text-sm text-gray-400 grid grid-cols-2 border-t border-gray-200 pt-4 sm:w-54 md:w-96">
          <p className="pb-6">
            Market Cap
            <p className="text-black">
              {millify(data.market_data.market_cap.usd)}
            </p>
          </p>
          <p>
            Circulating Supply
            <p className="text-black">
              {millify(data.market_data.circulating_supply)}
            </p>
          </p>
          <p>
            Total Supply
            <p className="text-black">
              {millify(data.market_data.total_supply)}
            </p>
          </p>
          <p>
            Max Supply
            <p className="text-black">{millify(data.market_data.max_supply)}</p>
          </p>

          <p className="pt-6">
            ATH
            <p className="text-black">${data.market_data.ath.usd}</p>
          </p>
        </div>
      </section>

      <section>
        <h1 className="pt-10 text-gray-500">About {data.name}</h1>
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(data.description.en),
          }}
          className="text-sm"
        ></p>
      </section>

      <section className="text-sm">
        <h1 className="pt-10 text-gray-500">Further Information</h1>
        <Link to={data.links.homepage[0]}>{data.name} Homepage</Link>
      </section>
    </main>
  );
};

export default CryptocurrencyInformation;
