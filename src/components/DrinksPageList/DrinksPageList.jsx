import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSearch } from '../../redux/drinks/drinksOperations';
import { DrinksPgList } from './DrinksPageStyle';
import DrinksPageItem from './DrinksPageItem';
import { Loader } from '../Loader/Loader';






const DrinksPageList = () => {

  const dispatch = useDispatch();
  const search = useSelector((state) => state.drinks.search);
  const lengSearch = search.length;
  console.log(lengSearch, "всі")


  useEffect(() => {

    dispatch(getSearch({
        drink: '',
        category: '',
        ingredient: '',
        limit: '10',
        page: '',} 
      ));
   
  }, [dispatch]);

  
  
  return (
    // <PaginatedItems data={search}>
    <DrinksPgList>
      {search.length === 0 ? <Loader/> : search.map((item) => (
        <DrinksPageItem
          key={item._id}
          text={"see more"}
          url={item.drinkThumb}
          title={item.drink}
          id={item._id}
        />
        
        
      ))}
      </DrinksPgList>
    //  </PaginatedItems>
  )
};

export default DrinksPageList;