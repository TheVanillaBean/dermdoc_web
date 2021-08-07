import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import {
  selectIsVisitFetching,
  selectVisitErrorMessage,
} from '../../redux/visit/visit.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import Checkout from './checkout.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsVisitFetching,
  errorMessage: selectVisitErrorMessage,
});

const CheckoutContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(Checkout);

export default CheckoutContainer;
