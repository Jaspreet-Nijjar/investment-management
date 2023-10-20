import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

const RootLayout = () => {
  return (
    <div>
      Root
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
