import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import 'survey-react/modern.css';
import { firestore } from '../../firebase/firebase.utils';
import { fetchQuestionsStartAsync } from '../../redux/questionnaire/questionnaire.actions';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectVisitData } from '../../redux/visit/visit.selectors';
class Checkout extends React.Component {
  unsubscribeFromVisitSnapshot = null;

  componentDidMount() {
    const {
      currentUser,
      visit: { visit_id },
    } = this.props;
    this.unsubscribeFromVisitSnapshot = firestore
      .collection('visits')
      .doc(visit_id)
      .onSnapshot((doc) => {
        if (doc.exists) {
          const visit = doc.data();
          if (visit.status === 'paid') {
            this.setState({ visitPaid: true });
          }
        }
      });

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
  }

  componentWillUnmount() {
    this.unsubscribeFromVisitSnapshot();
  }

  render() {
    return (
      <div className="checkout-page">
        <div className="container">
          <div className="flex"></div>
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
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Checkout)
);
