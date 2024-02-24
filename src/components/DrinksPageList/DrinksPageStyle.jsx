import styled from "styled-components";


export const DrinksPgList = styled.ul`
  display: flex;
  flex-wrap: wrap;
	gap: 20px;
  
`;

export const DrinksPgItem = styled.li`
  display:flex;
  flex-direction: column;
   
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    max-width: 342px;
    min-height: 398px;
   
  }
  @media screen and (min-width: 1440px) {
    max-width: 400px;
    min-height: 438px;
    &:nth-last-child(-n + 1) {
      display: none;
    }
    
     }
  
`;