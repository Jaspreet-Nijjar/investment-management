export const filterCoins = (
  coin,
  priceFilter,
  marketCapFilter,
  dayPriceChangeFilter,
  circulatingSupplyFilter
) => {
  const price = coin.current_price;
  const marketCap = coin.market_cap;
  const dayPriceChange = coin.price_change_percentage_24h;
  const circulatingSupply = coin.circulating_supply;

  const filterPrice =
    (priceFilter === '<0.001' && price < 0.001) ||
    (priceFilter === '<10' && price < 10) ||
    (priceFilter === '<100' && price < 100) ||
    (priceFilter === '<1000' && price < 1000) ||
    (priceFilter === '>1000' && price > 1000) ||
    priceFilter === 'all';

  const filterMarketCap =
    marketCapFilter === 'all' ||
    (marketCapFilter === '<100000' && marketCap < 100000) ||
    (marketCapFilter === '<500000' && marketCap < 500000) ||
    (marketCapFilter === '<1000000' && marketCap < 1000000) ||
    (marketCapFilter === '<5000000' && marketCap < 5000000) ||
    (marketCapFilter === '<1000000000' && marketCap < 1000000000) ||
    (marketCapFilter === '>1000000000' && marketCap > 1000000000);

  const filterDayPriceChange =
    dayPriceChangeFilter === 'all' ||
    (dayPriceChangeFilter === '<50' && dayPriceChange < 50) ||
    (dayPriceChangeFilter === '<10' && dayPriceChange < 10) ||
    (dayPriceChangeFilter === '>5' && dayPriceChange > 5);

  const filterCirculatingSupply =
    circulatingSupplyFilter === 'all' ||
    (circulatingSupplyFilter === '<100000' && circulatingSupply < 100000) ||
    (circulatingSupplyFilter === '<500000' && circulatingSupply < 500000) ||
    (circulatingSupplyFilter === '<1000000' && circulatingSupply < 1000000) ||
    (circulatingSupplyFilter === '>5000000' && circulatingSupply > 5000000) ||
    (circulatingSupplyFilter === '>1000000000' &&
      circulatingSupply > 1000000000);

  return (
    filterPrice &&
    filterMarketCap &&
    filterDayPriceChange &&
    filterCirculatingSupply
  );
};
