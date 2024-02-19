
 // BurgerMenu.jsx
 import React, { useState } from 'react';
 import styled from 'styled-components';
 import { Navigation } from '../Navigation/Navigation'; 
 import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
 
 const BurgerButton = styled.div`
   cursor: pointer;
 `;
 
 const BurgerMenu = () => {
   const [isOpen, setIsOpen] = useState(false);
 
   const toggleMenu = () => {
	 setIsOpen(!isOpen);
   };
 
   return (
	 <>
	   <BurgerButton onClick={toggleMenu}>
		 {isOpen ? <AiOutlineClose size={38} /> : <AiOutlineMenu size={38} />}
	   </BurgerButton>
	  
	 </>
   );
 };
 
 export default BurgerMenu;
 


  


