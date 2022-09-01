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
      visit: { visit_id, status },
      fetchCheckoutURLStartAsync,
    } = this.props;
    if (status !== 'paid' || status !== 'ready_for_review' || status !== 'payment_failed') {
      //false means there is a user
      if (!this.revertStatusIfNoUser()) {
        fetchCheckoutURLStartAsync(currentUser.idToken, visit_id);
      }
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
      visit: { visit_id },
    } = this.props;
    if (!currentUser) {
      //if user is not authenticated but status is, revert status back to "initiated"
      updateVisitAsync(visit_id, { status: 'initiated' });
      return true;
      //This can happen if a user comes back later or on a separate browser and is no longer logged in
    }

    return false;
  };

  render() {
    const { isFetchingURL, stripeErrorMessage, visit } = this.props;

    if (visit.status === 'paid') {
      return (
        <div className='checkout-page'>
          <div className='container'>
            <div className='visit-paid-container'>
              <h1>Hooray! Your payment was successful.</h1>
              <p>You will receive an email with more details on your custom cream shortly.</p>
              <p>
                If you have any questions, please email contact@dermdoc.com for same-day responses.
              </p>
            </div>
          </div>
        </div>
      );
    } else {
      if (stripeErrorMessage) {
        return (
          <div className='spinner-overlay'>
            <h1>{stripeErrorMessage}</h1>
          </div>
        );
      } else {
        if (isFetchingURL) {
          return (
            <div className='spinner-overlay'>
              <h2>Loading your checkout. Please wait...</h2>
              <div className='spinner-container' />
            </div>
          );
        } else {
          return (
            <div className='spinner-overlay'>
              <h2>Redirecting to secure checkout page...</h2>
              <div className='spinner-container' />
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Checkout));
