import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../../images/logo.png';
import { navbar_config } from '../../config/navbar_links_config';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <nav className="md:bg-black h-screen fixed left-0 top-0 w-58 p-8 z-10 hidden lg:block">
        <div className="logo mb-10">
          <Link to="/">
            <img src={Logo} width="150" alt="virtual portfolio main logo" />
          </Link>
        </div>

        <div className="nav">
          {Object.entries(navbar_config).map(([key, { path, Icon, label }]) => (
            <div className="nav" key={key}>
              <NavLink
                to={path}
                className="flex content-center items-center text-white hover:text-orange-500 transition ease-out duration-500 p-2"
              >
                {Icon}
                <span className="ml-2">{label}</span>
              </NavLink>
            </div>
          ))}
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="bg-black fixed top-0 w-full p-6 flex items-center justify-between lg:block z-10">
        <div className="md:logo">
          <Link to="/">
            <img src={Logo} width="150" alt="virtual portfolio main logo" />
          </Link>
        </div>

        <div className="md:block lg:hidden cursor-pointer">
          <GiHamburgerMenu color="white" size={25} onClick={toggleMobileMenu} />
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed top-0 right-0 h-full w-64 bg-black p-8  lg:hidden">
          <div className="flex justify-end mb-6 cursor-pointer">
            <IoMdClose onClick={toggleMobileMenu} color="white" size={25} />
          </div>

          <div className="nav">
            {Object.entries(navbar_config).map(
              ([key, { path, Icon, label }]) => (
                <div className="nav" key={key}>
                  <NavLink
                    onClick={() => setMobileMenuOpen(false)}
                    to={path}
                    className="flex content-center items-center text-white hover:text-orange-500 transition ease-out duration-500 p-2"
                  >
                    {Icon}
                    <span className="ml-2">{label}</span>
                  </NavLink>
                </div>
              )
            )}
          </div>
        </div>
      )}
    </>
  );
};
