import { useDispatch, useSelector } from 'react-redux';
import { SearchContainer } from './DrinksPageSearch.styled';
import { CustomSelect } from '../Select/Select';
import { SearchForm } from '../SerarchForm/SearchForm';
import { useEffect, useState } from 'react';
import { getSearch } from '../../redux/drinks/drinksOperations';

const DrinksPageSearch = ({ categories, ingredients }) => {
  const [category, setCategory] = useState(null);
  const [ingredient, setIngredient] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSearch({ category, ingredient }));
  }, [dispatch, category, ingredient]);

  const handleChangeCategory = (e) => {
    setCategory(e.value);
  };

  const handleChangeIngredient = (e) => {
    setIngredient(e.value);
  };

  const categoriesOptions = categories?.map((category) => {
    const option = {
      value: `${category}`,
      label: `${category}`,
    };
    return option;
  });

  const ingredientsOptions = ingredients?.map((ingredient) => {
    const option = {
      value: `${ingredient.title}`,
      label: `${ingredient.title}`,
    };
    return option;
  });

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      return;
    }
    dispatch(getSearch({ searchQuery, category, ingredient }));
    setSearchQuery('');
    const form = e.target;
    form.reset();
  };

  const saveName = (e) => {
    const { value } = e.target;
    setSearchQuery(value);
  };
  return (
    <SearchContainer>
      <SearchForm
        query={searchQuery}
        saveName={saveName}
        onSubmit={onHandleSubmit}
      />
      <CustomSelect
        options={categoriesOptions}
        onChange={handleChangeCategory}
      />
      <CustomSelect
        options={ingredientsOptions}
        onChange={handleChangeIngredient}
      />
    </SearchContainer>
  );
};

export default DrinksPageSearch;
