import { configureStore } from '@reduxjs/toolkit';
import { coinGeckoApi } from '../services/cryptoAPI';
import searchBarReducer from '../components/SearchBar/searchBarSlice';

const store = configureStore({
  reducer: {
    [coinGeckoApi.reducerPath]: coinGeckoApi.reducer,
    searchBar: searchBarReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(coinGeckoApi.middleware),
});

export default store;
