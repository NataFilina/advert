import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: {
    items: [],
  },
};

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: initialState,
  reducers: {
    addFavorite: {
      reducer: (state, { payload }) => {
        state.favorites.items.push(payload);
      },
    },
  },
});

export const favoriteReducer = favoriteSlice.reducer;
export const { addFavorite } = favoriteSlice.actions;
