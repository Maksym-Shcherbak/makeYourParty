
// import styled from 'styled-components';
// const BurgerIcon = styled.use`
  
// `;

import styled from 'styled-components';

const Icon = styled.svg`
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
`;

export default Icon;