

// `;

// import styled from 'styled-components';

// export const BurgerButton = styled.div`
// gap: 24px;
// .burger_close {
// 	// display: none;
	
// }
// cursor: pointer;


// `;

// export const CloseIcon = styled.span`
// //  display: none; 
// `;

import styled from 'styled-components';

export const BurgerButton = styled.div`
gap: 24px;
cursor: pointer;
	@media(min-width: 1024px) {	 
	// display: none;	
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

