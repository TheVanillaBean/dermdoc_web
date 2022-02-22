import React from 'react';
import Faq from 'react-faq-component';
import { IoCheckmarkCircleOutline, IoHappyOutline, IoHeartOutline } from 'react-icons/io5';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Navigation, Pagination } from 'swiper';
import 'swiper/modules/navigation/navigation.min.css';
import 'swiper/modules/pagination/pagination.min.css';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import 'swiper/swiper.min.css';
import FarahHeadshot from '../../assets/img/farah-headshot.jpg';
import AzelaicAcid from '../../assets/img/ingredients/azelaic_acid.jpg';
import Clindamycin from '../../assets/img/ingredients/clindamycin.jpeg';
import Hydroquinone from '../../assets/img/ingredients/hydroquinone.jpg';
import Metronidazole from '../../assets/img/ingredients/metronidazole.jpg';
import Niacinamide from '../../assets/img/ingredients/niacinamide.jpg';
import TranexamicAcid from '../../assets/img/ingredients/tranexamic_acid.jpeg';
import Trentinoin from '../../assets/img/ingredients/trentinoin.jpeg';
import OmarHeadshot from '../../assets/img/omar-headshot.jpeg';
import PricingHeader from '../../assets/img/pricing-img.jpg';
import ProcessInfographic from '../../assets/img/pricing-infographic-lg.png';
import CustomButton from '../../components/custom-button/custom-button.component';
import Footer from '../../components/footer/footer.component';
import Header from '../../components/header/header.component';
import HeroSection from '../../components/hero-section/hero-section.component';
import { analytics } from '../../firebase/firebase.utils';
import { updateVisitReason } from '../../redux/search/search.actions';

class HomePage extends React.Component {
  componentDidMount() {
    analytics.logEvent('Homepage Viewed');
  }

  handleClick = () => {
    const { history, updateVisitReason } = this.props;

    document.body.classList.remove('sticky');

    updateVisitReason('Acne');
    history.push(`get_started`);
  };

  data = {
    title: 'Common Questions',
    rows: [
      {
        title: '1. What is the custom formula (i.e. cream)?',
        content: `Your custom formula is a custom cream made for your unique skin by your dermatologist. It will be designed for your needs and goals to target skin concerns: type of acne, redness, discoloration, texture, and more. Your dermatologist will review your answers and photos, and prescribe custom ingredients &#8212; at a custom strength &#8212; for your skin's unique needs. Before each new shipment, we'll check in to see how you're doing and if needed, we'll adjust your prescription to ensure it is always the right fit for your skin.`,
      },
      {
        title: '2. What are the key ingredients?',
        content: `Your active ingredients and their strength level will be picked for your skin by your dermatologist. They may include: tretinoin, azelaic acid, tranexamic acid, niacinamide, and more. In addition to active ingredients, your formula will also include inactive, or base ingredients that help the medications blend into a silky smooth cream. All ingredients are vegan, cruelty-free, unscented, and paraben-free.`,
      },
      {
        title: '3. Who are the dermatologists?',
        content: `Our team of dermatologists are medical doctors who have completed residency training in dermatology (i.e. they've gone to school for a really long time). They have all been board certified by the American Board of Dermatology. We'll match you with one who is licensed in your state and he/she will become an expert on your unique skin. They'll design your custom formula, answer questions, and make adjustments as needed. So don't be a stranger. You can always message your dermatologist through your DermDoc account if you have questions. We're here for you.`,
      },
      {
        title: '4. How much does a DermDoc Subscription cost?',
        content: `We send prescriptions as 3-month supplies. Each 3-month supply costs $45 (shipping included). We'll send you a notice for a refill every 3 months. That breaks down to just $15 per month. Cancel anytime.`,
      },
      {
        title: '5. How does the 90-day money-back guarantee work?',
        content: `Love your DermDoc custom cream in 90 days, or get your money back. You must contact support@dermdoc.com to cancel your subscription and request a refund at any time on or before the 90th day after you received your treatment plan.`,
      },
    ],
  };

  render() {
    return (
      <main>
        <div className='hero-container'>
          <Header />
          <HeroSection handleClick={this.handleClick} />
        </div>
        <div className='hero-infographic'>
          <h1 className='heading-primary'>
            See how you'll save <span className='text-primary-color'>40%</span>
          </h1>
          <p className='heading-tertiary'>
            Short story: you're paying for a quality product, not fancy marketing.
          </p>
          <img src={ProcessInfographic} alt='Pricing Infographic' />
        </div>

        <section className='section-how' id='how'>
          <div className='container center-text'>
            <h1 className='heading-primary text-color-white'>How does it work</h1>
            <p className='heading-tertiary text-color-white'>
              You're only 3 steps away from clearer skin
            </p>
          </div>
          <div className='feature-list-container'>
            <ul className='feature-list'>
              <li className='feature'>
                <div className='feature-circle'>
                  <p className='feature-circle-text'>01</p>
                </div>

                <div className='feature-description'>
                  <p className='feature-title'>Upload selfies</p>
                  <p className='feature-text'>
                    Answer some questions and share photos of your skin.
                  </p>
                </div>
              </li>
              <li className='feature'>
                <div className='feature-circle'>
                  <p className='feature-circle-text'>02</p>
                </div>
                <div className='feature-description'>
                  <p className='feature-title'>Receive custom formula</p>
                  <p className='feature-text'>
                    Your dermatologist with design a personalized cream for you within 24 hours.
                  </p>
                </div>
              </li>
              <li className='feature'>
                <div className='feature-circle'>
                  <p className='feature-circle-text'>03</p>
                </div>
                <div className='feature-description'>
                  <p className='feature-title'>Check-in as needed</p>
                  <p className='feature-text'>
                    You'll check-in with your dermatologist throughout your journey.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section className='section-pricing' id='pricing'>
          <div className='container center-text margin-bottom-md'>
            <h1 className='heading-primary'>Pricing</h1>
            <p className='heading-tertiary'>Get started with our risk free 90-day trial</p>
          </div>

          <div className='container grid grid--2-cols margin-bottom-md'>
            <div className='pricing-plan pricing-plan--starter'>
              <img className='plan-img' src={PricingHeader} alt='Headshot' />

              <div className='plan-content'>
                <header className='plan-header'>
                  <p className='plan-name'>
                    <span>Topical Medications</span>
                  </p>
                  <p className='plan-price'>
                    <span>$</span>14.95
                  </p>
                  <p className='plan-text'>
                    per month. Includes topical cream and <strong>check-ins</strong> with a
                    dermatologist.
                  </p>
                </header>
                <ul className='list'>
                  <li className='list-item'>
                    <IoHeartOutline className='list-icon' />
                    <span>
                      <strong>Custom</strong> topical cream designed just for you
                    </span>
                  </li>
                  <li className='list-item'>
                    <IoHappyOutline className='list-icon' />
                    <span>
                      <strong>Delivered</strong> to your door (free shipping)
                    </span>
                  </li>
                  <li className='list-item'>
                    <IoCheckmarkCircleOutline className='list-icon' />
                    <span>
                      <strong>Check-ins</strong> to monitor your skin
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className='pricing-plan pricing-plan--complete'>
              <img className='plan-img' src={PricingHeader} alt='Headshot' />

              <div className='plan-content'>
                <header className='plan-header'>
                  <p className='plan-name'>
                    <span>Oral Medications</span>
                  </p>

                  <p className='plan-price'>
                    <span>$</span>14.95
                  </p>
                  <p className='plan-text'>
                    extra per month. In-case you need it &#128522; Check-ins still included. <br />
                  </p>
                </header>
                <ul className='list'>
                  <li className='list-item'>
                    <IoHeartOutline className='list-icon' />
                    <span>
                      Oral medications include
                      <strong> spironolactone and various antibiotics</strong>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className='container center-text margin-bottom-md'>
            <p className='heading-tertiary'>90-day Stress-free Guarantee</p>
            <p className='heading-description'>
              Your first three months will cost <span className='text-primary-color'>$20.97</span>.
              If you don't like it after three months, you will get a{' '}
              <span className='text-primary-color'>100%</span> refund. After your first three
              months, plans renew at <span className='text-primary-color'>$45 every 3 months</span>{' '}
              ($14.95/month).
            </p>
          </div>

          <div className='container center-text'>
            <CustomButton className='btn btn--full' onClick={this.handleClick}>
              Try 90 day risk-free trial - $20.97
            </CustomButton>
          </div>
        </section>

        <section className='section-ingredients' id='ingredients'>
          <div className='container center-text margin-bottom-md'>
            <h1 className='heading-primary'>Better Ingredients</h1>
            <p className='heading-tertiary'>Quality you won't find at a store</p>
          </div>
          <div className='container margin-bottom-mg'>
            <Swiper
              breakpoints={{
                // when window width is >= 640px
                944: {
                  width: 944,
                  slidesPerView: 2,
                },
                // when window width is >= 768px
                384: {
                  width: 384,
                  slidesPerView: 1,
                },
              }}
              centeredSlides={true}
              loop={true}
              pagination={true}
              navigation={true}
              modules={[Pagination, Navigation]}>
              <SwiperSlide>
                <div className='ingredient'>
                  <img className='ingredient-img' src={Trentinoin} alt='Trentinoin' />
                  <div className='ingredient-content'>
                    <div className='ingredient-tags'>
                      <span className='tag tag--percentage'>0.01 - 0.1%</span>
                    </div>
                    <p className='ingredient-title'>Tretinoin</p>
                    <ul className='ingredient-attributes'>
                      <li className='ingredient-attribute'>
                        <span>Reduces fine lines and wrinkles</span>
                      </li>
                      <li className='ingredient-attribute'>
                        <span>Improves skin tone and texture</span>
                      </li>
                      <li className='ingredient-attribute'>
                        <span>Reduces hyperpigmentation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='ingredient'>
                  <img className='ingredient-img' src={Clindamycin} alt='Trentinoin' />
                  <div className='ingredient-content'>
                    <div className='ingredient-tags'>
                      <span className='tag tag--percentage'>2%</span>
                    </div>
                    <p className='ingredient-title'>Clindamycin</p>
                    <ul className='ingredient-attributes'>
                      <li className='ingredient-attribute'>
                        <span>Reduces inflamed acne lesions</span>
                      </li>
                      <li className='ingredient-attribute'>
                        <span>Improves non-inflamed acne lesions</span>
                      </li>
                      <li className='ingredient-attribute'>
                        <span>Treats clogged pores</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='ingredient'>
                  <img className='ingredient-img' src={Niacinamide} alt='Niacinamide' />
                  <div className='ingredient-content'>
                    <div className='ingredient-tags'>
                      <span className='tag tag--percentage'>2 - 4%</span>
                    </div>
                    <p className='ingredient-title'>Niacinamide</p>
                    <ul className='ingredient-attributes'>
                      <li className='ingredient-attribute'>
                        <span>Has powerful antioxidant actives</span>
                      </li>
                      <li className='ingredient-attribute'>
                        <span>Improves acne lesions</span>
                      </li>
                      <li className='ingredient-attribute'>
                        <span>Treats clogged pores</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='ingredient'>
                  <img className='ingredient-img' src={AzelaicAcid} alt='Azelaic acid' />
                  <div className='ingredient-content'>
                    <div className='ingredient-tags'>
                      <span className='tag tag--percentage'>15%</span>
                    </div>
                    <p className='ingredient-title'>Azelaic acid</p>
                    <ul className='ingredient-attributes'>
                      <li className='ingredient-attribute'>
                        <span>Improves moderate-to-severe rosacea</span>
                      </li>
                      <li className='ingredient-attribute'>
                        <span>Lightens melasma</span>
                      </li>
                      <li className='ingredient-attribute'>
                        <span>Reduces pimples and blackheads</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='ingredient'>
                  <img className='ingredient-img' src={TranexamicAcid} alt='Tranexamic acid' />
                  <div className='ingredient-content'>
                    <div className='ingredient-tags'>
                      <span className='tag tag--percentage'>3%</span>
                    </div>
                    <p className='ingredient-title'>Tranexamic acid</p>
                    <ul className='ingredient-attributes'>
                      <li className='ingredient-attribute'>
                        <span>Lightens dark spots</span>
                      </li>
                      <li className='ingredient-attribute'>
                        <span>Soothes redness</span>
                      </li>
                      <li className='ingredient-attribute'>
                        <span>Treats hyperpigmentation and melasma</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='ingredient'>
                  <img className='ingredient-img' src={Hydroquinone} alt='Hydroquinoine' />
                  <div className='ingredient-content'>
                    <div className='ingredient-tags'>
                      <span className='tag tag--percentage'>3-6%</span>
                    </div>
                    <p className='ingredient-title'>Hydroquinoine</p>
                    <ul className='ingredient-attributes'>
                      <li className='ingredient-attribute'>
                        <span>Lightens Melasma</span>
                      </li>
                      <li className='ingredient-attribute'>
                        <span>Treats sun spots, freckles, and age spots</span>
                      </li>
                      <li className='ingredient-attribute'>
                        <span>Treats dark spots left by acne</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='ingredient'>
                  <img className='ingredient-img' src={Metronidazole} alt='Metronidazole' />
                  <div className='ingredient-content'>
                    <div className='ingredient-tags'>
                      <span className='tag tag--percentage'>0.75%</span>
                    </div>
                    <p className='ingredient-title'>Metrodinazole</p>
                    <ul className='ingredient-attributes'>
                      <li className='ingredient-attribute'>
                        <span>Reduces inflamed lesions of rosacea</span>
                      </li>
                      <li className='ingredient-attribute'>
                        <span>Decreases facial redness</span>
                      </li>
                      <li className='ingredient-attribute'>
                        <span>Treats acne rosacea</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='ingredient other-ingredients'>
                  <div className='other-ingredients__title'>
                    <p>Additional Ingredients</p>
                  </div>
                  <div className='ingredient-content'>
                    <ul className='ingredient-attributes'>
                      <li className='ingredient-attribute'>
                        <span>Hydrocoritsone 1-2.5%</span>
                      </li>
                      <li className='ingredient-attribute'>
                        <span>Zinc pyrithione 1%</span>
                      </li>
                      <li className='ingredient-attribute'>
                        <span>Sodium sulfacetamide 5-10%</span>
                      </li>
                      <li className='ingredient-attribute'>
                        <span>Kojic acid 1%</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>

        <section className='section-ingredients' id='ingredients'>
          <div className='container center-text margin-bottom-md'>
            <h1 className='heading-primary'>Featured Dermatologists</h1>
            <p className='heading-tertiary'>Expert care at your fingertips</p>
          </div>
          <div className='container margin-bottom-mg'>
            <Swiper
              breakpoints={{
                // when window width is >= 640px
                944: {
                  width: 944,
                  slidesPerView: 2,
                },
                // when window width is >= 768px
                384: {
                  width: 384,
                  slidesPerView: 1,
                },
              }}
              centeredSlides={true}
              loop={true}
              pagination={true}
              navigation={true}
              modules={[Pagination, Navigation]}>
              <SwiperSlide>
                <div className='doctor'>
                  <img className='doctor-img' src={OmarHeadshot} alt='Omar Headshot' />
                  <div className='doctor-content'>
                    <div className='doctor-tags'>
                      <span className='tag tag--percentage'>Harvard University</span>
                    </div>
                    <p className='doctor-title'>Dr. Omar Badri M.D.</p>
                    <ul className='doctor-attributes'>
                      <li className='doctor-attribute'>
                        <span>
                          Dr. Badri completed his intern year at Brigham & Women’s Hospital
                          (Harvard). His completed residency training in Dermatology (Brigham &
                          Women’s Hospital, Massachusetts General Hospital, and Boston Children’s
                          Hospital) and Internal Medicine (Brigham & Women’s Hospital) at Harvard.
                          Dr. Badri has published multiple peer-reviewed journal articles and has
                          presented at national meetings.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='doctor'>
                  <img className='doctor-img' src={FarahHeadshot} alt='Farah Headshot' />
                  <div className='doctor-content'>
                    <div className='doctor-tags'>
                      <span className='tag tag--percentage'>Tufts University</span>
                    </div>
                    <p className='doctor-title'>Dr. Farah Moustafa M.D.</p>
                    <ul className='doctor-attributes'>
                      <li className='doctor-attribute'>
                        <span>
                          Dr. Moustafa graduated summa cum laude, with degrees in Biology and
                          Political Science. She attended Wake Forest School of Medicine where she
                          was elected to Alpha Omega Alpha Honor Society and received numerous
                          awards for her academic achievements. She completed her internship in
                          Internal Medicine at Brigham and Women’s Hospital (Harvard Medical School)
                          and her dermatology residency at Brown University.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>

        <section className='section-faq' id='faq'>
          <div className='container center-text'>
            <h2 className='subheading'>FAQ</h2>
            <h2 className='heading-secondary'>Learn why DermDoc is unique</h2>
          </div>

          <div className='container faq-style-wrapper'>
            <Faq
              data={this.data}
              styles={{
                titleTextColor: 'var(--color-primary)',
                rowTitleColor: 'var(--color-grey-dark-1)',
                transitionDuration: '.2s',
                timingFunc: 'linear',
                titleTextSize: '3.2rem',
                rowTitleTextSize: '2.4rem',
                rowContentTextSize: '2rem',
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

const mapDispatchToProps = (dispatch) => ({
  updateVisitReason: (reason) => dispatch(updateVisitReason(reason)),
});

export default withRouter(connect(null, mapDispatchToProps)(HomePage));
