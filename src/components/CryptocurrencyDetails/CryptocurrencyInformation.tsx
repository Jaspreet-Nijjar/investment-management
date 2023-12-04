const CryptocurrencyInformation = ({ data }) => {
  console.log(data);
  return (
    <section>
      <div className="flex items-center gap-4">
        {data && <img src={data.image.small} />}
        {data && <p className="text-xl">{data.name}</p>}
      </div>
      <div>
        {data && (
          <p className="text-3xl font-bold mt-4">
            ${data.market_data.current_price.usd}
          </p>
        )}
      </div>
    </section>
  );
};

export default CryptocurrencyInformation;
