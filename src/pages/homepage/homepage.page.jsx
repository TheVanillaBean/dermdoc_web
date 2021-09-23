import React from 'react';
import { IoCheckmarkOutline } from 'react-icons/io5';
import { withRouter } from 'react-router-dom';
import CustomerFour from '../../assets/img/customers/ben.jpg';
import CustomerTwo from '../../assets/img/customers/customer-1.jpg';
import CustomerFive from '../../assets/img/customers/customer-4.jpg';
import CustomerSix from '../../assets/img/customers/customer-6.jpg';
import CustomerOne from '../../assets/img/customers/dave.jpg';
import CustomerThree from '../../assets/img/customers/steve.jpg';
import HeroImg from '../../assets/img/hero.jpeg';
import OmarHeadshot from '../../assets/img/omar-headshot.jpeg';
import CustomButton from '../../components/custom-button/custom-button.component';
import DoctorCard from '../../components/doctor-card/doctor-card.component';
import Footer from '../../components/footer/footer.component';
import Header from '../../components/header/header.component';
import Testimonial from '../../components/testimonial/testimonial.component';
import { analytics } from '../../firebase/firebase.utils';

class HomePage extends React.Component {
  componentDidMount() {
    analytics.logEvent('Homepage Viewed');
  }

  render() {
    const omarDetails = {
      uid: '1',
      first_name: 'Omar',
      last_name: 'Badri',
      professional_title: 'MD',
      accepted_insurances: '',
      tag: 'Northeast Dermatology Group',
      med_school: 'Harvard Medical School',
      rating: '4.94',
      total_ratings: '537',
    };
    const farahDetails = {
      uid: '2',
      first_name: 'Farah',
      last_name: 'Moustafa',
      professional_title: 'MD',
      accepted_insurances: '',
      tag: 'Tufts Medical Center',
      med_school: 'Wake Forest University',
      rating: '4.81',
      total_ratings: '441',
    };
    return (
      <>
        <Header />
        <main>
          <section className='section-hero'>
            <div className='hero'>
              <div className='hero-text-box'>
                <h1 className='heading-primary'>Your personal dermatologist. Available anytime.</h1>

                <p className='hero-description'>
                  &mdash; $68 flat fee for a visit.
                  <br />
                  &mdash; Prescriptions sent to your local pharmacy or, if you prefer, directly to
                  you with free 2 day shipping
                  <br />
                  &mdash; No gimmicks, fancy packaging, or marked up prescription costs
                </p>

                <CustomButton
                  className='btn btn--full margin-right-sm'
                  onClick={() => {
                    const { history } = this.props;
                    history.push('/search-doctors');
                  }}>
                  Explore Doctors
                </CustomButton>
                <a href='#doctors' className='btn btn--outline'>
                  Learn more &darr;
                </a>
              </div>

              <div class='hero-img-box'>
                <img src={HeroImg} alt='Woman with acne' class='hero-img' />
              </div>
            </div>
          </section>
          <section className='section-doctors' id='doctors'>
            <div className='container center-text'>
              <span className='subheading'>Our Doctors</span>
              <h2 className='heading-secondary'>Board-certified. Stellar Reviews.</h2>
            </div>
            <div className='container grid grid--3-cols margin-bottom-md'>
              <DoctorCard
                vertical
                showInsurances={false}
                key={omarDetails.uid}
                showButton={true}
                doctor={omarDetails}
                headshot={OmarHeadshot}
                buttonText='View Profile'
                handleClick={() => {
                  const { history } = this.props;
                  history.push('/doctors/omar_badri');
                }}
              />
              <DoctorCard
                vertical
                showInsurances={false}
                key={farahDetails.uid}
                showButton={true}
                doctor={farahDetails}
                buttonText='View Profile'
                handleClick={() => {
                  const { history } = this.props;
                  history.push('/doctors/farah_moustafa');
                }}
              />
              <div className='insurances'>
                <h3 className='heading-tertiary'>Our doctors accept most insurances:</h3>
                <ul className='list'>
                  <li className='list-item'>
                    <IoCheckmarkOutline className='list-icon' />
                    <span>Aetna</span>
                  </li>
                  <li className='list-item'>
                    <IoCheckmarkOutline className='list-icon' />
                    <span>Blue Cross and Blue Shield</span>
                  </li>
                  <li className='list-item'>
                    <IoCheckmarkOutline className='list-icon' />
                    <span>AllWays Health Plan</span>
                  </li>
                  <li className='list-item'>
                    <IoCheckmarkOutline className='list-icon' />
                    <span>Cigna</span>
                  </li>
                  <li className='list-item'>
                    <IoCheckmarkOutline className='list-icon' />
                    <span>UnitedHealthcare</span>
                  </li>
                  <li className='list-item'>
                    <IoCheckmarkOutline className='list-icon' />
                    <span>Humana</span>
                  </li>
                  <li className='list-item'>
                    <IoCheckmarkOutline className='list-icon' />
                    <span>Health Plans Inc.</span>
                  </li>
                  <li className='list-item'>
                    <IoCheckmarkOutline className='list-icon' />
                    <span>Tufts Health Plan</span>
                  </li>
                  <li className='list-item'>
                    <IoCheckmarkOutline className='list-icon' />
                    <span>Medicare</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className='section-how' id='how'>
            <div className='container center-text'>
              <span className='subheading'>How it works</span>
              <h2 className='heading-secondary'>
                We only charge you for your doctors time. We don't inflate prescription costs.
              </h2>
            </div>

            <div className='steps container grid grid--4-cols'>
              <div className='feature'>
                <div className='feature-icon'>
                  <p className='feature-icon-text'>01</p>
                </div>
                <p className='feature-title'>Pick a timeslot</p>
                <p className='feature-text'>
                  Choose a time and fill out some basic information about yourself (i.e. name, dob,
                  email, and visit reason)
                </p>
              </div>
              <div className='feature'>
                <div className='feature-icon'>
                  <p className='feature-icon-text'>02</p>
                </div>
                <p className='feature-title'>Answer health questions</p>
                <p className='feature-text'>
                  Give your doctor details about your medical history. This should only take 3-5
                  minutes.
                </p>
              </div>
              <div className='feature'>
                <div className='feature-icon'>
                  <p className='feature-icon-text'>03</p>
                </div>
                <p className='feature-title'>Share your insurance info</p>
                <p className='feature-text'>
                  Your doctor's front-office will run your insurance just like an in-person visit.
                </p>
              </div>
              <div className='feature'>
                <div className='feature-icon'>
                  <p className='feature-icon-text'>04</p>
                </div>
                <p className='feature-title'>Video chat</p>
                <p className='feature-text'>
                  We will send you a secure link to video chat with your doctor at the specified
                  timeslot, right from your browser.
                </p>
              </div>
            </div>
          </section>

          <section className='section-testimonials' id='testimonials'>
            <div className='container center-text'>
              <span className='subheading'>Our doctors are loved by their patients</span>
              <h2 className='heading-secondary'>Here's some kind words from a few of them</h2>
            </div>
            <div className='testimonials'>
              <Testimonial
                img={CustomerOne}
                alt='Customer 1'
                text='Dr. Badri and his team were excellent!!'
                date='August 27, 2021'
              />
              <Testimonial
                img={CustomerTwo}
                alt='Customer 2'
                text='Had seen several doctors for the same issue. He spent a lot of
            time with me and was able to solve my issue. Excellent.'
                date='August 14, 2021'
              />
              <Testimonial
                img={CustomerThree}
                alt='Customer 3'
                text='He [Dr. Badri] went above and beyond to make sure I got
            everything I needed.'
                date='August 18, 2021'
              />
              <Testimonial
                img={CustomerFour}
                alt='Customer 1'
                text='The staff, doctors and nurses were all great! I was early and they saw me early. They answered all of my questions and gave great recommendations for my conditions. I highly recommend this office!'
                date='July 26, 2021'
              />
              <Testimonial
                img={CustomerFive}
                alt='Customer 2'
                text='It was a great experience. The staff were hospitable and Dr. Farah was very friendly and gave me listening ear to what I was saying. Her reception was awesome. I will choose tufts medical center, Dermatology department over over all.'
                date='August 3, 2021'
              />
              <Testimonial
                img={CustomerSix}
                alt='Customer 3'
                text='Dr. Moustafa was a friendly, a great listener, and wonderfully knowledgeable. I appreciate that she took the time to speak with me about several options for my acne and explained possible side effects of medications thoroughly. Can’t recommend her and the office highly enough!'
                date='August 20, 2021'
              />
            </div>
          </section>
          <Footer />
        </main>
      </>
    );
  }
}

export default withRouter(HomePage);
