import styled from '@emotion/styled';
import 'normalize.css';

export const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-repeat: no-repeat;
  background-position: left top;
  background-size: 100% 100%;

  @media screen and (min-width: 375px) {
    &:before {
      content: '';
      display: inline-block;
      position: absolute;
      border-radius: 100%;
      background: rgba(64, 112, 205, 0.5);
      filter: blur(209.708740234375px);
      z-index: 0;
      left: -576px;
      top: 126px;
      width: 750px;
      height: 850px;
    }
  }
  @media screen and (min-width: 768px) {
    &:before {
      content: '';
      display: inline-block;
      position: absolute;
      border-radius: 100%;
      background: rgba(64, 112, 205, 0.5);
      filter: blur(209.708740234375px);
      z-index: 0;
      left: -576px;
      top: 126px;
      width: 750px;
      height: 850px;
    }
    &:after {
      content: '';
      display: block;
      position: absolute;
      border-radius: 100%;
      background: rgba(64, 112, 205, 0.5);
      filter: blur(209.708740234375px);
      z-index: 0;
      top: 519px;
      right: -486px;
      width: 620px;
      height: 550px;
    }
  }
  @media screen and (min-width: 1440px) {
    &:before {
      content: '';
      display: inline-block;
      position: absolute;
      border-radius: 100%;
      background: rgba(64, 112, 205, 0.5);
      filter: blur(209.708740234375px);
      z-index: 0;
      left: -590px;
      top: -104px;
      width: 750px;
      height: 850px;
    }
    &:after {
      content: '';
      display: block;
      position: absolute;
      border-radius: 100%;
      background: rgba(64, 112, 205, 0.5);
      filter: blur(209.708740234375px);
      z-index: 0;
      top: 301px;
      right: -304px;
      width: 620px;
      height: 550px;
    }
  }
`;
