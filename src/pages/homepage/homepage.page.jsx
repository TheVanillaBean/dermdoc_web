import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { default as OmarHeadshot } from '../../assets/omar-headshot.jpeg';
import CustomButton from '../../components/custom-button/custom-button.component';
import Dropdown from '../../components/dropdown/dropdown.component';
import FormInput from '../../components/form-input/form-input.component';
import NavigationBar from '../../components/navigation-bar/navigation-bar.component';
import { updateInsuranceType, updateVisitReason, updateZipCode } from '../../redux/search/search.actions';
import { selectInsuranceBrand, selectVisitReason, selectZipCode } from '../../redux/search/search.selectors';

const visitReasons = [
  { value: 'Acne', label: 'Acne' },
  { value: 'Brown Spots', label: 'Brown Spots' },
  { value: 'Cellulite', label: 'Cellulite' },
  { value: 'Droopy Eyelids', label: 'Droopy Eyelids' },
  { value: 'Excess Fat', label: 'Excess Fat' },
  { value: 'Hairloss', label: 'Hairloss' },
  { value: 'Latisse', label: 'Latisse' },
  { value: 'Leg Veins', label: 'Leg Veins' },
  { value: 'Loose Sagging Skin', label: 'Loose Sagging Skin' },
  { value: 'Melasma', label: 'Melasma' },
  { value: 'Rash', label: 'Rash' },
  { value: 'Redness', label: 'Redness' },
  { value: 'Rosacea', label: 'Rosacea' },
  { value: 'Skin Spots', label: 'Skin Spots' },
  { value: 'Skin Texture', label: 'Skin Texture' },
  { value: 'Tattoo Removal', label: 'Tattoo Removal' },
  { value: 'Under Eye Circles', label: 'Under Eye Circles' },
  { value: 'Wrinkles', label: 'Wrinkles' },
];

const insuranceBrands = [
  { value: 'Aetna', label: 'Aetna' },
  { value: 'AllWays Health Plan', label: 'AllWays Health Plan' },
  {
    value: 'Blue Cross and Blue Shield of Massachusetts',
    label: 'Blue Cross and Blue Shield of Massachusetts',
  },
  { value: 'Cigna', label: 'Cigna' },
  {
    value: 'Fallon Community Health Plan',
    label: 'Fallon Community Health Plan',
  },
  {
    value: 'Harvard Pilgrim Health Care',
    label: 'Harvard Pilgrim Health Care',
  },
  { value: 'Health Plans Inc.', label: 'Health Plans Inc.' },
  { value: 'Humana', label: 'Humana' },
  { value: 'Medicare', label: 'Medicare' },
  { value: 'Tufts Health Plan', label: 'Tufts Health Plan' },
  { value: 'UnitedHealthcare', label: 'UnitedHealthcare' },
  {
    value: 'UnitedHeAARP Medicare Replacementalthcare',
    label: 'AARP Medicare Replacement',
  },
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
    const { visitReason, zipcode, insuranceBrand } = this.props;
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
                    <FormInput type="number" name="zipcode" value={zipcode} onChange={this.handleZipcodeChange} placeholder="What is your zipcode" required />
                  </div>
                  <div className="search__reason">
                    <label className="search__options--label">Visit Reason</label>
                    <Dropdown handleChange={this.handleReasonChange} label="Visit Reason" dataOptions={visitReasons} defaultValue={{ label: visitReason, value: visitReason }} />
                  </div>
                  <div className="search__insurance">
                    <label className="search__options--label">Insurance Type</label>
                    <Dropdown handleChange={this.handleInsuranceChange} label="Insurance Brand" dataOptions={insuranceBrands} defaultValue={{ label: insuranceBrand, value: insuranceBrand }} />
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
