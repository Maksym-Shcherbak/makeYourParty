

import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { NavLink as StyledNavLink, MobileMenuContainer as StyledMobileMenuContainer } from './MobileMenu.styled';

export const MobileMenu = ({ isMenuOpen, handleToggleMenu }) => {
  return (
    <StyledMobileMenuContainer isopen={isMenuOpen.toString()} onClick={handleToggleMenu}>
      <StyledNavLink as={RouterNavLink} to="/home" onClick={handleToggleMenu}>
        Home
      </StyledNavLink>
      <StyledNavLink as={RouterNavLink} to="/drinks" onClick={handleToggleMenu}>
        Drinks
      </StyledNavLink>
      <StyledNavLink as={RouterNavLink} to="/add" onClick={handleToggleMenu}>
        Add recipes
      </StyledNavLink>
      <StyledNavLink as={RouterNavLink} to="/my" onClick={handleToggleMenu}>
        My recipes
      </StyledNavLink>
      <StyledNavLink as={RouterNavLink} to="/favorites" onClick={handleToggleMenu}>
        Favorites
      </StyledNavLink>
    </StyledMobileMenuContainer>
  );
};
