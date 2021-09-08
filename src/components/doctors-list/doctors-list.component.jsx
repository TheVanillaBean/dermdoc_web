import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { fetchDoctorSuccess } from '../../redux/doctors/doctors.actions';
import { selectDoctorsList } from '../../redux/doctors/doctors.selectors';
import DoctorCard from '../doctor-card/doctor-card.component';

class DoctorList extends React.Component {
  handleDoctorClick = (doctor) => {
    const { fetchDoctorSuccess, history } = this.props;
    fetchDoctorSuccess(doctor);
    history.push(`doctors/${doctor.routeName}`);
  };

  render() {
    const { doctorsList } = this.props;
    return (
      <section className="doctor-list">
        <div className="container">
          <h1 className="doctor-list__title">
            Dermatologists in Massachusetts
          </h1>

          {doctorsList.map((doctor) => (
            <DoctorCard
              horizontal
              showInsurances={false}
              key={doctor.uid}
              showButton={true}
              doctor={doctor}
              buttonText="View Available Appointment Times"
              handleClick={() => {
                this.handleDoctorClick(doctor);
              }}
            />
          ))}
        </div>
      </section>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  doctorsList: selectDoctorsList,
});

const mapDispatchToProps = () => ({
  fetchDoctorSuccess: (doctorMap) => fetchDoctorSuccess(doctorMap),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DoctorList)
);
