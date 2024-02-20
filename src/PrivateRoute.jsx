import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import {
  selectIsLoading,
  selectIsLoggedIn,
} from '../src/redux/auth/authSelectors';

// export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
//   const isLoggedIn = useSelector(selectAuthenticated);
//   const isLoading = useSelector(selectAuthIsLoading);
//   const shouldRedirect = !isLoggedIn && !isLoading;

//   return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
// };

export const PrivateRoute = () => {
  const location = useLocation();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoading = useSelector(selectIsLoading);
  const shouldRedirect = !isLoggedIn && !isLoading;
  return shouldRedirect ? (
    <Navigate to="welcome" state={{ from: location }} />
  ) : (
    <Outlet />
  );
};
