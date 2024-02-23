import styled from "styled-components";


export const MainDrinksList = styled.ul`
  margin-bottom: 40px;
  display: flex;
	flex-direction: row;
	gap: 20px;
  @media screen and (min-width: 768px) {
    margin-bottom: 80px;
  
   
  }

`;


export const MainListCategory=styled.h2`
  margin-bottom: 40px;
  font-weight: 600;
  font-size: 28px;
  line-height: 1.14286;
  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.1;
    color: -main-color;
   
  }


`