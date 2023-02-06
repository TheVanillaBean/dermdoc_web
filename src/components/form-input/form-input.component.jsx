import React from 'react';

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className='form-input-container'>
    {label ? (
      <label className={'form-input-container__label heading-tertiary'}>{label}</label>
    ) : null}
    <input className={`form-input-container__input`} onChange={handleChange} {...otherProps} />
  </div>
);

export default FormInput;
