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
