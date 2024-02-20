import {
  RecipeTexterea,
  SectionTitleAdd,
  TextereaWrapper,
} from '../AddDrinkForm.styled';

const RecipePreparation = () => {
  return (
    <>
      <TextereaWrapper>
        <SectionTitleAdd>Recipe Preparation</SectionTitleAdd>
        <RecipeTexterea
          name="instructions"
          id="instructions"
          placeholder="Enter the recipe"
        ></RecipeTexterea>
      </TextereaWrapper>
    </>
  );
};

export default RecipePreparation;
