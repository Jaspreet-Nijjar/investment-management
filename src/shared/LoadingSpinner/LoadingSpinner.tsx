import { FadeLoader } from 'react-spinners';

const LoadingSpinner = () => {
  return (
    <div className="mx-auto">
      <FadeLoader color="orange" width={5} />
    </div>
  );
};

export default LoadingSpinner;
