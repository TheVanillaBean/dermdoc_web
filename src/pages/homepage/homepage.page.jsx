import React from 'react';
import { IoCheckmarkOutline } from 'react-icons/io5';
import { withRouter } from 'react-router-dom';
import CustomerTwo from '../../assets/img/customers/ben.jpg';
import CustomerOne from '../../assets/img/customers/dave.jpg';
import CustomerThree from '../../assets/img/customers/steve.jpg';
import OmarHeadshot from '../../assets/img/omar-headshot.jpeg';
import CustomButton from '../../components/custom-button/custom-button.component';
import Doctor from '../../components/doctor-card/doctor-card.component';
import Footer from '../../components/footer/footer.component';
import Header from '../../components/header/header.component';
import Testimonial from '../../components/testimonial/testimonial.component';
import { analytics } from '../../firebase/firebase.utils';
class HomePage extends React.Component {
  componentDidMount() {
    analytics.logEvent('Homepage Viewed');
  }

  handleClick = async (event) => {
    event.preventDefault();
    const { history } = this.props;
    history.push('/search-doctors');
  };

  render() {
    const omar = {
      uid: '1',
      first_name: 'Omar',
      last_name: 'Badri',
      professional_title: 'MD',
      accepted_insurances: '',
      tag: 'Northeast Dermatology',
      med_school: 'Harvard Medical School',
      rating: '4.94',
      total_ratings: '537',
      headshot: OmarHeadshot,
      alt: 'Omar Badri Headshot',
    };
    const farah = {
      uid: '2',
      first_name: 'Farah',
      last_name: 'Moustafa',
      professional_title: 'MD',
      accepted_insurances: '',
      tag: 'Tufts Dermatology',
      med_school: 'Tufts University',
      rating: '4.91',
      total_ratings: '441',
      headshot: OmarHeadshot,
      alt: 'Omar Badri Headshot',
    };
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
                  &mdash; Use your insurance for the visit
                  <br />
                  &mdash; Video chat from your computer or phone
                  <br />
                  &mdash; Get connected with top local dermatologists
                </p>

                <CustomButton
                  className="btn btn--full margin-right-sm"
                  onClick={this.handleClick}
                >
                  Explore Doctors
                </CustomButton>
                <a href="#doctors" className="btn btn--outline">
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
            <Doctor
              showInsurances={false}
              key={omar.uid}
              showButton={true}
              doctor={omar}
              buttonText="View Profile"
              handleClick={() => {}}
            />
            <Doctor
              showInsurances={false}
              key={farah.uid}
              showButton={true}
              doctor={farah}
              buttonText="View Profile"
              handleClick={() => {}}
            />
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
        <Footer />
      </main>
    );
  }
}

export default withRouter(HomePage);
