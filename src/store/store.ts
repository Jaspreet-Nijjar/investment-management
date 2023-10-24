import { configureStore } from '@reduxjs/toolkit';
import { coinGeckoApi } from '../services/cryptoAPI';

const store = configureStore({
  reducer: {
    [coinGeckoApi.reducerPath]: coinGeckoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(coinGeckoApi.middleware),
});

export default store;
