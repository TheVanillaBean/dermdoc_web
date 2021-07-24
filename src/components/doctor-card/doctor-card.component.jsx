import React from "react";
import headshot from "../../assets/omar-headshot.jpeg";
import CustomButton from "../custom-button/custom-button.component";

const DoctorCard = ({ doctor, showInsurances, buttonText, handleClick, showSchedule, ...otherProps }) => {
  const { first_name, last_name, professional_title, accepted_insurances, med_school, med_residency } = doctor;
  return (
    <div className="doctor">
      <div className="flex">
        <img src={headshot} alt="Doctor Headshot" className="doctor__headshot" />

        <div className="doctor__information">
          <h1 className="doctor__information--name">
            {first_name} {last_name}, {professional_title}
          </h1>
          <p className="doctor__information--location">Boston, Massachusetts</p>
          <p className="doctor__information--specialty">Specialty: Dermatology</p>
          <p className="doctor__information--school">Medical School: {med_school}</p>
          <p className="doctor__information--residency">Residency: {med_residency}</p>
          <p className="doctor__information--avg-response">Average Response: 2 hr</p>
        </div>

        {showInsurances && (
          <div className="doctor__insurances">
            <p>Accepted Insurances:</p>
            {accepted_insurances.map((insurance) => (
              <p class="additional-info--insurance-name">{insurance}</p>
            ))}
          </div>
        )}
      </div>
      <CustomButton onClick={handleClick}>{buttonText}</CustomButton>
    </div>
  );
};

export default DoctorCard;
