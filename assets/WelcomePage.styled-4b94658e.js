import{u as e}from"./index-8056342a.js";const s="300ms cubic-bezier(0.46, 0.03, 0.52, 0.96)",t="/makeYourParty/assets/img-welcome-mob-4764bbe3.jpg",i="/makeYourParty/assets/img-welcome-mob@2x-b8f15be0.jpg",n="/makeYourParty/assets/img-welcome-tablet-7e09e23a.jpg",a="/makeYourParty/assets/img-welcome-tablet@2x-480b929a.jpg",r="/makeYourParty/assets/img-welcome-descctop-ac45039b.jpg",o="/makeYourParty/assets/img-welcome-desctop@2x-2b9ac8e0.jpg",p=e.section`
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
    url(${t});
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
    background-image: url(${i});
  }

  @media screen and (min-width: 768px) {
    background-image: url(${n});
    justify-content: left;
    padding-left: 64px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${a});
    }
  }
  @media screen and (min-width: 1440px) {
    background-image: url(${r});
    background-color: rgb(7, 7, 11);
    padding-left: 97px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${o});
    }
  }
`,g=e.div`
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
`,m=e.h1`
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
`,c=e.p`
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
`;export{p as C,g as T,c as W,m as a,s as t};
