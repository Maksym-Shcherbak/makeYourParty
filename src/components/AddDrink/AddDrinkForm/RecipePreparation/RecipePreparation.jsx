import { useState } from 'react';
import {
  RecipeTexterea,
  SectionTitleAdd,
  TextereaWrapper,
} from '../AddDrinkForm.styled';

const RecipePreparation = () => {
  const [instructions, SetInstructions] = useState('');

  const onHandleTexteria = (e) => {
    SetInstructions(e.target.value);
  };
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
