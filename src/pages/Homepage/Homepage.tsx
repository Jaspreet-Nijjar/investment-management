import Logo from '../images/logo.png';
import { TrendingCoins } from './components/TrendingCoins/TrendingCoins';
import TrendingCategories from './components/TrendingCategories/TrendingCategories';

const Homepage = () => {
  return (
    <>
      <div className="bg-black text-white p-2 text-center">
        <img
          src={Logo}
          alt="virtual portfolio logo"
          className="object-cover w-96 mx-auto"
        />
        <p className="text-orange-400 mt-1 text-lg">
          Real-Time Market Monitoring and Portfolio Management
        </p>

        <p className="text-sm p-2">
          Welcome to Virtual Portfolio. The all-in-one solution to monitor the
          market of cryptocurrencies and stock investments{' '}
          <span className="text-orange-400">in real-time.</span> Manage your
          asset collection with our{' '}
          <span className="text-orange-400">
            intuitive portfolio management system
          </span>{' '}
          allowing you to track the performance of your investments.
        </p>
        <p className="text-lg py-6">
          Curious about the{' '}
          <span className="text-orange-400">latest trends?</span> Explore our
          dashboard below for a comprehensive overview of current
          cryptocurrencies and stocks
        </p>
      </div>
      <main className="pb-32 grid grid-cols-1 md:grid-cols-2">
        <TrendingCoins />
        <TrendingCategories />
      </main>
    </>
  );
};

export default Homepage;
