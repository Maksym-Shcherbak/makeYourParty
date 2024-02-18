import styled from '@emotion/styled';

// export const Container = styled.div`
//   height: 100%;
//   padding: 0 20px;
//   margin: 0 auto;
//   background-image: linear-gradient(85deg, #0a0a11 0%, rgba(10, 10, 17, 0) 100%),
//     linear-gradient(2deg, #0a0a11 0%, rgba(10, 10, 17, 0) 100%),
//     url('../../src/images/Welcome.png');
//   background-size: cover;
//   background-repeat: no-repeat;
//   background-attachment: fixed;
//   background-position: center;
// `;

export const Container = styled.div`
  background-image: linear-gradient(85deg, #0a0a11 0%, rgba(10, 10, 17, 0) 100%),
    linear-gradient(2deg, #0a0a11 0%, rgba(10, 10, 17, 0) 100%),
    url('../../src/images/Welcome.png');

  background-position: center;
  background-size: contain;
  background-position: right center;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

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
      width: 387px;
      height: 372.442px;
      border-radius: 387px;
      background: rgba(188, 230, 210, 0.3);
      top: 50%;
      left: 50%;
      transform: translate(-90%, -120%);
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
`;

export const TextAndControls = styled.div`
  width: 335px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Block = styled.div`
  text-align: center;
`;
export const Title = styled.h1`
  font-family: var(--font - family);
  font-weight: 600;
  font-size: 28px;
  line-height: 1.14286;
  letter-spacing: -0.02em;
  color: #fafafa;
`;
export const WelcomeText = styled.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.02em;
  text-align: center;
  color: #fafafa;
`;
