import { NavLink, useLocation } from "react-router-dom";
import { NavContainer, List, ListItem} from "./Navigation.styled";
import React from 'react';
export const Navigation = ({ isOpen }) => {
  const location = useLocation();

  return (
    <NavContainer className={isOpen ? "active" : ""}>
      <List className={isOpen ? "active" : ""}>
        <ListItem>
          <NavLink
            className={location.pathname === "/home" ? "active" : ""}
            to="/drinks"
          >
            Home
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink
            className={location.pathname === '/drinks' ? 'active' : ''}
            to="/drinks"
          >
            Drinks
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink
            className={location.pathname === '/add' ? 'active' : ''}
            to="/add"
          >
            Add recipes
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink
            className={location.pathname === '/my' ? 'active' : ''}
            to="/my"
          >
            My recipes
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink
            className={location.pathname === '/favorite' ? 'active' : ''}
            to="/favorites"
          >
            Favorites
          </NavLink>
        </ListItem>
      </List>
    </NavContainer>
  );
};

Navigation.displayName = "Navigation";

