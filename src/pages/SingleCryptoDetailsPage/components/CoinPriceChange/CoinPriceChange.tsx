import Indicators from '../../../../components/common/Indicators';

const CoinPriceChange = ({ data }) => {
  return (
    <section className="pt-16">
      <p className="pt-8 text-gray-500">Price Analysis</p>

      <div className="border border-gray-300 rounded grid grid-cols-5 text-sm text-center">
        <div>
          <p className="bg-gray-200 border-b border-r border-gray-300 p-2">
            24h
          </p>
          <div className="border-r border-gray-300 p-2">
            <Indicators data={data?.market_data?.price_change_percentage_24h} />
          </div>
        </div>

        <div>
          <p className="bg-gray-200 border-b border-r border-gray-300 p-2">
            7d
          </p>
          <div className="border-r border-gray-300 p-2">
            <Indicators data={data?.market_data?.price_change_percentage_7d} />
          </div>
        </div>

        <div>
          <p className="bg-gray-200 border-b border-r border-gray-300 p-2">
            14d
          </p>
          <div className="border-r border-gray-300 p-2">
            <Indicators data={data?.market_data?.price_change_percentage_14d} />
          </div>
        </div>

        <div>
          <p className="bg-gray-200 border-b border-r border-gray-300 p-2">
            30d
          </p>
          <div className="border-r border-gray-300 p-2">
            <Indicators data={data?.market_data?.price_change_percentage_30d} />
          </div>
        </div>

        <div>
          <p className="bg-gray-200 border-b border-r border-gray-300 p-2">
            1y
          </p>
          <div className="border-r border-gray-300 p-2">
            <Indicators data={data?.market_data?.price_change_percentage_1y} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoinPriceChange;
