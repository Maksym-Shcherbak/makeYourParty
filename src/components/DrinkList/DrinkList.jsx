import DrinkItem from './DrinkItem';
import { DrinksList } from './DrinkListStile';

const DrinkList = ({ drinks, text }) => {
  return (
    <DrinksList>
      {drinks?.map(({ id, drink, alcoholic, description, drinkThumb }) => (
        <DrinkItem
          key={id}
          title={drink}
          alcoholic={alcoholic}
          description={description}
          text={text}
          url={drinkThumb}
        />
      ))}
    </DrinksList>
  );
};

export default DrinkList;
