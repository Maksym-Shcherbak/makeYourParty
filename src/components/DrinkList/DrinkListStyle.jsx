import styled from 'styled-components';

export const DrinksList = styled.ul`
  display: grid;
  gap: 20px;
  margin-top: 40px;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 20px;
    row-gap: 20px;
    margin-top: 60px;
  }
  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 20px;
    row-gap: 20px;
  }
`;
