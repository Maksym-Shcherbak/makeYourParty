import styled from 'styled-components';

export const TitlePopularDrinks = styled.h3`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;

  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    font-size: 24px;
  }
`;

export const ListDrink = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 24px;
  padding-bottom: 80px;
  @media screen and (min-width: 768px) {
    column-gap: 32px;
    row-gap: 32px;
    padding-bottom: 140px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 0;
  }
`;

export const ItemListDrink = styled.li`
  width: 280px;
  display: flex;
  column-gap: 14px;
  @media screen and (min-width: 375px) {
    width: 336px;
  }
  @media screen and (min-width: 1440px) {
    width: 313px;
  }
`;

export const ImageDrink = styled.img`
  width: 90px;
  height: 90px;

  border-radius: 8px;
`;

export const DescriptionWrapper = styled.div`
  width: 175px;
  height: 87px;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;

  @media screen and (min-width: 375px) {
    width: 232px;
  }
`;

export const TitleDrink = styled.h4`
  font-size: 16px;
  line-height: 1.375;
  color: #f3f3f3;

  margin-bottom: 8px;
`;

export const DescriptionDrink = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28571;
  color: rgba(243, 243, 243, 0.5);

  margin: 0;

  @media screen and (min-width: 768px) {
    line-height: 1.42857;
  }
`;
