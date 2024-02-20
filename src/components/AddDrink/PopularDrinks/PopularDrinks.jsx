import { useDispatch, useSelector } from 'react-redux';

import { TitlePopularDrinks } from './PopularDrinks.styled';
import { useEffect } from 'react';
import { getPopulars } from '../../../redux/drinks/drinksOperations';

const PopularDrinks = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopulars());
  }, [dispatch]);

  const popularDrinks = useSelector((state) => state.drinks.populars);
  console.log(popularDrinks);
  return (
    <>
      <TitlePopularDrinks>Popular drinks</TitlePopularDrinks>
      <ul></ul>
    </>
  );
};

export default PopularDrinks;
