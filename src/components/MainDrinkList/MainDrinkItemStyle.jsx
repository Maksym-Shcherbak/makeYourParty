import styled from 'styled-components';

export const MainDrinksItem = styled.li`
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


export const MainDrinkImg = styled.img`
  border-radius: 8px;
  display: block;
  width: 100%;


 
  @media screen and (min-width: 375px) {
    width: 335px;
    height: 360px;
  }
  @media screen and (min-width: 768px) {
    height: 360px;
    width: 342px;
   
  }
  @media screen and (min-width: 1440px) {
    width: 400px;
    height: 400px;
  }
`;

export const MainDrinkTitle = styled.h3`
  font-weight: 500;
  color: --main-color;
  line-height: 1.25;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33333;
  }
`;

export const MainDrinkLinkText = styled.span`
  font-weight: 500;
  color: rgba(243, 243, 243, 0.5);
`;

export const MainDrTitlelinkWrap = styled.div`
  width: 100%;
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
`;
