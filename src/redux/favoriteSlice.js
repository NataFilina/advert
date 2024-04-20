import { createSlice } from '@reduxjs/toolkit';
import { addContact, fetchContacts, deleteContact } from './thunks';
import { handleFulfilled } from './hendlers';

const initialState = {
  favorites: {
    items: [],
  },
};

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.favorites.items =
          JSON.parse(localStorage.getItem('favorites')) ?? [];
      })
      .addMatcher(
        action => action.type.endsWith('/fulfilled'),
        handleFulfilled
      );
  },
});

export const favoriteReducer = favoriteSlice.reducer;
