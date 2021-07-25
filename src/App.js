import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "../src/assets/css/main.css/main.css";
import DoctorDetail from "./pages/doctor-detail/doctor-detail.page";
import DoctorList from "./pages/doctor-list/doctor-list.page";
import HomePage from "./pages/homepage/homepage.page";
import StartVisit from "./pages/start-visit/start-visit.page";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/search-doctors" component={DoctorList} />
        <Route exact path="/doctor-detail" component={DoctorDetail} />
        <Route exact path="/:doctor_route" component={DoctorDetail} />
        <Route path="/visits/:visit_id" component={StartVisit} />

        <Route exact path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    );
  }
}

export default App;
