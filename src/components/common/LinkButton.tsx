import { ReactElement } from 'react';
import { Link } from 'react-router-dom';

interface LinkButtonProps {
  to: string;
  text: string;
  icon: ReactElement;
}

const LinkButton: React.FC<LinkButtonProps> = ({ to, icon, text }) => {
  return (
    <div>
      <Link to={to}>
        <div className="flex items-center gap-2 bg-gray-200 rounded px-2 py-1 w-max text-sm font-bold">
          {icon}
          <p className="text-gray-700">{text}</p>
        </div>
      </Link>
    </div>
  );
};

export default LinkButton;
