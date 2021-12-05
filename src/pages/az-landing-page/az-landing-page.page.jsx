import React from 'react';
import {
  IoBagAddOutline,
  IoCheckmarkCircleOutline,
  IoHappyOutline,
  IoHeartOutline,
  IoLeafOutline,
} from 'react-icons/io5';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

  // handleClick = () => {
  //   const { history, updateVisitReason } = this.props;

  //   updateVisitReason('Acne');
  //   history.push(`get_started`);
  // };

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
                  <input
                    className={`waitlist-form__input`}
                    type='email'
                    name='email'
                    value={email}
                    onChange={this.handleChange}
                    label='Email'
                    placeholder='Enter Email'
                    required
                  />

                  <CustomButton className='custom-button' type='submit'>
                    JOIN WAITLIST
                  </CustomButton>
                </form>
              </div>
            </div>
          </section>
        </div>
        <section className='section-how' id='how'>
          <div className='container center-text'>
            <span className='subheading'>How it works</span>
            <h2 className='heading-secondary'>
              Get a dermatologist to help you every step of the way to healthier skin.
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
        <section className='section-pricing' id='pricing'>
          <div className='container center-text'>
            <span className='subheading'>Pricing</span>
            <h2 className='heading-secondary'>Personalized skincare without the premium price</h2>
          </div>

          <div className='container'>
            <div className='pricing-plan pricing-plan--starter'>
              <header className='plan-header'>
                <p className='plan-price'>
                  <span>$</span>19.00
                </p>
                <p className='plan-text'>
                  per month. Includes skin products and an evaluation from a dermatologist.
                </p>
              </header>
              <ul className='list'>
                <li className='list-item'>
                  <IoHeartOutline className='list-icon' />
                  <span>
                    Full skin evaluation and
                    <strong> custom treatment plan</strong>
                  </span>
                </li>
                <li className='list-item'>
                  <IoLeafOutline className='list-icon' />
                  <span>
                    Recieve <strong>derm-grade</strong> creams, lotions, and pills
                  </span>
                </li>
                <li className='list-item'>
                  <IoBagAddOutline className='list-icon' />
                  <span>
                    <strong>Can use</strong> insurance prescription coverage (optional)
                  </span>
                </li>
                <li className='list-item'>
                  <IoHappyOutline className='list-icon' />
                  <span>
                    Prescriptions <strong>delivered</strong> at-home or to any pharmacy
                  </span>
                </li>
                <li className='list-item'>
                  <IoCheckmarkCircleOutline className='list-icon' />
                  <span>
                    Routine <strong>doctor checkups</strong> to monitor your skin
                  </span>
                </li>
              </ul>
              <div className='plan-sign-up'>
                <CustomButton className='btn btn--full' onClick={this.handleClick}>
                  Start your 30-day free trial
                </CustomButton>
              </div>
            </div>
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

export default withRouter(connect(null, mapDispatchToProps)(AZLandingPage));
