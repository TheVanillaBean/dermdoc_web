import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import headshot from '../../assets/omar-headshot.jpeg';
import CustomButton from '../../components/custom-button/custom-button.component';
import DoctorCard from '../../components/doctor-card/doctor-card.component';
import FormInput from '../../components/form-input/form-input.component';
import {
  convertDoctorsListSnapshotToMap,
  firestore,
} from '../../firebase/firebase.utils';
import {
  updateDoctors,
  updateZipCode,
} from '../../redux/search/search.actions';
import {
  selectDoctors,
  selectZipCode,
} from '../../redux/search/search.selectors';
import {
  DoctorSearchContainer,
  ZipCodeInputContainer,
  ZipCodeSearchContainer,
} from './doctor-list.styles';

const doctor = {
  name: 'Omar Badri, MD',
  imageUrl: headshot,
  location: 'Boston, Massachusetts',
  specialty: 'Dermatology',
  school: 'Harvard',
  residency: 'Harvard',
};
class DoctorList extends React.Component {
  componentDidMount() {
    const { updateDoctors } = this.props;

    const collectionRef = firestore
      .collection('users')
      .where('type', '==', 'PROVIDER');

    collectionRef.onSnapshot(async (snapshot) => {
      const doctorsMap = convertDoctorsListSnapshotToMap(snapshot);
      updateDoctors(doctorsMap);
    });
  }

  handleZipcodeChange = (event) => {
    const { updateZipCode } = this.props;
    const { value } = event.target;
    updateZipCode(value);
  };

  render() {
    const { doctors, zipcode } = this.props;
    return (
      <DoctorSearchContainer>
        <ZipCodeSearchContainer>
          <ZipCodeInputContainer>
            <FormInput
              type="number"
              name="zipcode"
              value={zipcode}
              onChange={this.handleZipcodeChange}
              required
            />
          </ZipCodeInputContainer>
          <CustomButton type="submit">Get Care Now</CustomButton>
        </ZipCodeSearchContainer>
        {doctors.map((doctor) => (
          <DoctorCard horizontal key={doctor.iud} doctor={doctor} />
        ))}
      </DoctorSearchContainer>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  zipcode: selectZipCode,
  doctors: selectDoctors,
});

const mapDispatchToProps = (dispatch) => ({
  updateZipCode: (zipcode) => dispatch(updateZipCode(zipcode)),
  updateDoctors: (doctors) => dispatch(updateDoctors(doctors)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DoctorList)
);
