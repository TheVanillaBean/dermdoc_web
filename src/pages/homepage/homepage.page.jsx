import React from 'react';
import {
  IoBagAddOutline,
  IoCheckmarkCircleOutline,
  IoHappyOutline,
  IoHeartOutline,
  IoLeafOutline,
} from 'react-icons/io5';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import HeroImg from '../../assets/img/hero.jpeg';
import OmarHeadshot from '../../assets/img/omar_headshot-2.jpeg';
import CustomButton from '../../components/custom-button/custom-button.component';
import Footer from '../../components/footer/footer.component';
import Header from '../../components/header/header.component';
import Testimonial from '../../components/testimonial/testimonial.component';
import { analytics } from '../../firebase/firebase.utils';
import { updateVisitReason } from '../../redux/search/search.actions';

class HomePage extends React.Component {
  componentDidMount() {
    analytics.logEvent('Homepage Viewed');
  }

  handleClick = () => {
    const { history, updateVisitReason } = this.props;

    updateVisitReason('Acne');
    history.push(`get_started`);
  };

  render() {
    return (
      <main>
        <div className='hero-container'>
          <Header />
          <section className='section-hero'>
            <div className='hero'>
              <div className='hero-text-box'>
                <h1 className='heading-primary'>
                  Your personalized skin treatment.
                  <br />
                  First month free.
                </h1>

                <p className='hero-description'>
                  <p className='hero-description-item'>
                    &mdash; Get a dermatologist to manage your acne for <strong>$7/month</strong>.
                  </p>
                  <p className='hero-description-item'>
                    &mdash; Recieve <strong>creams and oral skincare products</strong> for your
                    specific issue: <strong>blackheads, eczema, acne scars, cysts, etc.</strong>
                  </p>
                  <p className='hero-description-item'>
                    &mdash; <strong>Save 60%</strong> on your prescriptions compared to most online
                    skincare companies.
                  </p>
                </p>

                <CustomButton className='btn btn--full' onClick={this.handleClick}>
                  Say Hello To Healthier Skin
                </CustomButton>
              </div>

              <div className='hero-img-box'>
                <img src={HeroImg} alt='Woman with acne' className='hero-img' />
              </div>
            </div>
          </section>
        </div>
        <section className='section-how' id='how'>
          <div className='container center-text'>
            <span className='subheading'>How it works</span>
            <h2 className='heading-secondary'>
              Get a dermatologist to help you every step of the way to healthier skin.
            </h2>
          </div>

          <div className='steps container grid grid--3-cols'>
            <div className='feature'>
              <div className='feature-icon'>
                <p className='feature-icon-text'>01</p>
              </div>
              <p className='feature-title'>Upload selfies</p>
              <p className='feature-text'>
                Answer some questions and share photos of your specific issue so your doctor can
                give an accurate diagnosis. This should only take 5-10 minutes.
              </p>
            </div>
            <div className='feature'>
              <div className='feature-icon'>
                <p className='feature-icon-text'>02</p>
              </div>
              <p className='feature-title'>Recieve a personalized plan</p>
              <p className='feature-text'>
                You will get a personalized treatment plan within 24 hours with prescriptions sent
                anywhere you’d like.
              </p>
            </div>
            <div className='feature'>
              <div className='feature-icon'>
                <p className='feature-icon-text'>03</p>
              </div>
              <p className='feature-title'>Check-in as needed</p>
              <p className='feature-text'>
                You’ll check-in with your doctor throughout your treatment and make adjustments as
                needed.
              </p>
            </div>
          </div>
        </section>
        <section className='section-pricing' id='pricing'>
          <div className='container center-text'>
            <span className='subheading'>Pricing</span>
            <h2 className='heading-secondary'>Personalized skincare without the premium price</h2>
          </div>

          <div className='container'>
            <div className='pricing-plan pricing-plan--starter'>
              <header className='plan-header'>
                <p className='plan-name'>Medicall</p>
                <p className='plan-price'>
                  <span>$</span>7.00
                </p>
                <p className='plan-text'>per month. Insurance not required.</p>
              </header>
              <ul className='list'>
                <li className='list-item'>
                  <IoHeartOutline className='list-icon' />
                  <span>
                    Full skin evaluation and
                    <strong> custom treatment plan</strong>
                  </span>
                </li>
                <li className='list-item'>
                  <IoLeafOutline className='list-icon' />
                  <span>
                    <strong>$7-10 per month</strong> on custom skin products
                  </span>
                </li>
                <li className='list-item'>
                  <IoBagAddOutline className='list-icon' />
                  <span>
                    <strong>Can use</strong> insurance prescription coverage (optional)
                  </span>
                </li>
                <li className='list-item'>
                  <IoHappyOutline className='list-icon' />
                  <span>
                    Prescriptions <strong>delivered</strong> at-home or to any pharmacy
                  </span>
                </li>
                <li className='list-item'>
                  <IoCheckmarkCircleOutline className='list-icon' />
                  <span>
                    Routine doctor <strong>checkups</strong> to monitor your skin
                  </span>
                </li>
              </ul>
              <div className='plan-sign-up'>
                <CustomButton className='btn btn--full' onClick={this.handleClick}>
                  Start your 30-day free trial
                </CustomButton>
              </div>
            </div>
          </div>
        </section>
        <section className='section-about' id='about'>
          <div className='container center-text'>
            <span className='subheading'>Featured dermatologist</span>
            <h2 className='heading-secondary'>Board-certified. Award Winning.</h2>
          </div>
          <div className='container grid grid--2-cols margin-bottom-md'>
            <div className='about-description'>
              <img
                className='doctor--img doctor--img--vertical margin-bottom-sm'
                src={OmarHeadshot}
                alt={`Omar Badri M.D Headshot`}
              />
              <h3 className='subheading'>Bio</h3>
              <div className='about-text paragraph margin-bottom-md'>
                <p className='paragraph'>
                  Dr. Omar Badri attended Harvard Medical School where he earned top honors and was
                  awarded the Thayer Award for the highest academic achievement. He completed
                  residency training in Dermatology at Harvard (Brigham & Women’s Hospital,
                  Massachusetts General Hospital, and Boston Children’s Hospital) and Internal
                  Medicine at Harvard (Brigham & Women’s Hospital).
                  <br /> <br />
                  Dr. Badri started Medicall so he can help a broader range of people in his
                  community.
                  <br /> <br />
                  He is currently a member of Northeast Dermatology Group in Beverly, MA.
                  <br /> <br />
                  <a href='https://www.nedermatology.com/team/omar-badri'>
                    Check out his doctor profile page
                  </a>
                </p>
              </div>
            </div>

            <div className='about-testimonials'>
              <h2 className='heading-tertiary center-text'>Stellar Reviews</h2>
              <h2 className='subheading center-text'>
                Here's some kind words from a few customers
              </h2>
              <div className='testimonials'>
                <Testimonial
                  service='Acne'
                  text='Dr. Badri and his team were excellent!!'
                  date='October 17, 2021'
                />
                <Testimonial
                  service='Under Eye Circles'
                  text='Had used several services for the same issue. He spent a lot of
            time with me and was able to solve my issue.'
                  date='October 14, 2021'
                />
                <Testimonial
                  service='Rosacea'
                  text='He [Dr. Badri] went above and beyond to make sure I got
            everything I needed.'
                  date='October 8, 2021'
                />
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateVisitReason: (reason) => dispatch(updateVisitReason(reason)),
});

export default withRouter(connect(null, mapDispatchToProps)(HomePage));
