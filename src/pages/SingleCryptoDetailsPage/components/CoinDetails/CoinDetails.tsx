import Button from '../../../../components/common/Button';
import { formatNumber } from '../../../../utilities/formatNumber';
import Indicators from '../../../../components/common/Indicators';

const CoinDetails = ({ data }) => {
  console.log(data);

  return (
    <section>
      <div className="flex items-center gap-4">
        <img src={data?.image?.small} alt="coin logo" />
        <h1 className="text-4xl font-extrabold">{data?.name}</h1>
        <Button>Rank # {data?.market_cap_rank}</Button>
      </div>

      <div className="flex gap-2 items-center  mt-4">
        <p className="text-3xl">
          ${formatNumber(data?.market_data?.current_price?.usd)}
        </p>

        <Indicators
          data={data?.market_data?.price_change_percentage_24h}
          fontSize="text-md"
        />
      </div>
    </section>
  );
};

export default CoinDetails;
