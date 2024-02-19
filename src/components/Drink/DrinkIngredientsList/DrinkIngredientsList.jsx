import {
  SupTitle,
  ListIngredients,
  ItemIngredient,
  ImagesIngredient,
  InfoIngredient,
  NameIngredient,
  MeasureIngredient,
} from './DrinkIngredientsList.styled';

const RecipeIngredientsItems = ({ ingredients }) => {
  return (
    <>
      <SupTitle>Ingredients</SupTitle>
      <ListIngredients>
        {ingredients.map((item) => {
          return (
            <ItemIngredient key={item._id}>
              <ImagesIngredient src={item.ingredientThumb} alt={item.title} />
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
