import Select from 'react-select';

const customStyles = {
  container: (provided) => ({
    ...provided,
    width: '199px', // Set the width of the container
  }),
  control: (provided) => ({
    ...provided,
    border: '1px solid #ccc',
    background: '#161f37',
    borderRadius: '200px', // Set the border color
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#007bff' : 'white', // Set the background color for selected and non-selected options
    color: state.isSelected ? 'white' : 'black', // Set the text color for selected and non-selected options
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: 'none',
  }),
};

export const CustomSelect = ({ options, onChange, placeholder }) => {
  return (
    <Select
      options={options}
      onChange={onChange}
      styles={customStyles}
      placeholder={placeholder}
    />
  );
};
