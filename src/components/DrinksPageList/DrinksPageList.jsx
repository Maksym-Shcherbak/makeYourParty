import { useSelector } from 'react-redux';
import { DrinksPgList } from './DrinksPageStyle';
import MainDrinkItem from '../MainDrinkList/MainDrinkItem';

const DrinksPageList = () => {
  const search = useSelector((state) => state.drinks.search);
  return (
    <DrinksPgList>
      {search.map((item) => (
        <MainDrinkItem
          key={item._id}
          id={item._id}
          text={'see more'}
          url={item.drinkThumb}
          title={item.drink}
        />
      ))}
    </DrinksPgList>
  );
};

export default DrinksPageList;
