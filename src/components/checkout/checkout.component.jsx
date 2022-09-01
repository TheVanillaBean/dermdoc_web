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
  state = {
    submitted: false,
  };

  componentDidMount() {
    const {
      currentUser,
      visit: { visit_id },
      fetchCheckoutURLStartAsync,
    } = this.props;
    if (currentUser) {
      fetchCheckoutURLStartAsync(currentUser.idToken, visit_id);
    }
  }

  render() {
    const { isFetchingURL, stripeErrorMessage, submitted, visit } = this.props;

    if (stripeErrorMessage) {
      return this.stripeErrorUI(stripeErrorMessage);
    } else {
      return (
        <div className='spinner-overlay'>
          <h2>Redirecting to secure checkout page...</h2>
          <div className='spinner-container' />
          {isFetchingURL && submitted ? (
            <div className='spinner-overlay'>
              <h2>Loading your checkout. Please wait...</h2>
              <div className='spinner-container' />
            </div>
          ) : null}
        </div>
      );
    }
  }

  stripeErrorUI(stripeErrorMessage) {
    return (
      <div className='spinner-overlay'>
        <h1>{stripeErrorMessage}</h1>
      </div>
    );
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
