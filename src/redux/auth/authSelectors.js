export const selectUser = (state) => state.auth.user;
export const selectUserName = (state) => state.auth.user.name;
export const selectUserBirthDate = (state) => {
  state.auth.user.birthDate;
};
export const selectAvatarURL = (state) => state.auth.user.avatarURL;
export const selectTheme = (state) => state.auth.theme;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectIsRefreshing = (state) => state.auth.isRefreshing;
export const selectToken = (state) => state.auth.token;
export const selectIsLoading = (state) => state.auth.isLoading;
export const selectIsError = (state) => state.auth.error;
export const selectAvatarURL = (state) => state.auth.user.avatarURL;
export const selectTheme = (state) => state.auth.theme;
export const selectSubscribe = (state) => state.auth.isSubscribed;

