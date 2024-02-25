import styled from 'styled-components';
export const SearchContainer = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-start;
  align-items: stretch;
  margin-top: 80px;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;
