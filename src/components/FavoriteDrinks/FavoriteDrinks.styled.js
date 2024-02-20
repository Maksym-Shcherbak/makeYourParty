import styled from 'styled-components';

import empty1x from '../../images/blue_iced_tea@1x.webp';
import empty2x from '../../images/blue_iced_tea@2x.webp';
import empty1xmobile from '../../images/blue_iced_tea_mobile@1x.webp';
import empty2xmobile from '../../images/blue_iced_tea_mobile@2x.webp';

export const Title = styled.h1`
  font-size: 32px;
  line-height: 1.1875;
  color: #f3f3f3;

  @media (min-width: 768px) {
    font-size: 56px;
    line-height: 1.07143;
  }

  @media (min-width: 1024px) {
    font-size: 64px;
    line-height: 1.0625;
  }
`;

export const EmptyFavoriteDrinksContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 32px;
  margin: 90px auto;

  @media (min-width: 768px) {
    margin: 100px auto;
  }

  @media (min-width: 1024px) {
    gap: 86px;
    margin: 67px auto;
  }
`;

export const EmptyFavoriteDrinks = styled.img`
  height: 326px;

  @media (max-width: 767px) {
    content: url(${empty1xmobile});
    height: 247px;
  }

  @media (max-width: 767px) and (min-resolution: 2dppx) {
    content: url(${empty2xmobile});
  }

  @media (min-width: 768px) {
    content: url(${empty1x});
  }

  @media (min-width: 768px) and (min-resolution: 2dppx) {
    content: url(${empty2x});
  }
`;

export const EmptyDescription = styled.p`
  font-size: 14px;
  line-height: 1.28571;
  text-align: center;
  color: #f3f3f3;
  padding-bottom: 80px;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.375;
    padding-bottom: 140px;
  }

  @media (min-width: 1024px) {
    padding-bottom: 86px;
  }
`;
