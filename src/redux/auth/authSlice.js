import { createSlice } from '@reduxjs/toolkit';
import {
  currentUser,
  signIn,
  signOut,
  signUp,
  subscribeUser,
  updateUser,
} from './authOperations';

const hendlePending = (state) => {
  state.isLoading = true;
};

const hendleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  user: { name: null, email: null, birthday: null, avatarURL: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
  isRefreshing: false,
  theme: 'dark',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    toggleTheme(state) {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(signUp.pending, hendlePending)
      .addCase(signUp.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(signUp.rejected, hendleRejected)
      .addCase(signIn.pending, hendlePending)
      .addCase(signIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(signIn.rejected, hendleRejected)
      .addCase(signOut.pending, hendlePending)
      .addCase(signOut.fulfilled, (state) => {
        state.user = { name: null, email: null, birthday: null, avatar: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(signOut.rejected, hendleRejected)
      .addCase(currentUser.pending, (state) => {
        state.isLoading = true;
        state.isRefreshing = true;
      })
      .addCase(currentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
        state.isRefreshing = false;
      })
      .addCase(currentUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.isRefreshing = false;
      })
      .addCase(updateUser.pending, hendlePending)
      .addCase(updateUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(updateUser.rejected, hendleRejected)
      .addCase(subscribeUser.pending, hendlePending)
      .addCase(subscribeUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(subscribeUser.rejected, hendleRejected),
});

export const authReducer = authSlice.reducer;
