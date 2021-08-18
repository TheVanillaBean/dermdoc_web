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

    const mailing_address = '2820 S Alma School Rd';
    const name = 'Victoria Alimov';

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
                  <p
                    key={insurance}
                    className="additional-info--insurance-name"
                  >
                    {insurance}
                  </p>
                ))}
              </div>
            </div>
            <div className="js-modal-inline"></div>
            <iframe
              src={`https://schedule.nylas.com/${slug}/?prefilled_readonly=false&mailing_zipcode=${zipcode}&visit_reason=${visitReason}&insurance_brand=${insuranceBrand}&email=aalimov@asu.edu&mailing_address=${mailing_address}&mailing_city=Beverly&mailing_zipcode=01915&seen_doctor=no&visit_reason=Acne&insurance=UnitedHealthCare&member_id=COST_ESTIMATES_001&name=${name}&mailing_state=MA`}
              title="Weekly available"
              frameBorder="0"
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
