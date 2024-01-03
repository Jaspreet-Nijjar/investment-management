export interface CoinData {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_change_percentage_24h: number;
  market_cap_rank: number;
  price_change_percentage_24h: number;
  price_change_percentage_1h_in_currency: number;
  price_change_percentage_7d_in_currency: number;
  circulating_supply: number;
  total_supply: number;
}
