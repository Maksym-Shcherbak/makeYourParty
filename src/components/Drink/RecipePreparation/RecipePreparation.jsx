import {
  TitleRecipe,
  Wraper,
  Recipe,
  Images,
} from './RecipePreparation.styled';

import images from '../../../assets/DrinkImages/image.jpg';

const RecipePreparation = ({ instructions }) => {
  return (
    <>
      <TitleRecipe>Recipe Preparation</TitleRecipe>
      <Wraper>
        <Recipe>{instructions}</Recipe>
        <Images src={images} alt="Cocktails" />
      </Wraper>
    </>
  );
};

export default RecipePreparation;
