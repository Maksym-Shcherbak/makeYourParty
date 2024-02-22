import { useDispatch, useSelector } from 'react-redux';

import {
  DescriptionDrink,
  DescriptionWrapper,
  ImageDrink,
  ItemListDrink,
  ListDrink,
  TitleDrink,
  TitlePopularDrinks,
} from './PopularDrinks.styled';
import { useEffect } from 'react';
import { getPopulars } from '../../../redux/drinks/drinksOperations';
import { Link } from 'react-router-dom';

const PopularDrinks = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopulars());
  }, [dispatch]);

  const popularDrinks = useSelector((state) => state.drinks.populars);
  return (
    <>
      <TitlePopularDrinks>Popular drinks</TitlePopularDrinks>
      <ListDrink>
        {popularDrinks.map(({ _id, drink, drinkThumb, description }) => {
          return (
            <Link key={_id}>
              <ItemListDrink>
                <ImageDrink src={drinkThumb} alt={drink} />
                <DescriptionWrapper>
                  <TitleDrink>{drink}</TitleDrink>
                  <DescriptionDrink>{description}</DescriptionDrink>
                </DescriptionWrapper>
              </ItemListDrink>
            </Link>
          );
        })}
      </ListDrink>
    </>
  );
};

export default PopularDrinks;
