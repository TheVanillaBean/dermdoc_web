import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import DoctorListContainer from '../../components/doctors-list/doctors-list.container';
import Footer from '../../components/footer/footer.component';
import NavigationBar from '../../components/navigation-bar/navigation-bar.component';
import { fetchDoctorsListStartAsync } from '../../redux/doctors/doctors.actions';
import {
  selectInsuranceBrand,
  selectState,
  selectZipCode,
} from '../../redux/search/search.selectors';
class DoctorSearchPage extends React.Component {
  componentDidMount() {
    const { fetchDoctorsListStartAsync, insuranceBrand, zipcode } = this.props;

    fetchDoctorsListStartAsync(insuranceBrand, zipcode);
  }

  render() {
    if (this.props.mailing_state !== 'MA') {
      return (
        <div>
          <header className="header">
            <div className="container">
              <NavigationBar />
            </div>
          </header>

          <div className="container">
            <div className="not-in-area">
              <p>Medicall only has doctors in Massachusetts currently</p>
            </div>
          </div>

          <Footer />
        </div>
      );
    }
    return (
      <div>
        <header className="header">
          <div className="container">
            <NavigationBar />
          </div>
        </header>

        <DoctorListContainer />

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  zipcode: selectZipCode,
  insuranceBrand: selectInsuranceBrand,
  mailing_state: selectState,
});

const mapDispatchToProps = (dispatch) => ({
  fetchDoctorsListStartAsync: (insuranceBrand, zipcode) =>
    dispatch(fetchDoctorsListStartAsync(insuranceBrand, zipcode)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DoctorSearchPage)
);
