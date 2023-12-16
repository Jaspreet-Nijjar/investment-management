import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { coinGeckoApi } from '../services/cryptoAPI';
import searchBarReducer from '../components/SearchBar/searchBarSlice';

const rootReducer = combineReducers({
  [coinGeckoApi.reducerPath]: coinGeckoApi.reducer,
  searchBar: searchBarReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export default store;
