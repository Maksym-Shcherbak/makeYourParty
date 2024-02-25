// import ReactPaginate from "react-paginate";
import { PaginationList } from "./PaginationStyle";

const Pagination = ({ pageCount, onPageChange })=>{

  return (
    <>
      <PaginationList
        breakLabel="..."
        onPageChange={onPageChange}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
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