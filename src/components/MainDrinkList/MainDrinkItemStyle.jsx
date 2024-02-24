import styled from 'styled-components';
import { Link } from "react-router-dom";


export const MainDrinksItem = styled.li`
  display: flex;
	flex-direction: column;
  
  @media screen and (max-width: 767px) {
    &:nth-last-child(-n + 2) {
      display: none;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    max-width: 342px;
    min-height: 398px;
    &:nth-last-child(-n + 1) {
      display: none;
    }
  }
  @media screen and (min-width: 1440px) {
    max-width: 400px;
    min-height: 438px;
  }
`;


export const StiledLinkMain = styled(Link)`
  color: inherit;
  
`


