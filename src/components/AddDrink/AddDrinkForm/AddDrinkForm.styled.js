import styled from 'styled-components';

export const InputWrapper = styled.div`
  width: 300px;
  height: 300px;

  border-radius: 8px;
  background: rgba(22, 31, 55, 0.5);

  margin-bottom: 40px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 375px) {
    width: 335px;
    height: 320px;
  }

  @media screen and (min-width: 768px) {
    width: 320px;
  }
  @media screen and (min-width: 1440px) {
    width: 400px;
    height: 400px;
  }
`;

export const InputFile = styled.input`
  opacity: 0;
  visibility: hidden;
  position: absolute;
`;

export const IconWrapper = styled.span`
  width: 50px;
  height: 50px;
  margin-bottom: 18px;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--main-color);
`;

export const InputLabel = styled.label`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
