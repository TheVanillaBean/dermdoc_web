import React from 'react';
import { withRouter } from 'react-router-dom';
import CustomButton from '../../components/custom-button/custom-button.component';
import DoctorCard from '../../components/doctor-card/doctor-card.component';
import Dropdown from '../../components/dropdown/dropdown.component';
import FormInput from '../../components/form-input/form-input.component';
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
  imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
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

export default withRouter(HomePage);
