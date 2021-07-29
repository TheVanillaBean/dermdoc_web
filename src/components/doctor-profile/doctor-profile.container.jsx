import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import {
  selectDoctorErrorMessage,
  selectIsDoctorFetching,
} from '../../redux/doctors/doctors.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import DoctorProfile from './doctor-profile.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsDoctorFetching,
  errorMessage: selectDoctorErrorMessage,
});

const DoctorProfileContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(DoctorProfile);

export default DoctorProfileContainer;
