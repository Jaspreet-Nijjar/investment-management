import {
  AiOutlineHome,
  AiOutlineBulb,
  AiOutlineFundProjectionScreen,
} from 'react-icons/ai';
import { BiMoneyWithdraw } from 'react-icons/bi';
import { BsPieChart } from 'react-icons/bs';

export const navbar_config = {
  Home: {
    path: '/',
    Icon: <AiOutlineHome />,
    label: 'Home',
  },
  Portfolio: {
    path: '/portfolio',
    Icon: <BsPieChart />,
    label: 'Portfolio',
  },
  Stocks: {
    path: '/stocks',
    Icon: <BiMoneyWithdraw />,
    label: 'Stocks',
  },
  Cryptocurrencies: {
    path: '/cryptocurrencies',
    Icon: <AiOutlineFundProjectionScreen />,
    label: 'Cryptocurrencies',
  },
  News: {
    path: '/news',
    Icon: <AiOutlineBulb />,
    label: 'News',
  },
};
