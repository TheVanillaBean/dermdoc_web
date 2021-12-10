import React from 'react';
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

  render() {
    const { email } = this.state;

    return (
      <main>
        <div className='hero-container-az'>
          <Header />
          <section className='section-hero-az'>
            <div className='hero'>
              <div className='hero-text-box'>
                <h1 className='heading-primary'>Get your own personal skincare formulas</h1>
                <h1 className='heading-tertiary'>Launching in AZ February 2022</h1>
                <h1 className='heading-tertiary'>
                  Join the waitlist for a limited-time 50% discount
                </h1>

                <form className='waitlist-form' onSubmit={this.handleSubmit}>
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
            </div>
          </section>
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
              <p className='feature-text'>
                Answer some questions and share photos of your skin. This takes 5 minutes and helps
                your doctor figure out your custom treatment formula.
              </p>
            </div>
            <div className='feature'>
              <div className='feature-icon'>
                <p className='feature-icon-text'>02</p>
              </div>
              <p className='feature-title'>Recieve a personalized plan</p>
              <p className='feature-text'>
                You will get a personalized treatment plan within 24 hours. We’ll send your
                prescription to your door with free 2-day shipping.
              </p>
            </div>
            <div className='feature'>
              <div className='feature-icon'>
                <p className='feature-icon-text'>03</p>
              </div>
              <p className='feature-title'>Check-in as needed</p>
              <p className='feature-text'>
                You’ll check-in with your doctor throughout your treatment and make adjustments as
                needed.
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

          <div className='container'>
            <div className='persona'>
              <img className='persona__image' src={AudreyPersona} alt='Persona' />

              <div className='container'>
                <h1 className='persona__name'>Audrey's formula</h1>
                <p className='persona__occupation'>
                  <strong>Formula: </strong>Tretinoin, clindamycin, niacinimide
                </p>
                <p className='persona__description'>
                  Audrey has a busy schedule as a fitness instructor. Our custom formulation
                  simplifies her skin care to a once daily application. <br />
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
                      <span className='persona__item-header__light'>Medicall Custom Formula</span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
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
                  <span>$</span>24.90
                </p>
                <p className='plan-text'>
                  per month. Includes skin products and an evaluation from a dermatologist.
                </p>
              </header>
              <ul className='list'>
                <li className='list-item'>
                  <IoHeartOutline className='list-icon' />
                  <span>
                    <strong>Custom formula</strong> designed by a dermatoligist
                  </span>
                </li>
                <li className='list-item'>
                  <IoHappyOutline className='list-icon' />
                  <span>
                    Prescriptions <strong>delivered</strong> to your door (free shipping)
                  </span>
                </li>
                <li className='list-item'>
                  <IoCheckmarkCircleOutline className='list-icon' />
                  <span>
                    Routine <strong>online check-ins</strong> to monitor your skin
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
                  <span>$</span>14.90
                </p>
                <p className='plan-text'>per month. In-case you need it &#128522;</p>
              </header>
              <ul className='list'>
                <li className='list-item'>
                  <IoHeartOutline className='list-icon' />
                  <span>
                    Oral medications include<strong> spironolactone and various antibiotics</strong>
                  </span>
                </li>
                <li className='list-item'>
                  <IoHappyOutline className='list-icon' />
                  <span>
                    Prescriptions <strong>delivered</strong> to your door (free shipping)
                  </span>
                </li>
                <li className='list-item'>
                  <IoCheckmarkCircleOutline className='list-icon' />
                  <span>
                    Routine <strong>online check-ins</strong> to monitor your skin
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <div className='border' />

        <section class='section-ingredients' id='meals'>
          <div class='container center-text'>
            <span class='subheading'>Better Ingredients</span>
            <h2 class='heading-secondary'>Efficacy you won't find at a store</h2>
          </div>
          <div class='container grid grid--3-cols margin-bottom-md'>
            <div class='ingredient'>
              <img class='ingredient-img' src={Cream1} alt='Cream 1' />
              <div class='ingredient-content'>
                <div class='ingredient-tags'>
                  <span class='tag tag--percentage'>0.018% - 0.1%</span>
                </div>
                <p class='ingredient-title'>Tretinoin</p>
                <ul class='ingredient-attributes'>
                  <li class='ingredient-attribute'>
                    <IoSunnyOutline className='list-icon' />
                    <span>
                      <strong>Sun-damaged</strong> skin
                    </span>
                  </li>
                  <li class='ingredient-attribute'>
                    <IoReorderFourOutline className='list-icon' />
                    <span>
                      Wrinkles and <strong>fine lines</strong>
                    </span>
                  </li>
                  <li class='ingredient-attribute'>
                    <IoBanOutline className='list-icon' />
                    <span>
                      <strong>Clogged</strong> pores
                    </span>
                  </li>
                  <li class='ingredient-attribute'>
                    <IoWaterOutline className='list-icon' />
                    <span>
                      <strong>Hyperpigmentation</strong>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div class='ingredient'>
              <img class='ingredient-img' src={Cream2} alt='Meal 2' />
              <div class='ingredient-content'>
                <div class='ingredient-tags'>
                  <span class='tag tag--percentage'>1%</span>
                </div>
                <p class='ingredient-title'>Clindamycin</p>
                <ul class='ingredient-attributes'>
                  <li class='ingredient-attribute'>
                    <IoThermometerOutline className='list-icon' />
                    <span>
                      <strong>Inflammation</strong>
                    </span>
                  </li>
                  <li class='ingredient-attribute'>
                    <IoSnowOutline className='list-icon' />
                    <span>
                      <strong>Acne-causing</strong> bacteria
                    </span>
                  </li>
                  <li class='ingredient-attribute'>
                    <IoBanOutline className='list-icon' />
                    <span>
                      <strong>Clogged</strong> pores
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div class='additional-ingredients'>
              <h3 class='paragraph'>Additional ingredients:</h3>
              <ul class='list'>
                <li class='list-item'>
                  <IoCheckmarkOutline className='list-icon' />
                  <span> Metronidazole 1%</span>
                </li>
                <li class='list-item'>
                  <IoCheckmarkOutline className='list-icon' />
                  <span>Azelaic Acid 15%</span>
                </li>
                <li class='list-item'>
                  <IoCheckmarkOutline className='list-icon' />
                  <span>Hydroquinone 6%</span>
                </li>
                <li class='list-item'>
                  <IoCheckmarkOutline className='list-icon' />
                  <span>Tranexamic Acid 1%</span>
                </li>
                <li class='list-item'>
                  <IoCheckmarkOutline className='list-icon' />
                  <span>Doxycycline</span>
                </li>
                <li class='list-item'>
                  <IoCheckmarkOutline className='list-icon' />
                  <span>Minocycline</span>
                </li>
                <li class='list-item'>
                  <IoCheckmarkOutline className='list-icon' />
                  <span>Sulfamethoxazole Trimethoprim</span>
                </li>
                <li class='list-item'>
                  <IoCheckmarkOutline className='list-icon' />
                  <span>Spironolactone</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <div className='border' />

        <section className='section-additional'>
          <div className='container center-text margin-bottom-md'>
            <h2 className='subheading'>Your skin’s new best friend</h2>
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