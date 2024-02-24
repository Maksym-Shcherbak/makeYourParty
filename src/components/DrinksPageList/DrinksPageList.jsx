import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSearch } from '../../redux/drinks/drinksOperations';
import { DrinksPgList } from './DrinksPageStyle';
import DrinksPageItem from './DrinksPageItem';
import { Loader } from '../Loader/Loader';
import Pagination from '../Pagination/Pagination.jsx';

const DrinksPageList = () => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.drinks.search);
  // const lengSearch = search.length;
  console.log(search.totalHits, 'всі');
  const [page, setPage] = useState(1);

  const handlePaginPageClick = (e) => {
    setPage(e.selected);
  };

  useEffect(() => {
    dispatch(
      getSearch({
        drink: '',
        category: '',
        ingredient: '',
        limit: '10',
        page: `${page}`,
      })
    );
  }, [dispatch, page]);


   let allDrinksIsArray = Array.isArray(search.data) ? search.data : search;

  return (
    <>
      <DrinksPgList>
        {allDrinksIsArray.length === 0 ? (
          <Loader />
        ) : (
          search.data.map((item) => (
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
      <Pagination
        pageCount={search.totalHits}
        onPageChange={handlePaginPageClick}
       
      />
    </>
  );
};

export default DrinksPageList;
