import Logo from '../../images/logo.png';

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
          Crypto Market Tracking <span className="text-white">and</span>{' '}
          Portfolio Management
        </p>

        <p className="text-md mt-8 px-24 text-center">
          Welcome to Virtual Portfolio. The all-in-one solution for in-depth{' '}
          <span className="text-orange-400">
            cryptocurrency market monitoring.
          </span>{' '}
          Explore the features of our user-friendly platform designed for
          insights and effortlessly manage your digital assets with our{' '}
          <span className="text-orange-400">
            intuitive portfolio management system
          </span>{' '}
          allowing you to closely track the performance of your investments.
        </p>
      </div>
    </>
  );
};

export default Homepage;
