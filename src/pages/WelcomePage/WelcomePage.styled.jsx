import styled from '@emotion/styled';

export const Container = styled.div`
  background-image: linear-gradient(
      0.95deg,
      #0a0a11 -0.56%,
      rgba(10, 10, 17, 0) 21.93%
    ),
    linear-gradient(81.86deg, #0a0a11 11.89%, rgba(10, 10, 17, 0) 82.65%),
    linear-gradient(0deg, rgba(10, 10, 17, 0.2), rgba(10, 10, 17, 0.2)),
    url('/src/images/img-welcome-mob@2x.jpg');

  background-position: center;
  background-size: contain;
  background-position: right center;
  background-position:
    calc(50% - 80px) center,
    calc(1deg - 80px) center,
    calc(82deg - 80px) center,
    center;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 257px;
    height: 247px;
    transform: translate(-80%, -140%);
    background: #bce6d266;
    border-radius: 257px;
    filter: blur(104.8543701171875px);
    z-index: 1;
    pointer-events: none;
    @media screen and (min-width: 768px) {
      width: 387px;
      height: 372.442px;
      border-radius: 387px;
      background: rgba(188, 230, 210, 0.3);
      top: 50%;
      left: 50%;
      transform: translate(-90%, -120%);
    }
    @media screen and (min-width: 1440px) {
      width: 387px;
      height: 381px;
      background: rgba(188, 230, 210, 0.4);
      top: 50%;
      left: 50%;
      transform: translate(-129%, -160%);
    }

    &:after {
      content: '';
      position: absolute;
      top: -20%;
      right: 90%;
      width: 520px;
      height: 550px;
      transform: translateY(-50%, 50%);
      border-radius: 550px;
      background: rgba(64, 112, 205, 0.5);
      filter: blur(104.8543701171875px);
      z-index: 1;
      pointer-events: none;
    }
  }

  @media screen and (min-width: 768px) {
    background-image: url('/src/images/img-welcome-tablet.jpg');
    justify-content: right;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url('/src/images/img-welcome-tablet@2x.jpg');
      background-size: contain;
    }
  }
  @media screen and (min-width: 1440px) {
    background-image: url('/src/images/img-welcome-descctop.jpg');
    background-color: rgb(7, 7, 11);
    padding-left: 97px;
    background-size: contain;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url('/src/images/img-welcome-descctop.jpg');
      background-size: contain;
    }
  }
`;

export const TextAndControls = styled.div`
  min-width: 320px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 304px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  @media screen and (min-width: 375px) {
    width: 335px;
  }
  @media screen and (min-width: 768px) {
    width: 470px;
    align-items: start;
    text-align: left;
    padding-top: 400px;
    margin-left: 64px;
    margin-right: auto;
    padding-left: 0px;
    padding-right: 0px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 273px;
    width: 485px;
    margin-left: 0px;
  }
`;

export const Block = styled.div`
  text-align: center;
`;
export const Title = styled.h1`
  font-weight: 600;
  font-size: 28px;
  line-height: 1.14286;
  letter-spacing: -0.02em;
  color: #fafafa;
  @media screen and (min-width: 768px) {
    font-size: 40px;
    text-align: left;
  }
`;
export const WelcomeText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.02em;
  text-align: center;
  color: #fafafa;
  text-align: center;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    text-align: left;
  }
`;
