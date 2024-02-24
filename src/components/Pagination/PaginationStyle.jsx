import styled from "styled-components";

import ReactPaginate from "react-paginate";


export const PaginationList =styled(ReactPaginate)`
  display: flex;
  gap: 10px;
  >.active{
background-color: blue;
  }
`