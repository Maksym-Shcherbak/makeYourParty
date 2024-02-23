import DrinkItem from './DrinkItem';
import { DrinksList } from './DrinkListStyle';

const DrinkList = ({ drinks, text, onDelete }) => {
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
          handleDelete={() => onDelete(_id)}
        />
      ))}
    </DrinksList>
  );
};

export default DrinkList;
