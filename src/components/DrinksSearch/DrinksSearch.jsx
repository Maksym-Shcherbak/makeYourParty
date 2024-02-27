import { useDispatch, useSelector } from 'react-redux';
import { SearchContainer } from './DrinksSearch.styled';
import { CustomSelect } from '../Select/Select';
import { SearchForm } from '../SerarchForm/SearchForm';
import { useEffect, useState } from 'react';
import { getSearch } from '../../redux/drinks/drinksOperations';
import { selectIsLoading } from '../../redux/auth/authSelectors';

const DrinksSearch = ({ categories, ingredients, page, limit }) => {
  const [category, setCategory] = useState(null);
  const [ingredient, setIngredient] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(page);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSearch({ category, ingredient, currentPage, limit }));
  }, [dispatch, category, ingredient, limit, currentPage]);

  useEffect(() => {
    setCurrentPage(page);
  }, [page]);

  const handleChangeCategory = (e) => {
    if (e) {
      setCategory(e.value);
      setCurrentPage(1);
      return;
    }
    setCategory(null);
  };

  const handleChangeIngredient = (e) => {
    if (e) {
      setIngredient(e.value);
      setCurrentPage(1);
      return;
    }
    setIngredient(null);
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
    setCurrentPage(1);
    dispatch(
      getSearch({ searchQuery, category, ingredient, currentPage, limit })
    );
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
        placeholder={'All categories'}
        isLoading={isLoading}
        isClearable={true}
      />
      <CustomSelect
        options={ingredientsOptions}
        onChange={handleChangeIngredient}
        placeholder={'Ingredients'}
        isLoading={isLoading}
        isClearable={true}
      />
    </SearchContainer>
  );
};

export default DrinksSearch;
