// @material-ui/core components
import { withStyles } from '@material-ui/core/styles';
// nodejs library that concatenates classes
import classNames from 'classnames';
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import backgroundImage from '../../assets/img/landing-bg.jpg';
import profilePic from '../../assets/omar-headshot.jpeg';
import Button from '../../components/CustomButtons/Button.js';
import GridContainer from '../../components/Grid/GridContainer.js';
import GridItem from '../../components/Grid/GridItem.js';
import Parallax from '../../components/Parallax/Parallax.js';
import {
  selectDoctor,
  selectInsuranceBrand,
  selectVisitReason,
} from '../../redux/search/search.selectors';

const useStyles = (theme) => ({
  imgRaised: {
    width: '100%',
    height: '300px',
    margin: '0 auto',
    maxWidth: '300px',
    transform: 'translate3d(0, -50%, 0)',
    objectFit: 'cover',
  },
  imgRoundedCircle: {
    borderRadius: '50% !important',
  },
  imgFluid: {
    boxShadow:
      '0 5px 15px -8px rgb(0 0 0 / 24%), 0 8px 10px -5px rgb(0 0 0 / 20%)',
  },
  name: {
    marginTop: '-80px',
  },
  title: {
    display: 'inline-block',
    position: 'relative',
    minHeight: '32px',
    fontFamily: 'serif',
    fontWeight: '700',
    textDecoration: 'none',
  },
});

class DoctorDetail extends React.Component {
  componentDidMount() {}

  render() {
    const { classes, insuranceBrand, visitReason } = this.props;
    const {
      uid,
      first_name,
      last_name,
      accepted_insurances,
      med_school,
      practice_name,
      mailing_address,
      mailing_city,
      mailing_zipcode,
      med_residency,
      provider_bio,
    } = this.props.doctor;
    const url = `https://medicall-dev-58c31.web.app/#/registration?puid=${uid}&symptom=${visitReason}&insurance=${insuranceBrand}`;

    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    return (
      <div>
        <Parallax small filter image={backgroundImage} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      <img
                        src={profilePic}
                        alt="..."
                        className={imageClasses}
                      />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>
                        Dr. {first_name} {last_name}, MD
                      </h3>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
            </div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={4}>
                  <div className={classes.description}>
                    <p>Speciality: Dermatology</p>
                    <p>Medical School: {med_school}</p>
                    <p>Residency: {med_residency}</p>
                    <p>Average Response: 2 hours</p>
                  </div>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <div className={classes.description}>
                    <p>Bio</p>
                    <p>{provider_bio}</p>
                  </div>
                </GridItem>
              </GridContainer>
            </div>
            <br />
            <div className={classes.container}>
              <Button color="primary" href={url}>
                Get Care
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  doctor: selectDoctor,
  insuranceBrand: selectInsuranceBrand,
  visitReason: selectVisitReason,
});

export default withStyles(useStyles, { withTheme: true })(
  connect(mapStateToProps)(DoctorDetail)
);
