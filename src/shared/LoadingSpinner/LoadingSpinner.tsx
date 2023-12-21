import { FadeLoader } from 'react-spinners';

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center p-10">
      <FadeLoader color="orange" width={5} />
      <p className="text-sm mt-2">Loading...</p>
    </div>
  );
};

export default LoadingSpinner;
