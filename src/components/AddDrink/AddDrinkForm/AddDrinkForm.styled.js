import styled from 'styled-components';

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

export const InputList = styled.div`
  width: 280px;

  display: flex;
  flex-direction: column;
  row-gap: 30px;

  margin-bottom: 40px;

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
  background: transparent;

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

  max-width: 131px;

  border-radius: 12px;
  color: #f3f3f3;
  font-size: 14px;

  border: none;
  background-color: transparent;

  &:after {
    content: '';

    background-color: transparent;
  }
`;

export const OptionSelect = styled.option`
  color: rgba(243, 243, 243, 0.4);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.33333;
  background-color: #161f37;
  border: none;
`;

export const RadioWrapper = styled.div`
  display: flex;
  column-gap: 14px;
  @media screen and (min-width: 768px) {
    margin-top: 39px;
  }
`;

export const InputRadio = styled.input`
  opacity: 0;
  visibility: hidden;
  position: absolute;
`;

export const LabelRadio = styled.label`
  font-size: 14px;
  letter-spacing: -0.02em;
  color: rgba(243, 243, 243, 0.5);

  display: flex;
  column-gap: 4px;
  align-items: center;
`;

export const AddDrinkWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    column-gap: 32px;
  }
  @media screen and (min-width: 1440x) {
    column-gap: 40px;
  }
`;
