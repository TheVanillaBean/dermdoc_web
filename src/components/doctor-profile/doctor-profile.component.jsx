import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectDoctor } from '../../redux/doctors/doctors.selectors';
import {
  selectInsuranceBrand,
  selectVisitReason,
  selectZipCode,
} from '../../redux/search/search.selectors';
import DoctorCard from '../doctor-card/doctor-card.component';

class DoctorProfile extends React.Component {
  render() {
    const {
      insuranceBrand,
      visitReason,
      zipcode,
      doctor,
      doctor: { provider_bio, accepted_insurances, slug },
    } = this.props;

    return (
      <section className="doctor-profile">
        <div className="container">
          <div className="doctor-profile__sections">
            <DoctorCard
              showInsurances={false}
              doctor={doctor}
              showButton={false}
              buttonText="Schedule a Health Visit"
            />

            <div className="additional-info">
              <div className="additional-info__bio">
                <h1 className="additional-info__bio--name">Bio</h1>
                <p className="additional-info__bio--bio-text">{provider_bio}</p>
              </div>

              <div className="additional-info__insurances">
                <h1>Accepted Insurances:</h1>
                {accepted_insurances.map((insurance) => (
                  <p className="additional-info--insurance-name">{insurance}</p>
                ))}
              </div>
            </div>

            <iframe
              src={`https://schedule.nylas.com/${slug}/?prefilled_readonly=true&mailing_zipcode=${zipcode}&visit_reason=${visitReason}&insurance_brand=${insuranceBrand}&mailing_zipcode=${zipcode}&mailing_state=MA`}
              title="Weekly available"
              frameborder="0"
              className="doctor-profile__schedule"
            ></iframe>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  insuranceBrand: selectInsuranceBrand,
  visitReason: selectVisitReason,
  zipcode: selectZipCode,
  doctor: selectDoctor,
});

export default withRouter(connect(mapStateToProps)(DoctorProfile));
