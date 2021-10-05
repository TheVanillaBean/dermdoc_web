import React from 'react';
import { withRouter } from 'react-router-dom';
import HeroImg from '../../assets/img/hero.jpeg';
import OmarHeadshot from '../../assets/img/omar_headshot-2.jpeg';
import AcnePhoto from '../../assets/img/specialty-photos/Acne.jpeg';
import HairlossPhoto from '../../assets/img/specialty-photos/Hairloss.jpeg';
import SkinSpotsPhoto from '../../assets/img/specialty-photos/SkinSpots.jpeg';
import CustomButton from '../../components/custom-button/custom-button.component';
import Footer from '../../components/footer/footer.component';
import Header from '../../components/header/header.component';
import ServiceCard from '../../components/service-card/service-card.component';
import Testimonial from '../../components/testimonial/testimonial.component';
import { analytics } from '../../firebase/firebase.utils';

class HomePage extends React.Component {
  componentDidMount() {
    analytics.logEvent('Homepage Viewed');
  }

  render() {
    return (
      <main>
        <div className='hero-container'>
          <Header />
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
                    history.push('/services');
                  }}>
                  Explore Services
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
              We only charge you for the visit. We don't inflate prescription costs.
            </h2>
          </div>

          <div className='steps container grid grid--3-cols'>
            <div className='feature'>
              <div className='feature-icon'>
                <p className='feature-icon-text'>01</p>
              </div>
              <p className='feature-title'>Answer health questions</p>
              <p className='feature-text'>
                Give your doctor details about your medical history. This should only take 3-5
                minutes.
              </p>
            </div>
            <div className='feature'>
              <div className='feature-icon'>
                <p className='feature-icon-text'>02</p>
              </div>
              <p className='feature-title'>Upload photos of your issue</p>
              <p className='feature-text'>
                Share photos of your specific issue so our doctors can give an accurate diagnosis.
              </p>
            </div>
            <div className='feature'>
              <div className='feature-icon'>
                <p className='feature-icon-text'>03</p>
              </div>
              <p className='feature-title'>Recieve a personalized plan</p>
              <p className='feature-text'>
                You will get a personalized treatment plan within 24 hours with prescriptions sent
                anywhere you’d like.
              </p>
            </div>
          </div>

          <div className='container center-text'>
            <h2 className='heading-description'>
              Many online health companies like Roman and Hims charge much less upfront for care,
              but then upcharge you on "in-house" prescriptions (often times by 2x the normal cost).
              With us you are paying for higher quality care, not higher priced prescriptions.
            </h2>
          </div>
        </section>
        <section className='section-services' id='services'>
          <div className='container center-text'>
            <span className='subheading'>Our Services</span>
            <h2 className='heading-secondary'>Wide variety. Same low-cost.</h2>
          </div>
          <div className='container grid grid--3-cols margin-bottom-md'>
            <ServiceCard service='Acne' image={AcnePhoto} />
            <ServiceCard service='Hairloss' image={HairlossPhoto} />
            <ServiceCard service='Skin Spots' image={SkinSpotsPhoto} />
          </div>
          <div className='container center-text'>
            <CustomButton
              className='btn btn--full'
              onClick={() => {
                const { history } = this.props;
                history.push('/services');
              }}>
              See all Services
            </CustomButton>
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
              <h2 className='subheading center-text'>Here's some kind words from a few patients</h2>
              <div className='testimonials'>
                <Testimonial
                  service='Acne'
                  text='Dr. Badri and his team were excellent!!'
                  date='August 27, 2021'
                />
                <Testimonial
                  service='Under Eye Circles'
                  text='Had seen several doctors for the same issue. He spent a lot of
            time with me and was able to solve my issue. Excellent.'
                  date='August 14, 2021'
                />
                <Testimonial
                  service='Rosacea'
                  text='He [Dr. Badri] went above and beyond to make sure I got
            everything I needed.'
                  date='August 18, 2021'
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

export default withRouter(HomePage);
