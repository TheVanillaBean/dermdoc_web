import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { default as headshot, default as OmarHeadshot } from '../../assets/omar-headshot.jpeg';
import CustomButton from '../../components/custom-button/custom-button.component';
import Dropdown from '../../components/dropdown/dropdown.component';
import FormInput from '../../components/form-input/form-input.component';
import NavigationBar from '../../components/navigation-bar/navigation-bar.component';
import { updateInsuranceType, updateVisitReason, updateZipCode } from '../../redux/search/search.actions';
import { selectInsuranceBrand, selectVisitReason, selectZipCode } from '../../redux/search/search.selectors';

const doctor = {
  name: 'Omar Badri, MD',
  imageUrl: headshot,
  location: 'Boston, Massachusetts',
  specialty: 'Dermatology',
  school: 'Harvard',
  residency: 'Harvard',
};

const visitReasons = [
  { value: 'acne', label: 'Acne' },
  { value: 'hairloss', label: 'Hair loss' },
  { value: 'Rash', label: 'Rash' },
];

const insuranceBrands = [
  { value: 'aetna', label: 'Aetna' },
  { value: 'bluecross', label: 'Blue Cross Blue Shield' },
  { value: 'united', label: 'United Healthcare' },
];
class HomePage extends React.Component {
  handleZipcodeChange = (event) => {
    const { updateZipCode } = this.props;
    const { value } = event.target;
    updateZipCode(value);
  };

  handleReasonChange = ({ value }) => {
    const { updateVisitReason } = this.props;
    updateVisitReason(value);
  };

  handleInsuranceChange = ({ value }) => {
    const { updateInsuranceBrand } = this.props;
    updateInsuranceBrand(value);
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { history } = this.props;
    history.push('/search-doctors');
  };

  render() {
    const { zipcode } = this.props;
    return (
      <div>
        <header className="header">
          <div className="container">
            <NavigationBar />

            <div className="flex">
              <div className="featured-doctor">
                <h1 className="featured-doctor__header">Featured Doctor</h1>

                <div className="featured-doctor__doctor-box">
                  <img src={OmarHeadshot} alt="Doctor Headshot" className="featured-doctor__headshot" />

                  <div className="featured-doctor__description">
                    <p className="featured-doctor__name">Omar Badri, MD</p>
                    <p className="featured-doctor__location">Boson, Massachusetts</p>
                    <p className="featured-doctor__specialty">Specialty: Dermatology</p>
                    <p className="featured-doctor__school">Medical School: Harvard</p>
                    <p className="featured-doctor__residency">Residency: Harvard</p>
                  </div>
                </div>
              </div>

              <div className="search">
                <h1 className="search__header">Online visits with local board-certified dermatologists. Say goodbye to waiting rooms.</h1>

                <div className="search__options">
                  <div className="search__zipcode">
                    <label className="search__options--label">Zipcode</label>

                    <FormInput type="number" name="zipcode" value={zipcode} placeholder="What is your zipcode" onChange={this.handleZipcodeChange} required />
                  </div>
                  <div className="search__reason">
                    <label className="search__options--label">Visit Reason</label>
                    <Dropdown handleChange={this.handleReasonChange} label="Visit Reason" dataOptions={visitReasons} />
                  </div>
                  <div className="search__insurance">
                    <label className="search__options--label">Insurance Type</label>
                    <Dropdown handleChange={this.handleInsuranceChange} label="Insurance Brand" dataOptions={insuranceBrands} />
                  </div>
                </div>

                <CustomButton onClick={this.handleSubmit}>Explore Doctors</CustomButton>
              </div>
            </div>
          </div>
        </header>

        <footer className="footer">
          <div className="container">
            <div className="flex">
              <div className="footer__logo">
                <img src="./img/logo-white.png" alt="logo" className="footer__logo" />
              </div>

              <div className="footer__info">
                <ul className="footer__list--contact">
                  <li>
                    <h1>Contact</h1>
                  </li>
                  <li>contact@medicall.com</li>
                  <li>401 Park Drive, Suite 1009 Boston, MA 02115</li>
                </ul>
                <ul className="footer__list--legal">
                  <li>
                    <h1>About us</h1>
                  </li>
                  <li>Terms</li>
                  <li>Privacy</li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  zipcode: selectZipCode,
  insuranceBrand: selectInsuranceBrand,
  visitReason: selectVisitReason,
});

const mapDispatchToProps = (dispatch) => ({
  updateZipCode: (zipcode) => dispatch(updateZipCode(zipcode)),
  updateInsuranceBrand: (insurance) => dispatch(updateInsuranceType(insurance)),
  updateVisitReason: (reason) => dispatch(updateVisitReason(reason)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomePage));
