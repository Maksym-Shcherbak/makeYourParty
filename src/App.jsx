import { Route, Routes, useSearchParams } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import { AppWrapper } from './App.styled';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { Suspense, lazy } from 'react';
import { useEffect } from 'react';
import { currentUser } from './redux/auth/authOperations';
import { useDispatch, useSelector } from 'react-redux';
// import { selectIsRefreshing } from './redux/auth/authSelectors';
import { Loader } from './components/Loader/Loader';

//----------------------
import { darkTheme, lightTheme } from './components/Themes';
import { ThemeProvider } from 'styled-components';
import { selectTheme } from './redux/auth/authSelectors';
import { setToken } from './redux/auth/authSlice';

const WelcomePage = lazy(() => import('pages/WelcomePage/WelcomePage.jsx'));
const HomePage = lazy(() => import('pages/HomePage/HomePage.jsx'));
const SignupPage = lazy(() => import('pages/SignupPage/SighupPage.jsx'));
const SigninPage = lazy(() => import('pages/SigninPage/SigninPage.jsx'));
const DrinkPage = lazy(() => import('pages/DrinkPage/DrinkPage.jsx'));
const DrinksPage = lazy(() => import('pages/DrinksPage/DrinksPage.jsx'));
const AddDrinkPage = lazy(() => import('pages/AddDrinkPage/AddDrinkPage.jsx'));
const FavoriteDrinksPage = lazy(() =>
  import('pages/FavoriteDrinksPage/FavoriteDrinksPage.jsx')
);
const MyDrinksPage = lazy(() => import('pages/MyDrinksPage/MyDrinksPage.jsx'));
const ErrorPage = lazy(() => import('pages/ErrorPage/ErrorPage.jsx'));

// const test = import.meta.env.VITE_API_TEST;

//------------
// import { darkTheme, lightTheme } from './components/Themes';
//--------------------

function App() {
  const theme = useSelector(selectTheme);
  // const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  if (token) {
    localStorage.setItem('token', JSON.stringify(token));
    dispatch(setToken(token));
  }
  const localToken = JSON.parse(localStorage.getItem('token'));
  if (localToken) {
    dispatch(setToken(localToken));
  }

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      {/* {isRefreshing ? (
        <Loader />
      ) : ( */}
      <AppWrapper>
        <Suspense fallback={<Loader />}>
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
        </Suspense>
      </AppWrapper>
      {/* )} */}
    </ThemeProvider>
  );
}

export default App;
