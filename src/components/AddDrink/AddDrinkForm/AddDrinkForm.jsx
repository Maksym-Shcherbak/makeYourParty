import SectionTitle from '../../Drink/titleDrink/titleDrinks';

const AddDrinkForm = () => {
  return (
    <form>
      {/* avatar  */}
      <div>
        <input type="file" name="image" id="uploadImage" multiple />
        <label htmlFor="uploadImage">
          <span></span>
          <span>Add image</span>
        </label>
      </div>
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
          <input
            type="text"
            name="category"
            id="categoryDrink"
            placeholder="Category"
          />
          <select name="" id="">
            <option value=""></option>
          </select>
        </div>
        <div>
          <input
            type="text"
            name="category"
            id="categoryDrink"
            placeholder="Glass"
          />
          <select name="" id="">
            <option value=""></option>
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
  );
};

export default AddDrinkForm;
