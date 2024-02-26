import styled from 'styled-components';

export const IngredientsWrapper = styled.div`
  width: 280px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  @media screen and (min-width: 375px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    width: 704px;
  }
  @media screen and (min-width: 1440px) {
    width: 540px;
  }
`;

export const SectionTitleIngredients = styled.h2`
  font-weight: 600;

  margin: 0;
  @media screen and (min-width: 375px) {
    font-size: 32px;
    line-height: 118.75%;
  }

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.1;
  }
`;

export const ButtonWrapper = styled.div`
  width: 104px;
  height: 38px;

  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 12px;

  border: 1px solid rgba(243, 243, 243, 0.5);
  border-radius: 200px;
`;

export const ButtonAction = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 16px;
  height: 16px;
  border: none;

  font-size: 26px;
  line-height: 1.28571;

  background-color: transparent;
  color: rgba(243, 243, 243, 0.3);
`;

export const CounterValue = styled.span`
  font-size: 14px;
  line-height: 1.28571;

  @media screen and (min-width: 768px) {
    font-size: 17px;
    line-height: 1.56;
  }
`;

export const ListSelectIng = styled.ul`
  width: 280px;

  display: flex;
  flex-direction: column;
  row-gap: 18px;

  @media screen and (min-width: 375px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    row-gap: 24px;
    width: 704px;
  }

  @media screen and (min-width: 1440px) {
    width: 540px;
  }
`;

export const SectionWrapperList = styled.div`
  margin-bottom: 80px;
`;
