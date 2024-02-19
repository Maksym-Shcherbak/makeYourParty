import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../src/redux/auth/authSelectors';

/**
 * - If the route is restricted and the user is logged in, render a <Navigate> to redirectTo
 * - Otherwise render the component
 */

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const authenticated = useSelector(selectIsLoggedIn);

  return authenticated ? <Navigate to={redirectTo} /> : Component;
};
