import { SignupLink, SigninLink, Navigation } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Navigation>
      <SignupLink to="/signup">Sigh Up</SignupLink>
      <SigninLink to="/signin">Sign In</SigninLink>
    </Navigation>
  );
};
