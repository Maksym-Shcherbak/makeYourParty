import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 264px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  border-radius: 200px;
  overflow: hidden;
  opacity: 0.8;
`;

const FormButton = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background-image: url("https://image.flaticon.com/icons/svg/149/149852.svg");
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover {
  opacity: 1;
`;

const FormButtonLabel = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

const FormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  background-color: black;
  opacity: 0.8;

  &::placeholder {
  font-weight: 400;
font-size: 17px;
line-height: 1.56;
color: #f3f3f3;
`;

export { Form, FormButton, FormButtonLabel, FormInput };
