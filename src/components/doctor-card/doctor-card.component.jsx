import React from 'react';
import {
  BackgroundImage,
  DetailsContainer,
  DoctorCardContainer,
  DoctorFooterContainer,
  NameContainer,
} from './doctor-card.styles';

const DoctorCard = ({ doctor }) => {
  const { imageUrl, name, location, specialty, school, residency } = doctor;
  return (
    <DoctorCardContainer>
      <BackgroundImage className="background-image" imageUrl={imageUrl} />
      <DoctorFooterContainer>
        <NameContainer>{name}</NameContainer>
        <DetailsContainer>
          {location}
          <br />
          Specialy: {specialty}
          <br />
          Medical School: {school}
          <br />
          Residency: {residency}
        </DetailsContainer>
      </DoctorFooterContainer>
    </DoctorCardContainer>
  );
};

export default DoctorCard;
