import getIngredients from '../../../data/ingredients.json';

import {
  SupTitle,
  ListIngredients,
  ItemIngredient,
  ImagesIngredient,
  InfoIngredient,
  NameIngredient,
  MeasureIngredient,
} from './DrinkIngredientsList.styled';

const RecipeIngredientsItems = ({ data }) => {
  const ingredient = [];

  if (data.length) {
    data.map(({ ingredientId, measure }) => {
      getIngredients.find((item) => {
        if (ingredientId.$oid === item._id.$oid) {
          let newItem = {
            measure: measure,
          };
          ingredient.push({ ...item, ...newItem });
        }
      });
      return ingredient;
    });

    return (
      <>
        <SupTitle>Ingredients</SupTitle>
        <ListIngredients>
          {ingredient.map((item) => {
            return (
              <ItemIngredient key={item._id.$oid}>
                <ImagesIngredient
                  src={item.ingredientThumb}
                  alt={item.title}
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
  }
};

export default RecipeIngredientsItems;
