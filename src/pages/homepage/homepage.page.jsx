import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as CalendarSVG } from '../../assets/svg/SVG/calendar.svg';
import { ReactComponent as DoctorSVG } from '../../assets/svg/SVG/doctor_illustration.svg';
import { ReactComponent as MobileSVG } from '../../assets/svg/SVG/mobile.svg';
import { ReactComponent as PersonSVG } from '../../assets/svg/SVG/profile-male.svg';
import { ReactComponent as WalletSVG } from '../../assets/svg/SVG/wallet.svg';
import CustomButton from '../../components/custom-button/custom-button.component';
import Dropdown from '../../components/dropdown/dropdown.component';
import Footer from '../../components/footer/footer.component';
import NavigationBar from '../../components/navigation-bar/navigation-bar.component';
import SearchInput from '../../components/search-input/search-input.component';
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
    value: 'AARP Medicare Replacement',
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
              <div className="video_graphic">
                <div className="video_graphic__doctor-box">
                  <DoctorSVG />
                </div>
              </div>

              <div className="search">
                <h1 className="search__header">
                  Schedule a video visit with a local board-certified
                  dermatologist.
                </h1>

                <div className="search__options">
                  <div className="search__zipcode">
                    <label className="search__options--label">Zipcode</label>
                    <SearchInput
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

                <CustomButton
                  className="search__submit btn"
                  onClick={this.handleSubmit}
                >
                  Get Care Now
                </CustomButton>
              </div>
            </div>
          </div>
        </header>
        <div className="about">
          <div className="container">
            <h1 className="about__header">Why use Medicall?</h1>
            <p className="about__description">
              We make it easy for you to schedule a live video visit with a
              local dermatologist. Choose your doctor, verify your insurance,
              fill out questionnaires, schedule, and pay using one service. No
              more waiting rooms or phone calls.
            </p>
            <div className="flex">
              <div className="about__item">
                <div className="about__item__image">
                  <CalendarSVG />
                </div>
                <p>
                  Choose a doctor in your area. View their availability and
                  schedule a time that works for you.
                </p>
              </div>
              <div className="about__item">
                <div className="about__item__image">
                  <WalletSVG />
                </div>
                <p>
                  We run your insurance and charge you your copay /
                  deductible...before your visit. No suprise billing.
                </p>
              </div>
              <div className="about__item">
                <div className="about__item__image">
                  <MobileSVG />
                </div>
                <p>
                  Forget filling out paperwork in a waiting room. With us, you
                  can securily tell us all your neccessary health information
                  from home.
                </p>
              </div>
              <div className="about__item">
                <div className="about__item__image">
                  <PersonSVG />
                </div>
                <p>
                  All of our doctors have physical practices as well, meaning if
                  your doctor needs to see you in-person, it can be scheduled
                  easily.
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
