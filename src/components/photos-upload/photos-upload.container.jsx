import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectIsVisitFetching, selectVisitErrorMessage } from '../../redux/visit/visit.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import PhotosUploadComponent from './photos-upload.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsVisitFetching,
  errorMessage: selectVisitErrorMessage,
});

const PhotosUploadContainer = compose(connect(mapStateToProps), WithSpinner)(PhotosUploadComponent);

export default PhotosUploadContainer;
