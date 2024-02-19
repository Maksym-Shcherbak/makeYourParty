import { Form, Field } from 'formik';
import { AiOutlineEye } from 'react-icons/ai';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import transition from '../../transition/transition';

import styled from 'styled-components';

export const SignForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 14px;
  max-width: 335px;
  @media screen and (min-width: 768px) {
    width: 400px;
  }
  @media screen and (min-width: 1440px) {
  }
`;
export const Input = styled(Field)`
  width: 100%;
  background-color: transparent;
  padding: 17px 24px;
  min-height: 54px;
  color: rgba(243, 243, 243, 0.5);
  border: 1px solid rgba(243, 243, 243, 0.2);
  font-size: 14px;
  border-radius: 42px;
  line-height: 1.28;
  outline: none;

  &:focus,
  &:hover {
    border: 1px solid rgba(243, 243, 243, 0.5);
    background-color: transparent;
    color: rgba(243, 243, 243, 0.5);

    transition:
      border ${transition},
      background-color ${transition};
  }
  /* &::placeholder {
    color: rgba(243, 243, 243, 0.5);
  } */
  /* &::selection {
    color: rgba(243, 243, 243, 0.5);
  } */

  /* ${({ error }) =>
    error === 'true' &&
    styled`
      border: 1px solid red;
    `}
  ${({ success }) =>
    success === 'true' &&
    styled`
      border: 1px solid green;
    `} */

  @media screen and (min-width: 768px) {
    font-size: 17px;
    line-height: 1.56;
    padding: 13px 24px;
    min-height: 56px;
  }
`;

export const SignUpBtn = styled.button`
  position: relative;
  padding: 18px;
  background-color: #f3f3f3;
  border-radius: 42px;
  line-height: 1.28;
  color: #161f37;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.286;
  margin-bottom: 14px;
  margin-top: 14px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  border: none;
  &:focus,
  &:hover {
    background-color: transparent;
    color: #f3f3f3;
    border: 1px solid rgba(243, 243, 243, 0.58);
    transition:
      border ${transition},
      background-color ${transition};
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.125;
  }
`;

export const EyePasswordBtn = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  top: 18px;
  right: 24px;
  padding: 0;
`;
export const ImputFild = styled.div`
  position: relative;
`;
export const HidePasswordIconEye = styled(AiOutlineEye)`
  fill: #f3f3f3;
  width: 18px;
  height: 18px;

  @media screen and (min-width: 375px) {
    left: 290px;
  }

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;
export const ShowPasswordIconEye = styled(AiOutlineEyeInvisible)`
  fill: #f3f3f3;
  width: 18px;
  height: 18px;

  @media screen and (min-width: 375px) {
    left: 290px;
  }

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;
export const ErrorBorder = styled.div`
  border: 1px solid red;
`;

export const SuccessBorder = styled.div`
  border: 1ch solid green;
`;
export const ErrorIcon = styled(AiOutlineExclamationCircle)`
  color: red;
  width: 18px;
  height: 18px;
  position: absolute;
  top: 18px;
  right: 24px;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const SuccessIcon = styled(AiOutlineCheckCircle)`
  color: green;
  width: 18px;
  height: 18px;
  position: absolute;
  top: 18px;
  right: 24px;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;
