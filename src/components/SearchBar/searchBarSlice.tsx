import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface SearchBarState {
  value: string;
}

const initialState: SearchBarState = {
  value: '',
};

export const searchBarSlice = createSlice({
  name: 'searchBar',
  initialState,
  reducers: {
    searchQuery: (state, action: PayloadAction<string>) => {
      return { ...state, value: action.payload };
    },
  },
});

export const { searchQuery } = searchBarSlice.actions;
export default searchBarSlice.reducer;
