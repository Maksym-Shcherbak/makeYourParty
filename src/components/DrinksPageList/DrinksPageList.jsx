import { useSelector } from 'react-redux';
import { DrinksPgList } from './DrinksPageStyle';
import DrinksPageItem from './DrinksPageItem';

const DrinksPageList = () => {
  const search = useSelector((state) => state.drinks.search);
  return (
    <DrinksPgList>
      {search.map((item) => (
        <DrinksPageItem
          key={item._id}
          text={'see more'}
          url={item.drinkThumb}
          title={item.drink}
        />
      ))}
    </DrinksPgList>
  );
};

export default DrinksPageList;
