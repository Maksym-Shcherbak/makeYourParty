// import React from "react";
// import "./BurgerMenu.style.jsx";
// export const BurgerMenu = ({ isActive, onClick }) => {
//   return (
//     <button
//       onClick={() => onClick()}
//       className={`header__menu-button
//         ${isActive === true ? "active" : ""}
//         ${isActive === false ? "unactive" : ""}
//       `}
//     >
//       <span></span>
//     </button>
//   );
//   }
//import styled from 'styled-components';
import React, { createRef } from 'react';
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import styled from 'styled-components'; 
import icons from '../../../images/icons.svg';
import  {Navigation}  from "../Navigation/Navigation";

// Создание стилизованного компонента для BurgerMenu
const StyledBurgerMenu = styled.div`
  .icon {
    width: 32px;
    height: 32px;
    stroke: ${props => props.theme.mainBtnBackgroundColor};

    @media (min-width: 768px) {
      width: 38px;
      height: 38px;
    }

    @media (min-width: 1024px) {
      display: none;
    }
  }
`;

export const BurgerMenu = ({ toggleMenu, isOpenBurgerMenu, isDesktop }) => {
	const nodeRef = createRef(null);

	return (
		<>
			<StyledBurgerMenu
				onClick={toggleMenu}
				id="burger_menu"
			>
				<svg className="icon">
					{isOpenBurgerMenu ? (
						<use href={icons + "#close"}></use>
					) : (
						<use href={icons + "#burger"}></use>
					)}
				</svg>
			</StyledBurgerMenu>

			<CSSTransition
				in={isOpenBurgerMenu && !isDesktop}
				nodeRef={nodeRef}
				timeout={250}
				classNames="burger"
				unmountOnExit
				onEnter={toggleMenu}
				onExited={toggleMenu}
			>
				{/* Необходимо импортировать и использовать Navigation */}
				{<Navigation ref={nodeRef} /> }
			</CSSTransition>
		</>
	);
}

BurgerMenu.propTypes = {
	toggleMenu: PropTypes.func,
	isOpenBurgerMenu: PropTypes.bool,
	isDesktop: PropTypes.bool,
};

export default BurgerMenu;
