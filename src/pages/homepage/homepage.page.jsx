import React from 'react';
import DoctorCard from '../../components/doctor-card/doctor-card.component';
import { HomePageContainer } from './homepage.styles';

const doctor = {
  name: 'Omar Badri',
  imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
  location: 'Boston, Massuchetts',
  specialty: 'Dermatology',
};
const HomePage = () => (
  <HomePageContainer>
    <h1>Homepage</h1>
    <DoctorCard doctor={doctor} />
  </HomePageContainer>
);

export default HomePage;
