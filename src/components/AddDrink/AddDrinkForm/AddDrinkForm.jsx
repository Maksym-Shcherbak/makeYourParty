import { useState } from 'react';
import { ButtonAdd } from './AddDrinkForm.styled';
import { useDispatch } from 'react-redux';
import DrinkDescriptionFields from './DrinkDescriptionFields/DrinkDescriptionFields';
import DrinkIngredientsFields from './DrinkIngredientsFields/DrinkIngredientsFields';
import RecipePreparation from './RecipePreparation/RecipePreparation';
import { addDrinkOwn } from '../../../redux/drinks/drinksOperations';
import { useNavigate } from 'react-router-dom';

import Notiflix from 'notiflix';

const AddDrinkForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [imageURL, setImageURL] = useState('');

  const [drink, setDrink] = useState('');
  const [shortDescription, setShortDescription] = useState('');

  const [category, setCategory] = useState('Beer');
  const [glass, setGlass] = useState('Balloon Glass');

  const [alcoholic, setAlcoholic] = useState('');

  const [instructions, SetInstructions] = useState('');

  const [ingredients, setIngredients] = useState([]);

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

  const validateBody = () => {
    const value = '';

    switch (value) {
      case imageURL:
        Notiflix.Notify.warning(`Upload a photo of the drink`);
        return false;

      case drink:
        Notiflix.Notify.warning(`Fill in required fields - title`);
        return false;

      case shortDescription:
        Notiflix.Notify.warning(`Fill in required fields - recipe`);
        return false;

      case category:
        Notiflix.Notify.warning(`Fill in required fields - category`);
        return false;

      case glass:
        Notiflix.Notify.warning(`Fill in required fields - glass`);
        return false;

      case alcoholic:
        Notiflix.Notify.warning(
          `Select the type of drink - alcoholic or non-alcoholic`
        );
        return false;

      case instructions:
        Notiflix.Notify.warning(`Fill in required fields - recipe preparation`);
        return false;

      default:
        return true;
    }
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
    if (!validateBody()) {
      return;
    }
    dispatch(addDrinkOwn(newDrink)).then(() => navigate('/my'));
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
