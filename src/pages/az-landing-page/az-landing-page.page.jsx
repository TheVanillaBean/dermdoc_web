import React from 'react';
import Faq from 'react-faq-component';
import {
  IoBanOutline,
  IoCheckmarkCircleOutline,
  IoCheckmarkOutline,
  IoHappyOutline,
  IoHeartOutline,
  IoMoonOutline,
  IoReorderFourOutline,
  IoSnowOutline,
  IoSunnyOutline,
  IoThermometerOutline,
  IoWaterOutline,
} from 'react-icons/io5';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cream1 from '../../assets/img/cream-1.jpeg';
import Cream2 from '../../assets/img/cream-2.jpeg';
import AudreyPersona from '../../assets/img/medicall_persona.jpg'; // Tell Webpack this JS file uses this image
import CustomButton from '../../components/custom-button/custom-button.component';
import Footer from '../../components/footer/footer.component';
import Header from '../../components/header/header.component';
import HeroSection from '../../components/hero-section/hero-section.component';
import { analytics, joinWaitlistWithEmail } from '../../firebase/firebase.utils';
import { updateVisitReason } from '../../redux/search/search.actions';

class AZLandingPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
    };
  }

  componentDidMount() {
    analytics.logEvent('Homepage Viewed');
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email } = this.state;

    const { visitReason } = this.props;

    try {
      const joinWaitlist = await joinWaitlistWithEmail(email, 'AZ', visitReason);

      if (joinWaitlist.error) {
        toast.error(joinWaitlist.message);
      } else {
        toast.success('You have joined the waitlist!');
      }

      this.setState({
        email: '',
      });
    } catch (e) {
      let errorText = e.message;

      toast.error(errorText);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
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
    const { email } = this.state;

    return (
      <main>
        <div className='hero-container'>
          <Header isWaitlistLandingPage />
          <HeroSection
            homepage={false}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            email={this.state.email}
          />
        </div>
        <section className='section-how' id='how'>
          <div className='container center-text'>
            <span className='subheading'>How do I get my formulas?</span>
            <h2 className='heading-secondary'>
              Your dermatologist will figure out a custom formula just for you
            </h2>
          </div>

          <div className='steps container grid grid--3-cols'>
            <div className='feature'>
              <div className='feature-icon'>
                <p className='feature-icon-text'>01</p>
              </div>
              <p className='feature-title'>Upload selfies</p>
              <p className='feature-text'>Answer some questions and share photos of your skin.</p>
            </div>
            <div className='feature'>
              <div className='feature-icon'>
                <p className='feature-icon-text'>02</p>
              </div>
              <p className='feature-title'>Recieve custom formula</p>
              <p className='feature-text'>
                You will get a personalized topical cream within 24 hours.
              </p>
            </div>
            <div className='feature'>
              <div className='feature-icon'>
                <p className='feature-icon-text'>03</p>
              </div>
              <p className='feature-title'>Check-in as needed</p>
              <p className='feature-text'>
                You'll check-in with your dermatologist throughout your journey.
              </p>
            </div>
          </div>
        </section>

        <div className='border' />

        <section className='section-personas margin-bottom-md' id='personas'>
          <div className='container center-text'>
            <span className='subheading'>A formula tailored to your skin</span>
            <h2 className='heading-secondary'>Skincare finally made simple</h2>
          </div>

          <div className='container margin-bottom-md'>
            <div className='persona'>
              <img className='persona__image' src={AudreyPersona} alt='Persona' />

              <div className='container'>
                <h1 className='persona__name'>Audrey's formula</h1>
                <p className='persona__occupation'>
                  <strong>Formula: </strong>Tretinoin, clindamycin, niacinimide
                </p>
                <p className='persona__description'>
                  Audrey has a busy schedule as a fitness instructor. Our custom formulation
                  simplifies her skincare to a once daily application. <br />
                </p>
                <ul className='list'>
                  <li className='list-item'>
                    <IoSunnyOutline className='list-icon' />
                    <p className='persona__item-header'>
                      <span>
                        <strong>In the Morning</strong>
                      </span>
                      <span className='persona__item-header__light'>Facial Moisturizer</span>
                    </p>
                  </li>
                  <li className='list-item'>
                    <IoMoonOutline className='list-icon' />
                    <p className='persona__item-header'>
                      <span>
                        <strong>Before Bed</strong>
                      </span>
                      <span className='persona__item-header__light'>Medicall Topical Cream</span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className='container center-text'>
            <h1 className='heading-tertiary'>Join the waitlist for a limited-time 50% discount</h1>
          </div>

          <div className='container additional-waitlist'>
            <form className='waitlist-form margin-center' onSubmit={this.handleSubmit}>
              <div className='waitlist-form__input-container'>
                <input
                  className={`waitlist-form__input-container__input`}
                  type='email'
                  name='email'
                  value={email}
                  onChange={this.handleChange}
                  label='Email'
                  placeholder='Enter email...'
                  required
                />
                <label className={`waitlist-form__input-container__label`} htmlFor='email'>
                  Enter email...
                </label>
              </div>

              <CustomButton className='custom-button waitlist-form__button' type='submit'>
                Join Waitlist
              </CustomButton>
            </form>
          </div>
        </section>

        <div className='border' />

        <section className='section-pricing' id='pricing'>
          <div className='container center-text'>
            <span className='subheading'>Pricing</span>
            <h2 className='heading-secondary'>Personalized skincare without the premium price</h2>
          </div>

          <div className='container grid grid--2-cols margin-bottom-md'>
            <div className='pricing-plan pricing-plan--starter'>
              <header className='plan-header'>
                <p className='plan-name'>
                  <span>Topical Medications</span>
                </p>
                <p className='plan-price'>
                  <span>$</span>24.95
                </p>
                <p className='plan-text'>
                  per month. Includes formula and <strong>unlimited check-ins</strong> with a
                  dermatologist.
                </p>
              </header>
              <ul className='list'>
                <li className='list-item'>
                  <IoHeartOutline className='list-icon' />
                  <span>
                    <strong>High concentration</strong> custom topical cream designed by a
                    dermatoligist
                  </span>
                </li>
                <li className='list-item'>
                  <IoHappyOutline className='list-icon' />
                  <span>
                    Topical cream <strong>delivered</strong> to your door (free shipping)
                  </span>
                </li>
                <li className='list-item'>
                  <IoCheckmarkCircleOutline className='list-icon' />
                  <span>
                    <strong>Unlimited</strong> online check-ins to monitor your skin
                  </span>
                </li>
              </ul>
            </div>

            <div className='pricing-plan pricing-plan--complete'>
              <header className='plan-header'>
                <p className='plan-name'>
                  <span>Oral Medications</span>
                </p>

                <p className='plan-price'>
                  <span>$</span>14.95
                </p>
                <p className='plan-text'>extra per month. In-case you need it &#128522;</p>
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
        </section>

        <div className='border' />

        <section className='section-ingredients' id='ingredients'>
          <div className='container center-text'>
            <span className='subheading'>Better Ingredients</span>
            <h2 className='heading-secondary'>Efficacy you won't find at a store</h2>
          </div>
          <div className='container grid grid--3-cols margin-bottom-md'>
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
                </ul>
              </div>
            </div>
            <div className='additional-ingredients'>
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
            </div>
          </div>
          <div className='container center-text'>
            <h1 className='heading-tertiary'>Join the waitlist for a limited-time 50% discount</h1>
          </div>

          <div className='container additional-waitlist margin-bottom-md'>
            <form className='waitlist-form margin-center' onSubmit={this.handleSubmit}>
              <div className='waitlist-form__input-container'>
                <input
                  className={`waitlist-form__input-container__input`}
                  type='email'
                  name='email'
                  value={email}
                  onChange={this.handleChange}
                  label='Email'
                  placeholder='Enter email...'
                  required
                />
                <label className={`waitlist-form__input-container__label`} htmlFor='email'>
                  Enter email...
                </label>
              </div>

              <CustomButton className='custom-button waitlist-form__button' type='submit'>
                Join Waitlist
              </CustomButton>
            </form>
          </div>
        </section>

        <div className='border' />

        <section className='section-additional'>
          <div className='container center-text'>
            <h2 className='subheading'>Your skin’s new best friend</h2>
            <h2 className='heading-secondary'>
              You'll receive expert care in addition to your formulas
            </h2>
          </div>

          <div className='blob-container'>
            <div className='blob-container__overlay'>
              <p className='paragraph'>
                Once you have your personal formulas, we’ll continue to help along your journey
                (like a personal assistant for your skin). Ask us any questions (seriously anything)
                and we will try our best to help &#128522;
              </p>
            </div>
          </div>
        </section>
        <section className='section-faq' id='faq'>
          <div className='container center-text'>
            <h2 className='subheading'>FAQ</h2>
            <h2 className='heading-secondary'>Learn why Medicall is unique</h2>
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

        <section className='bottom-waitlist' id='bottom-waitlist'>
          <div className='container center-text'>
            <h1 className='heading-tertiary'>Join the waitlist for a limited-time 50% discount</h1>
          </div>

          <div className='container additional-waitlist margin-bottom-md'>
            <form className='waitlist-form margin-center' onSubmit={this.handleSubmit}>
              <div className='waitlist-form__input-container'>
                <input
                  className={`waitlist-form__input-container__input`}
                  type='email'
                  name='email'
                  value={email}
                  onChange={this.handleChange}
                  label='Email'
                  placeholder='Enter email...'
                  required
                />
                <label className={`waitlist-form__input-container__label`} htmlFor='email'>
                  Enter email...
                </label>
              </div>

              <CustomButton className='custom-button waitlist-form__button' type='submit'>
                Join Waitlist
              </CustomButton>
            </form>
          </div>
        </section>

        <Footer />
        <ToastContainer
          position='top-right'
          bodyClassName='toastBody'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateVisitReason: (reason) => dispatch(updateVisitReason(reason)),
});

export default withRouter(connect(null, mapDispatchToProps)(AZLandingPage));
