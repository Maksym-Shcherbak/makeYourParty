import {
  HeaderContainer,
  StyledLink,
  IconWrapper, 
} from './Header.styled';
import sprite from 'assets/sprite.svg';

import {Navigation} from './Navigation/Navigation';
import Logo from './Logo/Logo';
// import BurgerMenu from "./BurgerMenu/BurgerMenu";



export const Header = () => {

  return (
    <HeaderContainer>
      <Logo/>
      <Navigation />

        <StyledLink to="/first">
          <IconWrapper>
            <use href={`${sprite}#icon-logo`} />
          </IconWrapper>
          Switcher
        </StyledLink>
        <StyledLink to="/second">
          <IconWrapper>
            <use href={`${sprite}#icon-logo`} />
          </IconWrapper>
          User
        </StyledLink>
      
      {/* <BurgerMenu	/>  */}
    </HeaderContainer>
  );
};
