import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import CustomButton from '../../components/custom-button/custom-button.component';
import DoctorCard from '../../components/doctor-card/doctor-card.component';
import FormInput from '../../components/form-input/form-input.component';
import {
  convertDoctorsListSnapshotToMap,
  firestore,
} from '../../firebase/firebase.utils';
import {
  updateDoctor,
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
class DoctorList extends React.Component {
  componentDidMount() {
    const { updateDoctors } = this.props;

    //TODO
    //Create function for getting state from zip code (similar to flutter app)
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

  handleDoctorClick = (doctor) => {
    const { updateDoctor, history } = this.props;
    updateDoctor(doctor);
    history.push(doctor.routeName);
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
          <DoctorCard
            horizontal
            key={doctor.uid}
            doctor={doctor}
            onClick={() => {
              this.handleDoctorClick(doctor);
            }}
          />
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
  updateDoctor: (doctor) => dispatch(updateDoctor(doctor)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DoctorList)
);
