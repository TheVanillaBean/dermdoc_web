import React from 'react';
import { withRouter } from 'react-router-dom';
import headshot from '../../assets/omar-headshot.jpeg';
import CustomButton from '../../components/custom-button/custom-button.component';
import DoctorCard from '../../components/doctor-card/doctor-card.component';
import FormInput from '../../components/form-input/form-input.component';
import {
  DoctorSearchContainer,
  ZipCodeInputContainer,
  ZipCodeSearchContainer,
} from './doctor-list.styles';
const doctor = {
  name: 'Omar Badri, MD',
  imageUrl: headshot,
  location: 'Boston, Massachusetts',
  specialty: 'Dermatology',
  school: 'Harvard',
  residency: 'Harvard',
};
class DoctorList extends React.Component {
  handleChange = (newValue) => {};

  render() {
    const { history } = this.props;
    return (
      <DoctorSearchContainer>
        <ZipCodeSearchContainer>
          <ZipCodeInputContainer>
            <FormInput
              type="number"
              name="zipcode"
              value=""
              onChange={this.handleChange}
              label="Zip Code"
              required
            />
          </ZipCodeInputContainer>
          <CustomButton
            type="submit"
            onClick={() => {
              history.push('/search-doctors');
            }}
          >
            Get Care Now
          </CustomButton>
        </ZipCodeSearchContainer>
        <DoctorCard horizontal doctor={doctor} />
      </DoctorSearchContainer>
    );
  }
}

export default withRouter(DoctorList);
