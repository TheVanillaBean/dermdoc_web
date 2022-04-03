import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectIsVisitFetching, selectVisitErrorMessage } from '../../redux/visit/visit.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import SelfiesUploadContainer from './selfies-upload.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsVisitFetching,
  errorMessage: selectVisitErrorMessage,
});

const SelfiesUploadContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(PhotosUploadComponent);

export default SelfiesUploadContainer;
