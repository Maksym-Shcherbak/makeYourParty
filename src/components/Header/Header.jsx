
// import React, { useState, useEffect } from 'react';
// import { HeaderContainer, StyledLink, IconWrapper, UserWrap } from './Header.styled';
// import { Navigation } from './Navigation/Navigation';
// import Logo from './Logo/Logo';
// import { BurgerMenu } from './BurgerMenu/BurgerMenu';
// import { MobileMenu } from './MobileMenu/MobileMenu';
// import { UserLogo } from './UserMenu/UserLogo/UserLogo';
// import { UserLogoPopup } from './UserLogoPopup/UserLogoPopup';
// import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
// import { darkTheme, lightTheme } from '../Themes';
// import { ThemeProvider } from 'styled-components';
// import { useSelector, useDispatch } from 'react-redux';
// import { selectTheme } from '../../redux/auth/auth-selectors';

// import { currentUser, toggleTheme } from '../../redux/auth/auth-operation'; // Импортируем toggleTheme
// export const Header = () => {
//   const dispatch = useDispatch();
//   const theme = useSelector(selectTheme);
//   useEffect(() => {
//     dispatch(currentUser());
//   }, [dispatch]);

//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isUserPopupOpen, setIsUserPopupOpen] = useState(false);


//   const toggleTheme = () => {
//     setIsChecked((prev) => !prev);
//     handleToggleTheme(); // Вызываем обработчик для изменения темы
//   };
 
//   const handleToggleMenu = () => {
//     setIsMenuOpen((state) => !state);
//   };

//   const handleOpenUserPopup = () => {
//     setIsUserPopupOpen(true);
//   };

//   const handleCloseUserPopup = () => {
//     setIsUserPopupOpen(false);
//   };

//   return (
//     <>
//       <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
//         <HeaderContainer isopen={isMenuOpen ? 'true' : 'false'}>
//           <Logo />
//           <Navigation />
//           <StyledLink />
//           <UserWrap>
//           <ThemeSwitcher handleToggleTheme={handleToggleTheme} />
//             <UserLogo
//               handleOpenPopup={handleOpenUserPopup}
//               handleClosePopup={handleCloseUserPopup}
//               isPopupOpen={isUserPopupOpen}
//             />
//             <BurgerMenu handleToggleMenu={handleToggleMenu} isMenuOpen={isMenuOpen} />
//           </UserWrap>
//         </HeaderContainer>
//         <UserLogoPopup
//           isPopupOpen={isUserPopupOpen}
//           handleClosePopup={handleCloseUserPopup}
//         />
//         <MobileMenu isMenuOpen={isMenuOpen} handleToggleMenu={handleToggleMenu} />
//       </ThemeProvider>
//     </>
//   );
// };

// export default Header;


import React, { useState, useEffect } from 'react';
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
import { useSelector, useDispatch } from 'react-redux';
import { selectTheme } from '../../redux/auth/authSelectors';
import { currentUser, toggleTheme } from '../../redux/auth/auth-operation'; // Импортируем toggleTheme

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
      <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
        <HeaderContainer isopen={isMenuOpen ? 'true' : 'false'}>
          <Logo />
          <Navigation />
          <StyledLink />
          <UserWrap>
          <ThemeSwitcher handleToggleTheme={toggleTheme} />

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
