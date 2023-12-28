import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  priceFilter: 'all',
  marketCapFilter: 'all',
  dayPriceChangeFilter: 'all',
  circulatingSupplyFilter: 'all',
};

export const cryptocurrencyFilterSlice = createSlice({
  name: 'cryptocurrencyFilter',
  initialState,
  reducers: {
    setPriceFilter: (state, action) => {
      state.priceFilter = action.payload;
    },
    setMarketCapFilter: (state, action) => {
      state.marketCapFilter = action.payload;
    },
    setDayPriceChangeFilter: (state, action) => {
      state.dayPriceChangeFilter = action.payload;
    },
    setCirculatingSupplyFilter: (state, action) => {
      state.circulatingSupplyFilter = action.payload;
    },
  },
});

export const {
  setPriceFilter,
  setMarketCapFilter,
  setDayPriceChangeFilter,
  setCirculatingSupplyFilter,
} = cryptocurrencyFilterSlice.actions;
export default cryptocurrencyFilterSlice.reducer;
