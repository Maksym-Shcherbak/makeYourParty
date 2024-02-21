
 // BurgerMenu.jsx
//  import React, { useState } from 'react';
//  import styled from 'styled-components';
//  import { Navigation } from '../Navigation/Navigation'; 
//  import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
 
//  const BurgerButton = styled.div`
//    cursor: pointer;
//  `;
 
//  const BurgerMenu = () => {
//    const [isOpen, setIsOpen] = useState(false);
 
//    const toggleMenu = () => {
// 	 setIsOpen(!isOpen);
//    };
 
//    return (
// 	 <>
// 	   <BurgerButton onClick={toggleMenu}>
// 		 {isOpen ? <AiOutlineClose size={38} /> : <AiOutlineMenu size={38} />}
// 	   </BurgerButton>
	  
// 	 </>
//    );
//  };
 
//  export default BurgerMenu;
 


  
import React from 'react';
import { HiBars4, HiXMark } from 'react-icons/hi2';
import { BurgerButton } from './BurgerMenu.style';

export const BurgerMenu = ({ handleToggleMenu, isMenuOpen }) => {
  const toggleMenu = () => {
    handleToggleMenu(!isMenuOpen); 
  };

  return (
    <BurgerButton onClick={toggleMenu}>
      {isMenuOpen ? <HiXMark size={38} /> : <HiBars4 size={38} />}
    </BurgerButton>
  );
};



