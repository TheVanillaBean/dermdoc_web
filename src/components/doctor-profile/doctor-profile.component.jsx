import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import CustomerTwo from '../../assets/img/customers/ben.jpg';
import CustomerOne from '../../assets/img/customers/dave.jpg';
import CustomerThree from '../../assets/img/customers/steve.jpg';
import FarahHeadshot from '../../assets/img/farah-headshot-1.jpg';
import OmarHeadshot from '../../assets/img/omar-headshot.jpeg';
import Testimonial from '../../components/testimonial/testimonial.component';
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
      doctor: { last_name, provider_bio, accepted_insurances, slug },
    } = this.props;

    return (
      <section className="doctor-profile">
        <div className="container">
          <div className="doctor-profile__sections">
            <DoctorCard
              showInsurances={false}
              key={doctor.uid}
              showButton={false}
              doctor={doctor}
              headshot={
                doctor.first_name === 'Farah' ? FarahHeadshot : OmarHeadshot
              }
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
            <section className="section-testimonials">
              <div className="container center-text">
                <span className="subheading">testimonials</span>
                <h2 className="heading-secondary">
                  Here's some kind words from Dr. {last_name}'s patients
                </h2>
              </div>
              <div className="testimonials">
                <Testimonial
                  img={CustomerOne}
                  alt="Customer 1"
                  text="Dr. Badri and his team were excellent!!"
                  date="August 27, 2021"
                />
                <Testimonial
                  img={CustomerTwo}
                  alt="Customer 2"
                  text="Had seen several doctors for the same issue. He spent a lot of
              time with me and was able to solve my issue. Excellent."
                  date="August 14, 2021"
                />
                <Testimonial
                  img={CustomerThree}
                  alt="Customer 3"
                  text="He [Dr. Badri] went above and beyond to make sure I got
              everything I needed."
                  date="August 18, 2021"
                />
              </div>
            </section>
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
