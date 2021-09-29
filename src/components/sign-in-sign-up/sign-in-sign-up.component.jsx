import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { updateVisitAsync } from '../../redux/visit/visit.actions';
import { selectVisitData } from '../../redux/visit/visit.selectors';

class SignInSignUp extends React.Component {
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
        email: currentUser.email,
      });
    }
  }

  render() {
    return (
      <div className='container'>
        <div className='auth-page'>
          <SignIn />
          <SignUp />
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignInSignUp));
