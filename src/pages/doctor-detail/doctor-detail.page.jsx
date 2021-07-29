import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import DoctorProfileContainer from '../../components/doctor-profile/doctor-profile.container';
import Footer from '../../components/footer/footer.component';
import NavigationBar from '../../components/navigation-bar/navigation-bar.component';
import { fetchDoctorStartAsync } from '../../redux/doctors/doctors.actions';
import {
  selectDoctor,
  selectDoctorErrorMessage,
} from '../../redux/doctors/doctors.selectors';
import {
  selectInsuranceBrand,
  selectVisitReason,
  selectZipCode,
} from '../../redux/search/search.selectors';

class DoctorDetail extends React.Component {
  componentDidMount() {
    if (this.props.doctor == null) {
      const { match, fetchDoctorStartAsync } = this.props;
      const doctorRouteName = match.params.doctor_route;
      fetchDoctorStartAsync(doctorRouteName);
    }
  }

  render() {
    return (
      <div>
        <header className="header">
          <div className="container">
            <NavigationBar />
          </div>
        </header>

        <DoctorProfileContainer />

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  insuranceBrand: selectInsuranceBrand,
  visitReason: selectVisitReason,
  zipcode: selectZipCode,
  doctor: selectDoctor,
  doctorErrorMessage: selectDoctorErrorMessage,
});

const mapDispatchToProps = (dispatch) => ({
  fetchDoctorStartAsync: (route_name) =>
    dispatch(fetchDoctorStartAsync(route_name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DoctorDetail);
