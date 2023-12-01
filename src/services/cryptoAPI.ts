import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://api.coingecko.com/api/v3';

export const coinGeckoApi = createApi({
  reducerPath: 'coinGeckoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCoins: builder.query({
      query: () =>
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en`,
    }),
    getCoinHistory: builder.query({
      query: (coinId) => `/coins/${coinId}/market_chart?vs_currency=usd&days=7`,
    }),
    getCoinSummaryData: builder.query({
      query: () => '/global',
    }),
    getTrendingCoins: builder.query({
      query: () => '/search/trending',
    }),
  }),
});

export const {
  useGetCoinsQuery,
  useGetCoinSummaryDataQuery,
  useGetCoinHistoryQuery,
  useGetTrendingCoinsQuery,
} = coinGeckoApi;
