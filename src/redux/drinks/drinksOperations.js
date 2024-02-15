import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../auth/authOperations';

export const getOwnDrinksThunk = createAsyncThunk(
  'drinks/own',
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.get('drinks/own');
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getFavoritesDrinksThunk = createAsyncThunk(
  'drinks/favorite',
  async (_, thunkApi) => {
    try {
      const { data } = await instance.get('drinks/favorite');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteFavoriteDrinksThunk = createAsyncThunk(
  'drinks/favorite/remove',
  async (id, thunkApi) => {
    try {
      const { data } = await instance.delete(`drinks/favorite/remove/${id}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
