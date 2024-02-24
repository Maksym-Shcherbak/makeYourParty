import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../redux/drinks/drinksOperations';

const DrinksPageCategories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.drinks.categories);

 
  console.log(categories, "запит за категоріі");
  
  useEffect(() => {
    
   dispatch(getCategories());
   
  }, [dispatch]);
  
 

 
  return (<div>
   
  
 </div>)   
  
}

export default DrinksPageCategories;