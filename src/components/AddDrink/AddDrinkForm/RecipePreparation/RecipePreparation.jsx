import {
  RecipeTexterea,
  SectionTitleAdd,
  TextereaWrapper,
} from '../RecipePreparation/RecipePreparation.styled';

const RecipePreparation = ({ instructions, onHandleTexteria }) => {
  return (
    <>
      <TextereaWrapper>
        <SectionTitleAdd>Recipe Preparation</SectionTitleAdd>
        <RecipeTexterea
          name="instructions"
          id="instructions"
          placeholder="Enter the recipe"
          value={instructions}
          onChange={onHandleTexteria}
        ></RecipeTexterea>
      </TextereaWrapper>
    </>
  );
};

export default RecipePreparation;
