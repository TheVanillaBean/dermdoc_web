import React from 'react';
import { connect } from 'react-redux';
import { firestore } from '../../firebase/firebase.utils';
import {
  fetchVisitFailure,
  fetchVisitStart,
  fetchVisitSuccess,
  updateVisitAsync,
} from '../../redux/visit/visit.actions';

class VisitLandingPage extends React.Component {
  unsubscribeFromVisitSnapshot = null;

  componentDidMount() {
    const { match, history, fetchVisitSuccess, fetchVisitFailure } = this.props;
    const visitID = match.params.visit_id;
    this.unsubscribeFromVisitSnapshot = firestore
      .collection('visits')
      .doc(visitID)
      .onSnapshot(
        (doc) => {
          if (doc.exists) {
            const visit = doc.data();
            fetchVisitSuccess(visit);

            if (visit.status === 'paid') {
              // fetchVisitSuccess(visit);
            } else if (visit.status === 'authenticated') {
              // fetchVisitSuccess(visit);
            } else if (visit.status === 'filled_out') {
              // history.push(`/auth/${visit_id}`);
            } else {
              // fetchVisitSuccess(visit);
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
    return <div></div>;
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
