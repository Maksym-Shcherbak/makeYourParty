import styled from 'styled-components';

export const SupTitle = styled.h4`
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;

  color: rgba(243, 243, 243, 0.5);

  margin-bottom: 42px;

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
  }
`;

export const ListIngredients = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 20px;
  margin-bottom: 80px;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
    column-gap: 22px;
  }
  @media screen and (min-width: 1440px) {
    justify-content: space-between;
    margin-bottom: 100px;
  }
`;

export const ItemIngredient = styled.li`
  width: 157px;
  @media screen and (min-width: 768px) {
    width: 220px;
  }
`;

export const ImagesIngredient = styled.img`
  background-color: var(--secondary-color);
  border-radius: 8px;
  padding: 25px;
  width: 100%;
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    padding: 22px;
  }
`;

export const InfoIngredient = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NameIngredient = styled.h4`
  font-size: 14px;
  font-weight: 500;
  line-height: 128.571%;
  margin: 0;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 133.33%;
  }
`;

export const MeasureIngredient = styled.p`
  color: rgba(243, 243, 243, 0.5);
  font-size: 14px;
  font-weight: 500;
  line-height: 128.571%;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 125%;
  }
`;
