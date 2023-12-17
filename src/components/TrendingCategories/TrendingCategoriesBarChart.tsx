import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import { useGetCoinCategoriesQuery } from '../../services/cryptoAPI';
import millify from 'millify';
import { FadeLoader } from 'react-spinners';

interface CategoryProps {
  name: string;
  market_cap: number;
}

interface TrendingCategoriesBarChartProps {
  categories: CategoryProps[];
}

const TrendingCategoriesBarChart: React.FC<TrendingCategoriesBarChartProps> = ({
  categories,
}) => {
  const { data: categoryData, isLoading } = useGetCoinCategoriesQuery(1);

  if (!categoryData) {
    return <div>Loading...</div>;
  }

  if (isLoading) {
    <div className="flex justify-center align-center">
      <FadeLoader color="#FFA500" />
    </div>;
  }

  const normalisedCategories = categories.map((category: CategoryProps) =>
    category.name.trim().toLowerCase()
  );
  const filteredData = categoryData.filter((category: CategoryProps) =>
    normalisedCategories.includes(category.name.trim().toLowerCase())
  );

  const options = {
    hover: false,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Cryptocurrency Category',
        },
        ticks: {
          maxRotation: 20,
          minRotation: 0,
          autoSkip: false,
          maxTicksLimit: 5,
        },
      },
      y: {
        title: {
          display: true,
          text: 'Market Cap',
        },
        ticks: {
          callback: (value: number) => millify(value),
        },
      },
    },
    datasets: [
      {
        data: filteredData.map((category) => category.market_cap),
        backgroundColor: 'orange',
      },
    ],
  };

  const labels = filteredData.map((category: CategoryProps) => category.name);

  const data = {
    labels,
    datasets: [
      {
        data: filteredData.map(
          (category: CategoryProps) => category.market_cap
        ),
        backgroundColor: 'orange',
      },
    ],
  };

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default TrendingCategoriesBarChart;
