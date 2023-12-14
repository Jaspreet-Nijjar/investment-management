import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import { Navbar } from '../components/Navbar/Navbar';

const RootLayout = () => {
  return (
    <div>
      <Navbar />

      <div className="overflow-y-auto h-full">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default RootLayout;
