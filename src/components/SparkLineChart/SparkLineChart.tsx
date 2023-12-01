import { useGetCoinHistoryQuery } from '../../services/cryptoAPI';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const SparkLineChart = ({ coinId }) => {
  const { data: coinHistoryData } = useGetCoinHistoryQuery(coinId);

  let prices = '';
  let timestamps = '';

  if (!coinHistoryData) {
    return 'Loading...';
  }

  if (coinHistoryData) {
    prices = coinHistoryData?.prices.map((priceData: number[]) => priceData[1]);
    timestamps = coinHistoryData?.prices.map(
      (priceData: number[]) => priceData[0]
    );
  }

  const chartData = {
    labels: timestamps,
    datasets: [
      {
        label: 'Price',
        data: prices,
        borderColor:
          prices[0] > prices[prices.length - 1] ? 'red' : 'lightgreen',
        borderWidth: 1,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        pointRadius: 0,
        pointHoverRadius: 0,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  };

  return (
    <div>
      <div className="hidden lg:block">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

export default SparkLineChart;
