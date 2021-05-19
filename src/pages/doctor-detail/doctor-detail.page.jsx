import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDoctor } from '../../redux/search/search.selectors';
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { withStyles } from '@material-ui/core/styles';

// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "../../components/header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import Button from "../../components/CustomButtons/Button.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Parallax from "../../components/Parallax/Parallax.js";
import HeaderLinks from "../../components/header/HeaderLinks.js";
import NavPills from "../../components/NavPills/NavPills.js";

import profilePic from "../../assets/omar-headshot.jpeg";
import backgroundImage from '../../assets/img/landing-bg.jpg';


const useStyles = theme => ({
  imgRaised: {
    width: "100%",
    height: "300px",
    margin: "0 auto",
    maxWidth: "300px",
    transform: "translate3d(0, -50%, 0)",
    objectFit: "cover",
  },
  imgRoundedCircle: {
    borderRadius: "50% !important",
  },
  imgFluid: {
    boxShadow: "0 5px 15px -8px rgb(0 0 0 / 24%), 0 8px 10px -5px rgb(0 0 0 / 20%)"
  },
  name: {
    marginTop: "-80px"
  },
  title: {
    display: "inline-block",
    position: "relative",
    minHeight: "32px",
    fontFamily: "serif",
    fontWeight: "700",
    textDecoration: "none",
  }
})

class DoctorDetail extends React.Component {
  componentDidMount() { }

  render() {

    const { classes } = this.props

    const {
      routeName,
      first_name,
      last_name,
      accepted_insurances,
      med_school,
      practice_name,
    } = this.props.doctor;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    return (
      <div>

        <Parallax
          small
          filter
          image={backgroundImage}
        />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      <img src={profilePic} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>{first_name}</h3>
                      <h6>{last_name}</h6>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <div className={classes.description}>
                <p>
                  {accepted_insurances}
                </p>
                <p>
                  {med_school}
                </p>
                <p>
                  {practice_name}
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  doctor: selectDoctor,
});

export default withStyles(useStyles, { withTheme: true })(
  connect(mapStateToProps)(DoctorDetail)
);
