import styled from 'styled-components';

export const TitleFollowUs = styled.h3`
  font-size: 18px;
  line-height: 1.33;

  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
    font-size: 24px;
  }
`;

export const IConList = styled.div`
  display: flex;
  column-gap: 14px;

  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    margin-bottom: 80px;
    column-gap: 16px;
  }
`;

export const IconBtn = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 38px;
  height: 38px;

  color: rgba(243, 243, 243, 0.8);
  border: 1px solid rgba(243, 243, 243, 0.2);
  border-radius: 10px;

  @media screen and (min-width: 768px) {
    width: 38px;
    height: 38px;
  }

  &:hover {
    color: #f3f3f3;
    border: 1px solid rgba(243, 243, 243, 0.5);
  }

  &:focus {
    color: #f3f3f3;
    border: 1px solid rgba(243, 243, 243, 0.5);
  }
`;
