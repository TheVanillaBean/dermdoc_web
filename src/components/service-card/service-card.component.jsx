import React from 'react';
import { IoCashOutline, IoHappyOutline, IoTimeOutline } from 'react-icons/io5';
import CustomButton from '../custom-button/custom-button.component';

const ServiceCard = ({ service, image, showButton = false, promo = false, handleClick }) => {
  const promoCostUI = (
    <span>
      <span className='strikethrough'>$80</span>
      <strong>$68</strong> flat-fee
    </span>
  );

  const normalCostUI = <span>$80 flat-fee</span>;
  return (
    <div className='service'>
      <img className='service--img' src={image} alt={`${service}`} />
      <div className='service__content'>
        <p className='service__content--title'>{service}</p>
        <ul className='service__content--attributes'>
          <li className='service__content--attribute'>
            <IoCashOutline className='list-icon' />
            {promo ? promoCostUI : normalCostUI}
          </li>
          <li className='service__content--attribute'>
            <IoTimeOutline className='list-icon' />
            <span>Same day response</span>
          </li>
          <li className='service__content--attribute'>
            <IoHappyOutline className='list-icon' />
            <span>
              <strong>100%</strong> money-back guarantee
            </span>
          </li>
        </ul>
      </div>

      {showButton && (
        <CustomButton className='btn btn--full' onClick={() => handleClick(service)}>
          Start visit
        </CustomButton>
      )}
    </div>
  );
};

export default ServiceCard;
