import { SectionTitleAddDrink, ButtonAdd } from './AddDrinkForm.styled';
// import { useDispatch,  } from 'react-redux';
import DrinkDescriptionFields from './DrinkDescriptionFields/DrinkDescriptionFields';
import DrinkIngredientsFields from './DrinkIngredientsFields/DrinkIngredientsFields';
import RecipePreparation from './RecipePreparation/RecipePreparation';

const AddDrinkForm = () => {
  // const dispatch = useDispatch();
  const onSubmitForm = (e) => {
    e.preventDefault();
    console.dir(e.currentTarget);
  };

  return (
    <>
      <form onSubmit={onSubmitForm}>
        <DrinkDescriptionFields />
        <DrinkIngredientsFields />
        <RecipePreparation />
        <ButtonAdd type="submit">Add</ButtonAdd>
      </form>
    </>
  );
};

export default AddDrinkForm;
