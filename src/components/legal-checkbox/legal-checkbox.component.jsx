import React from 'react';

const LegalCheckbox = ({ handleChange, ...otherProps }) => (
  <div className='legal-checkbox'>
    <input
      type='checkbox'
      className='legal-checkbox__input'
      onChange={handleChange}
      {...otherProps}
    />
    <label className='legal-checkbox__label'>
      I agree to the{' '}
      <a href='/terms' className='legal-checkbox__label--link'>
        Terms and Conditions
      </a>
      ,{' '}
      <a href='/privacy' className='legal-checkbox__label--link'>
        Privacy Policy
      </a>
      , and
      <br />
      <a href='/consent' className='legal-checkbox__label--link'>
        Telehealth Consent
      </a>
    </label>
  </div>
);

export default LegalCheckbox;
