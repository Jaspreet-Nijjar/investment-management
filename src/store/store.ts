import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { coinGeckoApi } from '../services/cryptoAPI';
import searchBarReducer from '../components/SearchBar/searchBarSlice';
import cryptocurrencyFilterReducer from '../pages/Cryptocurrencies/components/CryptocurrencyFilters/cryptocurrencyFilterSlice';

const rootReducer = combineReducers({
  coinGeckoApi: coinGeckoApi.reducer,
  searchBar: searchBarReducer,
  cryptocurrencyFilter: cryptocurrencyFilterReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(coinGeckoApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
