import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { createStructuredSelector } from 'reselect';
import AuthPage from '../../pages/auth/auth.page';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { updateVisitAsync } from '../../redux/visit/visit.actions';
import { selectVisitData } from '../../redux/visit/visit.selectors';
class PrivateRoute extends Component {
  render() {
    const { currentUser, visit, component: Component, ...rest } = this.props;
    return (
      <>
        <Route
          {...rest}
          render={(props) =>
            currentUser != null ? (
              currentUser.id === visit.patient_id ? (
                <Component {...props} />
              ) : (
                <AuthPage {...props} notAuthorized={true} /> //replace with different page
              )
            ) : (
              <AuthPage {...props} notAuthorized={false} />
            )
          }
        />
        <ToastContainer
          position='top-right'
          bodyClassName='toastBody'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PrivateRoute));
