import { Link } from 'react-router-dom';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  to?: string;
}

const Button: React.FC<ButtonProps> = ({ children, to, ...buttonProps }) => {
  if (to) {
    return (
      <Link className="text-sm bg-black text-white px-2 py-1 rounded" to={to}>
        {children}
      </Link>
    );
  } else {
    return (
      <button
        className="text-sm bg-black text-white px-2 py-1 rounded"
        {...buttonProps}
      >
        {children}
      </button>
    );
  }
};

export default Button;
