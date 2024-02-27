import { createSlice } from '@reduxjs/toolkit';
import {
  addDrinkOwn,
  addFavoriteDrink,
  fetchDrinkOwn,
  fetchFavoriteDrink,
  getById,
  getCategories,
  getGlasses,
  getIngredients,
  getMainPage,
  getPopulars,
  getSearch,
  removeDrinkOwn,
  removeFavoriteDrink,
} from './drinksOperations';

const drinksSlice = createSlice({
  name: 'drinks',
  initialState: {
    isLoading: false,
    error: null,

    categories: [],
    ingredients: [],
    glasses: [],

    main: [],
    populars: [],
    search: [],
    totalDrinks: null,
    id: null,
    own: [],
    favorite: { data: [] },
    motivation: '',
  },
  reducers: {
    reset(state) {
      state.motivation = '';
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(getIngredients.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getIngredients.fulfilled, (state, action) => {
        state.ingredients = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getIngredients.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(getGlasses.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getGlasses.fulfilled, (state, action) => {
        state.glasses = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getGlasses.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(getMainPage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMainPage.fulfilled, (state, action) => {
        state.main = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getMainPage.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(getPopulars.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPopulars.fulfilled, (state, action) => {
        state.populars = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getPopulars.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(getSearch.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSearch.fulfilled, (state, action) => {
        state.search = action.payload.data;
        state.totalDrinks = action.payload.totalHits;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getSearch.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(getById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getById.fulfilled, (state, action) => {
        state.id = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getById.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(addDrinkOwn.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addDrinkOwn.fulfilled, (state, action) => {
        state.own.push(action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addDrinkOwn.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(removeDrinkOwn.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeDrinkOwn.fulfilled, (state, action) => {
        const removedId = action.meta.arg.drinkId;
        state.own.data = state.own.data.filter(
          (drink) => drink._id !== removedId
        );
        state.isLoading = false;
        state.error = null;
      })
      .addCase(removeDrinkOwn.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchDrinkOwn.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchDrinkOwn.fulfilled, (state, action) => {
        state.own = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchDrinkOwn.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(addFavoriteDrink.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addFavoriteDrink.fulfilled, (state, action) => {
        state.favorite = {
          userId: action.payload.userId,
          data: [action.payload.drinkId],
          notification: action.payload.notification,
        };
        state.motivation = action.payload?.notification;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addFavoriteDrink.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(removeFavoriteDrink.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeFavoriteDrink.fulfilled, (state, action) => {
        const removedId = action.payload.drinkId;
        if (state.favorite.length !== 0) {
          const updatedFavorite = state.favorite.data.filter(
            (favorite) => favorite._id !== removedId
          );
          state.favorite.data = updatedFavorite;
          state.isLoading = false;
          state.error = null;
        }
        state.isLoading = false;
        state.error = null;
      })
      .addCase(removeFavoriteDrink.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchFavoriteDrink.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchFavoriteDrink.fulfilled, (state, action) => {
        action.payload
          ? (state.favorite = action.payload)
          : (state.favorite = []);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchFavoriteDrink.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const drinksReducer = drinksSlice.reducer;

export const { reset } = drinksSlice.actions;
