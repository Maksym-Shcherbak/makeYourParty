


import styled from 'styled-components';

export const BurgerButton = styled.div`
gap: 24px;
cursor: pointer;
	@media(min-width: 768px) {	 
	display:none ;	
}

  .burger_close {
	
	gap: 24px;
	
  }
  .close{
	background-color: blue;
  }
  .active {
	// right: 0;
}
`;

export const CloseIcon = styled.span`
width: 38px;
gap: 24px;


`;
export const  OpenIcon = styled.span`
width: 38px;
gap: 24px;
cursor: pointer;

`;

