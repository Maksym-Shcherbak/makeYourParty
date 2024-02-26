
import { useState, useEffect } from 'react';
import { HeaderContainer, StyledLink, UserWrap } from './Header.styled';
import { Navigation } from './Navigation/Navigation';
import Logo from './Logo/Logo';
import { BurgerMenu } from './BurgerMenu/BurgerMenu';
import { MobileMenu } from './MobileMenu/MobileMenu';
import { UserLogo } from './UserMenu/UserLogo/UserLogo';
import { UserLogoPopup } from './UserLogoPopup/UserLogoPopup';
import { useSelector, useDispatch } from 'react-redux';
import { selectTheme } from '../../redux/auth/authSelectors';
import { currentUser, toggleTheme } from '../../redux/auth/auth-operation'; 

export const Header = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);
  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

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
          <StyledLink />
          <UserWrap>
            <UserLogo
              handleOpenPopup={handleOpenUserPopup}
              handleClosePopup={handleCloseUserPopup}
              isPopupOpen={isUserPopupOpen}
            />
            <BurgerMenu
              handleToggleMenu={handleToggleMenu}
              isMenuOpen={isMenuOpen}
            />
          </UserWrap>
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
