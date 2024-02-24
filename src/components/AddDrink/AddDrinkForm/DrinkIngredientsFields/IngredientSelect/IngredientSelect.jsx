const IngredientSelect = ({ ingredients, id, onHandleDeleteIngredient }) => {
  return (
    <>
      <li id={id}>
        <div>
          <select>
            {ingredients.map(({ ingredientId, title }) => {
              return (
                <option key={title} value={ingredientId}>
                  {title}
                </option>
              );
            })}
          </select>
          <input type="text" name="" id="" />
        </div>
        <button type="button" onClick={() => onHandleDeleteIngredient(id)}>
          x
        </button>
      </li>
    </>
  );
};

export default IngredientSelect;
