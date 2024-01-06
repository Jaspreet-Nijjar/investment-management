export const CryptocurrencyHeader = () => {
  const headers = [
    '#',
    'Product',
    'Price',
    '1hr',
    '24hr',
    '7d',
    'Market Cap',
    'Circulating / Total Supply',
    'Last 7d',
  ];

  const headerClasses = [
    'hidden md:block text-center text-orange-400 font-bold',
    'text-center text-orange-400 font-bold col-span-2',
    'text-center text-orange-400 font-bold',
    'hidden lg:block text-center text-orange-400 font-bold',
    'hidden lg:block text-center text-orange-400 font-bold',
    'hidden lg:block text-center text-orange-400 font-bold',
    'hidden md:block text-center text-orange-400 font-bold',
    'hidden lg:block text-center text-orange-400 font-bold col-span-2',
    'hidden lg:block text-center text-orange-400 font-bold',
  ];

  return (
    <div className="mx-auto max-w-screen-lg">
      <section className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-11 p-4 border-b border-gray-200 text-xs">
        {headers.map((header, index) => (
          <div key={index} className={headerClasses[index]}>
            {header}
          </div>
        ))}
      </section>
    </div>
  );
};
