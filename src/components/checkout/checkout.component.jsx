import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import 'survey-react/modern.css';
import { fetchQuestionsStartAsync } from '../../redux/questionnaire/questionnaire.actions';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import {
  fetchVisitSuccess,
  updateVisitAsync,
} from '../../redux/visit/visit.actions';
import { selectVisitData } from '../../redux/visit/visit.selectors';
import CustomButton from '../custom-button/custom-button.component';
class Checkout extends React.Component {
  componentDidMount() {
    this.revertStatusIfNoUser();
  }

  componentDidUpdate() {
    this.revertStatusIfNoUser();
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

  handleClick = async () => {
    const {
      currentUser,
      visit: { visit_id, status },
    } = this.props;
    if (currentUser && status !== 'paid') {
      await this.openStripeCheckoutURL(currentUser.idToken, visit_id);
    }
  };

  openStripeCheckoutURL = async (idToken, visitID) => {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${idToken}`,
    };

    const fetchStripeURL = await axios.post(
      `https://acfb9630196f.ngrok.io/medicall-dev-58c31/us-central1/api/checkout/create-checkout-session`,
      {
        visitId: visitID,
      },
      {
        headers: headers,
      }
    );

    if (fetchStripeURL.status === 200) {
      const url = fetchStripeURL.data.url;
      const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
      if (newWindow) newWindow.opener = null;
    } else {
      console.log('fetch stripe URL error');
    }
  };

  render() {
    const {
      visit: { status },
    } = this.props;
    return (
      <div className="checkout-page">
        <div className="container">
          <h1>Visit Status: {status}</h1>
          <CustomButton
            className="search__submit btn"
            onClick={this.handleClick}
          >
            Pay with Stripe
          </CustomButton>
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
  fetchQuestionsStartAsync: (symptom) =>
    dispatch(fetchQuestionsStartAsync(symptom)),
  updateVisitAsync: (visitID, updatedVisitData) =>
    dispatch(updateVisitAsync(visitID, updatedVisitData)),
  fetchVisitSuccess: (visitMap) => dispatch(fetchVisitSuccess(visitMap)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Checkout)
);
