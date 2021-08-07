import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import 'survey-react/modern.css';
import { firestore } from '../../firebase/firebase.utils';
import { fetchQuestionsStartAsync } from '../../redux/questionnaire/questionnaire.actions';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import {
  fetchVisitSuccess,
  updateVisitAsync,
} from '../../redux/visit/visit.actions';
import { selectVisitData } from '../../redux/visit/visit.selectors';
class Checkout extends React.Component {
  unsubscribeFromVisitSnapshot = null;

  componentDidMount() {
    const {
      visit: { visit_id },
      history,
    } = this.props;
    this.unsubscribeFromVisitSnapshot = firestore
      .collection('visits')
      .doc(visit_id)
      .onSnapshot((doc) => {
        if (doc.exists) {
          const visit = doc.data();
          if (visit.status === 'paid') {
            fetchVisitSuccess(visit);
          } else if (visit.status === 'filled_out') {
            history.push(`/auth/${visit_id}`);
          }
        }
      });
  }

  componentWillUnmount() {
    this.unsubscribeFromVisitSnapshot();
  }

  fetchStripeCheckoutURL() {
    const {
      updateVisitAsync,
      currentUser,
      visit: { visit_id, status },
      history,
    } = this.props;
    if (currentUser != null) {
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${currentUser.idToken}`,
      };

      axios
        .post(
          `https://acfb9630196f.ngrok.io/medicall-dev-58c31/us-central1/api/checkout/create-checkout-session`,
          {
            consultId: visit_id,
          },
          {
            headers: headers,
          }
        )
        .then((response) => {
          if (response.status === 200) {
            const url = response.data.url;
            const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
            if (newWindow) newWindow.opener = null;
          }
        });
    } else {
      if (status === 'authenticated') {
        updateVisitAsync(visit_id, { status: 'filled_out' });
      }
    }
  }

  render() {
    const {
      visit: { status },
    } = this.props;
    return (
      <div className="checkout-page">
        <div className="container">
          <div className="flex">
            <h1>Visit Status: {status}</h1>
          </div>
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
