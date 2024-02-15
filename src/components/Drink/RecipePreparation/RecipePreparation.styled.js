import styled from 'styled-components';

export const Wraper = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
  }
`;

export const TitleRecipe = styled.h4`
  font-weight: 600;
  font-size: 28px;
  line-height: 114.286%;

  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    line-height: 110%;

    font-size: 40px;
  }

  @media screen and (min-width: 1140px) {
    margin-bottom: 60px;
  }
`;

export const Recipe = styled.p`
  font-size: 14px;
  line-height: 128.571%;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 137.5%;
  }

  @media screen and (min-width: 1280px) {
    width: 549px;
  }
`;

export const Images = styled.img`
  width: 335px;
  height: 430px;

  border-radius: 8px;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    width: 704px;
    height: 430px;
  }

  @media screen and (min-width: 1280px) {
    width: 631px;
    height: 480px;
  }
`;
