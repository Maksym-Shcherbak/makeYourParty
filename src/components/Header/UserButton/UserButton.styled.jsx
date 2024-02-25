import styled from 'styled-components';


export const MainButton = styled.button`
	padding: 14px 40px;
	border: none;
	border-radius: 42px;
	border: 2px solid transparent;
	background-color: ${props => props.theme.mainBtnBackgroundColor};
	color: ${props => props.theme.accentColor};
	font-size: ${props => props.theme.mainFontSize};
	line-height: 18px;
	font-weight: ${props => props.theme.fontWeightSemiBold};
	transition-property: border, background-color, color;
	transition-duration: ${props => props.theme.transitionDuration};
	transition-timing-function: ${props => props.theme.transitionTimingFunction};

	&:hover {
		color: ${props => props.theme.mainBtnBackgroundColor};
		background-color: ${props => props.theme.accentColor};
	}

	&:active {
		border: 2px solid ${props => props.theme.outlinBtnBackgroundColor};
	}

	&:disabled {
		color: ${props => props.theme.outlinBtnBackgroundColor};
		background-color: ${props => props.theme.disabledBtnBackgroundColor};
		border: 2px solid ${props => props.theme.disabledBtnBackgroundColor};
	}

	@media (min-width: 768px) {
		padding: 18px 44px;
		font-size: ${props => props.theme.SecondaryFontSize};
	}

	@media (min-width: 1024px) {
		font-size: ${props => props.theme.SecondaryFontSize};
	}
`;

export const DropdownButton = styled(MainButton)`
	padding: 12px 40px;

	@media (min-width: 768px) {
		font-size: ${props => props.theme.mainFontSize};
	}
`;

export const BiggerButton = styled(MainButton)`
	font-size: ${props => props.theme.SecondaryFontSize};
	padding: 16px 41px;

	@media (min-width: 768px) {
		padding: 18px 69px;
	}
`;

export const LargeButton = styled(MainButton)`
	width: 285px;
	padding: 18px 41px;

	@media (min-width: 768px) {
		width: 400px;
	}
`;

export const CancelButton = styled(MainButton)`
	color: ${props => props.theme.mainBtnBackgroundColor};
	background-color: ${props => props.theme.disabledBtnBackgroundColor};
`;


