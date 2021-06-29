import React from 'react';

const CustomButton = ({ children, ...otherProps }) => (
  <button {...otherProps} className="search__submit btn">
    {children}
  </button>
);

export default CustomButton;
