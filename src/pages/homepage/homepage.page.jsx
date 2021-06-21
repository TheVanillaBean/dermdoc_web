// @material-ui/core components
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import headshot from '../../assets/omar-headshot.jpeg';
import Card from '../../components/Card/Card.js';
import CardBody from '../../components/Card/CardBody.js';
import CustomButton from '../../components/custom-button/custom-button.component';
import Dropdown from '../../components/dropdown/dropdown.component';
import FormInput from '../../components/form-input/form-input.component';
import GridContainer from '../../components/Grid/GridContainer.js';
import GridItem from '../../components/Grid/GridItem.js';
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
import { FormInputTitle } from './homepage.styles';

const doctor = {
  name: 'Omar Badri, MD',
  imageUrl: headshot,
  location: 'Boston, Massachusetts',
  specialty: 'Dermatology',
  school: 'Harvard',
  residency: 'Harvard',
};

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
    const { visitReason, zipcode, insuranceBrand, classes } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    return (
      <div className={classes.container}>
        <GridContainer style={{ maxWidth: '1200px' }}>
          <GridItem xs={12} sm={12} md={6}>
            <Card style={{ background: '#f3f3f3', maxWidth: '600px' }}>
              <GridItem className={classes.itemGrid} style={{ padding: '0' }}>
                <img
                  src={doctor.imageUrl}
                  style={{
                    width: '100%',
                    maxHeight: '600px',
                    display: 'block',
                  }}
                />
              </GridItem>
              <CardBody>
                <h4 className={classes.cardTitle}>
                  {doctor.name}
                  <br />
                  <small className={classes.smallTitle}>
                    {doctor.specialty}
                  </small>
                </h4>
                Medical School: {doctor.school}
                <br />
                Residency: {doctor.residency}
                <br />
                Location: {doctor.location}
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
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
                defaultValue={{ label: visitReason, value: visitReason }}
              />
              <FormInputTitle>Insurance Brand</FormInputTitle>
              <Dropdown
                handleChange={this.handleInsuranceChange}
                label="Insurance Brand"
                dataOptions={insuranceBrands}
                defaultValue={{ label: insuranceBrand, value: insuranceBrand }}
              />
              <p>
                *If you proceed with insurance, you agree to honor our{' '}
                <a href="https://medicall-web.web.app/#/consent">
                  insurance waiver
                </a>
                .
              </p>
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
  withRouter(connect(mapStateToProps, mapDispatchToProps)(HomePage))
);
