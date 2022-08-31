import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { firestore } from '../../firebase/firebase.utils';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import {
  fetchVisitFailure,
  fetchVisitStart,
  fetchVisitSuccess,
} from '../../redux/visit/visit.actions';
import AuthPage from '../auth/auth.page';
import CheckoutPage from '../checkout/checkout.page';
import PhotoIdPage from '../photo-id/photo-id.page';
import QuestionsPage from '../questions/questions.page';
import SelfiesPage from '../selfies/selfies.page';
import VisitReadyPage from '../visit-ready/visit-ready.page';

class VisitLandingPage extends React.Component {
  unsubscribeFromVisitSnapshot = null;

  componentDidMount() {
    const { match, history, fetchVisitStart, fetchVisitSuccess, fetchVisitFailure } = this.props;
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
              history.push(`/visits/${visit.visit_id}/auth`);
            } else if (visit.status === 'authenticated') {
              history.push(`/visits/${visit.visit_id}/questions`);
            } else if (visit.status === 'filled_out' || visit.status === 'payment_failed') {
              if (visit.photo_id_added && visit.selfies_added) {
                history.push(`/visits/${visit.visit_id}/checkout`);
              } else if (visit.selfies_added) {
                history.push(`/visits/${visit.visit_id}/photo_id`);
              } else {
                history.push(`/visits/${visit.visit_id}/selfies`);
              }
            } else if (visit.status === 'paid' || visit.status === 'ready_for_review') {
              history.push(`/visits/${visit.visit_id}/visit_ready`);
            }
          }
        },
        (error) => {
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
        <Route path={`${match.path}/auth`} component={AuthPage} />
        <Route path={`${match.path}/questions`} component={QuestionsPage} />
        <Route path={`${match.path}/photo_id`} component={PhotoIdPage} />
        <Route path={`${match.path}/selfies`} component={SelfiesPage} />

        <Route path={`${match.path}/checkout`} component={CheckoutPage} />
        <Route path={`${match.path}/visit_ready`} component={VisitReadyPage} />
        <Route exact path='*'>
          <Redirect to={`/visits/${match.params.visit_id}/questions`} />
        </Route>
      </Switch>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  fetchVisitStart: () => dispatch(fetchVisitStart()),
  fetchVisitSuccess: (visitMap) => dispatch(fetchVisitSuccess(visitMap)),
  fetchVisitFailure: (errorMsg) => dispatch(fetchVisitFailure(errorMsg)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VisitLandingPage);
