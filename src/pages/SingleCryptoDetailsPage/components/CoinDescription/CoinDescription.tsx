import DOMPurify from 'dompurify';
import LoadingSpinner from '../../../../components/common/LoadingSpinner';

const CoinDescription = ({ data }) => {
  if (!data) {
    return <LoadingSpinner />;
  }

  return (
    <section>
      <p className="pt-10 text-gray-500">About {data?.name}</p>
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
