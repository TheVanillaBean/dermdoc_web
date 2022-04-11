import React from 'react';
import Faq from 'react-faq-component';
import { IoStar } from 'react-icons/io5';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Mousewheel, Navigation, Pagination } from 'swiper';
import 'swiper/modules/mousewheel/mousewheel.min.css';
import 'swiper/modules/navigation/navigation.min.css';
import 'swiper/modules/pagination/pagination.min.css';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import 'swiper/swiper.min.css';
import FarahHeadshot from '../../assets/img/farah-headshot.jpg';
import OmarHeadshot from '../../assets/img/omar-headshot.jpeg';
import ProductDetailDesktop from '../../assets/img/product-detail-desktop.png';
import ProductDetailMobile from '../../assets/img/product-detail-mobile.png';
import SaamiHeadshot from '../../assets/img/saami_headshot.jpeg';
import CustomButton from '../../components/custom-button/custom-button.component';
import Footer from '../../components/footer/footer.component';
import Header from '../../components/header/header.component';
import IngredientsSwiper from '../../components/ingredients-swiper/ingredients-swiper.component';
import { updateVisitReason } from '../../redux/search/search.actions';
import { homepageFAQ } from '../../utils/faq.utils';

class ProductPage extends React.Component {
  state = {
    product: 'acne',
  };

  componentDidMount() {
    const { match } = this.props;

    const product = match.params.product;

    this.setState({
      product: product,
    });
  }

  handleClick = () => {
    const { history, updateVisitReason } = this.props;

    document.body.classList.remove('sticky');

    updateVisitReason('Acne');
    history.push(`get_started`);
  };

  getIngredientsList = () => {
    const { product } = this.state;
    if (product.toLowerCase() === 'acne') {
      return 'Tretinoin 0.015-0.057%, Clindamycin 1.7%, Azelaic Acid 13%, Niacinamide 4%, Glycerin (Wetting Agent), Versabase Anhydrous';
    } else if (product.toLowerCase() === 'anti-aging') {
      return 'Tretinoin 0.015-0.057%, Ascorbic Acid 1%, Glycerin (Wetting Agent), Versabase Anhydrous';
    } else if (product.toLowerCase() === 'rosacea') {
      return 'Metronidazole 0.85%, Zinc Pyrithione 1.25%, Ketoconazole 1.6%, Glycerin (Wetting Agent), Versabase Anhydrous';
    } else if (product.toLowerCase() === 'melasma') {
      return 'Tretinoin 0.015%, Hydroquinone 6%, Kojic Acid 1 %, Hydrocortisone 2.5%, Glycerin (Wetting Agent), Versabase Anhydrous';
    }
  };

  render() {
    const { isBestSeller = false } = this.props;
    const { product } = this.state;

    return (
      <main>
        <Header />

        <section className='section-product-details'>
          <div className='container center-text margin-bottom-md'></div>
          <div className='grid grid--2-cols margin-bottom-mg'>
            <img
              className='product-photo-desktop'
              src={ProductDetailDesktop}
              alt='Product Details'
            />
            <img className='product-photo-mobile' src={ProductDetailMobile} alt='Product Details' />

            <div className='product-details'>
              <div className='product-details__header'>
                <p className='heading-primary product-details__header--title'>
                  {product.charAt(0).toUpperCase() + product.slice(1)} Cream (derm-grade)
                </p>
                <p className='heading-secondary product-details__header--subtitle margin-bottom-sm'>
                  $6.99/month
                </p>
              </div>

              {isBestSeller ?? <span className='product-details--bestseller'>BESTSELLER</span>}

              <div className='product-details__description'>
                <p className='product-details__description--text margin-bottom-sm'>
                  <span>
                    <span className='product-details__description--text-bold'>
                      Best of its kind -{' '}
                    </span>
                    You'll get a custom cream that is a blend of several prescription ingredients
                    personalized just-for-you by a dermatologist. Your evaluation is included for
                    free.
                  </span>
                </p>
                <p className='product-details__description--text'>
                  <span>
                    <span className='product-details__description--text-bold'>Ingredients - </span>
                    {this.getIngredientsList()}
                  </span>
                </p>
              </div>

              <div className='product-details__checkout-container'>
                <CustomButton className='btn btn--full' onClick={() => this.handleClick()}>
                  Start Checkout - $6.99/month
                </CustomButton>

                <p className='product-details__checkout-container--shipping'>Free Shipping</p>
                <p className='product-details__checkout-container--disclaimer'>
                  *Before checkout, answer questions and upload photos of your skin for your
                  dermatologist to evaluate your skin.
                </p>
              </div>

              <div className='product-details__grid grid--2-cols'>
                <div className='product-details__grid--item'>
                  <span>😊</span>
                  100% money-back guarantee
                </div>
                <div className='product-details__grid--item'>
                  <span>💌</span>
                  Delivered every 3-months
                </div>
                <div className='product-details__grid--item'>
                  <span>🧴</span>
                  Includes Free Skin Evaluation
                </div>
                <div className='product-details__grid--item'>
                  <span>℞</span>
                  Prescription Ingredients
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='section-ingredients' id='ingredients'>
          <div className='container center-text margin-bottom-md'>
            <h1 className='heading-primary'>Prescription Ingredients</h1>
            <p className='heading-tertiary'>Up to 20x more effective than over-the-counter</p>
          </div>
          <div className='container margin-bottom-mg'>
            <IngredientsSwiper product={product} />
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

        <section className='section-faq' id='faq'>
          <div className='container center-text'>
            <h2 className='subheading'>FAQ</h2>
            <h2 className='heading-secondary'>Learn why DermDoc is unique</h2>
          </div>

          <div className='container faq-style-wrapper'>
            <Faq
              data={homepageFAQ}
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

export default withRouter(connect(null, mapDispatchToProps)(ProductPage));
