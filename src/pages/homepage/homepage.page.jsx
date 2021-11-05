import React from 'react';
import {
  IoBagAddOutline,
  IoHappyOutline,
  IoHeartDislikeOutline,
  IoHeartOutline,
  IoLeafOutline,
  IoPersonOutline,
  IoPricetagOutline,
  IoSadOutline,
} from 'react-icons/io5';
import { withRouter } from 'react-router-dom';
import HeroImg from '../../assets/img/hero.jpeg';
import OmarHeadshot from '../../assets/img/omar_headshot-2.jpeg';
import AcnePhoto from '../../assets/img/specialty-photos/Acne.jpeg';
import MelasmaPhoto from '../../assets/img/specialty-photos/Melasma.jpeg';
import RosaceaPhoto from '../../assets/img/specialty-photos/Rosacea.jpeg';
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
                <h1 className='heading-primary'>
                  Your personal dermatologist. <br />
                  Get clear skin today.
                </h1>

                <p className='hero-description'>
                  &mdash; Flat fee of <strong>$68</strong>. No insurance needed.
                  <br />
                  &mdash; <strong>100%</strong> money-back guarantee
                  <br />
                  &mdash; Use your insurance for prescriptions. <strong>Save $200</strong> per year
                  on prescriptions compared to online skin care competitors (see below).
                  <br />
                  &mdash; Prescriptions sent to your local pharmacy or, if you prefer, directly to
                  you with free 2 day shipping
                  <br />
                </p>

                <CustomButton
                  className='btn btn--full margin-right-sm'
                  onClick={() => {
                    window.fathom.trackGoal('5WKASRQK', 0);
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
        </section>
        <section class='section-pricing' id='pricing'>
          <div class='container center-text'>
            <span class='subheading'>Pricing</span>
            <h2 class='heading-secondary'>Don't be fooled by low up-front pricing</h2>
          </div>

          <div class='container grid grid--2-cols'>
            <div class='pricing-plan pricing-plan--starter'>
              <header class='plan-header'>
                <p class='plan-name'>Competitors</p>
                <p class='plan-price'>
                  <span>$</span>300
                </p>
                <p class='plan-text'>per year. For visit and prescriptions.</p>
              </header>
              <ul class='list'>
                <li class='list-item'>
                  <IoPricetagOutline className='list-icon' />
                  <span>
                    Visit Cost: <strong>$0</strong>
                  </span>
                </li>
                <li class='list-item'>
                  <IoLeafOutline className='list-icon' />
                  <span>
                    Annual Medication Cost: <strong>$300-600</strong>
                  </span>
                </li>
                <li class='list-item'>
                  <IoBagAddOutline className='list-icon' />
                  <span>
                    <strong>Cannot use</strong> insurance prescription coverage
                  </span>
                </li>
                <li class='list-item'>
                  <IoSadOutline className='list-icon' />
                  <span>Must use their pharamcy</span>
                </li>
                <li class='list-item'>
                  <IoHeartDislikeOutline className='list-icon' />
                  <span>Treatments limited to their medications</span>
                </li>
                <li class='list-item'>
                  <IoPersonOutline className='list-icon' />
                  <span>Mostly non-dermatologists</span>
                </li>
                {/* <li class='list-item'>
                  <IoCloseOutline className='list-icon' />
                </li>
                <li class='list-item'>
                  <IoCloseOutline className='list-icon' />
                </li> */}
              </ul>
              <div class='plan-sign-up'>
                <CustomButton
                  className='btn btn--full'
                  onClick={() => {
                    window.fathom.trackGoal('5WKASRQK', 0);
                    const { history } = this.props;
                    history.push('/services');
                  }}>
                  Pay higher prices
                </CustomButton>
              </div>
            </div>
            <div class='pricing-plan pricing-plan--complete'>
              <header class='plan-header'>
                <p class='plan-name'>Medicall</p>
                <p class='plan-price'>
                  <span>$</span>180
                </p>
                <p class='plan-text'>per year. For visit and prescriptions.</p>
              </header>
              <ul class='list'>
                <li class='list-item'>
                  <IoPricetagOutline className='list-icon' />
                  <span>
                    Visit Cost: <strong>$68</strong>
                  </span>
                </li>
                <li class='list-item'>
                  <IoLeafOutline className='list-icon' />
                  <span>
                    Annual Medication Cost: <strong>$80-120</strong>
                  </span>
                </li>
                <li class='list-item'>
                  <IoBagAddOutline className='list-icon' />
                  <span>
                    <strong>Can use</strong> insurance prescription coverage
                  </span>
                </li>
                <li class='list-item'>
                  <IoHappyOutline className='list-icon' />
                  <span>Can use any pharamcy</span>
                </li>
                <li class='list-item'>
                  <IoHeartOutline className='list-icon' />
                  <span>No treatment limitations</span>
                </li>
                <li class='list-item'>
                  <IoPersonOutline className='list-icon' />
                  <span>Only board-certified dermatologists</span>
                </li>
                {/* <li class='list-item'>
                  <IoCashOutline className='list-icon' />
                  <span>Pay w/ insurance (optional)</span>
                </li>
                <li class='list-item'>
                  <IoCheckmarkCircleOutline className='list-icon' />
                  <span>Monthly checkups included</span>
                </li> */}
              </ul>
              <div class='plan-sign-up'>
                <CustomButton
                  className='btn btn--full'
                  onClick={() => {
                    window.fathom.trackGoal('5WKASRQK', 0);
                    const { history } = this.props;
                    history.push('/services');
                  }}>
                  Pay lower prices
                </CustomButton>
              </div>
            </div>
          </div>

          <div className='container center-text'>
            <aside class='plan-details'>
              <h2 className='heading-description'>
                Many online health companies like Curology, Hims, and Apostrophe don’t charge a
                visit fee, but charge you a big premium on “in-house formulated” prescriptions
                (often times by 3x the normal cost). With Medicall you are paying for your
                dermatologist’s time, and getting your prescriptions like you normally would. You
                can use any pharmacy and can use your insurance coverage. If you don’t have
                insurance, we will help you find the lowest prices.
              </h2>
            </aside>
          </div>
        </section>
        <section className='section-services' id='services'>
          <div className='container center-text'>
            <span className='subheading'>Our Services</span>
            <h2 className='heading-secondary'>Wide variety. Same low-cost.</h2>
          </div>
          <div className='container grid grid--3-cols margin-bottom-md'>
            <ServiceCard service='Acne' image={AcnePhoto} />
            <ServiceCard service='Melasma' image={MelasmaPhoto} />
            <ServiceCard service='Rosacea' image={RosaceaPhoto} />
          </div>
          <div className='container center-text'>
            <CustomButton
              className='btn btn--full'
              onClick={() => {
                window.fathom.trackGoal('5WKASRQK', 0);
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

export default withRouter(HomePage);
