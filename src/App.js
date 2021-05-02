import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import DoctorDetail from './pages/doctor-detail/doctor-detail.page';
import DoctorList from './pages/doctor-list/doctor-list.page';
import HomePage from './pages/homepage/homepage.page';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/search-doctors" component={DoctorList} />
          <Route exact path="/doctor-detail" component={DoctorDetail} />
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
