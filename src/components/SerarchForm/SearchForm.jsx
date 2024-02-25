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
      <FormInput
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Enter the text"
        name="searchQuery"
        value={query}
        onChange={saveName}
      />
      <FormButton type="submit">
        <FiSearch size={20} color="rgba(243, 243, 243, 1)" />
        <FormButtonLabel>Search</FormButtonLabel>
      </FormButton>
    </Form>
  );
};
