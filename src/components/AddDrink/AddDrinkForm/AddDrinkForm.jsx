import { useState } from 'react';
import { Container } from '../../../styled/Container';
import {
  IconWrapper,
  InputFile,
  InputLabel,
  InputDrink,
  InputWrapper,
  InputList,
  DrinkImg,
  SelectWrapper,
  SelectCategories,
  OptionSelect,
  RadioWrapper,
  InputRadio,
  LabelRadio,
  AddDrinkWrapper,
  IngredientsWrapper,
  ButtonWrapper,
  ButtonAction,
  CounterValue,
  RecipeTexterea,
  SectionTitleAdd,
  SectionTitleAddDrink,
  TextereaWrapper,
  ButtonAdd,
} from './AddDrinkForm.styled';
import { GoPlus } from 'react-icons/go';
import { IoMdRadioButtonOff } from 'react-icons/io';
import SectionTitle from '../../Drink/titleDrink/titleDrinks';
import { useDispatch } from 'react-redux';
import { getCategories } from '../../../redux/drinks/drinksOperations';
// import data from '../../../data/recipes.json';

const AddDrinkForm = () => {
  const [image, setImage] = useState();
  const [imageURL, setImageURL] = useState();
  const [counter, setCounter] = useState(0);

  const dispatch = useDispatch();
  const categories = dispatch(getCategories());
  console.log(categories);

  const handleOnChangeImage = (event) => {
    const file = event.target.files[0];
    setImage(file);
    setImageURL(URL.createObjectURL(file));
  };

  const increaseCounter = () => {
    setCounter((prevCount) => prevCount + 1);
  };

  const decreaseCounter = () => {
    setCounter((prevCount) => prevCount - 1);
    if (counter <= 0) {
      setCounter(0);
    }
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    console.dir(e.currentTarget);
  };

  return (
    <>
      <Container>
        <SectionTitleAddDrink>Add Drink</SectionTitleAddDrink>

        <form onSubmit={onSubmitForm}>
          <AddDrinkWrapper>
            <InputWrapper>
              {image ? (
                <DrinkImg src={imageURL} alt="drinkImage" />
              ) : (
                <>
                  <InputFile
                    type="file"
                    name="image"
                    id="uploadImage"
                    onChange={handleOnChangeImage}
                  />
                  <InputLabel htmlFor="uploadImage">
                    <IconWrapper>
                      <GoPlus
                        style={{
                          color: '#161F37',
                          fontSize: 28,
                        }}
                      />
                    </IconWrapper>
                    <span>Add image</span>
                  </InputLabel>
                </>
              )}
            </InputWrapper>

            {/* data drink */}

            <InputList>
              <InputDrink
                type="text"
                name="drink"
                id="drink"
                placeholder="Enter item title"
              />

              <InputDrink
                type="text"
                name="shortDescription"
                id="shortDescription"
                placeholder="Enter about recipe"
              />
              <SelectWrapper>
                <InputDrink
                  type="text"
                  name="category"
                  id="category"
                  placeholder="Category"
                />
                <SelectCategories name="category" id="categoryDrink">
                  <OptionSelect value="Cocktail">Cocktail</OptionSelect>
                  <OptionSelect value="Homemade Liqueur">
                    Homemade Liqueur
                  </OptionSelect>
                </SelectCategories>
              </SelectWrapper>
              <SelectWrapper>
                <InputDrink
                  type="text"
                  name="glass"
                  id="glass"
                  placeholder="Glass"
                />
                <SelectCategories name="glass" id="glassDrink" htmlFor="glass">
                  <OptionSelect value="">Cocktail glass</OptionSelect>
                  <OptionSelect value="">Old-fashioned glass</OptionSelect>
                </SelectCategories>
              </SelectWrapper>

              <RadioWrapper>
                <LabelRadio htmlFor="alcoholic">
                  <span>
                    <IoMdRadioButtonOff
                      style={{
                        color: 'rgba(243, 243, 243, 0.5)',
                        fontSize: 20,
                      }}
                    />
                  </span>
                  <InputRadio type="radio" name="alcoholic" id="alcoholic" />
                  Alcoholic
                </LabelRadio>
                <LabelRadio htmlFor="non-alcoholic">
                  <span>
                    <IoMdRadioButtonOff
                      style={{
                        color: 'rgba(243, 243, 243, 0.5)',
                        fontSize: 20,
                      }}
                    />
                  </span>
                  <InputRadio
                    type="radio"
                    name="non-alcoholic"
                    id="non-alcoholic"
                  />
                  Non-alcoholic
                </LabelRadio>
              </RadioWrapper>
            </InputList>
          </AddDrinkWrapper>
          {/* Ingredients */}
          <IngredientsWrapper>
            <SectionTitle title={'Ingredients'} />
            <ButtonWrapper>
              <ButtonAction type="button" onClick={decreaseCounter}>
                -
              </ButtonAction>
              <CounterValue>{counter}</CounterValue>
              <ButtonAction type="button" onClick={increaseCounter}>
                +
              </ButtonAction>
            </ButtonWrapper>
          </IngredientsWrapper>
          <div>
            <ul>
              <li></li>
            </ul>
          </div>
          {/* Recipe Preparation */}
          <TextereaWrapper>
            <SectionTitleAdd>Recipe Preparation</SectionTitleAdd>
            <RecipeTexterea
              name="instructions"
              id="instructions"
              placeholder="Enter the recipe"
            ></RecipeTexterea>
          </TextereaWrapper>

          <ButtonAdd type="submit">Add</ButtonAdd>
        </form>
      </Container>
    </>
  );
};

export default AddDrinkForm;
