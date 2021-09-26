import React from 'react';

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className='form-input-container'>
    <input className='form-input-container__input' onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? 'form-input-container__label__shrink' : ''
        } form-input-container__label`}>
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
