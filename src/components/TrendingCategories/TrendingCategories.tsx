import { useGetTrendingCoinsQuery } from '../../services/cryptoAPI';
import TrendingCategoriesBarChart from './TrendingCategoriesBarChart';

const TrendingCategories = () => {
  const { data, isLoading } = useGetTrendingCoinsQuery(1);

  const trendingCategories = data && data.categories.slice(0, 5);
  console.log('Trending Categories:', trendingCategories);

  if (isLoading) {
    return <div>Is Loading...</div>;
  }

  return (
    <section className="mx-auto border border-gray-200 rounded md:w-96">
      <h2 className="text-center font-bold">Trending Categories</h2>
      <p className="hidden md:block text-sm pt-2 text-center pb-6">
        View the highest cryptocurrency categories currently trending based on
        market capitalisation. The top categories are{' '}
        <span className="font-bold">
          {trendingCategories[0]?.name}, {trendingCategories[1]?.name} and{' '}
          {trendingCategories[2]?.name}.
        </span>
      </p>
      <TrendingCategoriesBarChart categories={trendingCategories} />
    </section>
  );
};

export default TrendingCategories;
