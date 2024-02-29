import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toastSuccess } from '../../services/notification';

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
      currentPage: page,
    } = credentials;
    try {
      const { data } = await axios.get('/drinks/search', {
        params: { drink, category, ingredients, limit, page },
      });
      toastSuccess(`We found ${data.totalHits} drinks for you`);
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
    try {
      const formData = new FormData();
      formData.append('drinkpicture', credentials.image);
      formData.append('drink', credentials.drink);
      formData.append('shortDescription', credentials.shortDescription);
      formData.append('category', credentials.category);
      formData.append('glass', credentials.glass);
      formData.append('alcoholic', credentials.alcoholic);
      formData.append('instructions', credentials.instructions);
      formData.append('ingredients', JSON.stringify(credentials.ingredients));
      const { data } = await axios.post('/drinks/own/add', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      toastSuccess(`Congratulations! You created your own drink`);
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
      toastSuccess(`Removed from your own drinks`);
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
      toastSuccess(`Added to your favorite`);
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
      toastSuccess(`Removed from your favorite`);
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
