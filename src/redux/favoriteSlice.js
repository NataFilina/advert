import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: [],
};

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: initialState,
  reducers: {
    addFavoriteAction: (state, { payload }) => {
      state.favorites.push(payload);
    },
  },
});

export const favoriteReducer = favoriteSlice.reducer;
export const { addFavoriteAction } = favoriteSlice.actions;
