import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectDoctor } from '../../redux/doctors/doctors.selectors';
import { selectInsuranceBrand } from '../../redux/search/search.selectors';
import DoctorCard from '../doctor-card/doctor-card.component';
const { REACT_APP_WEB_APP_DOMAIN_URL } = process.env;

class DoctorProfile extends React.Component {
  render() {
    const {
      insuranceBrand,
      visitReason,
      zipcode,
      doctor,
      doctor: { uid, provider_bio, accepted_insurances },
    } = this.props;
    const url = `${REACT_APP_WEB_APP_DOMAIN_URL}/visit-flow-steps?puid=${uid}&symptom=${visitReason}&insurance=${insuranceBrand}&zip=${zipcode}`;

    return (
      <section class="doctor-profile">
        <div class="container">
          <div class="doctor-profile__sections">
            <DoctorCard
              showInsurances={false}
              doctor={doctor}
              buttonText="Schedule a Health Visit"
              handleClick={() => {
                window.location.href = url;
              }}
            />
            <div class="additional-info">
              <div class="additional-info__bio">
                <h1 class="additional-info__bio--name">Bio</h1>
                <p class="additional-info__bio--bio-text">{provider_bio}</p>
              </div>

              <div class="additional-info__insurances">
                <h1>Accepted Insurances:</h1>
                {accepted_insurances.map((insurance) => (
                  <p class="additional-info--insurance-name">{insurance}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  insuranceBrand: selectInsuranceBrand,
  doctor: selectDoctor,
});

export default withRouter(connect(mapStateToProps)(DoctorProfile));
