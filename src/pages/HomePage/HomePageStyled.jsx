import styled from 'styled-components';

import hero1x from '../../images/blue_iced_tea@1x.webp';
import hero2x from '../../images/blue_iced_tea@2x.webp';
import hero1xmobile from '../../images/blue_iced_tea_mobile@1x.webp';
import hero2xmobile from '../../images/blue_iced_tea_mobile@2x.webp';

export const HomeDescription = styled.p`
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 14px;
  line-height: 1.42857;

  color: --main-color;
  @media screen and (min-width: 768px) {
    max-width: 619px;
    font-size: 18px;
    line-height: 1.33333;
  }
  @media screen and (min-width: 1440px) {
    max-width: 500px;
  }
`;

export const HomeSection = styled.section`
  flex-wrap: wrap;
  position: relative;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
  
  &::before {
    content: '';
    display:block;
    position: absolute;
    border-radius: 100%;
    background: rgba(64, 112, 205, 0.5);
    filter: blur(209.708740234375px);
    z-index: -2;
    bottom: -384px;
    right: -415px;
    width: 550px;
    height: 550px;
  }
`;

export const HomeTitlDescWrap = styled.div`
  margin-bottom: 45px;
  position: relative;
  &::before {
    content: '';
    display: inline-block;
    position: absolute;
    border-radius: 100%;
    background: rgba(64, 112, 205, 0.5);
    filter: blur(209.708740234375px);
    z-index: -1;
    left: -680px;
    width: 750px;
    height: 850px;
  }
  @media screen and (min-width: 1440px) {
    width: 715px;
    padding-top: 42px;
    margin-bottom: 0;
  }
`;
export const HeroImgWrap = styled.div`
  width: 100%;
  @media screen and (min-width: 1440px) {
    width: 359px;
    position: relative;
    &::after {
      display: block;
      left: -115px;
      top: 214px;
      content: '';
      position: absolute;
      width: 381px;
      height: 381px;
      background: rgba(188, 230, 210, 0.4);
      filter: blur(104.8543701171875px);
    }
  }
`;

export const HomeHeroImg = styled.img`
  height: 313px;
  margin: 0 auto;

  @media (max-width: 767px) {
    content: url(${hero1xmobile});
  }
  @media (max-width: 767px) and (min-resolution: 2dppx) {
    content: url(${hero2xmobile});
  }
  @media (min-width: 768px) {
    content: url(${hero1x});
  }
  @media (min-width: 768px) and (min-resolution: 2dppx) {
    content: url(${hero2x});
    height: 445px;
  }
  @media screen and (min-width: 1440px) {
    height: 445px;
    margin: 0;
    position: relative;
    z-index: 2;
  }
`;
