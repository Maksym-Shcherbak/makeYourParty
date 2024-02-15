import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getOwnDrinksThunk,
  getFavoritesDrinksThunk,
  deleteFavoriteDrinksThunk,
} from './drinksOperations';

const initialState = {
  favorites: [],
  own: [],
  isLoading: false,
  error: null,
};

export const drinkSlice = createSlice({
  name: 'drinks',
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(getOwnDrinksThunk.fulfilled, (state, { payload }) => {
        state.own = payload;
        state.isLoading = false;
      })
      .addCase(getFavoritesDrinksThunk.fulfilled, (state, { payload }) => {
        state.favorites = payload;
        state.isLoading = false;
      })
      .addCase(deleteFavoriteDrinksThunk, (state, { payload }) => {
        state.isLoading = false;
        state.favorites = state.favorites.filter(
          (favorite) => favorite._id !== payload._id
        );
      })

      .addMatcher(
        isAnyOf(
          getOwnDrinksThunk.pending,
          getFavoritesDrinksThunk.pending,
          deleteFavoriteDrinksThunk.pending
        ),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          getOwnDrinksThunk.rejected,
          getFavoritesDrinksThunk.rejected,
          deleteFavoriteDrinksThunk.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      ),
});

export const drinksReducer = drinkSlice.reducer;
