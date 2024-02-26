import React, { useEffect, useState } from 'react';
import {
  PaginatorContainer,
  StyledIoIosArrowBack,
  StyledIoIosArrowForward,
  StyledPaginator,
} from './Paginator.styled';

export const Paginator = ({ totalHits, itemsPerPage, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = ({ selected }, itemsPerPage) => {
    const newPage = selected + 1;
    setCurrentPage(newPage - 1);
    onPageChange(newPage, itemsPerPage);
  };

  useEffect(() => {
    onPageChange(currentPage + 1, itemsPerPage);
  }, [currentPage, onPageChange]);

  const pageCount = Math.ceil(totalHits / itemsPerPage);

  if (totalHits <= itemsPerPage) {
    return null;
  }

  return (
    <PaginatorContainer>
      <StyledPaginator
        forcePage={currentPage}
        nextLabel={
          <StyledIoIosArrowForward
            className={currentPage >= pageCount - 1 ? 'disabled' : ''}
          />
        }
        onPageChange={handlePageChange}
        pageCount={pageCount}
        previousLabel={
          <StyledIoIosArrowBack
            className={currentPage <= 0 ? 'disabled' : ''}
          />
        }
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        containerClassName="pagination"
        subContainerClassName="pages pagination"
        activeClassName="active"
      />
    </PaginatorContainer>
  );
};
