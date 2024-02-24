import ReactPaginate from "react-paginate";
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { Loader } from "../Loader/Loader";
import DrinksPageItem from '../DrinksPageList/DrinksPageItem';






const ItemsPaginated=({ data })=>{

  const [itemOffset, setItemOffset] = useState(0);
  const [currentItems, setCurrentItems] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  const search = useSelector((state) => state.drinks.search);
  // const lengSearch = search.length;
  // console.log(lengSearch, "всі")
  const itemsPerPage = 10;



  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
    
  },[itemOffset,itemsPerPage,data])

 


  
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <ul>
         {search.length === 0 ? <Loader/> : search.map((item) => (
        <DrinksPageItem
          key={item._id}
          text={"see more"}
          url={item.drinkThumb}
          title={item.drink}
          id={item._id}
        />
        
        
      ))}
        
      </ul>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default ItemsPaginated;