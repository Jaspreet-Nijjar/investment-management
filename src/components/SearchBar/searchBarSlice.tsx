import { createSlice } from '@reduxjs/toolkit';

export const searchBarSlice = createSlice({
  name: 'searchBar',
  initialState: '',
  reducers: {
    searchQuery: (_, action) => {
      return action.payload;
    },
  },
});

export const { searchQuery } = searchBarSlice.actions;
export default searchBarSlice.reducer;
