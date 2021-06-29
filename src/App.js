import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import '../src/assets/css/main.css/main.css';
import DoctorDetail from './pages/doctor-detail/doctor-detail.page';
import DoctorList from './pages/doctor-list/doctor-list.page';
import HomePage from './pages/homepage/homepage.page';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/search-doctors" component={DoctorList} />
        <Route exact path="/doctor-detail" component={DoctorDetail} />
        <Route path="/:doctor_route" component={DoctorDetail} />
        <Route exact path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    );
  }
}

export default App;
