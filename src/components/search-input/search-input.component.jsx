import React from 'react';

const SearchInput = ({ handleChange, label, ...props }) => (
  <input
    className="search__options--input"
    onChange={handleChange}
    {...props}
  />
);

export default SearchInput;
