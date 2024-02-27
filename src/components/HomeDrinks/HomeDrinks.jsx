import { useDispatch, useSelector } from 'react-redux';
import { getMainPage } from '../../redux/drinks/drinksOperations';
import { useEffect } from 'react';
import MainDrinkList from '../MainDrinkList/MainDrinkList';
import { HomeMainLink, HomeLinkWrap } from './HomeDrinksStyled';
import { Loader } from '../Loader/Loader';

const HomeDrinks = ({ drinks }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMainPage());
  }, [dispatch]);

  let allDrinksNamesList = Array.isArray(drinks)
    ? drinks
    : Object.keys(drinks.drinks);

  return (
    <>
      <ul>
        {allDrinksNamesList.map((drinkName) => (
          <MainDrinkList
            key={drinkName}
            header={drinkName}
            data={drinks.drinks[drinkName]}
          ></MainDrinkList>
        ))}
        <HomeLinkWrap>
          <HomeMainLink to="/drinks">Other drinks</HomeMainLink>
        </HomeLinkWrap>
      </ul>
    </>
  );
};

export default HomeDrinks;
