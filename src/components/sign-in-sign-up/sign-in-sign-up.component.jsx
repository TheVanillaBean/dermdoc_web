import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import { firestore } from '../../firebase/firebase.utils';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { updateVisitAsync } from '../../redux/visit/visit.actions';
import { selectVisitData } from '../../redux/visit/visit.selectors';

class SignInSignUp extends React.Component {
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
          if (visit.status === 'authenticated') {
            history.push(`/visits/checkout/${visit_id}`);
          }
        }
      });
  }

  componentWillUnmount() {
    this.unsubscribeFromVisitSnapshot();
  }

  componentDidUpdate(prevProps) {
    const {
      currentUser,
      visit: { visit_id },
      updateVisitAsync,
    } = this.props;

    if (currentUser != null && prevProps.visit.status === 'filled_out') {
      updateVisitAsync(visit_id, {
        status: 'authenticated',
        patient_id: currentUser.id,
      });
    }
  }

  render() {
    return (
      <div className="auth-page">
        <div className="container">
          <div className="flex">
            <SignIn />
            <SignUp />
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
  updateVisitAsync: (visitID, updatedVisitData) =>
    dispatch(updateVisitAsync(visitID, updatedVisitData)),
});
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SignInSignUp)
);
