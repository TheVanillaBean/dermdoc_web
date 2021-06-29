import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import DoctorCard from '../../components/doctor-card/doctor-card.component';
import Footer from '../../components/footer/footer.component';
import NavigationBar from '../../components/navigation-bar/navigation-bar.component';
import { convertDoctorsListSnapshotToMap, firestore } from '../../firebase/firebase.utils';
import { updateDoctor, updateDoctors, updateZipCode } from '../../redux/search/search.actions';
import { selectDoctors, selectZipCode } from '../../redux/search/search.selectors';
class DoctorList extends React.Component {
  componentDidMount() {
    const { updateDoctors } = this.props;

    //TODO
    //Create function for getting state from zip code (similar to flutter app)
    const collectionRef = firestore.collection('users').where('type', '==', 'PROVIDER');

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
      <div>
        <header class="header">
          <div class="container">
            <NavigationBar />
          </div>
        </header>

        <section class="doctor-list">
          <div class="container">
            <h1 class="doctor-list__title">Dermatologists in Massachusetts</h1>

            {doctors.map((doctor) => (
              <DoctorCard
                showInsurances={true}
                key={doctor.uid}
                doctor={doctor}
                buttonText="Available Appointment Times"
                onClick={() => {
                  this.handleDoctorClick(doctor);
                }}
              />
            ))}
          </div>
        </section>

        <Footer />
      </div>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DoctorList));
