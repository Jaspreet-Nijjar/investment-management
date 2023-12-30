import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  link: string;
}

const Button: React.FC<ButtonProps> = ({ children, link }) => {
  return (
    <Link className="text-sm bg-black text-white px-2 py-1 rounded" to={link}>
      {children}
    </Link>
  );
};

export default Button;
