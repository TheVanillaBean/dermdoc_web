import React from 'react';
import Faq from 'react-faq-component';
import {
  IoCheckmarkCircleOutline,
  IoHappyOutline,
  IoHeartOutline,
  IoSchoolOutline,
} from 'react-icons/io5';
import { Link, withRouter } from 'react-router-dom';
import 'swiper/modules/mousewheel/mousewheel.min.css';
import 'swiper/modules/navigation/navigation.min.css';
import 'swiper/modules/pagination/pagination.min.css';
import 'swiper/swiper.min.css';
import Cream from '../../assets/img/cream-swipe.png';
import FarahHeadshot from '../../assets/img/farah-headshot.jpg';
import { ReactComponent as AbsorbicAcid } from '../../assets/img/ingredients/absorbic-acid.svg';
import { ReactComponent as AzelaicAcid } from '../../assets/img/ingredients/azelaic-acid.svg';
import { ReactComponent as Clindamycin } from '../../assets/img/ingredients/clindamycin.svg';
import { ReactComponent as Tretinoin } from '../../assets/img/ingredients/tretinoin.svg';
import Leaf from '../../assets/img/leaf-img.png';
import OmarHeadshot from '../../assets/img/omar-cutout.png';
import CreamPricing from '../../assets/img/pricing-cream-self.jpg';
import PillsPricing from '../../assets/img/pricing-oral-self.jpg';
import SaamiHeadshot from '../../assets/img/saami_headshot.jpg';
import StepsOne from '../../assets/img/step-1-img-v5.jpg';
import StepsTwo from '../../assets/img/step-2-img-v2.jpg';
import StepsThree from '../../assets/img/step-3-img.jpg';
import CustomButton from '../../components/custom-button/custom-button.component';
import Footer from '../../components/footer/footer.component';
import Header from '../../components/header/header.component';
import HeroSection from '../../components/hero-section/hero-section.component';
import { analytics } from '../../firebase/firebase.utils';
import { homepageFAQ } from '../../utils/faq.utils';

class HomePage extends React.Component {
  componentDidMount() {
    analytics.logEvent('Homepage Viewed');
  }

  handleClick = () => {
    const { history } = this.props;

    document.body.classList.remove('sticky');

    history.push(`get_started`);
  };

  render() {
    return (
      <main>
        <div className='hero-container'>
          <div className='sale-banner margin-center'>
            <h1 className='heading-secondary sale-banner--text'>
              50% Off Summer Sale - Limited Time
            </h1>
          </div>
          <Header />
          <HeroSection handleClick={this.handleClick} />
        </div>

        <section className='section-ingredients' id='ingredients'>
          <div className='container center-text margin-bottom-md'>
            <h1 className='heading-primary'>Prescription Ingredients</h1>
            <p className='heading-tertiary'>Quality you won't find at a store</p>
          </div>

          <div className='container featured-ingredients grid grid--4-cols margin-bottom-md'>
            <div className='featured-ingredients__box'>
              <Tretinoin alt='tretinoin icon' className='featured-ingredients__box--img' />
              <p className='featured-ingredients__box--name heading-tertiary'>Tretinoin</p>
              <p className='featured-ingredients__box--description paragraph'>
                Reduces inflammation associated with acne and improves skin texture and tone. It is
                only available with a prescription.
              </p>
            </div>
            <div className='featured-ingredients__box'>
              <AbsorbicAcid alt='absorbic acid icon' className='featured-ingredients__box--img' />
              <p className='featured-ingredients__box--name heading-tertiary'>Absorbic Acid</p>
              <p className='featured-ingredients__box--description paragraph'>
                An antioxidant that fights harmful free radicals (toxins) that come in contact with
                your skin from external sources like air pollution.
              </p>
            </div>
            <div className='featured-ingredients__box'>
              <Clindamycin alt='clindamycin icon' className='featured-ingredients__box--img' />
              <p className='featured-ingredients__box--name heading-tertiary'>Clindamycin</p>
              <p className='featured-ingredients__box--description paragraph'>
                An antibiotic that kills certain types of bacteria or stops them from growing. It is
                used to treat inflammatory acne by reducing the number of bacteria that cause acne.
              </p>
            </div>
            <div className='featured-ingredients__box'>
              <AzelaicAcid alt='azelaic acid icon' className='featured-ingredients__box--img' />
              <p className='featured-ingredients__box--name heading-tertiary'>Azelaic Acid</p>
              <p className='featured-ingredients__box--description paragraph'>
                Clears pores of bacteria that may be causing irritation or breakouts and gently
                encourages cell turnover so your skin heals more quickly and scarring is minimized.
              </p>
            </div>
          </div>

          <div className='container'>
            <Link to='/ingredients'>
              <p className='text-primary-color heading-tertiary center-text'>
                Show All Ingredients &#10140;
              </p>
            </Link>
          </div>

          <img src={Cream} className='section-ingredients--cream' alt='skin cream smear' />

          <img src={Leaf} className='section-ingredients--leaf' alt='green leaf' />
        </section>

        <section className='section-product-photo' />

        <section className='section-how'>
          <div className='container center-text margin-bottom-md'>
            <h1 className='heading-primary'>How it works</h1>
            <p className='heading-tertiary'>You're only 3 steps away from clearer skin</p>
          </div>

          <div className='container steps-container'>
            <div className='steps-container__step'>
              <div className='steps-container__step__number'>
                <h2 className='heading-primary steps-container__step__number--text'>1</h2>
              </div>
              <div className='steps-container__step__text'>
                <h1 className='steps-container__step__text--title heading-tertiary'>
                  Upload selfies
                </h1>
                <p className='steps-container__step__text--description paragraph'>
                  Answer some questions and share photos of your skin.
                </p>
              </div>

              <img src={StepsOne} alt='Step One' className='steps-container__step--img' />
            </div>
            <div className='steps-container__step'>
              <div className='steps-container__step__number'>
                <h2 className='heading-primary steps-container__step__number--text'>2</h2>
              </div>
              <div className='steps-container__step__text'>
                <h1 className='steps-container__step__text--title heading-tertiary'>
                  Receive custom formula
                </h1>
                <p className='steps-container__step__text--description paragraph'>
                  Your dermatologist will design a personalized cream for you within 24 hours.
                </p>
              </div>

              <img src={StepsTwo} alt='Step Two' className='steps-container__step--img' />
            </div>
            <div className='steps-container__step'>
              <div className='steps-container__step__number'>
                <h2 className='heading-primary steps-container__step__number--text steps-container__step__number--text--3'>
                  3
                </h2>
              </div>
              <div className='steps-container__step__text'>
                <h1 className='steps-container__step__text--title heading-tertiary'>
                  Check-in as needed
                </h1>
                <p className='steps-container__step__text--description paragraph'>
                  You'll check-in with your dermatologist throughout your journey.
                </p>
              </div>
              <img src={StepsThree} alt='Step Three' className='steps-container__step--img' />
            </div>
          </div>

          <div className='container center-text'>
            <CustomButton className='btn btn--full' onClick={this.handleClick}>
              Try 3-month risk-free trial - $19.99/month
            </CustomButton>
          </div>
        </section>

        <section className='section-doctors'>
          <div className='container center-text margin-bottom-md'>
            <h1 className='heading-primary'>You're in good hands</h1>
            <p className='heading-tertiary'>
              Your individual cream is custom designed by a board-certified dermatologist
            </p>
          </div>
          <div className='container main-doctors-container margin-bottom-md'>
            <div className='featured-doctor featured-doctor--main'>
              <img src={OmarHeadshot} alt='' className='featured-doctor--img-main' />

              <div className='featured-doctor__details featured-doctor__details--main'>
                <h2 className='heading-secondary featured-doctor__details--name'>
                  Dr. Omar Badri M.D.
                </h2>
                <h2 className='featured-doctor__details__tag featured-doctor__details__tag--main'>
                  <IoSchoolOutline className='featured-doctor__details__tag--icon' />
                  <p className='heading-tertiary featured-doctor__details__tag--text'>
                    Harvard University
                  </p>
                </h2>
                <h2 className='paragraph featured-doctor__details--bio featured-doctor__details--bio--main'>
                  Dr. Badri completed his intern year at Brigham & Women’s Hospital (Harvard). His
                  completed residency training in Dermatology (Brigham & Women’s Hospital,
                  Massachusetts General Hospital, and Boston Children’s Hospital) and Internal
                  Medicine (Brigham & Women’s Hospital) at Harvard. Dr. Badri has published multiple
                  peer-reviewed journal articles and has presented at national meetings.
                </h2>
              </div>
            </div>
          </div>

          <div className='container additional-doctors-container'>
            <div className='featured-doctor'>
              <img src={FarahHeadshot} alt='' className='featured-doctor--img' />

              <div className='featured-doctor__details'>
                <h2 className='heading-tertiary featured-doctor__details--name'>
                  Dr. Farah Moustafa M.D.
                </h2>
                <h2 className='featured-doctor__details__tag'>
                  <IoSchoolOutline className='featured-doctor__details__tag--icon' />
                  <p className='heading-tertiary featured-doctor__details__tag--text'>
                    Harvard University
                  </p>
                </h2>
                <h2 className='paragraph featured-doctor__details--bio'>
                  Dr. Moustafa completed her internship in Internal Medicine at Brigham and Women’s
                  Hospital (Harvard Medical School) and her dermatology residency at Brown
                  University.
                </h2>
              </div>
            </div>
            <div className='featured-doctor'>
              <img src={SaamiHeadshot} alt='' className='featured-doctor--img' />

              <div className='featured-doctor__details'>
                <h2 className='heading-tertiary featured-doctor__details--name'>
                  Dr. Saami Khalifian M.D.
                </h2>
                <h2 className='featured-doctor__details__tag'>
                  <IoSchoolOutline className='featured-doctor__details__tag--icon' />
                  <p className='heading-tertiary featured-doctor__details__tag--text'>
                    Johns Hopkins Uni.
                  </p>
                </h2>
                <h2 className='paragraph featured-doctor__details--bio'>
                  Dr. Khalifian completed his undergraduate studies at University of California,
                  Berkeley. He received his medical degree from The Johns Hopkins School of
                  Medicine.
                </h2>
              </div>
            </div>
          </div>
        </section>

        <section className='section-pricing' id='pricing'>
          <div className='container center-text margin-bottom-md'>
            <h1 className='heading-primary'>Pricing</h1>
            <p className='heading-tertiary'>Get started with our risk-free 3-month trial</p>
          </div>

          <div className='container grid grid--2-cols margin-bottom-md '>
            <div className='pricing-plan pricing-plan--cream'>
              <img className='pricing-plan--img' src={CreamPricing} alt='Headshot' />

              <div className='pricing-plan__content'>
                <header className='pricing-plan__content--header'>
                  <p className='pricing-plan__content--name heading-tertiary'>
                    <span>Personalized Cream</span>
                  </p>
                  <p className='pricing-plan__content--price'>
                    <span>$</span>19.99
                  </p>
                  <p className='pricing-plan__content--text paragraph'>
                    per month. Includes topical cream and <strong>check-ins</strong> with a
                    dermatologist.
                  </p>
                </header>
                <ul className='list'>
                  <li className='list__item'>
                    <IoHeartOutline className='list__item--icon' />
                    <span className='list__item--text'>
                      <strong>Custom</strong> topical cream designed just for you
                    </span>
                  </li>
                  <li className='list__item'>
                    <IoHappyOutline className='list__item--icon' />
                    <span className='list__item--text'>
                      <strong>Delivered</strong> to your door (free shipping)
                    </span>
                  </li>
                  <li className='list__item'>
                    <IoCheckmarkCircleOutline className='list__item--icon' />
                    <span className='list__item--text'>
                      <strong>Check-ins</strong> to monitor your skin
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className='pricing-plan pricing-plan--pills'>
              <img className='pricing-plan--img' src={PillsPricing} alt='Headshot' />

              <div className='pricing-plan__content'>
                <header className='pricing-plan__content--header'>
                  <p className='pricing-plan__content--name heading-tertiary'>
                    <span>Oral Medications</span>
                  </p>

                  <p className='pricing-plan__content--price'>
                    <span>$</span>19.99
                  </p>

                  <p className='pricing-plan__content--text paragraph'>
                    extra per month. In-case you need it &#128522; Check-ins still included. <br />
                  </p>
                </header>
                <ul className='list'>
                  <li className='list__item'>
                    <IoHeartOutline className='list__item--icon' />
                    <span className='list__item--text'>
                      Oral medications include
                      <strong> spironolactone and various antibiotics</strong>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className='container center-text margin-bottom-md'>
            <p className='heading-primary'>3-month risk-free trial</p>
            <p className='heading-tertiary'>
              If you don't like your cream after your 3-month trial, you will get a{' '}
              <span className='text-primary-color'>100%</span> refund. After your trial, plans renew
              at <span className='text-primary-color'>$19.99/month</span>.
            </p>
          </div>

          <div className='container center-text'>
            <CustomButton className='btn btn--full' onClick={this.handleClick}>
              Try 3-month risk-free trial - $19.99/month
            </CustomButton>
          </div>
        </section>

        <section className='section-faq' id='faq'>
          <div className='container center-text margin-bottom-md'>
            <h2 className='heading-primary'>Have Questions?</h2>
            <h2 className='heading-tertiary'>Learn why DermDoc is unique</h2>
          </div>

          <div className='container faq-style-wrapper'>
            <Faq
              data={homepageFAQ}
              styles={{
                titleTextColor: 'var(--color-primary)',
                rowTitleColor: 'var(--color-grey-dark-1)',
                transitionDuration: '.2s',
                timingFunc: 'linear',
                titleTextSize: '2.8rem',
                rowTitleTextSize: '2.1rem',
                rowContentTextSize: '2.1rem',
                rowContentPaddingTop: '1.2rem',
                rowContentPaddingBottom: '1.2rem',
              }}
            />
          </div>
        </section>

        <Footer />
      </main>
    );
  }
}

export default withRouter(HomePage);
