import React from 'react';
import { HomePageContainer } from './doctor-detail.styles';

class DoctorDetail extends React.Component {
  render() {
    const { match } = this.props;

    return (
      <HomePageContainer>
        <h1>Doctor-Detail {match.params.doctor_route}</h1>
      </HomePageContainer>
    );
  }
}

export default DoctorDetail;
