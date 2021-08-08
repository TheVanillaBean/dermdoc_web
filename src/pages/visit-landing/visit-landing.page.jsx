import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { firestore } from '../../firebase/firebase.utils';
import {
  fetchVisitFailure,
  fetchVisitStart,
  fetchVisitSuccess,
  updateVisitAsync,
} from '../../redux/visit/visit.actions';
import AuthPage from '../auth/auth.page';
import CheckoutPage from '../checkout/checkout.page';
import QuestionsPage from '../questions/questions.page';
import VisitCostPage from '../visit-cost/visit-cost.page';

class VisitLandingPage extends React.Component {
  unsubscribeFromVisitSnapshot = null;

  componentDidMount() {
    const {
      match,
      history,
      fetchVisitStart,
      fetchVisitSuccess,
      fetchVisitFailure,
    } = this.props;
    const visitID = match.params.visit_id;
    fetchVisitStart();
    this.unsubscribeFromVisitSnapshot = firestore
      .collection('visits')
      .doc(visitID)
      .onSnapshot(
        (doc) => {
          if (doc.exists) {
            const visit = doc.data();
            fetchVisitSuccess(visit);

            if (visit.status === 'paid') {
              history.push(`/visits/checkout/${visit.visit_id}`);
            } else if (visit.status === 'authenticated') {
              history.push(`/visits/checkout/${visit.visit_id}`);
            } else if (visit.status === 'filled_out') {
              history.push(`/visits/auth/${visit.visit_id}`);
            } else {
              history.push(`/visits/cost/${visit.visit_id}`);
            }
          }
        },
        (error) => {
          fetchVisitFailure(
            'We could not find information for this visit. Please contact omar@medicall.com for fast assistance.'
          );
        }
      );
  }

  componentWillUnmount() {
    this.unsubscribeFromVisitSnapshot();
  }

  render() {
    const { match } = this.props;

    return (
      <div>
        <Route
          path={`${match.path}/cost/:visit_id`}
          component={VisitCostPage}
        />
        <Route
          path={`${match.path}/questions/:visit_id`}
          component={QuestionsPage}
        />
        <Route path={`${match.path}/auth/:visit_id`} component={AuthPage} />
        <Route
          path={`${match.path}/checkout/:visit_id`}
          component={CheckoutPage}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateVisitAsync: (visitID, updatedVisitData) =>
    dispatch(updateVisitAsync(visitID, updatedVisitData)),
  fetchVisitStart: () => dispatch(fetchVisitStart()),
  fetchVisitSuccess: (visitMap) => dispatch(fetchVisitSuccess(visitMap)),
  fetchVisitFailure: (errorMsg) => dispatch(fetchVisitFailure(errorMsg)),
});

export default connect(null, mapDispatchToProps)(VisitLandingPage);
