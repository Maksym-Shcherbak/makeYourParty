import {
  DrinkCard,
  DrinkImg,
  DrinkTitle,
  DrinkCategory,
  DrinkDescription,
} from './DrinksItem.styled';

export const DrinksItem = ({
  _id,
  drinkThumb,
  drink,
  alcoholic,
  description,
}) => {
  return (
    <DrinkCard>
      <DrinkImg src={drinkThumb} alt={drink} />
      <DrinkTitle>{drink}</DrinkTitle>
      <DrinkCategory>{alcoholic}</DrinkCategory>
      <DrinkDescription>{description}</DrinkDescription>
      <SeeMoreBtn href={`/drink/${_id}`}>See more</SeeMoreBtn>
      <DeleteButton id={_id}>Delete</DeleteButton>
    </DrinkCard>
  );
};
