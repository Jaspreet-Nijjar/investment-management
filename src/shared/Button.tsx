import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  to: string;
}

const Button: React.FC<ButtonProps> = ({ children, to }) => {
  return (
    <Link className="text-sm bg-black text-white px-2 py-1 rounded" to={to}>
      {children}
    </Link>
  );
};

export default Button;
