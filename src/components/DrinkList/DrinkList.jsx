import DrinkItem from './DrinkItem';
import { DrinksList } from './DrinkListStyle';

const DrinkList = ({ drinks, text, onDelete }) => {
  return (
    <DrinksList>
      {drinks?.map(
        ({ _id, drink, alcoholic, shortDescription, drinkThumb }) => (
          <DrinkItem
            key={_id}
            id={_id}
            title={drink}
            alcoholic={alcoholic}
            description={shortDescription}
            text={text}
            url={drinkThumb}
            handleDelete={() => onDelete(_id)}
          />
        )
      )}
    </DrinksList>
  );
};

export default DrinkList;
