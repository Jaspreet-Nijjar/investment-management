import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { coinGeckoApi } from '../services/cryptoAPI';
import searchBarReducer from '../components/SearchBar/searchBarSlice';

const rootReducer = combineReducers({
  [coinGeckoApi.reducerPath]: coinGeckoApi.reducer,
  searchBar: searchBarReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(coinGeckoApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
