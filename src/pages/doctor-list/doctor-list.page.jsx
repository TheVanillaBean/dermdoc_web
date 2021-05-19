import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import CustomButton from '../../components/custom-button/custom-button.component';
import DoctorCard from '../../components/doctor-card/doctor-card.component';
import FormInput from '../../components/form-input/form-input.component';
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Parallax from "../../components/Parallax/Parallax.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import { withStyles } from '@material-ui/core/styles';
import headshot from '../../assets/omar-headshot.jpeg';
import classNames from "classnames";
import CardFooter from "../../components/Card/CardFooter.js";
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
  selectDoctors,
  selectZipCode,
} from '../../redux/search/search.selectors';
import {
  DoctorSearchContainer,
  ZipCodeInputContainer,
  ZipCodeSearchContainer,
} from './doctor-list.styles';

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
    const { updateDoctors } = this.props;

    //TODO
    //Create function for getting state from zip code (similar to flutter app)
    const collectionRef = firestore
      .collection('users')
      .where('type', '==', 'PROVIDER');

    collectionRef.onSnapshot(async (snapshot) => {
      const doctorsMap = convertDoctorsListSnapshotToMap(snapshot);
      updateDoctors(doctorsMap);
    });
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

  render() {
    const { doctors, zipcode, classes } = this.props;
    return (
      <GridContainer style={{ maxWidth: "1200px" }}>
        <GridItem xs={10} sm={10} md={10} style={{ alignSelf: "center" }}>
          <FormInput

            type="number"
            name="zipcode"
            value={zipcode}
            onChange={this.handleZipcodeChange}
            required
          />
        </GridItem>
        <GridItem xs={2} sm={2} md={2} >
          <Button color="primary" type="submit">Search Doctors</Button>
        </GridItem>
        {doctors.map((doctor) => (
          <GridItem>
            <Card style={{ background: "#f3f3f3", flexDirection: "row", maxWidth: "1100px", }}>
              <GridItem className={classes.itemGrid} style={{ padding: "0", display: "inline-flex" }}>
                <img src={headshot} className={classes.imgCardLeft} style={{ maxHeight: "600px", }} />
              </GridItem>
              <CardBody style={{ width: "100%", maxHeight: "600px", alignSelf: "center" }} >
                <h4 className={classes.cardTitle}>
                  {doctor.first_name + ' ' + doctor.last_name}
                </h4>
                Medical School: {doctor.med_school}
                <br />
                <Button color="primary" onClick={() => {
                  this.handleDoctorClick(doctor);
                }}>Get Care</Button>
              </CardBody>

            </Card>
          </GridItem>
        ))}
      </GridContainer>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  zipcode: selectZipCode,
  doctors: selectDoctors,
});

const mapDispatchToProps = (dispatch) => ({
  updateZipCode: (zipcode) => dispatch(updateZipCode(zipcode)),
  updateDoctors: (doctors) => dispatch(updateDoctors(doctors)),
  updateDoctor: (doctor) => dispatch(updateDoctor(doctor)),
});

export default withStyles(styles, { withTheme: true })(
  withRouter(
    connect(mapStateToProps, mapDispatchToProps)(DoctorList)
  )
);
