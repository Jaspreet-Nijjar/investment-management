import numeral from 'numeral';

export const formatNumber = (value: number) => {
  const formattedNumber = numeral(value).format('0,0');
  return formattedNumber;
};
