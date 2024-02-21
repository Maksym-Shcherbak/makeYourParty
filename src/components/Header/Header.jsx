

import React, { useState } from 'react';
import { HeaderContainer, StyledLink, IconWrapper } from './Header.styled';
import { Navigation } from './Navigation/Navigation';
import Logo from './Logo/Logo';
import { BurgerMenu } from './BurgerMenu/BurgerMenu'; // Проверьте путь к компоненту BurgerMenu
import { MobileMenu} from './MobileMenu/MobileMenu';
import { UserLogo } from './UserMenu/UserLogo/UserLogo';
import { UserLogoPopup } from './UserLogoPopup/UserLogoPopup';
import { Switcher } from './Switcher/Switcher';
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserPopupOpen, setIsUserPopupOpen] = useState(false);

  
  const handleToggleMenu = () => {
    setIsMenuOpen((state) => !state);
  };

  const handleOpenUserPopup = () => {
    setIsUserPopupOpen(true);
  };

  const handleCloseUserPopup = () => {
    setIsUserPopupOpen(false);
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
        
        <UserLogo 
          handleOpenPopup={handleOpenUserPopup}
          handleClosePopup={handleCloseUserPopup}
          isPopupOpen={isUserPopupOpen}/>
        <BurgerMenu handleToggleMenu={handleToggleMenu} isMenuOpen={isMenuOpen} /> {/* Проверьте передачу пропсов */}
      </HeaderContainer>
      
      <UserLogoPopup
      isPopupOpen={isUserPopupOpen}
      handleClosePopup={handleCloseUserPopup}
      />
      <MobileMenu
        isMenuOpen={isMenuOpen}
        handleToggleMenu={handleToggleMenu}
      />
    </>
  );
};

export default Header;
