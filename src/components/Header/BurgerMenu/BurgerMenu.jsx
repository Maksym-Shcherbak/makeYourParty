import { useState, useRef } from "react";
// import { CSSTransition } from "react-transition-group";
import styled from "styled-components";
import Navigation from "../Navigation/Navigation";
import PropTypes from "prop-types";

import icons from "../../../../images/icons.svg";

// Создаем стилизованный компонент для иконки
const Icon = styled.svg`
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

const BurgerMenuContainer = styled.div`
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export function BurgerMenu({ toggleMenu, isOpenBurgerMenu, isDesktop }) {
  const nodeRef = useRef(null);

  return (
    <BurgerMenuContainer onClick={toggleMenu} id="burger_menu">
      <Icon className="icon">
        {isOpenBurgerMenu ? (
          <use href={`${icons}#close`} />
        ) : (
          <use href={`${icons}#burger`} />
        )}
      </Icon>
      {/* <CSSTransition
        in={isOpenBurgerMenu && !isDesktop}
        nodeRef={nodeRef}
        timeout={250}
        classNames="burger"
        unmountOnExit
        onEnter={toggleMenu}
        onExited={toggleMenu}
      >
        <Navigation ref={nodeRef} />
      </CSSTransition> */}
    </BurgerMenuContainer>
  );
}

BurgerMenu.propTypes = {
  toggleMenu: PropTypes.func,
  isOpenBurgerMenu: PropTypes.bool,
  isDesktop: PropTypes.bool,
};
