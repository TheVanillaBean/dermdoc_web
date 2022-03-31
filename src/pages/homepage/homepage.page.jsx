import React from 'react';
import Faq from 'react-faq-component';
import { IoCheckmarkCircleOutline, IoHappyOutline, IoHeartOutline, IoStar } from 'react-icons/io5';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Mousewheel, Navigation, Pagination } from 'swiper';
import 'swiper/modules/mousewheel/mousewheel.min.css';
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
import PersonaSandra from '../../assets/img/personas/persona_one.jpeg';
import PersonaJennifer from '../../assets/img/personas/persona_three.jpeg';
import PersonaNicole from '../../assets/img/personas/persona_two.jpeg';
import CreamPricing from '../../assets/img/pricing-cream-single.jpg';
import OralPricing from '../../assets/img/pricing-oral-single.jpg';
import SaamiHeadshot from '../../assets/img/saami_headshot.jpeg';
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
        content: `We send prescriptions as 3-month supplies. After the introductory offer ($6.99/month for the first 3 months), each 3-month supply costs $44.85 (shipping included). We'll send you a notice for a refill every 3 months. That breaks down to just $14.95 per month. Cancel anytime.`,
      },
      {
        title: '5. How does the 3-month trial work?',
        content: `Love your DermDoc custom cream in 3 months, or get your money back. You must contact contact@dermdoc.com to cancel your subscription and request a refund at any time on or before the 90th day after you received your treatment plan.`,
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

        <section className='section-ingredients' id='ingredients'>
          <div className='container center-text margin-bottom-md'>
            <h1 className='heading-primary'>Prescription Ingredients</h1>
            <p className='heading-tertiary'>Quality you won't find at a store</p>
          </div>
          <div className='container margin-bottom-mg'>
            <Swiper
              breakpoints={{
                // when window width is >= 320px
                320: {
                  slidesPerView: 1,
                  spaceBetween: 16,
                },
                // when window width is >= 480px
                480: {
                  slidesPerView: 1.5,
                  spaceBetween: 16,
                },
                // when window width is >= 640px
                640: {
                  slidesPerView: 2,
                  spaceBetween: 32,
                },
              }}
              mousewheel
              simulateTouch
              centeredSlides={true}
              loop={true}
              pagination={true}
              navigation={true}
              modules={[Pagination, Navigation, Mousewheel]}>
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

        <section className='section-personas' id='personas'>
          <div className='container center-text margin-bottom-md'>
            <h1 className='heading-primary'>Don't take our word for it</h1>
            <p className='heading-tertiary'>Proven ingredients. Real results.</p>
          </div>
          <div className='container'>
            <Swiper
              breakpoints={{
                // when window width is >= 320
                320: {
                  slidesPerView: 1,
                  spaceBetween: 16,
                },
                // when window width is >= 480
                480: {
                  slidesPerView: 1.3,
                  spaceBetween: 16,
                },
                // when window width is >= 640
                640: {
                  slidesPerView: 1.5,
                  spaceBetween: 16,
                },
                // when window width is >= 1200
                944: {
                  slidesPerView: 1.5,
                  spaceBetween: 32,
                },
              }}
              autoHeight
              mousewheel
              simulateTouch
              centeredSlides={true}
              loop={true}
              pagination={true}
              navigation={true}
              modules={[Pagination, Navigation, Mousewheel]}>
              <SwiperSlide>
                <SwiperSlide>
                  <div className='persona'>
                    <img className='persona__image' src={PersonaNicole} alt="Nicole's Formula" />
                    <div className='persona__content'>
                      <p className='persona__content--name'>Nicole's Journey</p>
                      <div className='border' />
                      <div className='persona__content--formula-details'>
                        <ul className='persona__attributes'>
                          <p className='persona__attributes--title'>Issue</p>
                          <li className='persona__attributes--item'>
                            <span>Breakouts</span>
                          </li>
                          <li className='persona__attributes--item'>
                            <span>Redness</span>
                          </li>
                        </ul>
                        <ul className='persona__attributes'>
                          <p className='persona__attributes--title'>Formula</p>
                          <li className='persona__attributes--item'>
                            <span>Tretinoin</span>
                          </li>
                          <li className='persona__attributes--item'>
                            <span>Metronidazole</span>
                          </li>
                          <li className='persona__attributes--item'>
                            <span>Azelaic Acid</span>
                          </li>
                          <li className='persona__attributes--item'>
                            <span>Niacinamide</span>
                          </li>
                        </ul>
                      </div>
                      <p className='persona__content--review'>
                        “Dermdoc’s formula has made me comfortable in my own skin. I used to have
                        constant acne flares. After a few weeks of using the custom prescription, my
                        skin started to clear up. I’m finally happy with my skin. Thank you!”
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </SwiperSlide>
              <SwiperSlide>
                <SwiperSlide>
                  <div className='persona'>
                    <img
                      className='persona__image'
                      src={PersonaJennifer}
                      alt="Jennifer's Formula"
                    />
                    <div className='persona__content'>
                      <p className='persona__content--name'>Jennifer's Journey</p>
                      <div className='border' />
                      <div className='persona__content--formula-details'>
                        <ul className='persona__attributes'>
                          <p className='persona__attributes--title'>Issue</p>
                          <li className='persona__attributes--item'>
                            <span>Hormonal Acne</span>
                          </li>
                          <li className='persona__attributes--item'>
                            <span>Discoloration</span>
                          </li>
                        </ul>
                        <ul className='persona__attributes'>
                          <p className='persona__attributes--title'>Formula</p>
                          <li className='persona__attributes--item'>
                            <span>Tretinoin</span>
                          </li>
                          <li className='persona__attributes--item'>
                            <span>Azelaic Acid</span>
                          </li>
                          <li className='persona__attributes--item'>
                            <span>Clindamycin</span>
                          </li>
                          <li className='persona__attributes--item'>
                            <span className='text-grey-color'>
                              Spironolactone <br />
                              (oral)
                            </span>
                          </li>
                        </ul>
                      </div>
                      <p className='persona__content--review'>
                        “My skin used to be a disaster. I had stubborn acne on my chin and jaw that
                        wouldn’t go away. It would worsen with periods. I tried everything, but
                        nothing worked. The dermatologist on DermDoc was great and their treatment
                        has cleared my skin. I don’t feel self-conscious anymore. If you are
                        thinking about using DermDoc, I recommend it!”
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </SwiperSlide>
              <SwiperSlide>
                <SwiperSlide>
                  <div className='persona'>
                    <img className='persona__image' src={PersonaSandra} alt="Sandra's Formula" />
                    <div className='persona__content'>
                      <p className='persona__content--name'>Sandra's Journey</p>
                      <div className='border' />
                      <div className='persona__content--formula-details'>
                        <ul className='persona__attributes'>
                          <p className='persona__attributes--title'>Issue</p>
                          <li className='persona__attributes--item'>
                            <span>Acne</span>
                          </li>
                          <li className='persona__attributes--item'>
                            <span>Acne Scars</span>
                          </li>
                        </ul>
                        <ul className='persona__attributes'>
                          <p className='persona__attributes--title'>Formula</p>
                          <li className='persona__attributes--item'>
                            <span>Tretinoin</span>
                          </li>
                          <li className='persona__attributes--item'>
                            <span>Clindamycin</span>
                          </li>
                        </ul>
                      </div>
                      <p className='persona__content--review'>
                        “My experience with DermDoc has been fantastic. The visit was easy and the
                        dermatologist was very knowledgeable. I love that it’s just one single
                        product to use. Simple and effective. It cleared up my skin. Using the cream
                        has also helped my acne scars. Thank you!”
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>

        <section className='section-reviews'>
          <Swiper
            breakpoints={{
              // when window width is >= 320px
              320: {
                slidesPerView: 1.4,
                spaceBetween: 16,
              },
              // when window width is >= 480px
              480: {
                slidesPerView: 1.5,
                spaceBetween: 32,
              },
              // when window width is >= 640px
              640: {
                slidesPerView: 2.5,
                spaceBetween: 32,
              },
              // when window width is >= 640px
              1200: {
                slidesPerView: 4,
                spaceBetween: 48,
              },
            }}
            mousewheel
            simulateTouch
            centeredSlides={true}
            loop={true}
            modules={[Mousewheel]}>
            <SwiperSlide>
              <SwiperSlide>
                <div className='review'>
                  <blockquote className='review__quote'>
                    <p className='review__quote--icon'></p>
                    <p className='heading-tertiary review__quote--text'>
                      The cream went on nicely, wasn’t irritating, and my skin looks better than it
                      ever has!
                    </p>
                  </blockquote>
                  <div className='review__stars'>
                    <IoStar className='review__stars--star' />
                    <IoStar className='review__stars--star' />
                    <IoStar className='review__stars--star' />
                    <IoStar className='review__stars--star' />
                    <IoStar className='review__stars--star' />
                  </div>
                  <p className='heading-tertiary review__name'>Sue</p>
                </div>
              </SwiperSlide>
            </SwiperSlide>
            <SwiperSlide>
              <SwiperSlide>
                <div className='review'>
                  <blockquote className='review__quote'>
                    <p className='review__quote--icon'></p>
                    <p className='heading-tertiary review__quote--text'>
                      Love that it’s just one cream. I used to use so many different things. Feels
                      great on the skin and isn’t greasy. I have a nice glow to my skin
                    </p>
                  </blockquote>
                  <div className='review__stars'>
                    <IoStar className='review__stars--star' />
                    <IoStar className='review__stars--star' />
                    <IoStar className='review__stars--star' />
                    <IoStar className='review__stars--star' />
                    <IoStar className='review__stars--star' />
                  </div>
                  <p className='heading-tertiary review__name'>Samuel</p>
                </div>
              </SwiperSlide>
            </SwiperSlide>
            <SwiperSlide>
              <SwiperSlide>
                <div className='review'>
                  <blockquote className='review__quote'>
                    <p className='review__quote--icon'></p>
                    <p className='heading-tertiary review__quote--text'>
                      I’m a skin care addict and love this stuff! Highly recommended
                    </p>
                  </blockquote>
                  <div className='review__stars'>
                    <IoStar className='review__stars--star' />
                    <IoStar className='review__stars--star' />
                    <IoStar className='review__stars--star' />
                    <IoStar className='review__stars--star' />
                    <IoStar className='review__stars--star' />
                  </div>
                  <p className='heading-tertiary review__name'>Nora</p>
                </div>
              </SwiperSlide>
            </SwiperSlide>
            <SwiperSlide>
              <SwiperSlide>
                <div className='review'>
                  <blockquote className='review__quote'>
                    <p className='review__quote--icon'></p>
                    <p className='heading-tertiary review__quote--text'>
                      Loved that DermDoc uses only top dermatologists. I had lots of acne and,
                      unlike other online treatments, I was able to get the oral medications I
                      needed.
                    </p>
                  </blockquote>
                  <div className='review__stars'>
                    <IoStar className='review__stars--star' />
                    <IoStar className='review__stars--star' />
                    <IoStar className='review__stars--star' />
                    <IoStar className='review__stars--star' />
                    <IoStar className='review__stars--star' />
                  </div>
                  <p className='heading-tertiary review__name'>Lisa</p>
                </div>
              </SwiperSlide>
            </SwiperSlide>
            <SwiperSlide>
              <SwiperSlide>
                <div className='review'>
                  <blockquote className='review__quote'>
                    <p className='review__quote--icon'></p>
                    <p className='heading-tertiary review__quote--text'>
                      Cleared up my skin. I had a really small amount of dryness with the cream but
                      it went away after the first week of use. Love how my skin glows
                    </p>
                  </blockquote>
                  <div className='review__stars'>
                    <IoStar className='review__stars--star' />
                    <IoStar className='review__stars--star' />
                    <IoStar className='review__stars--star' />
                    <IoStar className='review__stars--star' />
                  </div>
                  <p className='heading-tertiary review__name'>Sarah</p>
                </div>
              </SwiperSlide>
            </SwiperSlide>
            <SwiperSlide>
              <SwiperSlide>
                <div className='review'>
                  <blockquote className='review__quote'>
                    <p className='review__quote--icon'></p>
                    <p className='heading-tertiary review__quote--text'>
                      Simple, effective and so affordable! No easier way to get healthy, clear,
                      skin. My girlfriend loves my skin.
                    </p>
                  </blockquote>
                  <div className='review__stars'>
                    <IoStar className='review__stars--star' />
                    <IoStar className='review__stars--star' />
                    <IoStar className='review__stars--star' />
                    <IoStar className='review__stars--star' />
                    <IoStar className='review__stars--star' />
                  </div>
                  <p className='heading-tertiary review__name'>Mike</p>
                </div>
              </SwiperSlide>
            </SwiperSlide>
          </Swiper>
        </section>

        <section className='section-how' id='how'>
          <div className='container center-text'>
            <h1 className='heading-primary text-color-white'>How does it work?</h1>
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
                    Your dermatologist will design a personalized cream for you within 24 hours.
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

        <section className='section-doctors' id='doctors'>
          <div className='container center-text margin-bottom-md'>
            <h1 className='heading-primary'>You're in good hands</h1>
            <p className='heading-tertiary'>
              Every custom formula is prescribed by a board-certified dermatologist
            </p>
          </div>
          <div className='container margin-bottom-mg'>
            <Swiper
              breakpoints={{
                // when window width is >= 320px
                320: {
                  slidesPerView: 1,
                  spaceBetween: 16,
                },
                // when window width is >= 480px
                480: {
                  slidesPerView: 2,
                  spaceBetween: 32,
                },
                // when window width is >= 640px
                640: {
                  slidesPerView: 2,
                  spaceBetween: 48,
                },
              }}
              mousewheel
              simulateTouch
              centeredSlides={true}
              loop={true}
              pagination={true}
              navigation={true}
              modules={[Pagination, Navigation, Mousewheel]}>
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
              <SwiperSlide>
                <div className='doctor'>
                  <img className='doctor-img' src={SaamiHeadshot} alt='Saami Headshot' />
                  <div className='doctor-content'>
                    <div className='doctor-tags'>
                      <span className='tag tag--percentage'>Johns Hopkins University</span>
                    </div>
                    <p className='doctor-title'>Dr. Saami Khalifian M.D.</p>
                    <ul className='doctor-attributes'>
                      <li className='doctor-attribute'>
                        <span>
                          Dr. Khalifian completed his undergraduate studies at University of
                          California, Berkeley, majoring in molecular & cellular biology. He
                          received his medical degree from The Johns Hopkins School of Medicine. He
                          completed his dermatology residency at Harvard University School of
                          Medicine, with affiliations at Massachusetts General Hospital, Brigham &
                          Women's Hospital, Dana Farber Cancer Institute, and Boston Children's
                          Hospital.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>

        <section className='section-pricing' id='pricing'>
          <div className='container center-text margin-bottom-md'>
            <h1 className='heading-primary'>Pricing</h1>
            <p className='heading-tertiary'>Get started with our risk-free 3-month trial</p>
          </div>

          <div className='container grid grid--2-cols margin-bottom-md'>
            <div className='pricing-plan pricing-plan--starter'>
              <img className='plan-img' src={CreamPricing} alt='Headshot' />

              <div className='plan-content'>
                <header className='plan-header'>
                  <p className='plan-name'>
                    <span>Personalized Cream</span>
                  </p>
                  <p className='plan-price'>
                    <span>$</span>6.99
                  </p>
                  <p className='plan-price-subtext'>
                    <span>$</span>14.95 (after 3-month trial)
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
              <img className='plan-img' src={OralPricing} alt='Headshot' />

              <div className='plan-content'>
                <header className='plan-header'>
                  <p className='plan-name'>
                    <span>Oral Medications</span>
                  </p>

                  <p className='plan-price'>
                    <span>$</span>6.99
                  </p>
                  <p className='plan-price-subtext'>
                    <span>$</span>14.95 (after 3-month trial)
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
            <p className='heading-primary'>3-month risk-free trial</p>
            <p className='heading-tertiary'>
              If you don't like your cream after your 3-month trial, you will get a{' '}
              <span className='text-primary-color'>100%</span> refund. After your trial, plans renew
              at <span className='text-primary-color'>($14.95/month)</span>.
            </p>
          </div>

          <div className='container center-text'>
            <CustomButton className='btn btn--full' onClick={this.handleClick}>
              Try 3-month risk-free trial - $6.99/month
            </CustomButton>
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
