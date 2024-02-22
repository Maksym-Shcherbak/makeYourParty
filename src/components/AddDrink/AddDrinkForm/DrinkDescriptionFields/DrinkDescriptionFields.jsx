import { useEffect, useState } from 'react';
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
} from '../AddDrinkForm.styled';

import { GoPlus } from 'react-icons/go';
import { IoMdRadioButtonOff, IoMdRadioButtonOn } from 'react-icons/io';

const DrinkDescriptionFields = () => {
  const [image, setImage] = useState();
  const [imageURL, setImageURL] = useState();

  const [drink, setDrink] = useState('');
  const [shortDescription, setShortDescription] = useState('');

  const [category, setCategory] = useState('');
  const [glass, setGlass] = useState('');

  const [alcoholic, setAlcoholic] = useState('');

  // console.log(alcoholic);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
    dispatch(getGlasses());
  }, [dispatch]);

  const categories = useSelector((state) => state.drinks.categories);
  const glasses = useSelector((state) => state.drinks.glasses);

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
    const nameInput = e.target.name;

    switch (nameInput) {
      case 'alcoholic':
        setAlcoholic(nameInput);
        return;

      case 'non-alcoholic':
        setAlcoholic(nameInput);
        return;

      default:
        return;
    }
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
          value={drink}
          onChange={onChangeInput}
        />

        <InputDrink
          type="text"
          name="shortDescription"
          id="shortDescription"
          placeholder="Enter about recipe"
          value={shortDescription}
          onChange={onChangeInput}
        />
        <SelectWrapper>
          <InputDrink
            type="text"
            name="category"
            id="category"
            placeholder="Category"
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
              {alcoholic == 'alcoholic' ? (
                <IoMdRadioButtonOn />
              ) : (
                <IoMdRadioButtonOff />
              )}
            </CustomIcon>
            <InputRadio
              type="radio"
              name="alcoholic"
              id="alcoholic"
              onChange={onChangeRadio}
            />
            Alcoholic
          </LabelRadio>
          <LabelRadio htmlFor="non-alcoholic">
            <CustomIcon>
              {alcoholic == 'non-alcoholic' ? (
                <IoMdRadioButtonOn />
              ) : (
                <IoMdRadioButtonOff />
              )}
            </CustomIcon>
            <InputRadio
              type="radio"
              name="non-alcoholic"
              id="non-alcoholic"
              onChange={onChangeRadio}
            />
            Non-alcoholic
          </LabelRadio>
        </RadioWrapper>
      </InputList>
    </AddDrinkWrapper>
  );
};

export default DrinkDescriptionFields;
