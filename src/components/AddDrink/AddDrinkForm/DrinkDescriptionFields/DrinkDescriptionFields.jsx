import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCategories,
  getGlasses,
  getIngredients,
} from '../../../../redux/drinks/drinksOperations';
import {
  AddDrinkWrapper,
  DrinkImg,
  IconWrapper,
  InputDrink,
  InputFile,
  InputLabel,
  InputList,
  InputRadio,
  InputWrapper,
  LabelRadio,
  OptionSelect,
  RadioWrapper,
  SelectCategories,
  SelectWrapper,
} from '../AddDrinkForm.styled';

import { GoPlus } from 'react-icons/go';
import { IoMdRadioButtonOff } from 'react-icons/io';

const DrinkDescriptionFields = () => {
  const [image, setImage] = useState();
  const [imageURL, setImageURL] = useState();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
    dispatch(getIngredients());
    dispatch(getGlasses());
  }, [dispatch]);

  const categories = useSelector((state) => state.drinks.categories);
  const glasses = useSelector((state) => state.drinks.glasses);

  const handleOnChangeImage = (event) => {
    const file = event.target.files[0];
    setImage(file);
    setImageURL(URL.createObjectURL(file));
  };
  return (
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
            {categories.map((item) => {
              return (
                <OptionSelect value={item} key={item}>
                  {item}
                </OptionSelect>
              );
            })}
          </SelectCategories>
        </SelectWrapper>
        <SelectWrapper>
          <InputDrink type="text" name="glass" id="glass" placeholder="Glass" />
          <SelectCategories name="glass" id="glassDrink" htmlFor="glass">
            {glasses.map((item) => {
              return (
                <OptionSelect value={item} key={item}>
                  {item}
                </OptionSelect>
              );
            })}
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
            <InputRadio type="radio" name="non-alcoholic" id="non-alcoholic" />
            Non-alcoholic
          </LabelRadio>
        </RadioWrapper>
      </InputList>
    </AddDrinkWrapper>
  );
};

export default DrinkDescriptionFields;
