import styled from 'styled-components';

export const SectionTitleAddDrink = styled.h2`
  font-weight: 600;
  font-size: 32px;
  line-height: 118.75%;
  padding-top: 80px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    font-size: 56px;
    line-height: 107.43%;
    padding-top: 140px;
    margin-bottom: 60px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 62px;
    line-height: 106.25%;
    padding-top: 160px;
  }
`;

export const ButtonAdd = styled.button`
  padding: 14px 40px;
  width: 107px;
  height: 46px;

  border-radius: 42px;
  border: none;

  font-size: 16px;
  font-weight: 600;
  line-height: 1.28571;

  background-color: #f3f3f3;
  color: #161f37;

  margin-bottom: 80px;
  transition: 300ms cubic-bezier(0.46, 0.03, 0.52, 0.96);

  @media screen and (min-width: 768px) {
    line-height: 1.125;
    padding: 18px 44px;
    width: 118px;
    height: 54px;
  }

  &:hover {
    border: 2px solid rgba(64, 112, 205, 0.5);
  }
  &:focus {
    border: 2px solid rgba(64, 112, 205, 0.5);
  }
`;
