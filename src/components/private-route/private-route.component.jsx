import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import AuthPage from '../../pages/auth/auth.page';
import { selectCurrentUser } from '../../redux/user/user.selectors';

class PrivateRoute extends Component {
  render() {
    const { currentUser, visitID, patientID, component, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={(props) =>
          currentUser != null ? (
            <Component {...props} />
          ) : (
            <AuthPage {...props} visitID={visitID} patientID={patientID} />
          )
        }
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default withRouter(connect(mapStateToProps)(PrivateRoute));
