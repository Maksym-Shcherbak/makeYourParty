import styled from 'styled-components';

export const DrinkWrapper = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    position: relative;
  }
`;

export const DrinkText = styled.div`
  @media screen and (min-width: 768px) {
    max-width: 593px;
  }
`;

export const SupTitle = styled.p`
  font-size: 12px;
  line-height: 116.666%;
  color: rgba(243, 243, 243, 0.5);

  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 125%;
  }
`;

export const Description = styled.p`
  font-size: 14px;
  line-height: 128.571%;

  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 135%;
  }
`;

export const ImagesDrink = styled.img`
  width: 335px;
  height: 400px;

  margin-bottom: 18px;
  border-radius: 8px;

  object-fit: cover;

  @media screen and (min-width: 768px) {
    width: 704px;
    height: 400px;
    margin-bottom: 80px;
  }

  @media screen and (min-width: 1440px) {
    width: 400px;
    height: 400px;
    position: absolute;
    right: 0;
    top: -26px;
  }
`;
