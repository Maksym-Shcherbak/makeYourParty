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
} from './AddDrinkForm.styled';
import SectionTitle from '../../Drink/titleDrink/titleDrinks';
// import data from '../../../data/recipes.json';

const AddDrinkForm = () => {
  const [image, setImage] = useState();
  const [imageURL, setImageURL] = useState();

  const handleOnChange = (event) => {
    event.preventDefault();

    const file = event.target.files[0];
    setImage(file);
    setImageURL(URL.createObjectURL(file));
  };

  return (
    <>
      <Container>
        <SectionTitle title={'Add Drink'} />
        <form>
          <InputWrapper>
            {image ? (
              <DrinkImg src={imageURL} alt="drinkImage" />
            ) : (
              <>
                <InputFile
                  type="file"
                  name="image"
                  id="uploadImage"
                  onChange={handleOnChange}
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
          <div>
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
                  <OptionSelect value="">Cocktail</OptionSelect>
                  <OptionSelect value="">Homemade Liqueur</OptionSelect>
                  <OptionSelect value="">Homemade Liqueur</OptionSelect>
                  <OptionSelect value="">Homemade Liqueur</OptionSelect>
                  <OptionSelect value="">Homemade Liqueur</OptionSelect>
                  <OptionSelect value="">Homemade Liqueur</OptionSelect>
                  <OptionSelect value="">Homemade Liqueur</OptionSelect>
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
                  <OptionSelect value="">Old-fashioned glass</OptionSelect>
                  <OptionSelect value="">Old-fashioned glass</OptionSelect>
                  <OptionSelect value="">Old-fashioned glass</OptionSelect>
                  <OptionSelect value="">Old-fashioned glass</OptionSelect>
                  <OptionSelect value="">Old-fashioned glass</OptionSelect>
                </SelectCategories>
              </SelectWrapper>
            </InputList>
            <div>
              <input type="radio" name="alcoholic" id="alcoholic" />
              <label>Alcoholic</label>
              <input type="radio" name="non-alcoholic" id="non-alcoholic" />
              <label>Non-alcoholic</label>
            </div>
          </div>
          {/* Ingredients */}
          <div>
            <SectionTitle title={'Ingredients'} />
            <div>
              <button type="button">-</button>
              <span>0</span>
              <button type="button">+</button>
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
