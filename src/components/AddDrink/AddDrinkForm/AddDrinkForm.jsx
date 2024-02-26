import { useState } from 'react';
import { ButtonAdd } from './AddDrinkForm.styled';
import { useDispatch } from 'react-redux';
import DrinkDescriptionFields from './DrinkDescriptionFields/DrinkDescriptionFields';
import DrinkIngredientsFields from './DrinkIngredientsFields/DrinkIngredientsFields';
import RecipePreparation from './RecipePreparation/RecipePreparation';
import { addDrinkOwn } from '../../../redux/drinks/drinksOperations';

const AddDrinkForm = () => {
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const [imageURL, setImageURL] = useState('');

  const [drink, setDrink] = useState('');
  const [shortDescription, setShortDescription] = useState('');

  const [category, setCategory] = useState('');
  const [glass, setGlass] = useState('');

  const [alcoholic, setAlcoholic] = useState('');

  const [instructions, SetInstructions] = useState('');

  const [ingredients, setIngredients] = useState(null);

  const handleChildData = (childData) => {
    setIngredients(childData);
  };

  const handleOnChangeImage = (event) => {
    const file = event.target.files[0];
    setImage(file);
    setImageURL(URL.createObjectURL(file));
  };

  const onChangeInput = (e) => {
    const value = e.target.value;
    const nameInput = e.target.name;

    switch (nameInput) {
      case 'drink':
        setDrink(value);
        return;

      case 'shortDescription':
        setShortDescription(value);
        return;

      default:
        return;
    }
  };

  const onChangeSelect = (e) => {
    const value = e.target.value;
    const nameSelect = e.target.name;

    switch (nameSelect) {
      case 'category':
        setCategory(value);
        return;

      case 'glass':
        setGlass(value);
        return;

      default:
        return;
    }
  };

  const onChangeRadio = (e) => {
    const valueInput = e.target.value;
    console.log(valueInput);

    switch (valueInput) {
      case 'Alcoholic':
        setAlcoholic(valueInput);

        return;

      case 'Non alcoholic':
        setAlcoholic(valueInput);

        return;

      default:
        return;
    }
  };

  const onHandleTexteria = (e) => {
    SetInstructions(e.target.value);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    const newDrink = {
      image,
      drink,
      shortDescription,
      category,
      glass,
      alcoholic,
      instructions,
      ingredients,
    };

    console.log(newDrink);
    dispatch(addDrinkOwn(newDrink));
  };

  return (
    <>
      <form onSubmit={onSubmitForm}>
        <DrinkDescriptionFields
          image={image}
          imageURL={imageURL}
          handleOnChangeImage={handleOnChangeImage}
          drink={drink}
          shortDescription={shortDescription}
          onChangeInput={onChangeInput}
          category={category}
          glass={glass}
          onChangeSelect={onChangeSelect}
          alcoholic={alcoholic}
          onChangeRadio={onChangeRadio}
        />
        <DrinkIngredientsFields onChildData={handleChildData} />
        <RecipePreparation
          instructions={instructions}
          onHandleTexteria={onHandleTexteria}
        />
        <ButtonAdd type="submit">Add</ButtonAdd>
      </form>
    </>
  );
};

export default AddDrinkForm;
