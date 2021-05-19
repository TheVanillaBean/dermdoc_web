/*eslint-disable*/
import React from "react";
import logo from '../../assets/logo.png';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { Link } from 'react-router-dom';


// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "../../components/CustomDropdown/CustomDropdown.js";
import Button from "../../components/CustomButtons/Button.js";

import styles from "../../assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button target="_blank"
          color="transparent"
          className={classes.navLink}>
          <Link to="/list-practice">List your practice</Link></Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button target="_blank"
          color="transparent"
          className={classes.navLink}>
          <Link to="/help">Help</Link></Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button target="_blank"
          color="transparent"
          className={classes.navLink}>
          <Link to="/login">Login</Link></Button>
      </ListItem>

    </List>
  );
}
