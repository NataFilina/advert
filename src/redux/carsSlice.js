import { createSlice } from '@reduxjs/toolkit';
import { fetchCars, fetchCar } from './thunks';
import { handleFulfilled } from './hendlers';

const initialState = {
  cars: {
    items: [],
  },
};

const carsSlice = createSlice({
  name: 'cars',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchCars.fulfilled, (state, { payload }) => {
        state.cars.items = payload;
      })
      .addCase(fetchCar.fulfilled, (state, { payload }) => {
        state.cars.items = state.cars.items.filter(
          car => car.id !== payload.id
        );
      })
      .addMatcher(
        action => action.type.endsWith('/fulfilled'),
        handleFulfilled
      );
  },
});

export const carsReducer = carsSlice.reducer;
