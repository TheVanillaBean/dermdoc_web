import React from 'react';
import {
  IoCheckmarkOutline,
  IoLocationOutline,
  IoSchoolOutline,
  IoStarOutline,
} from 'react-icons/io5';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import CustomerTwo from '../../assets/img/customers/ben.jpg';
import CustomerOne from '../../assets/img/customers/dave.jpg';
import CustomerThree from '../../assets/img/customers/steve.jpg';
import OmarHeadshot from '../../assets/img/omar-headshot.jpeg';
import Footer from '../../components/footer/footer.component';
import Header from '../../components/header/header.component';
import { analytics } from '../../firebase/firebase.utils';
import {
  updateInsuranceType,
  updateVisitReason,
  updateZipCode,
} from '../../redux/search/search.actions';
import {
  selectInsuranceBrand,
  selectVisitReason,
  selectZipCode,
} from '../../redux/search/search.selectors';

class HomePage extends React.Component {
  componentDidMount() {
    analytics.logEvent('Homepage Viewed');
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { history } = this.props;
    history.push('/search-doctors');
  };

  render() {
    return (
      <main>
        <div className="hero-container">
          <Header />
          <section className="section-hero">
            <div className="hero">
              <div className="hero-text-box">
                <h1 className="heading-primary">
                  Get a video visit with a dermatologist. Anywhere. Anytime.
                </h1>

                <p className="hero-description">
                  - Use your insurance for the visit
                  <br />
                  - Video chat from your computer or phone
                  <br />- Get connected with top local dermatologists
                </p>

                <a
                  href="#"
                  className="btn btn--full margin-right-sm margin-bottom-md"
                >
                  Explore Doctors
                </a>
                <a href="#doctors" className="btn btn--outline margin-right-sm">
                  Learn more &darr;
                </a>
              </div>
            </div>
          </section>
        </div>
        <section className="section-doctors" id="doctors">
          <div className="container center-text">
            <span className="subheading">Our Doctors</span>
            <h2 className="heading-secondary">
              Board-certified. Stellar Reviews.
            </h2>
          </div>
          <div className="container grid grid--3-cols margin-bottom-md">
            <div className="doctor">
              <img
                className="doctor-img"
                src={OmarHeadshot}
                alt="Omar Badri Headshot"
              />
              <div className="doctor-content">
                <div className="doctor-tags">
                  <span className="tag tag--neda">Northeast Dermatology</span>
                </div>
                <p className="doctor-title">Omar Badri, MD</p>
                <ul className="doctor-attributes">
                  <li className="doctor-attribute">
                    <IoLocationOutline className="list-icon" />
                    <span>Boston, Massachusetts</span>
                  </li>
                  <li className="doctor-attribute">
                    <IoSchoolOutline className="list-icon" />
                    <span>Harvard Medical School</span>
                  </li>
                  <li className="doctor-attribute">
                    <IoStarOutline className="list-icon" />
                    <span>
                      <strong>4.94</strong> rating (537)
                    </span>
                  </li>
                </ul>
              </div>
              <a href="#" className="btn btn--full">
                View Profile
              </a>
            </div>
            <div className="doctor">
              <img
                className="doctor-img"
                src={OmarHeadshot}
                alt="Omar Badri Headshot"
              />
              <div className="doctor-content">
                <div className="doctor-tags">
                  <span className="tag tag--skincare">
                    Skincare Physicians Group
                  </span>
                </div>
                <p className="doctor-title">Omar Badri, MD</p>
                <ul className="doctor-attributes">
                  <li className="doctor-attribute">
                    <IoLocationOutline className="list-icon" />
                    <span>Boston, Massachusetts</span>
                  </li>
                  <li className="doctor-attribute">
                    <IoSchoolOutline className="list-icon" />
                    <span>Tufts University</span>
                  </li>
                  <li className="doctor-attribute">
                    <IoStarOutline className="list-icon" />

                    <span>
                      <strong>4.91</strong> rating (441)
                    </span>
                  </li>
                </ul>
              </div>
              <a href="#" className="btn btn--full">
                View Profile
              </a>
            </div>
            <div className="insurances">
              <h3 className="heading-tertiary">
                Our doctors accept most insurances:
              </h3>
              <ul className="list">
                <li className="list-item">
                  <IoCheckmarkOutline className="list-icon" />
                  <span>Aetna</span>
                </li>
                <li className="list-item">
                  <IoCheckmarkOutline className="list-icon" />
                  <span>Blue Cross and Blue Shield</span>
                </li>
                <li className="list-item">
                  <IoCheckmarkOutline className="list-icon" />
                  <span>AllWays Health Plan</span>
                </li>
                <li className="list-item">
                  <IoCheckmarkOutline className="list-icon" />
                  <span>Cigna</span>
                </li>
                <li className="list-item">
                  <IoCheckmarkOutline className="list-icon" />
                  <span>UnitedHealthcare</span>
                </li>
                <li className="list-item">
                  <IoCheckmarkOutline className="list-icon" />
                  <span>Humana</span>
                </li>
                <li className="list-item">
                  <IoCheckmarkOutline className="list-icon" />
                  <span>Health Plans Inc.</span>
                </li>
                <li className="list-item">
                  <IoCheckmarkOutline className="list-icon" />
                  <span>Tufts Health Plan</span>
                </li>
                <li className="list-item">
                  <IoCheckmarkOutline className="list-icon" />
                  <span>Medicare</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section-how" id="how">
          <div className="container center-text">
            <span className="subheading">How it works</span>
            <h2 className="heading-secondary">
              Seeing a dermatologist doesn't have to be hard.
              <br />
              We make it easy.
            </h2>
          </div>

          <div className="steps container grid grid--4-cols">
            <div className="feature">
              <div className="feature-icon">
                <p className="feature-icon-text">01</p>
              </div>
              <p className="feature-title">Pick a timeslot</p>
              <p className="feature-text">
                Choose a time and fill out some basic information about yourself
                (i.e. name, dob, email, and visit reason)
              </p>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <p className="feature-icon-text">02</p>
              </div>
              <p className="feature-title">Answer health questions</p>
              <p className="feature-text">
                Give your doctor details about your medical history. This should
                only take 3-5 minutes.
              </p>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <p className="feature-icon-text">03</p>
              </div>
              <p className="feature-title">Share your insurance info</p>
              <p className="feature-text">
                Your doctor's front-office will run your insurance just like an
                in-person visit.
              </p>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <p className="feature-icon-text">04</p>
              </div>
              <p className="feature-title">Video chat</p>
              <p className="feature-text">
                We will send you a secure link to video chat with your doctor at
                the specified timeslot, right from your browser.
              </p>
            </div>
          </div>
        </section>

        <section className="section-testimonials" id="testimonials">
          <div className="container center-text">
            <span className="subheading">
              Our doctors are loved by their patients
            </span>
            <h2 className="heading-secondary">
              Here's some kind words from a few of them
            </h2>
          </div>
          <div className="testimonials">
            <figure className="testimonial">
              <img
                className="testimonial-img"
                src={CustomerOne}
                alt="Dave photo"
              />
              <blockquote className="testimonial-text">
                Dr. Badri and his team were excellent!!
              </blockquote>
              <p className="testimonial-date">&mdash; August 27, 2021</p>
            </figure>

            <figure className="testimonial">
              <img
                className="testimonial-img"
                src={CustomerTwo}
                alt="Ben Hadley photo"
              />
              <blockquote className="testimonial-text">
                Had seen several doctors for the same issue. He spent a lot of
                time with me and was able to solve my issue. Excellent.
              </blockquote>
              <p className="testimonial-date">&mdash; August 14, 2021</p>
            </figure>

            <figure className="testimonial">
              <img
                className="testimonial-img"
                src={CustomerThree}
                alt="Steve Miller photo"
              />
              <blockquote className="testimonial-text">
                He [Dr. Badri] went above and beyond to make sure I got
                everything I needed.
              </blockquote>
              <p className="testimonial-date">&mdash; August 18, 2021</p>
            </figure>

            <figure className="testimonial">
              <img
                className="testimonial-img"
                src={CustomerOne}
                alt="Dave photo"
              />
              <blockquote className="testimonial-text">
                Dr. Badri and his team were excellent!!
              </blockquote>
              <p className="testimonial-date">&mdash; August 27, 2021</p>
            </figure>

            <figure className="testimonial">
              <img
                className="testimonial-img"
                src={CustomerTwo}
                alt="Ben Hadley photo"
              />
              <blockquote className="testimonial-text">
                Had seen several doctors for the same issue. He spent a lot of
                time with me and was able to solve my issue. Excellent.
              </blockquote>
              <p className="testimonial-date">&mdash; August 14, 2021</p>
            </figure>

            <figure className="testimonial">
              <img
                className="testimonial-img"
                src={CustomerThree}
                alt="Steve Miller photo"
              />
              <blockquote className="testimonial-text">
                He [Dr. Badri] went above and beyond to make sure I got
                everything I needed.
              </blockquote>
              <p className="testimonial-date">&mdash; August 18, 2021</p>
            </figure>
          </div>
        </section>
        <Footer />
      </main>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  zipcode: selectZipCode,
  insuranceBrand: selectInsuranceBrand,
  visitReason: selectVisitReason,
});

const mapDispatchToProps = (dispatch) => ({
  updateZipCode: (zipcode) => dispatch(updateZipCode(zipcode)),
  updateInsuranceBrand: (insurance) => dispatch(updateInsuranceType(insurance)),
  updateVisitReason: (reason) => dispatch(updateVisitReason(reason)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HomePage)
);
