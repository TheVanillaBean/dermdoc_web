import React from 'react';
import ReactPixel from 'react-facebook-pixel';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { createStructuredSelector } from 'reselect';
import ProductWithBubbles from '../../assets/img/product-with-bubbles-desktop.png';
import SignUp from '../../components/sign-up/sign-up.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { updateVisitAsync } from '../../redux/visit/visit.actions';

class SignInSignUp extends React.Component {
  componentDidUpdate() {
    const { history, currentUser, visitID, patientID, updateVisitAsync } = this.props;

    if (currentUser != null) {
      if (!patientID) {
        ReactPixel.track('CompleteRegistration', {
          content_name: 'User authenticated',
          content_ids: [visitID],
          value: 2.5,
          currency: 'USD',
        });
        updateVisitAsync(visitID, {
          patient_id: currentUser.id,
          email: currentUser.email,
        });

        history.push(`/visits/${visitID}`);

        return;
      }

      if (currentUser.id === patientID) {
        history.push(`/visits/${visitID}`);
      } else {
        toast.error('You are not authorized to access the data for this visit');
      }
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
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  updateVisitAsync: (visitID, updatedVisitData) =>
    dispatch(updateVisitAsync(visitID, updatedVisitData)),
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignInSignUp));
