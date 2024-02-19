

import React, { useState } from 'react';
import { HeaderContainer, StyledLink, IconWrapper } from './Header.styled';
import { Navigation } from './Navigation/Navigation';
import Logo from './Logo/Logo';
import icons from '../../images/icons.svg';
import { BurgerMenu } from './BurgerMenu/BurgerMenu'; // Проверьте путь к компоненту BurgerMenu
import { MobileMenu} from './MobileMenu/MobileMenu';
import { UserLogo } from './UserMenu/UserLogo/UserLogo';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen((state) => !state);
  };

  return (
    <>
      <HeaderContainer isopen={isMenuOpen ? 'true' : 'false'}>
        <Logo />
        <Navigation />
        {/* <ControlledSwitches /> */}
        <StyledLink to="/second">
          <IconWrapper>
            
          </IconWrapper>
        </StyledLink>
        <UserLogo />
        <BurgerMenu handleToggleMenu={handleToggleMenu} isMenuOpen={isMenuOpen} /> {/* Проверьте передачу пропсов */}
      </HeaderContainer>
      <MobileMenu
        isMenuOpen={isMenuOpen}
        handleToggleMenu={handleToggleMenu}
      />
    </>
  );
};

export default Header;
