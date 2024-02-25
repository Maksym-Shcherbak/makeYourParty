import styled from 'styled-components';
import { device } from '../device';

export const FormWrap = styled.div`
  position: relative;
  max-width: 335px;
  margin-bottom: 80px;
  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom: -775px;
    left: -410px;
    width: 774px;
    height: 762px;
    border-radius: 774px;
    background: rgba(188, 230, 210, 0.4);
    filter: blur(104.8543701171875px);
  }
  @media ${device.tablet} {
    max-width: 309px;
    &::after {
      bottom: -790px;
      left: -525px;
    }
  }
  @media ${device.desktop} {
    &::after {
      left: -810px;
    }
  }
`;
export const SubscribeDesc = styled.div`
  margin-bottom: 24px;
  line-height: 1.42;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
  }
`;

export const SubscribeInput = styled.input`
  position: relative;
  width: 100%;
  height: 54px;
  padding-left: 24px;

  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 200px;
  cursor: pointer;
  color: var(--main-color);
  line-height: 1.125;

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-background-clip: text;
    -webkit-text-fill-color: var(--main-color);
    transition: background-color 5000s ease-in-out 0s;
    box-shadow: inset 0 0 20px 20px #23232329;
  }

  @media screen and (min-width: 768px) {
    height: 56px;
    font-size: 17px;
    line-height: 1.56;
  }
`;
export const InputMessage = styled.div`
  position: relative;
  height: 18px;
  padding: 3px 0px 3px 20px;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.16;
  color: #DA1414;
  .correct {
    color: #3CBC81;
  }
`;
export const StyledStatus = styled.svg`
  z-index: 1;
  position: absolute;
  width: 24px;
  height: 24px;
  right: 14px;
  top: -39px;
  fill: none;
  &.error {
    fill: #DA1414;
  }

  &.correct {
    fill: #3CBC81;
  }
`;