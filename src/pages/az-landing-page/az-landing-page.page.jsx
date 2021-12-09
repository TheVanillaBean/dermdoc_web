import React from 'react';
import {
  IoCheckmarkOutline,
  IoMoonOutline,
  IoReloadOutline,
  IoSunnyOutline,
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
                  Join the waitlist for a limited-time 50% discount ($180)
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
              A dermatologist will help you every step of the way to healthier skin.
            </h2>
          </div>

          <div className='steps container grid grid--3-cols'>
            <div className='feature'>
              <div className='feature-icon'>
                <p className='feature-icon-text'>01</p>
              </div>
              <p className='feature-title'>Upload selfies</p>
              <p className='feature-text'>
                Answer some questions and share photos of your specific issue so your doctor can
                give an accurate diagnosis. This should only take 5-10 minutes.
              </p>
            </div>
            <div className='feature'>
              <div className='feature-icon'>
                <p className='feature-icon-text'>02</p>
              </div>
              <p className='feature-title'>Recieve a personalized plan</p>
              <p className='feature-text'>
                You will get a personalized treatment plan within 24 hours with prescriptions sent
                anywhere you’d like.
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
              <h1 className='persona__name'>Audrey's formula</h1>
              <p className='persona__occupation'>Fitness instructor</p>
              <p className='persona__description'>
                Audrey has a busy schedule and is often short on sleep. We came up with a customized
                formula to address her circumstances.
              </p>
              <ul className='list'>
                <li className='list-item'>
                  <IoSunnyOutline className='list-icon' />
                  <p className='persona__item-header'>
                    <span>
                      <strong>In the Morning</strong>
                    </span>
                    <span className='persona__item-header__light'>
                      Tretinoin, Aloe Vera, Jojoba Oil
                    </span>
                  </p>
                </li>
                <li className='list-item'>
                  <IoMoonOutline className='list-icon' />
                  <p className='persona__item-header'>
                    <span>
                      <strong>Before Bed</strong>
                    </span>
                    <span className='persona__item-header__light'>
                      Tretinoin, Doxycycline, Kukui Nut Oil
                    </span>
                  </p>
                </li>
                <li className='list-item'>
                  <IoReloadOutline className='list-icon' />
                  <p className='persona__item-header'>
                    <span>
                      <strong>2x per Week</strong>
                    </span>
                    <span className='persona__item-header__light'>
                      Clindamycin, Aloe Vera, Coconut Oil
                    </span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
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
                  <span class='tag tag--vegetarian'>Lorem</span>
                </div>
                <p class='ingredient-title'>Trentinoin</p>
                <ul class='ingredient-attributes'>
                  <p className='paragraph ingredient-description'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse itaque ut fugit
                    autem et reiciendis id inventore.
                  </p>
                </ul>
              </div>
            </div>
            <div class='ingredient'>
              <img class='ingredient-img' src={Cream2} alt='Meal 2' />
              <div class='ingredient-content'>
                <div class='ingredient-tags'>
                  <span class='tag tag--vegan'>Lorem</span>
                  <span class='tag tag--paleo'>Ipsum</span>
                </div>
                <p class='ingredient-title'>Clindamycin</p>
                <ul class='ingredient-attributes'>
                  <p className='paragraph ingredient-description'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse itaque ut fugit
                    autem et reiciendis id inventore.
                  </p>
                </ul>
              </div>
            </div>
            <div class='additional-ingredients'>
              <h3 class='paragraph'>Additional ingredients:</h3>
              <ul class='list'>
                <li class='list-item'>
                  <IoCheckmarkOutline className='list-icon' />
                  <span>Lorem ipsum</span>
                </li>
                <li class='list-item'>
                  <IoCheckmarkOutline className='list-icon' />
                  <span>Amet consectetur</span>
                </li>
                <li class='list-item'>
                  <IoCheckmarkOutline className='list-icon' />
                  <span>Reiciendis</span>
                </li>
                <li class='list-item'>
                  <IoCheckmarkOutline className='list-icon' />
                  <span>Adipisicing</span>
                </li>
                <li class='list-item'>
                  <IoCheckmarkOutline className='list-icon' />
                  <span>Itaque</span>
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
