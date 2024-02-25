import {
  SupTitle,
  ListIngredients,
  ItemIngredient,
  ImagesIngredient,
  InfoIngredient,
  NameIngredient,
  MeasureIngredient,
} from './DrinkIngredientsList.styled';

import defaultCoctail from '../../../images/DrinkImages/default200.png';

const RecipeIngredientsItems = ({ data }) => {
  return (
    <>
      <SupTitle>Ingredients</SupTitle>
      <ListIngredients>
        {data.map((item) => {
          return (
            <ItemIngredient key={item._id}>
              <ImagesIngredient
                src={item.ingredientId.ingredientThumb}
                alt={item.title}
                onError={({ currentTarget }) => {
                  currentTarget.src = defaultCoctail;
                }}
              />
              <InfoIngredient>
                <NameIngredient>{item.title}</NameIngredient>
                <MeasureIngredient>{item.measure}</MeasureIngredient>
              </InfoIngredient>
            </ItemIngredient>
          );
        })}
      </ListIngredients>
    </>
  );
};

export default RecipeIngredientsItems;
