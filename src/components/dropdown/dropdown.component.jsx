import React from 'react';
import Select from 'react-select';

const dropdownStyles = {
  option: (provided, state) => ({
    color: state.isSelected ? '#90024c' : 'black',
    padding: 20,
  }),
  control: (provided) => ({
    // none of react-select's styles are passed to <Control />
    ...provided,
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  },
};

const Dropdown = ({ handleChange, label, dataOptions, ...otherProps }) => (
  <Select
    defaultValue={dataOptions[0]}
    label={label}
    options={dataOptions}
    styles={dropdownStyles}
    onChange={handleChange}
    {...otherProps}
  />
);

export default Dropdown;
