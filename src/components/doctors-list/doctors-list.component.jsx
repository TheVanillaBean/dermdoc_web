import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import FarahHeadshot from '../../assets/img/farah-headshot-1.jpg';
import OmarHeadshot from '../../assets/img/omar-headshot.jpeg';
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
            Dermatologists in Massachusetts ({doctorsList.length})
          </h1>

          <DoctorCard
            showInsurances={false}
            key={doctorsList[1].uid}
            showButton={true}
            doctor={doctorsList[1]}
            headshot={
              doctorsList[1].first_name === 'Farah'
                ? FarahHeadshot
                : OmarHeadshot
            }
            buttonText="View Appointment Times"
            handleClick={() => {
              this.handleDoctorClick(doctorsList[1]);
            }}
          />

          <div className="border"></div>

          <DoctorCard
            showInsurances={false}
            key={doctorsList[0].uid}
            showButton={true}
            doctor={doctorsList[0]}
            headshot={
              doctorsList[0].first_name === 'Farah'
                ? FarahHeadshot
                : OmarHeadshot
            }
            buttonText="View Appointment Times"
            handleClick={() => {
              this.handleDoctorClick(doctorsList[0]);
            }}
          />
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
