import React from 'react';
import { NavLink } from './MobileMenu.styled';
import { MobileMenuContainer } from './MobileMenu.styled';

export const MobileMenu = ({ isMenuOpen, handleToggleMenu }) => {
  return (
    <MobileMenuContainer isopen={isMenuOpen.toString()} onClick={handleToggleMenu}>
      <NavLink to="/home" onClick={handleToggleMenu}>
        Home
      </NavLink>
      <NavLink to="/drinks" onClick={handleToggleMenu}>
        Drinks
      </NavLink>
      <NavLink to="/add" onClick={handleToggleMenu}>
        Add drink
      </NavLink>
      <NavLink to="/my" onClick={handleToggleMenu}>
        My drinks
      </NavLink>
      <NavLink to="/favorites" onClick={handleToggleMenu}>
        Favorites
      </NavLink>
    </MobileMenuContainer>
  );
};

