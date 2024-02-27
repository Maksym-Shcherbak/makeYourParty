import styled from 'styled-components';

export const Wrapper = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
  }
`;

export const SideBar = styled.div`
  @media screen and (min-width: 1440px) {
    width: 313px;
    margin-left: 94px;
  }
`;

export const TitleFollowUs = styled.h3`
  font-size: 18px;
  line-height: 1.33;

  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
    font-size: 24px;
  }
`;

export const ListWrapper = styled.div`
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    margin-bottom: 80px;
  }
`;
