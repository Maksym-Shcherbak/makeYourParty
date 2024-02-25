import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCategories,
  getGlasses,
} from '../../../../redux/drinks/drinksOperations';
import {
  AddDrinkWrapper,
  CustomIcon,
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
} from '../DrinkDescriptionFields/DrinkDescriptionFields.styled';

import { GoPlus } from 'react-icons/go';
import { IoMdRadioButtonOff, IoMdRadioButtonOn } from 'react-icons/io';

const DrinkDescriptionFields = ({
  image,
  imageURL,
  handleOnChangeImage,
  drink,
  shortDescription,
  onChangeInput,
  category,
  glass,
  onChangeSelect,
  alcoholic,
  onChangeRadio,
}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
    dispatch(getGlasses());
  }, [dispatch]);

  const categories = useSelector((state) => state.drinks.categories);
  const glasses = useSelector((state) => state.drinks.glasses);

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
                <GoPlus />
              </IconWrapper>
              <span>Add image</span>
            </InputLabel>
          </>
        )}
      </InputWrapper>

      <InputList>
        <InputDrink
          type="text"
          name="drink"
          id="drink"
          placeholder="Enter item title"
          autoComplete="off"
          value={drink}
          onChange={onChangeInput}
        />

        <InputDrink
          type="text"
          name="shortDescription"
          id="shortDescription"
          placeholder="Enter about recipe"
          autoComplete="off"
          value={shortDescription}
          onChange={onChangeInput}
        />
        <SelectWrapper>
          <InputDrink
            type="text"
            name="category"
            id="category"
            placeholder="Category"
            autoComplete="off"
            value={category}
          />
          <SelectCategories
            name="category"
            id="categoryDrink"
            onChange={onChangeSelect}
          >
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
          <InputDrink
            type="text"
            name="glass"
            id="glass"
            placeholder="Glass"
            autoComplete="off"
            value={glass}
          />
          <SelectCategories
            name="glass"
            id="glassDrink"
            htmlFor="glass"
            onChange={onChangeSelect}
          >
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
            <CustomIcon>
              {alcoholic === 'alcoholic' ? (
                <IoMdRadioButtonOn />
              ) : (
                <IoMdRadioButtonOff />
              )}
            </CustomIcon>
            Alcoholic
            <InputRadio
              type="radio"
              name="alcoholic"
              id="alcoholic"
              value="Alcoholic"
              onChange={onChangeRadio}
            />
          </LabelRadio>

          <LabelRadio htmlFor="non-alcoholic">
            <CustomIcon>
              {alcoholic === 'non-alcoholic' ? (
                <IoMdRadioButtonOn />
              ) : (
                <IoMdRadioButtonOff />
              )}
            </CustomIcon>
            Non-alcoholic
            <InputRadio
              type="radio"
              name="alcoholic"
              id="non-alcoholic"
              value="Non alcoholic"
              onChange={onChangeRadio}
            />
          </LabelRadio>
        </RadioWrapper>
      </InputList>
    </AddDrinkWrapper>
  );
};

export default DrinkDescriptionFields;
