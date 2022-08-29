import React from 'react';
import ReactPixel from 'react-facebook-pixel';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import ProductWithBubbles from '../../assets/img/product-with-bubbles-desktop.png';
import SignUp from '../../components/sign-up/sign-up.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { updateVisitAsync } from '../../redux/visit/visit.actions';
import { selectVisitData } from '../../redux/visit/visit.selectors';

class SignInSignUp extends React.Component {
  componentDidUpdate() {
    const {
      currentUser,
      visit: { visit_id },
      updateVisitAsync,
    } = this.props;

    if (currentUser != null) {
      ReactPixel.track('CompleteRegistration', {
        content_name: 'User authenticated',
        content_ids: [visit_id],
        value: 2.5,
        currency: 'USD',
      });

      updateVisitAsync(visit_id, {
        status: 'authenticated',
        patient_id: currentUser.id,
        email: currentUser.email,
      });
    }
  }

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
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  visit: selectVisitData,
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  updateVisitAsync: (visitID, updatedVisitData) =>
    dispatch(updateVisitAsync(visitID, updatedVisitData)),
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignInSignUp));
