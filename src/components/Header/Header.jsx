import {
  HeaderContainer,
  StyledLink,
  IconWrapper, 
} from './Header.styled';


import {Navigation} from './Navigation/Navigation';
import Logo from './Logo/Logo';
import icons from '../../images/icons.svg';
// import BurgerMenu from "./BurgerMenu/BurgerMenu";
import {ControlledSwitches} from "./Switcher/Switcher";
import {BurgerMenu} from "./BurgerMenu/BurgerMenu";
export const Header = () => {

  return (
    <HeaderContainer>
      <Logo/>
      <Navigation />
     <ControlledSwitches />
        <BurgerMenu	/>
        <StyledLink to="/second">
          <IconWrapper>
            <use href={`${icons}#icon-user_my`} />
          </IconWrapper>
          
        </StyledLink>
        <StyledLink to="/second">
          <IconWrapper>
        <use href={`${icons}#burger`} />        
          </IconWrapper>
          
        </StyledLink>
      {/* <BurgerMenu	/>  */}
    </HeaderContainer>
  );
};
