import {
  Form,
  FormButton,
  FormButtonLabel,
  FormInput,
} from './SearchForm.styled';
import { FiSearch } from 'react-icons/fi';

export const SearchForm = ({ query, saveName, onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <FormButton type="submit">
        <FiSearch />
        <FormButtonLabel>Search</FormButtonLabel>
      </FormButton>
      <FormInput
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Enter the text"
        name="searchQuery"
        value={query}
        onChange={saveName}
      />
    </Form>
  );
};
