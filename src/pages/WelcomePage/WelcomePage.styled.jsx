import styled from 'styled-components';
import imgWelcomeMob from 'src/images/img-welcome-mob.jpg';
import imgWelcomeMob2x from 'src/images/img-welcome-mob@2x.jpg';
import imgWelcomeTab from 'src/images/img-welcome-tablet.jpg';
import imgWelcomeTab2x from 'src/images/img-welcome-tablet@2x.jpg';
import imgWelcomeDesc from 'src/images/img-welcome-descctop.jpg';
import imgWelcomeDesc2x from 'src/images/img-welcome-desctop@2x.jpg';

export const Container = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
      0deg,
      rgba(10, 10, 17, 0.2),
      rgba(10, 10, 17, 0.2)
    ),
    linear-gradient(0.95deg, #0a0a11 -0.56%, rgba(10, 10, 17, 0) 21.93%),
    linear-gradient(85.07deg, #060609 5.92%, rgba(10, 10, 17, 0) 51.07%),
    url(${imgWelcomeMob});
  background-color: #0a0a11;
  background-size: contain;
  background-position: right center;
  background-repeat: no-repeat;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 257px;
    height: 247px;
    transform: translate(-80%, -140%);
    background: rgba(188, 230, 210, 0.4);
    border-radius: 257px;
    filter: blur(104.8543701171875px);
    z-index: 1;
    pointer-events: none;
    @media screen and (min-width: 768px) {
      top: 50%;
      left: 50%;
      transform: translate(-90%, -120%);
      width: 387px;
      height: 372px;
      border-radius: 387px;
      background: rgba(188, 230, 210, 0.3);
    }
    @media screen and (min-width: 1440px) {
      top: 50%;
      left: 50%;
      transform: translate(-129%, -160%);
      width: 387px;
      height: 381px;
      background: rgba(188, 230, 210, 0.4);
    }
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
    @media screen and (min-width: 768px) {
      width: 784px;
      height: 829.931px;
      border-radius: 829.931px;
      top: -50%;
      right: 90%;
      z-index: 1;
    }
    @media screen and (min-width: 1440px) {
      height: 849px;
      top: -25%;
      right: 85%;
      z-index: 1;
    }
  }

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${imgWelcomeMob2x});
  }

  @media screen and (min-width: 768px) {
    background-image: url(${imgWelcomeTab});
    justify-content: left;
    padding-left: 64px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${imgWelcomeTab2x});
    }
  }
  @media screen and (min-width: 1440px) {
    background-image: url(${imgWelcomeDesc});
    background-color: rgb(7, 7, 11);
    padding-left: 97px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${imgWelcomeDesc2x});
    }
  }
`;

export const TextAndControls = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 37px;
  padding-right: 37px;
  @media screen and (max-width: 374.98px) {
    padding-left: 20px;
    padding-right: 20px;
  }

  @media screen and (min-width: 768px) {
    width: 470px;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0;
  }
  @media screen and (min-width: 1440px) {
    width: 485px;
  }
`;
export const Title = styled.h1`
  color: #fafafa;
  font-size: 28px;
  font-weight: 600;
  line-height: 1.14;
  letter-spacing: -0.8px;
  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.1;
    letter-spacing: -0.9px;
  }
`;

export const WelcomeText = styled.p`
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28;
  letter-spacing: -0.28px;
  color: #fafafa;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
    letter-spacing: -0.36px;
    text-align: left;
  }
`;
