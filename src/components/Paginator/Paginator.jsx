import React, { useEffect, useState } from 'react';
import Pagination from '../Pagination/Pagination';

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

  return <Pagination pageCount={pageCount} onPageChange={handlePageChange} />;
};
