import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectIsVisitFetching, selectVisitErrorMessage } from '../../redux/visit/visit.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import PhotoIDUploadComponent from './photo-id-upload.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsVisitFetching,
  errorMessage: selectVisitErrorMessage,
});

const PhotoIDUploadContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(PhotoIDUploadComponent);

export default PhotoIDUploadContainer;
