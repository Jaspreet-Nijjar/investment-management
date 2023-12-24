import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import { Navbar } from '../components/Navbar/Navbar';

const RootLayout = () => {
  return (
    <div>
      <Navbar />

      <div className="lg:pl-56 lg:pt-16 md:pl-0 md:pt-16 pt-16">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default RootLayout;
