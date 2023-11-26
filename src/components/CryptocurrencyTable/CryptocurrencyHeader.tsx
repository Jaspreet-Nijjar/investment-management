export const CryptocurrencyHeader = () => {
  const headers = [
    '#',
    'Product',
    'Price',
    '1hr',
    '24hr',
    '7d',
    'Market Cap',
    'Last 7d',
    'Add To Portfolio',
  ];

  const headerClasses = [
    'hidden md:block text-center text-orange-400 font-bold',
    'text-center text-orange-400 font-bold',
    'text-center text-orange-400 font-bold',
    'hidden lg:block text-center text-orange-400 font-bold',
    'hidden lg:block text-center text-orange-400 font-bold',
    'hidden lg:block text-center text-orange-400 font-bold',
    'hidden md:block text-center text-orange-400 font-bold',
    'hidden lg:block text-center text-orange-400 font-bold',
    'hidden xl:block text-center text-orange-400 font-bold',
  ];

  return (
    <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-9 gap-30 p-4 border-b border-gray-200 text-sm">
      {headers.map((header, index) => (
        <div key={index} className={headerClasses[index]}>
          {header}
        </div>
      ))}
    </section>
  );
};
