import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import {
  selectDoctorsListErrorMessage,
  selectIsDoctorsListFetching,
} from '../../redux/doctors/doctors.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import DoctorsList from './doctors-list.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsDoctorsListFetching,
  errorMessage: selectDoctorsListErrorMessage,
});

const DoctorsListContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(DoctorsList);

export default DoctorsListContainer;
