
import React, { useState } from 'react';
import { HeaderContainer, StyledLink, IconWrapper, UserWrap } from './Header.styled';
import { Navigation } from './Navigation/Navigation';
import Logo from './Logo/Logo';
import { BurgerMenu } from './BurgerMenu/BurgerMenu';
import { MobileMenu } from './MobileMenu/MobileMenu';
import { UserLogo } from './UserMenu/UserLogo/UserLogo';
import { UserLogoPopup } from './UserLogoPopup/UserLogoPopup';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import { darkTheme, lightTheme } from '../Themes';
import { ThemeProvider } from 'styled-components';

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
      <ThemeProvider theme={isMenuOpen ? darkTheme : lightTheme}>
        <HeaderContainer isopen={isMenuOpen ? 'true' : 'false'}>
          <Logo />
          <Navigation />
          <StyledLink />
          <UserWrap>
          <ThemeSwitcher />
            <UserLogo
              handleOpenPopup={handleOpenUserPopup}
              handleClosePopup={handleCloseUserPopup}
              isPopupOpen={isUserPopupOpen}
            />
            <BurgerMenu handleToggleMenu={handleToggleMenu} isMenuOpen={isMenuOpen} />
          </UserWrap>
        </HeaderContainer>
        <UserLogoPopup
          isPopupOpen={isUserPopupOpen}
          handleClosePopup={handleCloseUserPopup}
        />
        <MobileMenu isMenuOpen={isMenuOpen} handleToggleMenu={handleToggleMenu} />
      </ThemeProvider>
    </>
  );
};

export default Header;
