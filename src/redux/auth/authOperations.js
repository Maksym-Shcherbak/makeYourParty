import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toastError, toastSuccess } from '../../services/notification';

axios.defaults.baseURL = 'https://project-backend-0pzg.onrender.com/api';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const signUp = createAsyncThunk(
  'auth/signup',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/auth/signup', credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signIn = createAsyncThunk(
  'auth/signin',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/auth/signin', credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signOut = createAsyncThunk('auth/signout', async (_, thunkAPI) => {
  try {
    await axios.post('/auth/signout');
    localStorage.removeItem('token');
    token.unset();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const currentUser = createAsyncThunk(
  'user/current',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === 'null') {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  'user/update',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.patch(`/users/update`, credentials, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      toastSuccess(`You're successfully updated your personal info`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const subscribeUser = createAsyncThunk(
  'users/subscribe',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/subscribe', credentials);
      toastSuccess(`Greetings! You're subcribed now`);
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      toastError(`Sorry, ${error.response.data.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
