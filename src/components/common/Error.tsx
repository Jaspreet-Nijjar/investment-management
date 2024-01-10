import { MdError } from 'react-icons/md';

const Error = () => {
  return (
    <div className="border border-gray-200 rounded w-96 bg-red-500 text-white p-6">
      <div className="text-xl font-bold flex gap-3">
        <MdError size={30} />
        <p>Error</p>
      </div>

      <p>There is an error, please try again </p>
    </div>
  );
};

export default Error;
