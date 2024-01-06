import { Link } from 'react-router-dom';
import { MdError } from 'react-icons/md';
import Logo from './logo-no-background.png';

const NotFound = () => {
  return (
    <main className="p-16 text-center">
      <h1 className="text-8xl font-extrabold">404</h1>
      <h3 className="text-3xl mt-8 text-gray-600">Page Not Found</h3>
      <p>
        Sorry, we can't seem to find this page. The page may not exist or an
        error has occurred.
      </p>

      <MdError size={150} className="text-red-500 mx-auto" />

      <p className="mt-16">Head back to the Homepage by clicking below</p>

      <Link to="/" className="flex justify-center p-8">
        <img
          src={Logo}
          alt="picture of portfolio logo"
          width="300"
          className="object-cover"
        />
      </Link>
    </main>
  );
};

export default NotFound;
