import React from 'react';
import headshot from '../../assets/omar-headshot.jpeg';
import CustomButton from '../custom-button/custom-button.component';

const DoctorCard = ({ doctor, showInsurances, buttonText, handleClick, ...otherProps }) => {
  const { name, location, specialty, school, residency } = doctor;
  return (
    <div className="doctor">
      <div className="flex">
        <img src={headshot} alt="Doctor Headshot" className="doctor__headshot" />

        <div className="doctor__information">
          <h1 className="doctor__information--name">{name}</h1>
          <p className="doctor__information--location">{location}</p>
          <p className="doctor__information--specialty">Specialty: {specialty}</p>
          <p className="doctor__information--school">Medical School: {school}</p>
          <p className="doctor__information--residency">Residency: {residency}</p>
          <p className="doctor__information--avg-response">Average Response: 2 hr</p>
        </div>

        {showInsurances && (
          <div className="doctor__insurances">
            <p>Accepted Insurances:</p>
            <p className="doctor__information--insurance-name">Harvard Pilgrim</p>
            <p className="doctor__information--insurance-name">Aetna</p>
            <p className="doctor__information--insurance-name">Cigna</p>
            <p className="doctor__information--insurance-name">Tufts - Spirit</p>
          </div>
        )}

        <CustomButton onclick={handleClick}>{buttonText}</CustomButton>
      </div>
    </div>
  );
};

export default DoctorCard;
