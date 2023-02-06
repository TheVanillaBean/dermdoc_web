import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectIsVisitFetching, selectVisitErrorMessage } from '../../redux/visit/visit.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import SelfiesUploadComponent from './selfies-upload.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsVisitFetching,
  errorMessage: selectVisitErrorMessage,
});

const SelfiesUploadContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(SelfiesUploadComponent);

export default SelfiesUploadContainer;
