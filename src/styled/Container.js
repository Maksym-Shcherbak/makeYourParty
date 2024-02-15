import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  padding-right: 20px;
  padding-left: 20px;

  @media screen and (min-width: 375px) {
    width: 375px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
    padding-right: 32px;
    padding-left: 32px;
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding-right: 100px;
    padding-left: 100px;
  }
`;
