import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import headshot from '../../assets/omar-headshot.jpeg';
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Parallax from "../../components/Parallax/Parallax.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";
import CustomButton from '../../components/custom-button/custom-button.component';
import DoctorCard from '../../components/doctor-card/doctor-card.component';
import Dropdown from '../../components/dropdown/dropdown.component';
import FormInput from '../../components/form-input/form-input.component';
import classNames from "classnames";
// @material-ui/core components
import { withStyles } from '@material-ui/core/styles';
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

const styles = (theme) => ({
  Header: {
    display: 'none',
  },
  Card: {
    background: '#ccc',
  },
});

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
    const { zipcode, classes } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    return (
      <div className={classes.container} >
        <GridContainer style={{ maxWidth: "1200px" }}>
          <GridItem xs={12} sm={12} md={6}>
            <Card style={{ background: "#f3f3f3", maxWidth: "600px", }}>
              <GridItem className={classes.itemGrid} style={{ padding: "0" }}>
                <img src={doctor.imageUrl} style={{ width: "100%", maxHeight: "600px", display: "block", }} />
              </GridItem>
              <CardBody>
                <h4 className={classes.cardTitle}>
                  {doctor.name}
                  <br />
                  <small className={classes.smallTitle}>{doctor.specialty}</small>
                </h4>
                Medical School: {doctor.school}
                <br />
          Residency: {doctor.residency}
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                {doctor.location}
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6} >
            <form onSubmit={this.handleSubmit}>
              <FormInputTitle>Zipcode</FormInputTitle>
              <FormInput
                type="number"
                name="zipcode"
                value={zipcode}
                onChange={this.handleZipcodeChange}
                required
              />
              <FormInputTitle>Visit Reason</FormInputTitle>
              <Dropdown
                handleChange={this.handleReasonChange}
                label="Visit Reason"
                dataOptions={visitReasons}
              />
              <FormInputTitle>Insurance Brand</FormInputTitle>
              <Dropdown
                handleChange={this.handleInsuranceChange}
                label="Insurance Brand"
                dataOptions={insuranceBrands}
              />
              <br></br>
              <CustomButton type="submit">Get Care Now</CustomButton>
            </form>
          </GridItem>
        </GridContainer>
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

export default withStyles(styles, { withTheme: true })(
  withRouter(
    connect(mapStateToProps, mapDispatchToProps)(HomePage)
  )
);
