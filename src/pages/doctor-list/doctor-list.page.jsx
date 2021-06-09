import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import headshot from '../../assets/omar-headshot.jpeg';
import Card from '../../components/Card/Card.js';
import CardBody from '../../components/Card/CardBody.js';
import Button from '../../components/CustomButtons/Button.js';
import FormInput from '../../components/form-input/form-input.component';
import GridContainer from '../../components/Grid/GridContainer.js';
import GridItem from '../../components/Grid/GridItem.js';
import {
  convertDoctorsListSnapshotToMap,
  firestore,
} from '../../firebase/firebase.utils';
import {
  updateDoctor,
  updateDoctors,
  updateZipCode,
} from '../../redux/search/search.actions';
import {
  selectAreProvidersInArea,
  selectDoctors,
  selectInsuranceBrand,
  selectState,
  selectVisitReason,
  selectZipCode,
} from '../../redux/search/search.selectors';

const styles = (theme) => ({
  Header: {
    display: 'none',
  },
  Card: {
    background: '#ccc',
  },
});

class DoctorList extends React.Component {
  componentDidMount() {
    const { updateDoctors, insuranceBrand, visitReason, mailingState } =
      this.props;

    const state = this.validateZipCodeAndInsurance();

    if (state != null) {
      const collectionRef = firestore
        .collection('users')
        .where('type', '==', 'PROVIDER')
        .where('stripe_connect_authorized', '==', true)
        .where('mailing_state', '==', mailingState)
        .where('accepted_insurances', 'array-contains', insuranceBrand);

      collectionRef.onSnapshot(async (snapshot) => {
        const doctorsMap = convertDoctorsListSnapshotToMap(snapshot);
        updateDoctors(doctorsMap);
      });
    }
  }

  handleZipcodeChange = (event) => {
    const { updateZipCode } = this.props;
    const { value } = event.target;
    updateZipCode(value);
  };

  handleDoctorClick = (doctor) => {
    const { updateDoctor, history } = this.props;
    updateDoctor(doctor);
    history.push(doctor.routeName);
  };

  validateZipCodeAndInsurance = () => {
    const { areProvidersInArea } = this.props;

    const state = areProvidersInArea;
    if (state != null) {
      return state;
    }
    return null;
  };

  render() {
    const { doctors, zipcode, classes } = this.props;
    if (this.validateZipCodeAndInsurance() == null) {
      return (
        <h4>
          Medicall only has doctors in Massachuetts currently, but you can join
          the waitlist to recieve a 20% coupon when we are in your area.
        </h4>
      );
    }
    return (
      <GridContainer style={{ maxWidth: '1200px' }}>
        <GridItem xs={10} sm={10} md={10} style={{ alignSelf: 'center' }}>
          <FormInput
            type="number"
            name="zipcode"
            value={zipcode}
            onChange={this.handleZipcodeChange}
            required
          />
        </GridItem>
        <GridItem xs={2} sm={2} md={2}>
          <Button color="primary" type="submit" style={{ margin: '8px' }}>
            Search Doctors
          </Button>
        </GridItem>
        {doctors.map((doctor) => (
          <GridItem>
            <Card
              style={{
                background: '#f3f3f3',
                flexDirection: 'row',
                maxWidth: '900px',
              }}
            >
              <GridItem
                className={classes.itemGrid}
                style={{ padding: '0', display: 'inline-flex' }}
              >
                <img
                  alt="Headshot"
                  src={headshot}
                  className={classes.imgCardLeft}
                  style={{ maxHeight: '200px' }}
                />
              </GridItem>
              <CardBody
                style={{
                  width: '100%',
                  maxHeight: '200px',
                  alignSelf: 'center',
                }}
              >
                <h4 className={classes.cardTitle}>
                  {doctor.first_name + ' ' + doctor.last_name}
                </h4>
                Medical School: {doctor.med_school}
                <br />
                <Button
                  color="primary"
                  onClick={() => {
                    this.handleDoctorClick(doctor);
                  }}
                >
                  Get Care
                </Button>
              </CardBody>
            </Card>
          </GridItem>
        ))}
      </GridContainer>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  visitReason: selectVisitReason,
  zipcode: selectZipCode,
  doctors: selectDoctors,
  insuranceBrand: selectInsuranceBrand,
  areProvidersInArea: selectAreProvidersInArea,
  mailingState: selectState,
});

const mapDispatchToProps = (dispatch) => ({
  updateZipCode: (zipcode) => dispatch(updateZipCode(zipcode)),
  updateDoctors: (doctors) => dispatch(updateDoctors(doctors)),
  updateDoctor: (doctor) => dispatch(updateDoctor(doctor)),
});

export default withStyles(styles, { withTheme: true })(
  withRouter(connect(mapStateToProps, mapDispatchToProps)(DoctorList))
);
