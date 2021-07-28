import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import Footer from '../../components/footer/footer.component';
import NavigationBar from '../../components/navigation-bar/navigation-bar.component';
import { fetchDoctorsListStartAsync } from '../../redux/doctors/doctors.actions';
import {
  selectInsuranceBrand,
  selectZipCode,
} from '../../redux/search/search.selectors';

class DoctorSearchPage extends React.Component {
  componentDidMount() {
    const { fetchDoctorsListStartAsync, insuranceBrand, zipcode } = this.props;

    fetchDoctorsListStartAsync(insuranceBrand, zipcode);
  }

  handleDoctorClick = (doctor) => {
    const { updateDoctor, history } = this.props;
    updateDoctor(doctor);
    history.push(doctor.routeName);
  };

  render() {
    if (this.validateZipCodeAndInsurance() == null) {
      return (
        <h4>
          Medicall only has doctors in Massachuetts currently, but you can join
          the waitlist to recieve a 20% coupon when we are in your area.
        </h4>
      );
    }
    return (
      <div>
        <header className="header">
          <div className="container">
            <NavigationBar />
          </div>
        </header>

        {/*
        <section className="doctor-list">
          <div className="container">
            <h1 className="doctor-list__title">
              Dermatologists in Massachusetts
            </h1>

            {doctors.map((doctor) => (
              <DoctorCard
                showInsurances={true}
                key={doctor.uid}
                doctor={doctor}
                buttonText="View Available Appointment Times"
                handleClick={() => {
                  this.handleDoctorClick(doctor);
                }}
              />
            ))}
          </div>
        </section>
              */}

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  zipcode: selectZipCode,
  insuranceBrand: selectInsuranceBrand,
});

const mapDispatchToProps = (dispatch) => ({
  fetchDoctorsListStartAsync: (insuranceBrand, zipcode) =>
    dispatch(fetchDoctorsListStartAsync(insuranceBrand, zipcode)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DoctorSearchPage)
);
