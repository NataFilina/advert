import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCarsList, getCar } from 'service/contacts-service';

export const fetchCars = createAsyncThunk(
  'cars/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      return await getCarsList();
    } catch (error) {
      return rejectWithValue(error.response.message);
    }
  }
);

export const fetchCar = createAsyncThunk(
  'cars/getOneCar',
  async (car, { rejectWithValue }) => {
    try {
      return await getCar(car);
    } catch (error) {
      return rejectWithValue(error.response.message);
    }
  }
);
