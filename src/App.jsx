import { Route, Routes, useLocation } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import { AppWrapper } from './App.styled';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
// import { Suspense, lazy } from 'react';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import SignupPage from './pages/SignupPage/SighupPage';
import SigninPage from './pages/SigninPage/SigninPage';
import HomePage from './pages/HomePage/HomePage';
import DrinksPage from './pages/DrinksPage/DrinksPage';
import AddDrinkPage from './pages/AddDrinkPage/AddDrinkPage';
import FavoriteDrinksPage from './pages/FavoriteDrinksPage/FavoriteDrinksPage';
import MyDrinksPage from './pages/MyDrinksPage/MyDrinksPage';
import DrinkPage from './pages/DrinkPage/DrinkPage';
import { useEffect, useRef } from 'react';
import { currentUser } from './redux/auth/authOperations';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from './redux/auth/authSelectors';
import { Loader } from './components/Loader/Loader';

//----------------------
import { darkTheme, lightTheme } from './components/Themes';
import { ThemeProvider } from 'styled-components';
import { selectTheme } from './redux/auth/authSelectors';

// const WelcomePage = lazy(() => import('pages/WelcomePage'));
// const HomePage = lazy(() => import('pages/HomePage'));
// const SignupPage = lazy(() => import('pages/SignupPage'));
// const SigninPage = lazy(() => import('pages/SigninPage'));
// const DrinksPage = lazy(() => import('pages/DrinksPage'));
// const AddDrinkPage = lazy(() => import('pages/AddDrinkPage'));
// const FavoriteDrinksPage = lazy(() => import('pages/FavoriteDrinksPage'));
// const MyDrinksPage = lazy(() => import('pages/MyDrinksPage'));

// const test = import.meta.env.VITE_API_TEST;

//------------

// import { useSelector, useDispatch } from 'react-redux';
// import { darkTheme, lightTheme } from './components/Themes';
//--------------------

function App() {
  const theme = useSelector(selectTheme);
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      {isRefreshing ? (
        <Loader />
      ) : (
        <AppWrapper>
          <Routes>
            <Route
              path="/welcome"
              element={<RestrictedRoute component={<WelcomePage />} />}
            />
            <Route
              path="/signup"
              element={<RestrictedRoute component={<SignupPage />} />}
            />
            <Route
              path="/signin"
              element={<RestrictedRoute component={<SigninPage />} />}
            />
            <Route element={<PrivateRoute />}>
              <Route path="/" element={<SharedLayout />}>
                <Route path="/home" element={<HomePage />} />
                <Route path="/drinks" element={<DrinksPage />} />
                <Route path="/drinks/:drinkId" element={<DrinkPage />} />
                <Route path="/add" element={<AddDrinkPage />} />
                <Route path="/favorites" element={<FavoriteDrinksPage />} />
                <Route path="/my" element={<MyDrinksPage />} />
                <Route path="*" element={<ErrorPage />} />
              </Route>
            </Route>
          </Routes>
        </AppWrapper>
      )}
    </ThemeProvider>
  );
}
export default App;
