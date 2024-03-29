// import { useState } from 'react';
import {
  ItemSelect,
  SelectDeleteBtn,
  SelectIng,
  SelectInput,
  SelectOption,
  SelectWrapperIng,
} from './IngredientSelect.styled';
import { MdClose } from 'react-icons/md';

const IngredientSelect = ({
  ingredients,
  id,
  onHandleDeleteIngredient,

  onSelectHandleIng,
  onChangeInputCl,
}) => {
  return (
    <>
      <ItemSelect>
        <SelectWrapperIng>
          <SelectIng data-id={id} onChange={onSelectHandleIng}>
            {ingredients.map(({ ingredientId, title }) => {
              return (
                <SelectOption
                  key={title}
                  value={ingredientId}
                  data-title={title}
                >
                  {title}
                </SelectOption>
              );
            })}
          </SelectIng>
          <SelectInput
            data-id={id}
            type="text"
            name="measure"
            placeholder="1 cl"
            min={1}
            autoComplete="off"
            onChange={onChangeInputCl}
          />
        </SelectWrapperIng>
        <SelectDeleteBtn
          type="button"
          onClick={() => onHandleDeleteIngredient(id)}
        >
          <MdClose />
        </SelectDeleteBtn>
      </ItemSelect>
    </>
  );
};

export default IngredientSelect;
