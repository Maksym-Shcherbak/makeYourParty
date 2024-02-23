import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSearch } from '../../redux/drinks/drinksOperations';
import { DrinksPgList } from './DrinksPageStyle';
import DrinksPageItem from './DrinksPageItem';



const DrinksPageList = () => {

  const dispatch = useDispatch();
  const search = useSelector((state) => state.drinks.search);
  

  useEffect(() => {
    
    
    dispatch(getSearch({
        drink: '',
        category: '',
        ingredient: '',
        limit: '10',
        page: '1',} 
      ));
   
  }, [dispatch]);

  
  
  return (
    <DrinksPgList>
      {search.map((item) => (
        <DrinksPageItem
          key={item._id}
          text={"see more"}
          url={item.drinkThumb}
          title={item.drink} />
        
      ))}
    </DrinksPgList>
  )
};

export default DrinksPageList;