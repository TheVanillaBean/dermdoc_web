import React from 'react';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import CustomButton from '../custom-button/custom-button.component';

const ProductCard = ({ service, image, bestseller = false, showButton = false, handleClick }) => {
  return (
    <div className={bestseller ? 'service service-bestseller' : 'service'}>
      <img className='service--img' src={image} alt={`${service}`} />

      <div className='service__content'>
        <p className='service__content--title'>{service}</p>
        <p className='service__content--price'>$6.99/month</p>

        <ul className='service__content--attributes'>
          <li className='service__content--attribute'>
            <IoCheckmarkCircleOutline className='list-icon service-icon' />

            <span>3-months supply</span>
          </li>

          <li className='service__content--attribute'>
            <IoCheckmarkCircleOutline className='list-icon service-icon' />

            <span>Free skin evaluation</span>
          </li>
          <li className='service__content--attribute'>
            <IoCheckmarkCircleOutline className='list-icon service-icon' />

            <span>Rx Ingredients</span>
          </li>
        </ul>
        {showButton && (
          <CustomButton className='btn btn--full' onClick={() => handleClick(service)}>
            Learn more
          </CustomButton>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
