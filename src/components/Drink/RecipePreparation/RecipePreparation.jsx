import {
  TitleRecipe,
  Wraper,
  Recipe,
  Images,
} from './RecipePreparation.styled';

import images from '../../../assets/DrinkImages/image.jpg';

const RecipePreparation = ({ description }) => {
  return (
    <>
      <TitleRecipe>Recipe Preparation</TitleRecipe>
      <Wraper>
        <Recipe>{description.description}</Recipe>
        <Images src={images} alt="Cocktails" />
      </Wraper>
    </>
  );
};

export default RecipePreparation;
