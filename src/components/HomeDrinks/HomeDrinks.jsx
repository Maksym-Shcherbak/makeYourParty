import { useSelector } from 'react-redux';
import MainDrinkList from '../MainDrinkList/MainDrinkList';
import { HomeMainLink, HomeLinkWrap } from './HomeDrinksStyled';
import { Loader } from '../Loader/Loader';

const HomeDrinks = ({ drinks }) => {
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
