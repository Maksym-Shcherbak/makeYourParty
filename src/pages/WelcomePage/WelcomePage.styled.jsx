import styled from '@emotion/styled';

export const Container = styled.div`
  height: 100%;
  padding: 0 20px;
  margin: 0 auto;
  background-image: linear-gradient(85deg, #0a0a11 0%, rgba(10, 10, 17, 0) 100%), linear-gradient(2deg, #0a0a11 0%, rgba(10, 10, 17, 0) 100%),
      url('../../src/images/Welcome.png');
      background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
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
  font - family: var(--font - family);
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
