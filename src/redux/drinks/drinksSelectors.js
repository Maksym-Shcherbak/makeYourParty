// export const selectFavoriteDrinks = (state) => state.drinks.favorite;
// export const selectOwnDrinks = (state) => state.drinks.own;
// export const selectIsLoading = (state) => state.drinks.isLoading;
// export const selectError = (state) => state.drinks.error;

export const selectFavoriteDrinks = (state) => state.drinks?.favorite || [];
export const selectOwnDrinks = (state) => state.drinks?.own || [];
export const selectIsLoading = (state) => state.drinks?.isLoading;
export const selectError = (state) => state.drinks?.error;
export const selectDrinkById = (state) => state.drinks?.id;
export const selectMotivation = (state) => state.drinks?.motivation;