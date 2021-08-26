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
                <h1>Accepted Insurances</h1>
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
            <div className="user-reviews">
              <h1 className="user-reviews__header">Testimonials</h1>
              <figure className="review">
                <blockquote className="review__text">
                  Had seen several doctors for the same issue. He spent a lot of
                  time with me and was able to solve my issue. Excellent.
                </blockquote>
              </figure>
              <figure className="review">
                <blockquote className="review__text">
                  Dr. Badri and his team were excellent!!
                </blockquote>
              </figure>
              <figure className="review">
                <blockquote className="review__text">
                  He [Dr. Badri] went above and beyond to make sure I got
                  everything I needed.
                </blockquote>
              </figure>
            </div>
            <iframe
              src={`https://schedule.nylas.com/${slug}/?prefilled_readonly=false&mailing_zipcode=${zipcode}&visit_reason=${visitReason}&insurance_brand=${insuranceBrand}&mailing_zipcode=${zipcode}&mailing_state=MA&notify_cost=No`}
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
