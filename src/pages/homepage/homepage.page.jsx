import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { default as OmarHeadshot } from '../../assets/omar-headshot.jpeg';
import ScheduleSVG from '../../assets/svg/SVG/back-in-time.svg';
import PriceTagSVG from '../../assets/svg/SVG/price-tag.svg';
import DoctorsSVG from '../../assets/svg/SVG/users.svg';
import CustomButton from '../../components/custom-button/custom-button.component';
import Dropdown from '../../components/dropdown/dropdown.component';
import Footer from '../../components/footer/footer.component';
import FormInput from '../../components/form-input/form-input.component';
import NavigationBar from '../../components/navigation-bar/navigation-bar.component';
import {
  updateInsuranceType,
  updateVisitReason,
  updateZipCode,
} from '../../redux/search/search.actions';
import {
  selectInsuranceBrand,
  selectVisitReason,
  selectZipCode,
} from '../../redux/search/search.selectors';

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
                  <img
                    src={OmarHeadshot}
                    alt="Doctor Headshot"
                    className="featured-doctor__headshot"
                  />

                  <div className="featured-doctor__description">
                    <p className="featured-doctor__name">Omar Badri, MD</p>
                    <p className="featured-doctor__location">
                      Boson, Massachusetts
                    </p>
                    <p className="featured-doctor__specialty">
                      Specialty: Dermatology
                    </p>
                    <p className="featured-doctor__school">
                      Medical School: Harvard
                    </p>
                    <p className="featured-doctor__residency">
                      Residency: Harvard
                    </p>
                  </div>
                </div>
              </div>

              <div className="search">
                <h1 className="search__header">
                  Online visits with local board-certified dermatologists. Say
                  goodbye to waiting rooms.
                </h1>

                <div className="search__options">
                  <div className="search__zipcode">
                    <label className="search__options--label">Zipcode</label>
                    <FormInput
                      type="number"
                      name="zipcode"
                      value={zipcode}
                      onChange={this.handleZipcodeChange}
                      placeholder="What is your zipcode"
                      required
                    />
                  </div>
                  <div className="search__reason">
                    <label className="search__options--label">
                      Visit Reason
                    </label>
                    <Dropdown
                      handleChange={this.handleReasonChange}
                      label="Visit Reason"
                      dataOptions={visitReasons}
                      defaultValue={{ label: visitReason, value: visitReason }}
                    />
                  </div>
                  <div className="search__insurance">
                    <label className="search__options--label">
                      Insurance Type
                    </label>
                    <Dropdown
                      handleChange={this.handleInsuranceChange}
                      label="Insurance Brand"
                      dataOptions={insuranceBrands}
                      defaultValue={{
                        label: insuranceBrand,
                        value: insuranceBrand,
                      }}
                    />
                  </div>
                </div>

                <CustomButton onClick={this.handleSubmit}>
                  Explore Doctors
                </CustomButton>
              </div>
            </div>
          </div>
        </header>
        <div className="about">
          <div className="container">
            <h1 className="about__header">Why use Medicall?</h1>
            <p className="about__description">
              We make it easy for you to schedule a telehealth visit with a
              local dermatologist. Choose your doctor, verify your insurance,
              fill out questionnaires, schedule, and pay using one service. No
              more phone calls to the front-desk.
            </p>
            <div className="flex">
              <div className="about__item">
                <img src={PriceTagSVG} alt="Price Tag" />
                <p>
                  Verify your insurance copay in real-time. With Medicall, you
                  always know the full price before you receive care. No hidden
                  fees.
                </p>
              </div>
              <div className="about__item">
                <img src={ScheduleSVG} alt="Price Tag" />

                <p>
                  View a real-time schedule for your doctor and choose a time
                  that works for you. We take care of scheduling your slot with
                  your doctor's office.
                </p>
              </div>
              <div className="about__item">
                <img src={DoctorsSVG} alt="Price Tag" />

                <p>
                  Engage in a live video call with your doctor right from your
                  broswer. You will still reiceve a diagnosis and any
                  prescriptions just like an ordinary in-person visit.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
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

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HomePage)
);
