import styled from 'styled-components';

export const ItemSelect = styled.li`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SelectWrapperIng = styled.div`
  display: flex;
  column-gap: 8px;

  @media screen and (min-width: 768px) {
    column-gap: 14px;
  }
`;

export const SelectIng = styled.select`
  width: 160px;

  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  padding: 12px;

  border: 1px solid rgba(243, 243, 243, 0.5);
  border-radius: 200px;

  background-color: transparent;
  color: rgba(243, 243, 243, 0.5);

  font-size: 12px;
  line-height: 1.28571;

  @media screen and (min-width: 375px) {
    width: 200px;

    padding: 16px 0px 16px 24px;
  }

  @media screen and (min-width: 768px) {
    width: 330px;

    font-size: 14px;
    line-height: 1.28571;
  }
  @media screen and (min-width: 1440px) {
    width: 315px;
  }
`;
export const SelectOption = styled.option`
  background: #161f37;
  color: rgba(243, 243, 243, 0.4);

  font-size: 12px;
  line-height: 1.33333;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.28571;
  }
`;
export const SelectInput = styled.input`
  width: 80px;

  padding: 12px;

  background-color: transparent;
  color: #f3f3f3;

  font-size: 14px;
  line-height: 1.28571;

  border: 1px solid rgba(243, 243, 243, 0.5);
  border-radius: 200px;

  @media screen and (min-width: 375px) {
    padding: 16px 18px;
    width: 100px;
  }

  @media screen and (min-width: 768px) {
    width: 150px;
  }
`;
export const SelectDeleteBtn = styled.button`
  // width: 18px;
  // height: 18px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 18px;

  color: #f3f3f3;
  background-color: transparent;
  border: none;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;
