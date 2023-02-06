import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import PrivateRoute from '../../components/private-route/private-route.component';
import { firestore } from '../../firebase/firebase.utils';
import {
  fetchVisitFailure,
  fetchVisitStart,
  fetchVisitSuccess,
} from '../../redux/visit/visit.actions';
import CheckoutPage from '../checkout/checkout.page';
import PhotoIdPage from '../photo-id/photo-id.page';
import QuestionsPage from '../questions/questions.page';
import SelfiesPage from '../selfies/selfies.page';
import VisitErrorPage from '../visit-error/visit-error.page';
import VisitReadyPage from '../visit-ready/visit-ready.page';

class VisitLandingPage extends React.Component {
  unsubscribeFromVisitSnapshot = null;

  componentDidMount() {
    const { match, history, fetchVisitStart, fetchVisitSuccess, fetchVisitFailure, location } =
      this.props;
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

            if (visit.status === 'initiated') {
              history.push(`/visits/${visit.visit_id}/questions${location.search}`);
              return;
            }

            if (visit.status === 'questions_filled_out' || visit.status === 'payment_failed') {
              history.push(`/visits/${visit.visit_id}/checkout${location.search}`);
              return;
            }

            if (visit.status === 'paid') {
              history.push(`/visits/${visit.visit_id}/selfies${location.search}`);
              return;
            }

            if (visit.status === 'selfies_added') {
              history.push(`/visits/${visit.visit_id}/photo_id${location.search}`);
              return;
            }

            if (visit.status === 'photo_id_added' || visit.status === 'ready_for_review') {
              history.push(`/visits/${visit.visit_id}/visit_ready${location.search}`);
              return;
            }

            history.push(`/visits/${visit.visit_id}/error${location.search}`);

            return;
          }
        },
        (_) => {
          fetchVisitFailure(
            'We could not find information for this visit. Please email contact@dermdoc.com for fast assistance.'
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
      <Switch>
        <PrivateRoute path={`${match.path}/questions`} component={QuestionsPage} />
        <PrivateRoute path={`${match.path}/checkout`} component={CheckoutPage} />
        <PrivateRoute path={`${match.path}/selfies`} component={SelfiesPage} />
        <PrivateRoute path={`${match.path}/photo_id`} component={PhotoIdPage} />
        <PrivateRoute path={`${match.path}/visit_ready`} component={VisitReadyPage} />
        <PrivateRoute path={`${match.path}/error`} component={VisitErrorPage} />
        <Route exact path='*'>
          <Redirect to={`/visits/${match.params.visit_id}/questions`} />
        </Route>
      </Switch>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchVisitStart: () => dispatch(fetchVisitStart()),
  fetchVisitSuccess: (visitMap) => dispatch(fetchVisitSuccess(visitMap)),
  fetchVisitFailure: (errorMsg) => dispatch(fetchVisitFailure(errorMsg)),
});

export default connect(null, mapDispatchToProps)(VisitLandingPage);
