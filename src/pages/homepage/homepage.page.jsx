import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
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

const visitReasons = [
  { value: 'Acne', label: 'Acne' },
  { value: 'Brown Spots', label: 'Brown Spots' },
  { value: 'Cellulite', label: 'Cellulite' },
  { value: 'Droopy Eyelids', label: 'Droopy Eyelids' },
  { value: 'Excess Fat', label: 'Excess Fat' },
  { value: 'Hairloss', label: 'Hairloss' },
  { value: 'Latisse', label: 'Latisse' },
  { value: 'Leg Veins', label: 'Leg Veins' },
  { value: 'Loose Sagging Skin', label: 'Loose Sagging Skin' },
  { value: 'Melasma', label: 'Melasma' },
  { value: 'Rash', label: 'Rash' },
  { value: 'Redness', label: 'Redness' },
  { value: 'Rosacea', label: 'Rosacea' },
  { value: 'Skin Spots', label: 'Skin Spots' },
  { value: 'Skin Texture', label: 'Skin Texture' },
  { value: 'Tattoo Removal', label: 'Tattoo Removal' },
  { value: 'Under Eye Circles', label: 'Under Eye Circles' },
  { value: 'Wrinkles', label: 'Wrinkles' },
];

class HomePage extends React.Component {
  componentDidMount() {
    analytics.logEvent('Homepage Viewed');
  }

  handleZipcodeChange = (event) => {
    const { updateZipCode } = this.props;
    const { value } = event.target;
    updateZipCode(value);
  };

  handleReasonChange = ({ value }) => {
    const { updateVisitReason } = this.props;
    updateVisitReason(value);
  };

  handleInsuranceChange = ({ value }) => {
    const { updateInsuranceBrand } = this.props;
    updateInsuranceBrand(value);
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { history } = this.props;
    history.push('/search-doctors');
  };

  render() {
    const { visitReason, zipcode, insuranceBrand } = this.props;
    return (
      <main>
        <section className="section-hero">
          <header className="header">
            <a href="#">
              <img src="img/logo.png" alt="Medicall logo" className="logo" />
            </a>

            <nav className="main-nav">
              <ul className="main-nav-list">
                <li>
                  <a className="main-nav-link" href="#">
                    Our Doctors
                  </a>
                </li>
                <li>
                  <a className="main-nav-link" href="#">
                    How it works
                  </a>
                </li>
                <li>
                  <a className="main-nav-link" href="#">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a className="main-nav-link nav-cta" href="#">
                    Get Started
                  </a>
                </li>
              </ul>
            </nav>
          </header>
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

              <a href="#" className="btn btn--full margin-right-sm">
                Explore Doctors
              </a>
              <a href="#" className="btn btn--outline">
                Learn more &darr;
              </a>
            </div>
          </div>
        </section>

        <section className="section-doctors">
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
                src="img/omar-headshot.jpeg"
                alt="Omar Badri Headshot"
              />
              <div className="doctor-content">
                <div className="doctor-tags">
                  <span className="tag tag--neda">Northeast Dermatology</span>
                </div>
                <p className="doctor-title">Omar Badri, MD</p>
                <ul className="doctor-attributes">
                  <li className="doctor-attribute">
                    <ion-icon
                      className="doctor-icon"
                      name="location-outline"
                    ></ion-icon>
                    <span>Boston, Massachusetts</span>
                  </li>
                  <li className="doctor-attribute">
                    <ion-icon
                      className="doctor-icon"
                      name="school-outline"
                    ></ion-icon>
                    <span>Harvard Medical School</span>
                  </li>
                  <li className="doctor-attribute">
                    <ion-icon
                      className="doctor-icon"
                      name="star-outline"
                    ></ion-icon>
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
                src="img/omar-headshot.jpeg"
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
                    <ion-icon
                      className="doctor-icon"
                      name="location-outline"
                    ></ion-icon>
                    <span>Boston, Massachusetts</span>
                  </li>
                  <li className="doctor-attribute">
                    <ion-icon
                      className="doctor-icon"
                      name="school-outline"
                    ></ion-icon>
                    <span>Tufts University</span>
                  </li>
                  <li className="doctor-attribute">
                    <ion-icon
                      className="doctor-icon"
                      name="star-outline"
                    ></ion-icon>
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
                  <ion-icon
                    className="list-icon"
                    name="checkmark-outline"
                  ></ion-icon>
                  <span>Aetna</span>
                </li>
                <li className="list-item">
                  <ion-icon
                    className="list-icon"
                    name="checkmark-outline"
                  ></ion-icon>
                  <span>Blue Cross and Blue Shield</span>
                </li>
                <li className="list-item">
                  <ion-icon
                    className="list-icon"
                    name="checkmark-outline"
                  ></ion-icon>
                  <span>AllWays Health Plan</span>
                </li>
                <li className="list-item">
                  <ion-icon
                    className="list-icon"
                    name="checkmark-outline"
                  ></ion-icon>
                  <span>Cigna</span>
                </li>
                <li className="list-item">
                  <ion-icon
                    className="list-icon"
                    name="checkmark-outline"
                  ></ion-icon>
                  <span>UnitedHealthcare</span>
                </li>
                <li className="list-item">
                  <ion-icon
                    className="list-icon"
                    name="checkmark-outline"
                  ></ion-icon>
                  <span>Humana</span>
                </li>
                <li className="list-item">
                  <ion-icon
                    className="list-icon"
                    name="checkmark-outline"
                  ></ion-icon>
                  <span>Health Plans Inc.</span>
                </li>
                <li className="list-item">
                  <ion-icon
                    className="list-icon"
                    name="checkmark-outline"
                  ></ion-icon>
                  <span>Tufts Health Plan</span>
                </li>
                <li className="list-item">
                  <ion-icon
                    className="list-icon"
                    name="checkmark-outline"
                  ></ion-icon>
                  <span>Medicare</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section-how">
          <div className="container center-text margin-bottom-lg">
            <span className="subheading">How it works</span>
            <h2 className="heading-secondary">
              Seeing a dermatologist doesn't have to be hard. <br /> We make it
              easy.
            </h2>
          </div>

          <div className="container grid grid--4-cols">
            <div className="feature">
              <div className="feature-icon">
                <p className="feature-icon-text">01</p>
              </div>
              <p className="feature-title">Pick a timeslot</p>
              <p className="feature-text">
                Fill out some basic information about yourself (i.e. name, dob,
                email, and visit reason)
              </p>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <p className="feature-icon-text">02</p>
              </div>
              <p className="feature-title">Answer Health Questions</p>
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
                We will send you a secure link to video chat with your doctor
                right from your browser.
              </p>
            </div>
          </div>
        </section>

        <section className="section-testimonials">
          <div className="container center-text margin-bottom-lg">
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
                src="img/customers/dave.jpg"
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
                src="img/customers/ben.jpg"
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
                src="img/customers/steve.jpg"
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
                src="img/customers/dave.jpg"
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
                src="img/customers/ben.jpg"
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
                src="img/customers/steve.jpg"
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

        <footer className="footer">
          <div className="container grid grid--footer">
            <div className="logo-col">
              <a href="#" className="footer-logo">
                <img src="img/logo.png" alt="Omnifood logo" className="logo" />
              </a>

              <img
                className="hipaa-icon"
                src="img/hipaa-badge.png"
                alt="HIPAA Bage"
              />

              <p className="copyright">
                Copyright &copy; 2021 by Medicall, Inc. All Rights Reserved.
              </p>
            </div>
            <div className="address-col">
              <p className="footer-heading">Contact Us</p>
              <address className="contacts">
                <p className="address">
                  401 Park Drive, Suite 1009 Boston, MA 02115
                </p>
                <p>
                  <a className="footer-link" href="mailto:contact@medicall.com">
                    contact@medicall.com
                  </a>
                </p>
              </address>
            </div>
            <nav className="nav-col">
              <p className="footer-heading">Company</p>
              <ul className="footer-nav">
                <li>
                  <a className="footer-link" href="#">
                    About Medicall
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="#">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="#">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="#">
                    Telehealth Consent
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </footer>
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
