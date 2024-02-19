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
  max-width: 142px;

  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    margin-bottom: 80px;
    max-width: 164px;
  }
`;

export const IconBtn = styled.a`
  border: 1px solid rgba(243, 243, 243, 0.2);
  border-radius: 10px;
  padding: 8px;
  width: 44px;
  height: 44px;
  background: #0a0a11;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
