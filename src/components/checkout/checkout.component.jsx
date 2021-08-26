import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import 'survey-react/modern.css';
import { fetchCheckoutURLStartAsync } from '../../redux/checkout/checkout.actions';
import {
  selectCheckoutErrorMessage,
  selectCheckoutIsFetchingURL,
  selectCheckoutURL,
} from '../../redux/checkout/checkout.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { updateVisitAsync } from '../../redux/visit/visit.actions';
import { selectVisitData } from '../../redux/visit/visit.selectors';
class Checkout extends React.Component {
  componentDidMount() {
    const {
      currentUser,
      visit: { visit_id, status, insurance_info },
      fetchCheckoutURLStartAsync,
    } = this.props;
    this.revertStatusIfNoUser();
    if (currentUser && status !== 'paid' && !insurance_info.error) {
      fetchCheckoutURLStartAsync(currentUser.idToken, visit_id);
    }
  }

  componentDidUpdate() {
    this.revertStatusIfNoUser();
    const { currentUser, stripeCheckoutURL } = this.props;
    if (currentUser && stripeCheckoutURL) {
      window.location.replace(stripeCheckoutURL);
    }
  }

  revertStatusIfNoUser = () => {
    const {
      updateVisitAsync,
      currentUser,
      visit: { visit_id, status },
    } = this.props;
    if (!currentUser && status === 'authenticated') {
      //if user is not authenticated but status is, revert status back to "filled_out"
      updateVisitAsync(visit_id, { status: 'filled_out' });
      //This can happen if a user comes back later or on a seperate browser and is no longer logged in
    }
  };

  render() {
    const { isFetchingURL, stripeErrorMessage, visit } = this.props;

    if (
      visit.payment_status === 'needs_insurance_info' ||
      visit.payment_status === 'awaiting_cost' ||
      visit.payment_status === 'paid'
    ) {
      let headerText = '';

      if (visit.payment_status === 'paid') {
        if (visit.cost > 0) {
          headerText =
            'Hooray! You have successfully paid for this live video visit.';
        } else {
          headerText =
            'Hooray! Your out of pocket cost for this visit was $0 so you are all set!';
        }
      } else {
        headerText =
          'Hooray! You have successfully scheduled a live video visit.';
      }

      let additionalInfo = '';
      if (visit.payment_status === 'needs_insurance_info') {
        additionalInfo =
          'Keep in mind, you will be asked for your insurance member ID before the visit starts';
      } else if (visit.payment_status === 'awaiting_cost') {
        additionalInfo =
          "Keep in mind, we will send you an email with your out of pocket cost (if any) once your doctor's front-desk runs your insurance information.  ";
      }
      return (
        <div className="checkout-page">
          <div className="container">
            <div className="visit-paid-container">
              <h1>{headerText}</h1>

              {(visit.payment_status === 'needs_insurance_info' ||
                visit.payment_status === 'awaiting_cost') && (
                <p>
                  An email has been sent to{' '}
                  {visit.original_patient_information.email} with details
                  pertaining to your visit.
                </p>
              )}

              <p>{additionalInfo}</p>

              <p>
                If you have any questions, please email omar@medicall.com for
                same-day responses.
              </p>
            </div>
          </div>
        </div>
      );
    } else {
      if (stripeErrorMessage) {
        return (
          <div className="spinner-overlay">
            <h1>{stripeErrorMessage}</h1>
          </div>
        );
      } else {
        if (isFetchingURL) {
          return (
            <div className="spinner-overlay">
              <h2>Loading your checkout. Please wait...</h2>
              <div className="spinner-container" />
            </div>
          );
        } else {
          return (
            <div className="spinner-overlay">
              <h2>Redirecting to secure checkout page...</h2>
              <div className="spinner-container" />
            </div>
          );
        }
      }
    }
  }
}

const mapStateToProps = createStructuredSelector({
  visit: selectVisitData,
  currentUser: selectCurrentUser,
  stripeCheckoutURL: selectCheckoutURL,
  isFetchingURL: selectCheckoutIsFetchingURL,
  stripeErrorMessage: selectCheckoutErrorMessage,
});

const mapDispatchToProps = (dispatch) => ({
  updateVisitAsync: (visitID, updatedVisitData) =>
    dispatch(updateVisitAsync(visitID, updatedVisitData)),
  fetchCheckoutURLStartAsync: (idToken, visitID) =>
    dispatch(fetchCheckoutURLStartAsync(idToken, visitID)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Checkout)
);
