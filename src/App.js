import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import '../src/assets/css/main.css/main.css';
import DoctorDetailPage from './pages/doctor-detail/doctor-detail.page';
import DoctorSearchPage from './pages/doctor-search/doctor-search.page';
import HomePage from './pages/homepage/homepage.page';
import VisitOverview from './pages/visit-overview/visit-overview.page';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/search-doctors" component={DoctorSearchPage} />
        <Route path="/doctors/:doctor_route" component={DoctorDetailPage} />
        <Route path="/visits/overview/:visit_id" component={VisitOverview} />
        <Route exact path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    );
  }
}

export default App;
