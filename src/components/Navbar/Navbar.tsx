import {
  AiOutlineHome,
  AiOutlineBulb,
  AiOutlineFundProjectionScreen,
} from 'react-icons/ai';
import { BiMoneyWithdraw } from 'react-icons/bi';
import { BsPieChart } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.png';

export default function Navbar() {
  return (
    <nav className="bg-black h-screen fixed left-0 w-58 p-8">
      <div className="logo mb-10">
        <Link to="/">
          <img src={Logo} width="150" alt="virtual portfolio main logo" />
        </Link>
      </div>

      <div className="flex content-center text-white hover:text-orange-500 transition ease-out duration-500 p-2">
        <AiOutlineHome size={20} />
        <Link to="/" className="mx-2">
          Home
        </Link>
      </div>

      <div className="flex content-center text-white hover:text-orange-500 transition ease-out duration-500 p-2">
        <BsPieChart size={20} />
        <Link to="/portfolio" className="mx-2">
          Portfolio
        </Link>
      </div>

      <div className="flex content-center text-white hover:text-orange-500 transition ease-out duration-500 p-2">
        <BiMoneyWithdraw size={20} />
        <Link to="/stocks" className="mx-2">
          Stocks
        </Link>
      </div>

      <div className="flex content-center text-white hover:text-orange-500 transition ease-out duration-500 p-2">
        <AiOutlineFundProjectionScreen size={20} />
        <Link to="/cryptocurrencies" className="mx-2">
          Cryptocurrencies
        </Link>
      </div>

      <div className="flex content-center text-white hover:text-orange-500 transition ease-out duration-500 p-2">
        <AiOutlineBulb size={20} />
        <Link to="/news" className="mx-2">
          News
        </Link>
      </div>
    </nav>
  );
}
