import React from 'react';
import Faq from 'react-faq-component';
import {
  IoCheckmarkCircleOutline,
  IoHappyOutline,
  IoHeartOutline,
  IoSchoolOutline,
} from 'react-icons/io5';
import { withRouter } from 'react-router-dom';
import 'swiper/modules/mousewheel/mousewheel.min.css';
import 'swiper/modules/navigation/navigation.min.css';
import 'swiper/modules/pagination/pagination.min.css';
import 'swiper/swiper.min.css';
import Cream from '../../assets/img/cream-swipe.webp';
import FarahHeadshot from '../../assets/img/farah-headshot.webp';
import { ReactComponent as AbsorbicAcid } from '../../assets/img/ingredients/absorbic-acid.svg';
import { ReactComponent as AzelaicAcid } from '../../assets/img/ingredients/azelaic-acid.svg';
import { ReactComponent as Clindamycin } from '../../assets/img/ingredients/clindamycin.svg';
import { ReactComponent as Tretinoin } from '../../assets/img/ingredients/tretinoin.svg';
import Leaf from '../../assets/img/leaf-img.webp';
import OmarHeadshot from '../../assets/img/omar-cutout.webp';
import ProductWithBubbles from '../../assets/img/product-with-bubbles-desktop.webp';
import SaamiHeadshot from '../../assets/img/saami_headshot.webp';
import StepsOne from '../../assets/img/step-1-v2.webp';
import StepsTwo from '../../assets/img/step-2-v2.webp';
import StepsThree from '../../assets/img/step-3-v2.webp';
import CTAButton from '../../components/cta/cta.component';
import Footer from '../../components/footer/footer.component';
import Header from '../../components/header/header.component';
import HeroSection from '../../components/hero-section/hero-section.component';
import { homepageFAQ } from '../../utils/faq.utils';

class HomePage extends React.Component {
  handleClick = () => {
    const { history, location } = this.props;

    document.body.classList.remove('sticky');

    history.push(`get_started${location.search}`);
  };

  handleIngredientsClick = () => {
    const { history, location } = this.props;

    document.body.classList.remove('sticky');

    history.push(`ingredients${location.search}`);
  };

  render() {
    return (
      <main>
        <div className='hero-container'>
          <div className='sale-banner margin-center'>
            <h1 className='paragraph sale-banner--text'>
              [Notice] We are saddened to report we are no longer accepting new customers
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
            <p
              className='text-primary-color heading-tertiary center-text'
              onClick={this.handleIngredientsClick}>
              Show All Ingredients &#10140;
            </p>
          </div>

          <img
            src={Cream}
            loading='lazy'
            className='section-ingredients--cream'
            alt='skin cream smear'
          />

          <img src={Leaf} loading='lazy' className='section-ingredients--leaf' alt='green leaf' />
        </section>

        <section className='section-product-photo' />

        <section className='section-how' id='how'>
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

              <img
                src={StepsOne}
                loading='lazy'
                alt='Step One'
                className='steps-container__step--img'
              />
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

              <img
                src={StepsTwo}
                loading='lazy'
                alt='Step Two'
                className='steps-container__step--img'
              />
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
              <img
                src={StepsThree}
                loading='lazy'
                alt='Step Three'
                className='steps-container__step--img'
              />
            </div>
          </div>

          <div className='container'>
            <CTAButton
              additionalClassName='margin-center'
              buttonText='Unlock your free offer'
              handleClick={this.handleClick}
            />
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
              <img
                src={OmarHeadshot}
                loading='lazy'
                alt='Omar headshot'
                className='featured-doctor--img-main'
              />

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
                  Dr. Badri completed his intern year at Brigham & Women’s Hospital (Harvard). He
                  completed residency training in Dermatology (Brigham & Women’s Hospital,
                  Massachusetts General Hospital, and Boston Children’s Hospital) and Internal
                  Medicine (Brigham & Women’s Hospital) at Harvard. Dr. Badri has also published
                  multiple peer-reviewed journal articles and has presented at national meetings.
                </h2>
              </div>
            </div>
          </div>

          <div className='container additional-doctors-container'>
            <div className='featured-doctor'>
              <img
                src={FarahHeadshot}
                loading='lazy'
                alt='Farah headshot'
                className='featured-doctor--img'
              />

              <div className='featured-doctor__details'>
                <h2 className='heading-tertiary featured-doctor__details--name'>
                  Dr. Farah Moustafa M.D.
                </h2>
                <h2 className='featured-doctor__details__tag'>
                  <IoSchoolOutline className='featured-doctor__details__tag--icon' />
                  <p className='heading-tertiary featured-doctor__details__tag--text'>
                    Brown University
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
              <img src={SaamiHeadshot} loading='lazy' alt='' className='featured-doctor--img' />

              <div className='featured-doctor__details'>
                <h2 className='heading-tertiary featured-doctor__details--name'>
                  Dr. Saami Khalifian M.D.
                </h2>
                <h2 className='featured-doctor__details__tag'>
                  <IoSchoolOutline className='featured-doctor__details__tag--icon' />
                  <p className='heading-tertiary featured-doctor__details__tag--text'>
                    Johns Hopkins
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
            <p className='heading-tertiary'>Get your first 3-month supply for free</p>
          </div>

          <div className='pricing-plan'>
            <img
              className='pricing-plan--img'
              src={ProductWithBubbles}
              loading='lazy'
              alt='Product With Bubble Background'
            />
            <div className='pricing-plan__content'>
              <header className='pricing-plan__content--header'>
                <h1 className='pricing-plan__content--title heading-secondary'>
                  Custom formula for every skin type
                </h1>
                <p className='pricing-plan__content--description heading-tertiary'>
                  Keep your skin healthy with a personalized cream prescribed for you by a
                  dermatologist. Your DermDoc Custom Formula is made with specific ingredients
                  picked for your specific skin type, which can include tretinoin, azelaic acid,
                  clindamycin, and more.
                </p>
              </header>
              <div className='pricing-plan__content__skin-types'>
                <h2 className='pricing-plan__content__skin-types--title heading-tertiary'>
                  Proven to tackle
                </h2>
                <div className='pricing-plan__content__skin-types__bubbles'>
                  <p className='pricing-plan__content__skin-types__bubbles--bubble paragraph'>
                    Whiteheads
                  </p>
                  <p className='pricing-plan__content__skin-types__bubbles--bubble paragraph'>
                    Redness
                  </p>
                  <p className='pricing-plan__content__skin-types__bubbles--bubble paragraph'>
                    Clogged pores
                  </p>
                  <p className='pricing-plan__content__skin-types__bubbles--bubble paragraph'>
                    Blackheads
                  </p>
                  <p className='pricing-plan__content__skin-types__bubbles--bubble paragraph'>
                    Breakouts
                  </p>
                </div>
              </div>
              <ul className='list margin-bottom-reg'>
                <li className='list__item'>
                  <IoHeartOutline className='list__item--icon' />
                  <span className='list__item--text'>3 month money-back guarantee</span>
                </li>
                <li className='list__item'>
                  <IoHappyOutline className='list__item--icon' />
                  <span className='list__item--text'>Delivered to your door</span>
                </li>
                <li className='list__item'>
                  <IoCheckmarkCircleOutline className='list__item--icon' />
                  <span className='list__item--text'>
                    Check-ins with a dermatologist to monitor your skin
                  </span>
                </li>
              </ul>

              <CTAButton
                additionalClassName='pricing-plan__content--cta'
                buttonText='Unlock your free offer'
                handleClick={this.handleClick}
              />
            </div>
          </div>
          {/* 
          <div className='container center-text margin-bottom-md'>
            <p className='heading-primary'>3-month risk-free trial</p>
            <p className='heading-tertiary'>
              If you don't like your cream after your 3-month trial, you will get a{' '}
              <span className='text-primary-color'>100%</span> refund. After your trial, plans renew
              at <span className='text-primary-color'>$19.99/month</span>.
            </p>
          </div> */}
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
