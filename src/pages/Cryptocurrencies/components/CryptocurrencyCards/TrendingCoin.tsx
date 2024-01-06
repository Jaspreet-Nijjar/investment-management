import Indicators from '../../../../components/common/Indicators';

export interface CoinProps {
  coin: {
    item: {
      id?: string;
      thumb: string;
      name: string;
      data: {
        price: number;
        price_change_percentage_24h: {
          usd: number;
        };
      };
    };
  };
}

const TrendingCoin: React.FC<CoinProps> = ({ coin }) => {
  return (
    <>
      <div className="grid grid-cols-2 items-center justify-center">
        <div className="flex gap-2 items-center">
          <img src={coin.item.thumb} alt="logo of top three trending coins" />
          <p className="text-sm p-1">{coin.item.name}</p>
        </div>

        <div className="grid grid-cols-3 items-center">
          <p className="text-sm col-span-2">{coin.item.data.price}</p>

          <div className="flex items-center">
            <Indicators data={coin.item.data.price_change_percentage_24h.usd} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TrendingCoin;
