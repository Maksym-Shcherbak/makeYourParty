import { PaginationList } from "./PaginationStyle";

const Pagination = ({ pageCount, onPageChange })=>{

  return (
    <>
      <PaginationList
        breakLabel="..."
        onPageChange={onPageChange}
        pageCount={ Math.ceil(pageCount / 10)}
        renderOnZeroPageCount={null}
        pageClassName="page-item"
        nextLinkClassName="page-link"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        pageRangeDisplayed={2}
        marginPagesDisplayed={2}
        nextLabel=">"
        previousLabel="<"
      />
    </>
  );
}

export default Pagination;