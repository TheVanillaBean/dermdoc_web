import React from 'react';
import CustomButton from '../custom-button/custom-button.component';

const CTAButton = ({ additionalClassName = '', buttonText, subtext, handleClick }) => {
  return (
    <div className={`cta ${additionalClassName}`}>
      <CustomButton className='cta__btn btn btn--full' onClick={handleClick}>
        {buttonText}
      </CustomButton>
      <h2 className='cta__subtext'>90-day trial. $9.99 S&H. Subject to consultation.</h2>
    </div>
  );
};

export default CTAButton;
