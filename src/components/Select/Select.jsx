import Select from 'react-select';

export const CustomSelect = ({ options, onChange }) => {
  return <Select options={options} onChange={onChange} />;
};
