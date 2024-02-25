import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getSearch } from '../../redux/drinks/drinksOperations';
import { DrinksPgList } from './DrinksPageStyle';
import DrinksPageItem from './DrinksPageItem';
import { Loader } from '../Loader/Loader';
import Pagination from '../Pagination/Pagination.jsx';
import { useMediaQuery } from 'react-responsive';


const DrinksPageList = () => {
  const dispatch = useDispatch();
  const totalHits = useSelector((state) => state.drinks.totalHits);
  const search = useSelector((state) => state.drinks.search);
  const isDesctop = useMediaQuery({ query: '(min-width: 1440px)' })
  const countCards = isDesctop ? 9 : 10;
  
  console.log(search, "array");
  console.log(isDesctop, 'isDesctop');
  const [page, setPage] = useState(0);
  

  const handlePaginPageClick = (e) => {
    setPage(e.selected);
  };

  useEffect(() => {
    dispatch(
      getSearch({
        drink: '',
        category: '',
        ingredient: '',
        limit: `${countCards}`,
        page: `${page}`,
      })
    );
  }, [dispatch, page,countCards]);

  let allDrinksIsArray = Array.isArray(search) ? search : search;
  console.log(search, 'всі');

  return (
    <>
      <DrinksPgList>
        {allDrinksIsArray.length === 0 ? (
          <Loader />
        ) : (
          allDrinksIsArray.map((item) => (
            <DrinksPageItem
              key={item._id}
              text={'see more'}
              url={item.drinkThumb}
              title={item.drink}
              id={item._id}
            />
          ))
        )}
      </DrinksPgList>
      { allDrinksIsArray.length < 9 ? (false) :
        (<Pagination
        pageCount={totalHits ? totalHits.totalHits : 0}
        onPageChange={handlePaginPageClick}
         />)}
      
    </>
  );
};

export default DrinksPageList;
