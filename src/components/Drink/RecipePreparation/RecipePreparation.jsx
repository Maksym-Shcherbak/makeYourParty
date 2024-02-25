import {
  TitleRecipe,
  Wraper,
  Recipe,
  Images,
} from './RecipePreparation.styled';

import defaultPreparation from '../../../images/DrinkImages/defaultPreparation.jpg';
import defaultPreparation2x from '../../../images/DrinkImages/defaultPreparation@2x.jpg';

const RecipePreparation = ({ instructions }) => {
  return (
    <>
      <TitleRecipe>Recipe Preparation</TitleRecipe>
      <Wraper>
        <Recipe>{instructions}</Recipe>
        <picture>
          <source
            srcSet={`${defaultPreparation} 1x, ${defaultPreparation2x} 2x`}
            type="image/webp"
          />
          <Images src={defaultPreparation} alt="Cocktails" />
        </picture>
      </Wraper>
    </>
  );
};

export default RecipePreparation;
