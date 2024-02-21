export const selectUser = (state) => state.auth.user;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectIsRefreshing = (state) => state.auth.isRefreshing;
export const selectIsLoading = (state) => state.auth.isLoading;
export const selectIsError = (state) => state.auth.error;


//------------


export const selectAvatarURL = (state) => state.auth.user.avatarURL;

export const selectTheme = (state) => state.auth.theme;