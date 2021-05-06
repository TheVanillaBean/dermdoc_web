import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import headshot from '../../assets/omar-headshot.jpeg';
import CustomButton from '../../components/custom-button/custom-button.component';
import DoctorCard from '../../components/doctor-card/doctor-card.component';
import Dropdown from '../../components/dropdown/dropdown.component';
import FormInput from '../../components/form-input/form-input.component';
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
import {
  ButtonContainer,
  FeaturedCardContainer,
  FormContainer,
  FormInputsBarContainer,
  FormInputsContainer,
  FormInputTitle,
  HomePageContainer,
  HomePageTitle,
} from './homepage.styles';

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
  handleChange = (newValue, actionMeta) => {
    console.group('Value Changed');
    console.log(newValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
  };

  handleSubmit = async (event) => {
    event.preventDefault();
  };

  render() {
    const { history } = this.props;
    return (
      <HomePageContainer>
        <FeaturedCardContainer>
          <FormInputTitle>Featured Provider</FormInputTitle>
          <DoctorCard vertical doctor={doctor} />
        </FeaturedCardContainer>

        <FormContainer>
          <HomePageTitle>
            Online visits with local
            <br />
            board-certified dermatologists.
            <br />
            Say goodbye to waiting rooms.
          </HomePageTitle>
          <form onSubmit={this.handleSubmit}>
            <FormInputsBarContainer>
              <FormInputsContainer>
                <FormInputTitle>Zipcode</FormInputTitle>
                <FormInput
                  type="number"
                  name="zipcode"
                  value=""
                  onChange={this.handleChange}
                  required
                />
              </FormInputsContainer>
              <FormInputsContainer>
                <FormInputTitle>Visit Reason</FormInputTitle>
                <Dropdown
                  handleChange={this.handleChange}
                  label="Visit Reason"
                  dataOptions={visitReasons}
                />
              </FormInputsContainer>
              <FormInputsContainer>
                <FormInputTitle>Insurance Brand</FormInputTitle>
                <Dropdown
                  handleChange={this.handleChange}
                  label="Insurance Brand"
                  dataOptions={insuranceBrands}
                />
              </FormInputsContainer>
            </FormInputsBarContainer>
            <ButtonContainer>
              <CustomButton
                type="submit"
                onClick={() => {
                  history.push('/search-doctors');
                }}
              >
                Get Care Now
              </CustomButton>
            </ButtonContainer>
          </form>
        </FormContainer>
      </HomePageContainer>
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
