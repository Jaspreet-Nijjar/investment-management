import { useGetTrendingCoinsQuery } from '../../../../services/cryptoAPI';
import TrendingCategoriesBarChart from './TrendingCategoriesBarChart';

const TrendingCategories = () => {
  const { data, isLoading } = useGetTrendingCoinsQuery(1);
  console.log(data);

  if (isLoading) {
    return <div>Is Loading...</div>;
  }

  const trendingCategories = data && data.categories.slice(0, 5);

  return (
    <main className="mt-8 mx-auto w-full">
      <section className="border border-gray-200 rounded">
        <h2 className="text-center font-bold">Trending Categories</h2>
        <p className="text-sm pt-2 text-center pb-6">
          View the highest cryptocurrency categories currently trending based on
          market capitalisation. The top categories are{' '}
          <span className="font-bold">
            {trendingCategories[0]?.name}, {trendingCategories[1]?.name} and{' '}
            {trendingCategories[2]?.name}.
          </span>
        </p>
        <TrendingCategoriesBarChart categories={trendingCategories} />
      </section>
    </main>
  );
};

export default TrendingCategories;
