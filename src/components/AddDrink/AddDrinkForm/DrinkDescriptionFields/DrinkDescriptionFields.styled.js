import styled from 'styled-components';

export const AddDrinkWrapper = styled.div`
  margin-bottom: 80px;
  @media screen and (min-width: 768px) {
    display: flex;
    column-gap: 32px;
  }
  @media screen and (min-width: 1440x) {
    column-gap: 40px;
  }
`;

export const DrinkImg = styled.img`
  width: 100%;
  height: 100%;
  padding: 8px;

  border-radius: 18px;
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
  color: #161f37;
  font-size: 28px;

  transition: 300ms cubic-bezier(0.46, 0.03, 0.52, 0.96);

  &:hover {
    color: #f3f3f3;
    background: #4070cd;
  }
`;

export const InputLabel = styled.label`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

export const InputWrapper = styled.div`
  width: 280px;
  height: 280px;

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

export const InputList = styled.div`
  width: 280px;

  display: flex;
  flex-direction: column;
  row-gap: 30px;

  // margin-bottom: 40px;

  @media screen and (min-width: 375px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    width: 352px;
  }
  @media screen and (min-width: 1440px) {
    width: 393px;
    row-gap: 40px;
  }
`;

export const InputDrink = styled.input`
  width: 100%;
  height: 34px;

  color: #f3f3f3;
  font-size: 14px;

  border: none;
  background-color: transparent;

  padding: 0px 0px 14px 0px;

  border-bottom: 1px solid rgba(243, 243, 243, 0.5);
  @media screen and (min-width: 768px) {
    padding: 0px 0px 18px 0px;
  }
`;

export const SelectWrapper = styled.div`
  position: relative;
  text-align: center;
`;
export const SelectCategories = styled.select`
  position: absolute;

  top: 0;
  right: 0;

  width: 131px;
  // text-align: right;
  // padding-right: 28px;

  border-radius: 12px;
  color: #f3f3f3;
  font-size: 14px;

  border: none;
  background-color: transparent;

  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
`;

export const OptionSelect = styled.option`
  color: rgba(243, 243, 243, 0.4);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.33333;
  background-color: #161f37;
  border: none;

  // text-align: left;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.28571;
  }
`;

export const RadioWrapper = styled.div`
  display: flex;
  column-gap: 14px;
`;

export const CustomIcon = styled.span`
  width: 20px;
  height: 20px;

  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  color: rgba(243, 243, 243, 0.5);

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;

    font-size: 24px;
  }
`;

export const InputRadio = styled.input`
  opacity: 0;
  visibility: hidden;
  position: absolute;
`;

export const LabelRadio = styled.label`
  position: relative;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: rgba(243, 243, 243, 0.5);

  display: flex;
  column-gap: 4px;
  align-items: center;
  cursor: pointer;

  &:hover ${CustomIcon} {
    color: #f3f3f3;
  }

  &:hover {
    color: #f3f3f3;
  }

  &:focus ${CustomIcon} {
    color: #f3f3f3;
  }

  &:focus {
    color: #f3f3f3;
  }
`;
