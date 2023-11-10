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
      state.value = action.payload;
    },
    submitSearch: (state) => {
      console.log('Form submitted with value:', state.value);
      state.value = '';
    },
  },
});

export const { searchQuery, submitSearch } = searchBarSlice.actions;
export default searchBarSlice.reducer;
