import { useGetTrendingCoinsQuery } from '../../services/cryptoAPI';

const TrendingCategories = () => {
  const { data, isLoading } = useGetTrendingCoinsQuery(1);

  const trendingCategories = data && data.categories.slice(0, 5);
  console.log(trendingCategories);

  if (isLoading) {
    return <div>Is Loading...</div>;
  }

  return (
    <section className="mx-auto ml-4 mt-4 mr-4 border border-gray-200 rounded md:w-96">
      <h2 className="text-center font-bold">Trending Categories</h2>
      <p className="hidden md:block text-sm p-2 text-center">
        View the highest cryptocurrency categories currently trending based on
        market capitalisation.
      </p>
    </section>
  );
};

export default TrendingCategories;
