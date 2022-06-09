import React from 'react';
import {
  IoLocationOutline,
  IoSchoolOutline,
  IoStarOutline,
} from 'react-icons/io5';
import CustomButton from '../custom-button/custom-button.component';
import Tag from '../tag/tag.component';

const DoctorCard = ({
  vertical,
  doctor,
  headshot,
  showInsurances,
  showButton,
  buttonText,
  handleClick,
}) => {
  const {
    first_name,
    last_name,
    professional_title,
    tag,
    accepted_insurances,
    med_school,
    rating,
    total_ratings,
  } = doctor;
  if (vertical) {
    return (
      <div className="doctor doctor--vertical">
        <img
          className="doctor--img doctor--img--vertical"
          src={headshot}
          alt={`${first_name} ${last_name} ${professional_title} Headshot`}
        />
        <div className="doctor__content">
          <div className="doctor__content--tags">
            <Tag tag={tag} />
          </div>
          <p className="doctor__content--title">
            {first_name} {last_name}, {professional_title}
          </p>
          <ul className="doctor__content--attributes">
            <li className="doctor__content--attribute">
              <IoLocationOutline className="list-icon" />
              <span>Boston, Massachusetts</span>
            </li>
            <li className="doctor__content--attribute">
              <IoSchoolOutline className="list-icon" />
              <span>{med_school}</span>
            </li>
            <li className="doctor__content--attribute">
              <IoStarOutline className="list-icon" />
              <span>
                <strong>{rating}</strong> rating ({total_ratings})
              </span>
            </li>
          </ul>
        </div>
        {showInsurances && (
          <div className="doctor__insurances">
            <p>Accepted Insurances:</p>
            {accepted_insurances.map((insurance) => (
              <p key={insurance} className="doctor__insurances--name">
                {insurance}
              </p>
            ))}
          </div>
        )}
        {showButton && (
          <CustomButton className="btn btn--full" onClick={handleClick}>
            {buttonText}
          </CustomButton>
        )}
      </div>
    );
  } else {
    return (
      <div className="doctor">
        <img
          className="doctor--img"
          src={headshot}
          alt={`${first_name} ${last_name} ${professional_title} Headshot`}
        />
        <div className="doctor__content">
          <div className="doctor__content--tags">
            <Tag tag={tag} />
          </div>
          <p className="doctor__content--title">
            {first_name} {last_name}, {professional_title}
          </p>
          <ul className="doctor__content--attributes">
            <li className="doctor__content--attribute">
              <IoLocationOutline className="list-icon" />
              <span>Boston, Massachusetts</span>
            </li>
            <li className="doctor__content--attribute">
              <IoSchoolOutline className="list-icon" />
              <span>{med_school}</span>
            </li>
            <li className="doctor__content--attribute">
              <IoStarOutline className="list-icon" />
              <span>
                <strong>{rating}</strong> rating ({total_ratings})
              </span>
            </li>
          </ul>
        </div>
        {showInsurances && (
          <div className="doctor__insurances">
            <p>Accepted Insurances:</p>
            {accepted_insurances.map((insurance) => (
              <p key={insurance} className="doctor__insurances--name">
                {insurance}
              </p>
            ))}
          </div>
        )}
        {showButton && (
          <CustomButton
            className="btn btn--full doctor--search-btn"
            onClick={handleClick}
          >
            {buttonText}
          </CustomButton>
        )}
      </div>
    );
  }
};

export default DoctorCard;
