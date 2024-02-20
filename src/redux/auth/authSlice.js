import { createSlice } from '@reduxjs/toolkit';
import {
  currentUser,
  signIn,
  signOut,
  signUp,
  subscribeUser,
  updateUser,
} from './authOperations';

const initialState = {
  user: { name: null, email: null, birthday: null, avatarURL: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(signUp.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(signIn.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(signOut.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signOut.fulfilled, (state) => {
        state.user = { name: null, email: null, birthday: null, avatar: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(signOut.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
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
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.user = action.payload;
        // state.user.name = action.payload.name;
        // state.user.avatarURL = action.payload.avatarURL;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(subscribeUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(subscribeUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(subscribeUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const authReducer = authSlice.reducer;
