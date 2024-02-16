import React from "react";
import "./BurgerMenu.style.jsx";
export const BurgerMenu = ({ isActive, onClick }) => {
  return (
    <button
      onClick={() => onClick()}
      className={`header__menu-button
        ${isActive === true ? "active" : ""}
        ${isActive === false ? "unactive" : ""}
      `}
    >
      <span></span>
    </button>
  );
  }