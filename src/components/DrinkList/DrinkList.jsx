import DrinkItem from './DrinkItem';
import { DrinksList } from './DrinkListStyle';
import getFavorites from '../../data/favorites.json';

export const DrinkList = ({ text }) => {
  return (
    <DrinksList>
      {getFavorites.map(
        ({ _id, drink, alcoholic, description, drinkThumb }) => (
          <DrinkItem
            key={_id.$oid}
            id={_id.$oid}
            title={drink}
            alcoholic={alcoholic}
            description={description}
            text={text}
            url={drinkThumb}
          />
        )
      )}
    </DrinksList>
  );
};

export default DrinkList;
