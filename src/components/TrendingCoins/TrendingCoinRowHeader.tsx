export const TrendingCoinRowHeader = () => {
  const headers = ['Coin', 'Price'];

  return (
    <div className="grid grid-cols-2 text-sm mt-4 text-center text-orange-400 font-bold border-b border-gray-200">
      {headers.map((header, index) => (
        <div key={index}>{header}</div>
      ))}
    </div>
  );
};
