import React from 'react';
import Select from 'react-select';

const dropdownStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px dotted #90024c',
    color: state.isSelected ? 'red' : 'blue',
    padding: 20,
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    width: 200,
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
