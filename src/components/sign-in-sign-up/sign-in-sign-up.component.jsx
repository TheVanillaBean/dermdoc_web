import React from 'react';
import ReactPixel from 'react-facebook-pixel';
import { IoCheckmarkCircleOutline, IoHappyOutline, IoHeartOutline } from 'react-icons/io5';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
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
            &#127881; Hooray! We are in your area!
          </h1>
          <p className='heading-tertiary'>
            Our dermatologists need to know a few things about you first before they can mix a
            personalized formula.
          </p>

          <div className='pricing-box'>
            <div className='pricing-box__header'>
              <h1 className='pricing-box__header--price heading-primary'>
                $9.99 <span className='paragraph center-text'>($3.33/mo)</span>
              </h1>
              <h1 className='pricing-box__header--duration heading-tertiary'>3 months supply</h1>
            </div>
            <div className='pricing-box__details'>
              <ul className='list'>
                <li className='list__item'>
                  <IoHeartOutline className='list__item--icon' />
                  <span className='list__item--text'>
                    <strong>Custom</strong> topical cream designed just for you
                  </span>
                </li>
                <li className='list__item'>
                  <IoHappyOutline className='list__item--icon' />
                  <span className='list__item--text'>
                    <strong>Delivered</strong> to your door
                  </span>
                </li>
                <li className='list__item'>
                  <IoCheckmarkCircleOutline className='list__item--icon' />
                  <span className='list__item--text'>
                    <strong>Check-ins</strong> to monitor your skin
                  </span>
                </li>
              </ul>
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
