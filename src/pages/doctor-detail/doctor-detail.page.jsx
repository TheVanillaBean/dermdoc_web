import React from 'react';
import { connect } from 'react-redux';
import DoctorProfileContainer from '../../components/doctor-profile/doctor-profile.container';
import Footer from '../../components/footer/footer.component';
import NavigationBar from '../../components/navigation-bar/navigation-bar.component';
import { fetchDoctorStartAsync } from '../../redux/doctors/doctors.actions';

class DoctorDetailPage extends React.Component {
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

const mapDispatchToProps = (dispatch) => ({
  fetchDoctorStartAsync: (route_name) =>
    dispatch(fetchDoctorStartAsync(route_name)),
});

export default connect(null, mapDispatchToProps)(DoctorDetailPage);
