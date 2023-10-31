import { NavLink, Link } from 'react-router-dom';
import Logo from '../../images/logo.png';
import { navbar_config } from '../../config/navbar_links_config';

export const Navbar = () => {
  return (
    <nav className="bg-black h-screen fixed left-0 w-58 p-8">
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
  );
};
