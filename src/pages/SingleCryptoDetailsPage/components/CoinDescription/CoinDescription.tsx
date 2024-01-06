import DOMPurify from 'dompurify';
import LoadingSpinner from '../../../../components/common/LoadingSpinner';

const CoinDescription = ({ data }) => {
  if (!data) {
    return <LoadingSpinner />;
  }

  return (
    <section>
      <h1 className="pt-10 text-gray-500">About {data?.name}</h1>
      <p
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(data?.description?.en),
        }}
        className="text-sm"
      ></p>
    </section>
  );
};

export default CoinDescription;
