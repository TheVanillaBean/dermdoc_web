import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import DoctorCard from '../../components/doctor-card/doctor-card.component';
import Footer from '../../components/footer/footer.component';
import NavigationBar from '../../components/navigation-bar/navigation-bar.component';
import { convertDoctorsListSnapshotToMap, firestore } from '../../firebase/firebase.utils';
import { updateDoctor, updateDoctors, updateZipCode } from '../../redux/search/search.actions';
import { selectAreProvidersInArea, selectDoctors, selectInsuranceBrand, selectState, selectVisitReason, selectZipCode } from '../../redux/search/search.selectors';
class DoctorList extends React.Component {
  componentDidMount() {
    const { updateDoctors, insuranceBrand, mailingState } = this.props;

    const state = this.validateZipCodeAndInsurance();

    if (state != null) {
      const collectionRef = firestore.collection('users').where('type', '==', 'PROVIDER').where('stripe_connect_authorized', '==', true).where('mailing_state', '==', mailingState).where('accepted_insurances', 'array-contains', insuranceBrand);

      collectionRef.onSnapshot(async (snapshot) => {
        const doctorsMap = convertDoctorsListSnapshotToMap(snapshot);
        updateDoctors(doctorsMap);
      });
    }
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

  validateZipCodeAndInsurance = () => {
    const { areProvidersInArea } = this.props;

    const state = areProvidersInArea;
    if (state != null) {
      return state;
    }
    return null;
  };

  render() {
    const { doctors } = this.props;
    if (this.validateZipCodeAndInsurance() == null) {
      return <h4>Medicall only has doctors in Massachuetts currently, but you can join the waitlist to recieve a 20% coupon when we are in your area.</h4>;
    }
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
                handleClick={() => {
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
  visitReason: selectVisitReason,
  zipcode: selectZipCode,
  doctors: selectDoctors,
  insuranceBrand: selectInsuranceBrand,
  areProvidersInArea: selectAreProvidersInArea,
  mailingState: selectState,
});

const mapDispatchToProps = (dispatch) => ({
  updateZipCode: (zipcode) => dispatch(updateZipCode(zipcode)),
  updateDoctors: (doctors) => dispatch(updateDoctors(doctors)),
  updateDoctor: (doctor) => dispatch(updateDoctor(doctor)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DoctorList));
