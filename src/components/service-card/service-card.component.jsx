import React from 'react';
import { IoCashOutline, IoHappyOutline, IoTimeOutline } from 'react-icons/io5';

const ServiceCard = ({ service, image }) => {
  return (
    <div className='service'>
      <img className='service--img service--img--vertical' src={image} alt={`${service}`} />
      <div className='service__content'>
        <p className='service__content--title'>{service}</p>
        <ul className='service__content--attributes'>
          <li className='service__content--attribute'>
            <IoCashOutline className='list-icon' />
            <span>$68 flat-fee</span>
          </li>
          <li className='service__content--attribute'>
            <IoTimeOutline className='list-icon' />
            <span>Same day response</span>
          </li>
          <li className='service__content--attribute'>
            <IoHappyOutline className='list-icon' />
            <span>
              <strong>100%</strong> money-back gurantee
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ServiceCard;
