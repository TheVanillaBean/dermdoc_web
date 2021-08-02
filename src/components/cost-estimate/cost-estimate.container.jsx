import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import {
  selectIsVisitFetching,
  selectVisitErrorMessage,
} from '../../redux/visit/visit.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import CostEstimate from './cost-estimate.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsVisitFetching,
  errorMessage: selectVisitErrorMessage,
});

const CostEstimateContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CostEstimate);

export default CostEstimateContainer;
