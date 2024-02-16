import { Container } from '../../../styled/Container';
import {
  IconWrapper,
  InputFile,
  InputLabel,
  InputWrapper,
} from './AddDrinkForm.styled';
import SectionTitle from '../../Drink/titleDrink/titleDrinks';
// import data from '../../../data/recipes.json';
// import icons from '../../../images/icons.svg';

const AddDrinkForm = () => {
  return (
    <>
      <Container>
        <SectionTitle title={'Add Drink'} />
        <form>
          <InputWrapper>
            <InputFile type="file" name="image" id="uploadImage" multiple />
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
          </InputWrapper>

          {/* data drink */}
          <div>
            <input
              type="text"
              name="name"
              id="nameDrink"
              placeholder="Enter item title"
            />
            <input
              type="text"
              name="recipe"
              id="recipeDrink"
              placeholder="Enter about recipe"
            />
            <div>
              <select name="" id="">
                <input
                  type="text"
                  name="category"
                  id="categoryDrink"
                  placeholder="Category"
                />
              </select>
            </div>
            <div>
              <select name="" id="">
                <input
                  type="text"
                  name="category"
                  id="categoryDrink"
                  placeholder="Glass"
                />
              </select>
            </div>
            <div>
              <input type="checkbox" name="alcoholic" id="alcoholic" />
              <label>Alcoholic</label>
              <input type="checkbox" name="non-alcoholic" id="non-alcoholic" />
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
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Enter the recipe"
            ></textarea>
          </div>
          {/* Add */}
          <div>
            <button type="submit">Add</button>
          </div>
        </form>
      </Container>
    </>
  );
};

export default AddDrinkForm;
