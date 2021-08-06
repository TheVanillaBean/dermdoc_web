import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import {
  selectIsVisitFetching,
  selectVisitErrorMessage,
} from '../../redux/visit/visit.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import SignInSignUp from './sign-in-sign-up.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsVisitFetching,
  errorMessage: selectVisitErrorMessage,
});

const SignInSignUpContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(SignInSignUp);

export default SignInSignUpContainer;
