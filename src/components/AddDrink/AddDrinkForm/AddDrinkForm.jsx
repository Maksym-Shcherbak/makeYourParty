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
} from './AddDrinkForm.styled';
import SectionTitle from '../../Drink/titleDrink/titleDrinks';
// import data from '../../../data/recipes.json';

const AddDrinkForm = () => {
  const [image, setImage] = useState();
  const [imageURL, setImageURL] = useState();
  const [counter, setCounter] = useState(0);

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

  return (
    <>
      <Container>
        <SectionTitle title={'Add Drink'} />

        <form>
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
                      <svg width="28" height="28">
                        <path
                          d="M14.5 5.833v16.334M6.332 14h16.333"
                          stroke="#161F37"
                        />
                      </svg>
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
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <rect
                        x="2.65"
                        y="2.65"
                        width="14.7"
                        height="14.7"
                        rx="7.35"
                        stroke="rgba(243, 243, 243, 0.5)"
                      />
                    </svg>
                  </span>
                  <InputRadio type="radio" name="alcoholic" id="alcoholic" />
                  Alcoholic
                </LabelRadio>
                <LabelRadio htmlFor="non-alcoholic">
                  <span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <rect
                        x="2.65"
                        y="2.65"
                        width="14.7"
                        height="14.7"
                        rx="7.35"
                        stroke="rgba(243, 243, 243, 0.5)"
                      />
                    </svg>
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
          <div>
            <SectionTitle title={'Ingredients'} />
            <div>
              <button type="button" onClick={decreaseCounter}>
                -
              </button>
              <span>{counter}</span>
              <button type="button" onClick={increaseCounter}>
                +
              </button>
            </div>
          </div>
          {/* Recipe Preparation */}
          <div>
            <SectionTitle title={'Recipe Preparation'} />
            <textarea
              name="instructions"
              id="instructions"
              cols="30"
              rows="10"
              placeholder="Enter the recipe"
            ></textarea>
          </div>

          <div>
            <button type="submit">Add</button>
          </div>
        </form>
      </Container>
    </>
  );
};

export default AddDrinkForm;
