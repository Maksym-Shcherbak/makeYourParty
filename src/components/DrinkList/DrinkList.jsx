
import DrinkItem from "./DrinkItem";
import { DrinksList } from "./DrinkListStile";



const DrinkList = ({ drinks, text,onDelitDrink,onSeeMoreOfDrink }) => {
  return (
    <DrinksList>
      {drinks?.map(({id,drink,alcoholic,description,drinkThumb}) => (
        <DrinkItem
          key={id}
          title={drink}
          alcoholic={alcoholic}
          description={description}
          text={text}
          hendelDeletedDrink={onDelitDrink}
          handelSeeMoreBtn={onSeeMoreOfDrink}
          id={id}
          url={drinkThumb}
        />
      ))}
    </DrinksList>
  )
};

export default DrinkList;