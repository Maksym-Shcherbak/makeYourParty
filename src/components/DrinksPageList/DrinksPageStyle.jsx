import styled from 'styled-components';

export const DrinksPgList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 20px;
  row-gap: 25px;

  position: relative;

  &::before {
    content: '';
    display: inline-block;
    position: absolute;
    border-radius: 100%;
    background: rgba(64, 112, 205, 0.5);
    filter: blur(209.708740234375px);
    z-index: -1;
    left: -755px;
    top: -525px;
    width: 750px;
    height: 850px;
  }
  &::after {
    content: '';
    display: block;
    position: absolute;
    border-radius: 100%;
    background: rgba(64, 112, 205, 0.5);
    filter: blur(209.708740234375px);
    z-index: -2;
    top: -50px;
    right: -372px;
    width: 550px;
    height: 550px;
  }

  margin: 38px 0 55px 0;
  @media screen and (min-width: 768px) {
    margin: 38px 0 95px 0;
    row-gap: 35px;
  }
  @media screen and (min-width: 1440px) {
    margin: 35px 0 80px 0;
    row-gap: 80px;
  }
`;

export const DrinksPgItem = styled.li`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    max-width: 342px;
    min-height: 398px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 400px;
    min-height: 438px;
  }
`;
