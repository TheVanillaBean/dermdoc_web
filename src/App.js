import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import HeaderLinks from './components/header/HeaderLinks';
import DoctorDetail from './pages/doctor-detail/doctor-detail.page';
import DoctorList from './pages/doctor-list/doctor-list.page';
import HomePage from './pages/homepage/homepage.page';
import { withStyles } from '@material-ui/core/styles';

const useStyles = theme => ({
})

class App extends Component {
  render() {
    return (
      <div style={{ textAlign: "-webkit-center", }}>
        <Header
          color="transparent"
          brand="Medicall"
          rightLinks={<HeaderLinks />}

          changeColorOnScroll={{
            height: 200,
            color: "white",
          }}
        />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/search-doctors" component={DoctorList} />
          <Route exact path="/doctor-detail" component={DoctorDetail} />
          <Route path="/:doctor_route" component={DoctorDetail} />
          <Route exact path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </div>
    );
  }
}
export default withStyles(useStyles)(App);
