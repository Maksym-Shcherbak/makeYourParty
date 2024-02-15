import styled from "styled-components";

export const DrinkItemWrapper = styled.div`
  display: block;
  max-width: 335px;
  min-height: 581px;
  font-size: 14px;
  @media screen and (min-width: 375px) {
    max-width: 342px;
    max-height: 650px;
  }
  @media screen and (min-width: 768px) {
    max-width: 400px;
    max-height: 688px;
    font-size: 16px;
  }

  
`;


export const DrinkItemImg = styled.img`
  display: block;
  max-width: 335px;
  max-height: 360px;
  background-color: rgba(22, 31, 55, 0.5);
  border-radius: 8px;
  @media screen and (min-width: 375px) {
    min-width: 342px;
    max-height: 360px;
  }
  @media screen and (min-width: 768px) {
    min-width: 400px;
    max-height: 400px;
  }

`;


export const DrinkItemTitle = styled.h2`
  margin-top: 24px;
  margin-bottom: 0;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33333;
 @media screen and (min-width: 375px) {
    font-weight: 500;
    font-size: 24px;
    line-height: 1.33333;
  }
  @media screen and (min-width: 768px) {
    font-weight: 500;
    font-size: 24px;
    line-height: 1.33333;
  }
  
`;


export const DrinkItemDescription = styled.p`
  margin-top: 24px;
  margin-bottom: 0;
  padding-right: 2px;
  max-width: 335px;
  @media screen and (min-width: 375px) {
    max-width: 342px;
  }
  @media screen and (min-width: 768px) {
    max-width: 400px;
  }
`;


export const DrinkBtnSee = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  margin-right: 5px;
  border-radius: 42px;
  min-width: 143px;
  max-height: 46px;
  background-color: #161f37;
  color: #f3f3f3;
  border: inherit;
  @media screen and (min-width: 375px) {
    min-width: 160px;
    max-height: 54px;
    
  }
  
 
`;


export const DrinkBtnDel = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  border-radius: 40px;
  padding: 15px 32px;
  max-width: 46px;
  max-height: 46px;
  
  background-color: #161f37;
  border: inherit;
  @media screen and (min-width: 768px) {
    max-width: 56px;
    max-height: 54px;
  }
`;



export const DrinkWrapperBtn = styled.div`
  display: flex;
`;

export const DrinkStatus = styled.span`
  display: block;
  color: rgba(243, 243, 243, 0.5);
  margin-top: 5px;
`


