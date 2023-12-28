import { IoMdArrowDropup, IoMdArrowDropdown } from 'react-icons/io';

const TrendingCoin = ({ coin }) => {
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
            {coin.item.data.price_change_percentage_24h.usd > 0 ? (
              <IoMdArrowDropup size={20} className="text-green-500" />
            ) : (
              <IoMdArrowDropdown size={20} className="text-red-500" />
            )}
            <p
              className={`text-sm font-bold ${
                coin.item.data.price_change_percentage_24h.usd > 0
                  ? 'text-green-500'
                  : 'text-red-500'
              }`}
            >
              {Math.abs(
                coin.item.data.price_change_percentage_24h.usd.toFixed(1)
              )}
              %
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrendingCoin;
