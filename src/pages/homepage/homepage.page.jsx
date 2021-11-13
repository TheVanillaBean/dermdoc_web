import React from 'react';
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
                  Your personal dermatologist.
                  <br />
                  Get clear skin today.
                </h1>

                <p className='hero-description'>
                  &mdash; Get a dermatologist to manage your acne for <strong>$7/month</strong>.
                  <br />
                  &mdash; <strong>First month free.</strong> No risk.
                  <br />
                  &mdash; Prescriptions can be sent anywhere (including via mail) and you can use
                  your <strong>health insurance</strong>.
                  <br />
                </p>

                <CustomButton className='btn btn--full margin-right-sm' onClick={this.handleClick}>
                  Start Free Visit
                </CustomButton>
                <a href='#how' className='btn btn--outline'>
                  Learn more &darr;
                </a>
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
              Get a dermatologist to help you every step of the way to clear skin.
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
                You’ll check in with your doctor throughout your treatment and make adjustments as
                needed.
              </p>
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
