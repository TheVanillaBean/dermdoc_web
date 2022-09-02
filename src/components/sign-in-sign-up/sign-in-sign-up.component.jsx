import React from 'react';
import { withRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import ProductWithBubbles from '../../assets/img/product-with-bubbles-desktop.png';
import SignUp from '../../components/sign-up/sign-up.component';

class SignInSignUp extends React.Component {
  render() {
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
              <h1 className='heading-secondary'>$9.99</h1>
              <p className='paragraph'>just pay for shipping</p>
            </div>
          </div>

          <SignUp />
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

export default withRouter(SignInSignUp);
