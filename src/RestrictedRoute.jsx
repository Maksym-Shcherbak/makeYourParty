import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectIsLoggedIn } from '../src/redux/auth/authSelectors';
import { useRef } from 'react';

/**
 * - If the route is restricted and the user is logged in, render a <Navigate> to redirectTo
 * - Otherwise render the component
 */

export const RestrictedRoute = ({ component: Component }) => {
  const location = useLocation();
  const authenticated = useSelector(selectIsLoggedIn);
  const backLinkHref = useRef(location.state?.from ?? '/home');
  return authenticated ? <Navigate to={backLinkHref.current} /> : Component;
};
