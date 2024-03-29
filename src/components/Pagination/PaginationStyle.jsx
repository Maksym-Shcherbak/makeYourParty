import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

export const PaginationList = styled(ReactPaginate)`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 60px;
  gap: 20px;
  margin-top: 40px;
  font-size: 20px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    margin-top: 80px;
    gap: 40px;
  }
  > .active {
    background-color: #4070cd;
    width: 27px;
    height: 27px;
    border-radius: 50%;
  }
  > .disabled {
    color: rgba(243, 243, 243, 0.3);
  }
  > .page-item {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;
