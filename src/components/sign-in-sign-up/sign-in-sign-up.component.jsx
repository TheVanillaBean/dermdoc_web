import React from 'react';
import { IoInformationCircle } from 'react-icons/io5';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { createStructuredSelector } from 'reselect';
import ProductWithBubbles from '../../assets/img/product-with-bubbles-desktop.png';
import SignUp from '../../components/sign-up/sign-up.component';
import { selectVisitData } from '../../redux/visit/visit.selectors';

class SignInSignUp extends React.Component {
  render() {
    const { visit, notAuthorized = false } = this.props;

    if (visit && visit.patient_id) {
      return this.existingVisitUI(notAuthorized);
    }
    return this.newVisitUI();
  }

  credentialsDoNotMatchHeader() {
    return (
      <div className='container auth-container__header'>
        <h1 className='heading-secondary margin-bottom-ex-sm'>&#128556; Oh no!</h1>
        <p className='heading-tertiary'>
          It looks like this visit was created under a different account than the one you are
          currently logged in as. Please login to the same account you used to create this visit.
        </p>

        <SignUp existingVisit={true} />
      </div>
    );
  }

  credentialsNotEnteredHeader() {
    return (
      <div className='container auth-container__header'>
        <h1 className='heading-secondary margin-bottom-ex-sm'>&#127881; Welcome back!</h1>
        <p className='heading-tertiary'>Please login to access this visit.</p>

        <SignUp existingVisit={true} />
      </div>
    );
  }

  existingVisitUI(notAuthorized) {
    return (
      <div className='auth-container'>
        {notAuthorized ? this.credentialsDoNotMatchHeader() : this.credentialsNotEnteredHeader()}
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
      </div>
    );
  }

  newVisitUI() {
    return (
      <div className='auth-container'>
        <div className='container auth-container__header'>
          <h1 className='heading-secondary margin-bottom-ex-sm'>
            &#127881; Hooray! Your free trial is waiting!
          </h1>
          <p className='heading-tertiary'>
            Our dermatologists need to know a few things about you first before they can mix a
            personalized formula.
          </p>

          <div className='pricing-box'>
            <img className='pricing-box__img' src={ProductWithBubbles} alt='Product with Bubbles' />
            <div className='pricing-box__text'>
              <h1 className='heading-secondary text-primary-color'>FREE</h1>
              <p className='paragraph'>just pay $9.99 for shipping</p>
            </div>
          </div>

          <div className='checkout-container__info-box'>
            <IoInformationCircle className='checkout-container__info-box--img' />
            <p className='checkout-container__info-box--text '>
              Love your personalized cream in 90 days or get your money back.
            </p>
          </div>

          <SignUp existingVisit={false} />
        </div>
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
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  visit: selectVisitData,
});

export default withRouter(connect(mapStateToProps)(SignInSignUp));
