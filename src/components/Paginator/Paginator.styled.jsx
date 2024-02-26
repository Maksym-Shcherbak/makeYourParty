import styled from 'styled-components';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';
import ReactPaginate from 'react-paginate';

export const PaginatorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    max-width: 436px;
    margin-top: 80px;
  }
`;
export const StyledPaginator = styled(ReactPaginate)`
  display: flex;
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    margin-top: 80px;
  }

  .pagination {
    display: flex;
    flex-direction: row;
    list-style: none;
    padding: 0;
    margin: 0;
    padding: 14px;

    @media screen and (min-width: 768px) {
      padding: 14px 24px;
    }
  }

  li {
    width: 27px;
    height: 27px;
    margin-right: 24px;
  }

  li.previous {
    margin-right: 49px;

    @media screen and (min-width: 768px) {
      margin-right: 40px;
    }
  }

  li a {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    text-align: center;
    color: #f3f3f3;
    width: 100%;
    height: 100%;
    cursor: pointer;
    margin-right: 24px;
  }

  li.active a {
    border-radius: 100%;
    background-color: rgba(64, 112, 205, 0.5);
    padding: 4px 11px;
    margin-right: 0;
  }

  li:not(.active) {
    margin-right: 24px;
  }
`;

const arrowIconStyles = `
  color: #f3f3f3;

  &.disabled {
    color: rgba(243, 243, 243, 0.3);
  }
`;

export const StyledIoIosArrowForward = styled(IoIosArrowForward)`
  ${arrowIconStyles}
  width: 15px;
  height: 15px;
`;

export const StyledIoIosArrowBack = styled(IoIosArrowBack)`
  ${arrowIconStyles}
  width: 15px;
  height: 15px;
`;
