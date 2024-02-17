import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DrinksList = styled.ul`
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  gap: 40px;
  margin-top: 40px;

  @media (min-width: 767px) {
    flex-direction: row
    width: 400px;
    height: 676px;
    gap: 80px 20px;
    margin-top: 60px;
  }
`;
export const DrinkItem = styled.li`
  width: 335px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 767px) {
    width: 342px;
  }
`;

export const DrinkCard = styled.div`
  max-width: 335px;
  margin-bottom: 18px;

  @media (min-width: 767px) {
    max-width: 342px;
    margin-bottom: 24px;
  }

  @media (min-width: 1024px) {
    max-width: 400px;
  }
`;

export const DrinkImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  linear-gradient(180deg, rgba(10, 10, 17, 0.03) 2.37%, rgba(10, 10, 17, 0.96) 95.31%);
`;

export const DrikTitle = styled.h2`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33333;
  color: #f3f3f3;
  margin-bottom: 4px;

  @media (min-width: 767px) {
    font-size: 24px;
  }
`;

export const DrinkInfo = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28571;
  color: rgba(243, 243, 243, 0.5);
  margin-bottom: 18px;

  @media (min-width: 767px) {
    font-size: 16px;
    line-height: 1.125;
    margin-bottom: 24px;
  }
`;

export const DrinkDescribe = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28571;
  color: #f3f3f3;
  margin-bottom: 18px;

  @media (min-width: 767px) {
    font-size: 16px;
    line-height: 1.375;
    margin-bottom: 24px;
  }
`;

export const StyledLink = styled(Link)`
  border-radius: 42px;
  padding: 14px 40px;
  width: 143px;
  height: 46px;
  background: #161f37;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.28571;
  color: #f3f3f3;

  @media (min-width: 768px) {
    padding: 18px 44px;
    width: 160px;
    height: 54px;
    font-size: 16px;
    line-height: 1.125;
  }
`;

export const DeleteBtn = styled.button``;
