import React from 'react';

const FormInput = ({ handleChange, label, ...props }) => <input className="search__options--input" onChange={handleChange} {...props} />;

export default FormInput;
