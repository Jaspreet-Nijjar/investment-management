import Button from '../../../../components/common/Button';
import { formatNumber } from '../../../../utilities/formatNumber';

const CoinDetails = ({ data }) => {
  return (
    <section>
      <div className="flex items-center gap-4">
        <img src={data?.image?.small} alt="coin logo" />
        <h1 className="text-4xl font-extrabold">{data?.name}</h1>
        <Button>Rank # {data?.market_cap_rank}</Button>
      </div>

      <div>
        <p className="text-3xl mt-4">
          ${formatNumber(data?.market_data?.current_price?.usd)}
        </p>
      </div>
    </section>
  );
};

export default CoinDetails;
