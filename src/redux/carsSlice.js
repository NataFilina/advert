import { createSlice } from '@reduxjs/toolkit';
import { fetchCars, fetchCar } from './thunks';
import { handleFulfilled } from './hendlers';

const initialState = {
  cars: {
    items: [],
  },
  car: [],
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
        state.car = payload;
      })
      .addMatcher(
        action => action.type.endsWith('/fulfilled'),
        handleFulfilled
      );
  },
});

export const carsReducer = carsSlice.reducer;
