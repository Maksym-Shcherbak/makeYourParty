import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSearch } from '../../redux/drinks/drinksOperations';
import { DrinksPgList } from './DrinksPageStyle';
import DrinksPageItem from './DrinksPageItem';
import { Loader } from '../Loader/Loader';
import Pagination from '../Pagination/Pagination.jsx';

const DrinksPageList = () => {
  // const dispatch = useDispatch();
  const drinks = useSelector((state) => state.drinks.search);
  // const totalHits = useSelector((state) => state.drinks.totalDrinks);
  // const lengSearch = search.length;
  // console.log(totalHits, 'всі');
  // const [page, setPage] = useState(1);

  // const handlePaginPageClick = (e) => {
  //   setPage(e.selected + 1);
  // };

  // useEffect(() => {
  //   dispatch(
  //     getSearch({
  //       drink: '',
  //       category: '',
  //       ingredient: '',
  //       limit: '10',
  //       page: `${page}`,
  //     })
  //   );
  // }, [dispatch, page]);

  let allDrinksIsArray = Array.isArray(drinks) ? drinks : drinks;

  return (
    <>
      <DrinksPgList>
        {allDrinksIsArray.length === 0 ? (
          <Loader />
        ) : (
          drinks.map((item) => (
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
      {/* <Pagination pageCount={totalHits} onPageChange={handlePaginPageClick} /> */}
    </>
  );
};

export default DrinksPageList;
