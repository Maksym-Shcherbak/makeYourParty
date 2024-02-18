import { removeFavoriteDrink } from '../../redux/drinks/drinksOperations';
import DrinkItem from './DrinkItem';
import { DrinksList } from './DrinkListStyle';
import { useDispatch } from 'react-redux';

const DrinkList = ({ drinks, text }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeFavoriteDrink({ drinkId: id }));
  };

  return (
    <DrinksList>
      {drinks?.map(({ _id, drink, alcoholic, description, drinkThumb }) => (
        <DrinkItem
          key={_id}
          id={_id}
          title={drink}
          alcoholic={alcoholic}
          description={description}
          text={text}
          url={drinkThumb}
          handleDelete={() => handleDelete(_id)}
        />
      ))}
    </DrinksList>
  );
};

export default DrinkList;
