import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <div>
      <NavLink to="/signup">Sigh Up</NavLink>
      <NavLink to="/signin">Sign In</NavLink>
    </div>
  );
};
