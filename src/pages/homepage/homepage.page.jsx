import React from 'react';
import { withRouter } from 'react-router-dom';
import HeroImg from '../../assets/img/hero.jpeg';
import OmarHeadshot from '../../assets/img/omar-headshot.jpeg';
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
                    history.push('/search-doctors');
                  }}>
                  Explore Services
                </CustomButton>
                <a href='#how' className='btn btn--outline'>
                  Learn more &darr;
                </a>
              </div>

              <div class='hero-img-box'>
                <img src={HeroImg} alt='Woman with acne' class='hero-img' />
              </div>
            </div>
          </section>
        </div>
        <section className='section-how' id='how'>
          <div className='container center-text'>
            <span className='subheading'>How it works</span>
            <h2 className='heading-secondary'>
              We only charge for your doctors time. We don't inflate prescription costs.
            </h2>
          </div>

          <div className='steps container grid grid--4-cols'>
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
                Share photos of your specific issue so Dr. Badri can give an accurate diagnosis.
              </p>
            </div>
            <div className='feature'>
              <div className='feature-icon'>
                <p className='feature-icon-text'>03</p>
              </div>
              <p className='feature-title'>Recieve a personal diagnosis</p>
              <p className='feature-text'>
                Dr. Badri will give you a diagnosis and treatment plan within 24 hours.
              </p>
            </div>
            <div className='feature'>
              <div className='feature-icon'>
                <p className='feature-icon-text'>04</p>
              </div>
              <p className='feature-title'>Prescriptions prescribed</p>
              <p className='feature-text'>
                If Dr. Badri prescribes you a prescription, you can fill it at any pharmacy, even
                with your insurance.
              </p>
            </div>
          </div>
        </section>
        <section className='section-services' id='services'>
          <div className='container center-text'>
            <span className='subheading'>Our Services</span>
            <h2 className='heading-secondary'>Wide variety. Same flat-cost.</h2>
          </div>
          <div className='container grid grid--3-cols margin-bottom-md'>
            <ServiceCard service='Acne' image={AcnePhoto} />
            <ServiceCard service='Hairloss' image={HairlossPhoto} />
            <ServiceCard service='Skin Spots' image={SkinSpotsPhoto} />
          </div>
          <div class='container center-text'>
            <CustomButton
              className='btn btn--full'
              onClick={() => {
                const { history } = this.props;
                history.push('/search-doctors');
              }}>
              See all Services
            </CustomButton>
          </div>
        </section>
        <section className='section-about' id='about'>
          <div className='container center-text'>
            <span className='subheading'>About Dr. Badri</span>
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
                  Medicine at Harvard (Brigham & Women’s Hospital). <br /> <br />
                  Dr. Badri started Medicall so he can help a broader range of people in his
                  community.
                  <br /> <br />
                  He is currently a member of Northeast Dermatology Group in Beverly, MA.{' '}
                  <a href='https://www.nedermatology.com/team/omar-badri'>Check out his page.</a>
                </p>
              </div>
            </div>

            <div className='about-testimonials'>
              <h2 className='heading-tertiary'>Stellar Reviews</h2>
              <h2 className='subheading'>Here's some kind words from a few patients</h2>
              <div className='testimonials'>
                <Testimonial
                  text='Dr. Badri and his team were excellent!!'
                  date='August 27, 2021'
                />
                <Testimonial
                  text='Had seen several doctors for the same issue. He spent a lot of
            time with me and was able to solve my issue. Excellent.'
                  date='August 14, 2021'
                />
                <Testimonial
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
