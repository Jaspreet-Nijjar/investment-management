import {
  AiOutlineHome,
  AiOutlineBulb,
  AiOutlineFundProjectionScreen,
} from 'react-icons/ai';
import { BiMoneyWithdraw } from 'react-icons/bi';
import { BsPieChart } from 'react-icons/bs';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../../images/logo.png';

export default function Navbar() {
  return (
    <nav className="bg-black h-screen fixed left-0 w-58 p-8">
      <div className="logo mb-10">
        <Link to="/">
          <img src={Logo} width="150" alt="virtual portfolio main logo" />
        </Link>
      </div>

      <div className="nav">
        <NavLink
          to="/"
          className="flex content-center text-white hover:text-orange-500 transition ease-out duration-500 p-2"
        >
          <AiOutlineHome size={20} className="mx-2" />
          Home
        </NavLink>
      </div>

      <div className="nav">
        <NavLink
          to="/portfolio"
          className="flex content-center text-white hover:text-orange-500 transition ease-out duration-500 p-2"
        >
          <BsPieChart size={20} className="mx-2" />
          Portfolio
        </NavLink>
      </div>

      <div className="nav">
        <NavLink
          to="/stocks"
          className="flex content-center text-white hover:text-orange-500 transition ease-out duration-500 p-2"
        >
          <BiMoneyWithdraw size={20} className="mx-2" />
          Stocks
        </NavLink>
      </div>

      <div className="nav">
        <NavLink
          to="/cryptocurrencies"
          className="flex content-center text-white hover:text-orange-500 transition ease-out duration-500 p-2"
        >
          <AiOutlineFundProjectionScreen size={20} className="mx-2" />
          Cryptocurrencies
        </NavLink>
      </div>

      <div className="nav">
        <NavLink
          to="/news"
          className="flex content-center text-white hover:text-orange-500 transition ease-out duration-500 p-2"
        >
          <AiOutlineBulb size={20} className="mx-2" />
          News
        </NavLink>
      </div>
    </nav>
  );
}
