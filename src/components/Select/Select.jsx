import Select from 'react-select';

const isMobile = window.innerWidth < 768;

const customStyles = {
  container: (provided) => ({
    ...provided,

    width: isMobile ? '100%' : '199px',

    // width: '199px', // Set the width of the container
  }),
  control: (provided) => ({
    ...provided,
    border: '1px solid #ccc',
    background: '#161f37',
    borderRadius: '200px', // Set the border color
    padding: '14px 24px',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#007bff' : '#161f37', // Set the background color for selected and non-selected options
    color: state.isSelected ? 'white' : '#f3f3f3', // Set the text color for selected and non-selected options
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: 'none',
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    padding: '0',
    width: '20px',
    height: '20px',
  }),

  clearIndicator: (provided) => ({
    ...provided,
    padding: '0',
    width: '20px',
    height: '20px',
  }),

  placeholder: (provided) => ({
    ...provided,
    fontWeight: '400',
    fontSize: '17px',
    lineHeight: '1.56',
    color: '#f3f3f3',
    // margin: '0 auto',
  }),
  menu: (provided) => ({
    ...provided,
    background: '#161f37',
    color: '#f3f3f3',
    borderRadius: '20px',
  }),
  menuList: (provided) => ({
    ...provided,
    maxHeight: '405px', // Set the maximum height of the scrollable list
    overflowY: 'auto', // Enable vertical scrolling
    borderRadius: '20px',
    '&::-webkit-scrollbar': {
      width: '8px', // Set the width of the scrollbar,
    },
    '&::-webkit-scrollbar-thumb': {
      width: '8px',
      backgroundColor: '#434d67', // Set the color of the scrollbar thumb
      borderRadius: '20px', // Set the border radius of the scrollbar thumb
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#f3f3f3',
  }),
};

export const CustomSelect = ({
  options,
  onChange,
  placeholder,
  isLoading,
  isClearable,
}) => {
  return (
    <Select
      options={options}
      onChange={onChange}
      styles={customStyles}
      placeholder={placeholder}
      isLoading={isLoading}
      isClearable={isClearable}
    />
  );
};
