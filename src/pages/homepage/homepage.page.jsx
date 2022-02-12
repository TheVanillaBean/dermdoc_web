import React from 'react';
import Faq from 'react-faq-component';
import {
  IoBanOutline,
  IoCheckmarkCircleOutline,
  IoHappyOutline,
  IoHeartOutline,
  IoReorderFourOutline,
  IoSnowOutline,
  IoSunnyOutline,
  IoThermometerOutline,
  IoWaterOutline,
} from 'react-icons/io5';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Navigation, Pagination } from 'swiper';
import 'swiper/modules/navigation/navigation.min.css';
import 'swiper/modules/pagination/pagination.min.css';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import 'swiper/swiper.min.css';
import Cream1 from '../../assets/img/cream-1.jpeg';
import Cream2 from '../../assets/img/cream-2.jpeg';
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

    updateVisitReason('Acne');
    history.push(`get_started`);
  };

  data = {
    title: 'Common Questions',
    rows: [
      {
        title: 'How is Medicall different?',
        content: `Short version: Same price as other custom skincare companies, but better product. <br /> <br /> When you get a custom topical cream from the most popular custom skincare companies (e.g. curology, apostrophe, hims/hers), your cream will have a lower concentration of active ingredients than what you would get by going to a dermatologist in-person. With Medicall, you get the same convenience of the big companies, but with the quality of an in-person dermatology visit.`,
      },
      {
        title: 'Is there a refund policy?',
        content: `If your skin does not improve after using your custom formula, we'll issue a full-refund for every month used.`,
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
            See how you'll save <span class='text-primary-color'>40%</span>
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
                  <p className='feature-title'>Recieve custom formula</p>
                  <p className='feature-text'>
                    You will get a personalized topical cream within 24 hours.
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
          <div className='container center-text '>
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
          <div className='container center-text'>
            <CustomButton className='btn btn--full' onClick={this.handleClick}>
              Try 90 day risk-free trial - $20
            </CustomButton>
          </div>
        </section>

        <section className='section-ingredients' id='ingredients'>
          <div className='container center-text'>
            <span className='subheading'>Better Ingredients</span>
            <h2 className='heading-secondary'>Efficacy you won't find at a store</h2>
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
              modules={[Pagination, Navigation]}
              cssMode={true}>
              <SwiperSlide>
                <div className='ingredient'>
                  <img className='ingredient-img' src={Cream1} alt='Cream 1' />
                  <div className='ingredient-content'>
                    <div className='ingredient-tags'>
                      <span className='tag tag--percentage'>0.018% - 0.1%</span>
                    </div>
                    <p className='ingredient-title'>Tretinoin</p>
                    <ul className='ingredient-attributes'>
                      <li className='ingredient-attribute'>
                        <IoSunnyOutline className='list-icon' />
                        <span>
                          <strong>Sun-damaged</strong> skin
                        </span>
                      </li>
                      <li className='ingredient-attribute'>
                        <IoReorderFourOutline className='list-icon' />
                        <span>
                          Wrinkles and <strong>fine lines</strong>
                        </span>
                      </li>
                      <li className='ingredient-attribute'>
                        <IoBanOutline className='list-icon' />
                        <span>
                          <strong>Clogged</strong> pores
                        </span>
                      </li>
                      <li className='ingredient-attribute'>
                        <IoWaterOutline className='list-icon' />
                        <span>
                          <strong>Hyperpigmentation</strong>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='ingredient'>
                  <img className='ingredient-img' src={Cream2} alt='Meal 2' />
                  <div className='ingredient-content'>
                    <div className='ingredient-tags'>
                      <span className='tag tag--percentage'>1%</span>
                    </div>
                    <p className='ingredient-title'>Clindamycin</p>
                    <ul className='ingredient-attributes'>
                      <li className='ingredient-attribute'>
                        <IoThermometerOutline className='list-icon' />
                        <span>
                          <strong>Inflammation</strong>
                        </span>
                      </li>
                      <li className='ingredient-attribute'>
                        <IoSnowOutline className='list-icon' />
                        <span>
                          <strong>Acne-causing</strong> bacteria
                        </span>
                      </li>
                      <li className='ingredient-attribute'>
                        <IoBanOutline className='list-icon' />
                        <span>
                          <strong>Clogged</strong> pores
                        </span>
                      </li>
                      <li className='ingredient-attribute'>
                        <IoBanOutline className='list-icon' />
                        <span>
                          <strong>Clogged</strong> pores
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='ingredient'>
                  <img className='ingredient-img' src={Cream1} alt='Cream 1' />
                  <div className='ingredient-content'>
                    <div className='ingredient-tags'>
                      <span className='tag tag--percentage'>0.018% - 0.1%</span>
                    </div>
                    <p className='ingredient-title'>Tretinoin</p>
                    <ul className='ingredient-attributes'>
                      <li className='ingredient-attribute'>
                        <IoSunnyOutline className='list-icon' />
                        <span>
                          <strong>Sun-damaged</strong> skin
                        </span>
                      </li>
                      <li className='ingredient-attribute'>
                        <IoReorderFourOutline className='list-icon' />
                        <span>
                          Wrinkles and <strong>fine lines</strong>
                        </span>
                      </li>
                      <li className='ingredient-attribute'>
                        <IoBanOutline className='list-icon' />
                        <span>
                          <strong>Clogged</strong> pores
                        </span>
                      </li>
                      <li className='ingredient-attribute'>
                        <IoWaterOutline className='list-icon' />
                        <span>
                          <strong>Hyperpigmentation</strong>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='ingredient'>
                  <img className='ingredient-img' src={Cream2} alt='Meal 2' />
                  <div className='ingredient-content'>
                    <div className='ingredient-tags'>
                      <span className='tag tag--percentage'>1%</span>
                    </div>
                    <p className='ingredient-title'>Clindamycin</p>
                    <ul className='ingredient-attributes'>
                      <li className='ingredient-attribute'>
                        <IoThermometerOutline className='list-icon' />
                        <span>
                          <strong>Inflammation</strong>
                        </span>
                      </li>
                      <li className='ingredient-attribute'>
                        <IoSnowOutline className='list-icon' />
                        <span>
                          <strong>Acne-causing</strong> bacteria
                        </span>
                      </li>
                      <li className='ingredient-attribute'>
                        <IoBanOutline className='list-icon' />
                        <span>
                          <strong>Clogged</strong> pores
                        </span>
                      </li>
                      <li className='ingredient-attribute'>
                        <IoBanOutline className='list-icon' />
                        <span>
                          <strong>Clogged</strong> pores
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='ingredient'>
                  <img className='ingredient-img' src={Cream1} alt='Cream 1' />
                  <div className='ingredient-content'>
                    <div className='ingredient-tags'>
                      <span className='tag tag--percentage'>0.018% - 0.1%</span>
                    </div>
                    <p className='ingredient-title'>Tretinoin</p>
                    <ul className='ingredient-attributes'>
                      <li className='ingredient-attribute'>
                        <IoSunnyOutline className='list-icon' />
                        <span>
                          <strong>Sun-damaged</strong> skin
                        </span>
                      </li>
                      <li className='ingredient-attribute'>
                        <IoReorderFourOutline className='list-icon' />
                        <span>
                          Wrinkles and <strong>fine lines</strong>
                        </span>
                      </li>
                      <li className='ingredient-attribute'>
                        <IoBanOutline className='list-icon' />
                        <span>
                          <strong>Clogged</strong> pores
                        </span>
                      </li>
                      <li className='ingredient-attribute'>
                        <IoWaterOutline className='list-icon' />
                        <span>
                          <strong>Hyperpigmentation</strong>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='ingredient'>
                  <img className='ingredient-img' src={Cream2} alt='Meal 2' />
                  <div className='ingredient-content'>
                    <div className='ingredient-tags'>
                      <span className='tag tag--percentage'>1%</span>
                    </div>
                    <p className='ingredient-title'>Clindamycin</p>
                    <ul className='ingredient-attributes'>
                      <li className='ingredient-attribute'>
                        <IoThermometerOutline className='list-icon' />
                        <span>
                          <strong>Inflammation</strong>
                        </span>
                      </li>
                      <li className='ingredient-attribute'>
                        <IoSnowOutline className='list-icon' />
                        <span>
                          <strong>Acne-causing</strong> bacteria
                        </span>
                      </li>
                      <li className='ingredient-attribute'>
                        <IoBanOutline className='list-icon' />
                        <span>
                          <strong>Clogged</strong> pores
                        </span>
                      </li>
                      <li className='ingredient-attribute'>
                        <IoBanOutline className='list-icon' />
                        <span>
                          <strong>Clogged</strong> pores
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          {/* <div className='additional-ingredients'>
            <h3 className='paragraph'>Additional ingredients:</h3>
            <ul className='list'>
              <li className='list-item'>
                <IoCheckmarkOutline className='list-icon' />
                <span>Metronidazole 1%</span>
              </li>
              <li className='list-item'>
                <IoCheckmarkOutline className='list-icon' />
                <span>Azelaic Acid 15%</span>
              </li>
              <li className='list-item'>
                <IoCheckmarkOutline className='list-icon' />
                <span>Hydroquinone 6%</span>
              </li>
              <li className='list-item'>
                <IoCheckmarkOutline className='list-icon' />
                <span>Tranexamic Acid 5%</span>
              </li>
              <li className='list-item'>
                <IoCheckmarkOutline className='list-icon' />
                <span>Doxycycline</span>
              </li>
              <li className='list-item'>
                <IoCheckmarkOutline className='list-icon' />
                <span>Minocycline</span>
              </li>
              <li className='list-item'>
                <IoCheckmarkOutline className='list-icon' />
                <span>Sulfamethoxazole Trimethoprim</span>
              </li>
              <li className='list-item'>
                <IoCheckmarkOutline className='list-icon' />
                <span>Spironolactone</span>
              </li>
            </ul>
          </div> */}
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
