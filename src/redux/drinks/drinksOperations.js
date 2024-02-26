import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://project-backend-0pzg.onrender.com/api';

export const getCategories = createAsyncThunk(
  'filters/categories',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/filters/categories');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getIngredients = createAsyncThunk(
  'filters/ingredients',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/filters/ingredients');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getGlasses = createAsyncThunk(
  'filters/glasses',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/filters/glasses');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getMainPage = createAsyncThunk(
  'drinks/mainpage',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/drinks/mainpage');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getPopulars = createAsyncThunk(
  'drinks/popular',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/drinks/popular');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getSearch = createAsyncThunk(
  'drinks/search',
  async (credentials, thunkAPI) => {
    const {
      searchQuery: drink,
      category,
      ingredient: ingredients,
      limit,
      page,
    } = credentials;
    try {
      const { data } = await axios.get('/drinks/search', {
        params: { drink, category, ingredients, limit, page },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getById = createAsyncThunk('drinks/id', async (id, thunkAPI) => {
  try {
    const { data } = await axios.get(`/drinks/${id}`);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addDrinkOwn = createAsyncThunk(
  'drinks/own/add',
  async (credentials, thunkAPI) => {
    console.log(credentials);
    try {
      const { data } = await axios.post('/drinks/own/add', credentials, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeDrinkOwn = createAsyncThunk(
  'drinks/own/remove',
  async ({ drinkId }, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/drinks/own/remove/${drinkId}`);
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchDrinkOwn = createAsyncThunk(
  'drinks/own',
  async ({ page, limit }, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `/drinks/own?page=${page}&limit=${limit}`
      );
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addFavoriteDrink = createAsyncThunk(
  'drinks/favorite/add',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/drinks/favorite/add', credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeFavoriteDrink = createAsyncThunk(
  'drinks/favorite/remove',
  async ({ drinkId }, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/drinks/favorite/remove/${drinkId}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchFavoriteDrink = createAsyncThunk(
  'drinks/favorite',
  async ({ page, limit }, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `/drinks/favorite?page=${page}&limit=${limit}`
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
