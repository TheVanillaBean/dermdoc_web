import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import '../src/assets/css/main.css/main.css';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import DoctorDetailPage from './pages/doctor-detail/doctor-detail.page';
import DoctorSearchPage from './pages/doctor-search/doctor-search.page';
import HomePage from './pages/homepage/homepage.page';
import LegalPage from './pages/legal/legal.pages';
import ServicesPages from './pages/services/services.pages';
import VisitLandingPage from './pages/visit-landing/visit-landing.page';
import { setCurrentUser } from './redux/user/user.actions';
import { selectVisitData } from './redux/visit/visit.selectors';

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        const user = await userRef.get();
        const idToken = await userAuth.getIdToken();
        setCurrentUser({
          id: user.id,
          idToken: idToken,
          ...user.data(),
        });
      } else {
        setCurrentUser(null);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/search-doctors' component={DoctorSearchPage} />
        <Route exact path='/services' component={ServicesPages} />
        <Route path='/doctors/:doctor_route' component={DoctorDetailPage} />
        <Route path='/visits/:visit_id' component={VisitLandingPage} />
        <Route path='/privacy' render={() => <LegalPage page='privacy' />} />
        <Route path='/terms' render={() => <LegalPage page='terms' />} />
        <Route path='/consent' render={() => <LegalPage page='consent' />} />
        <Route exact path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  visit: selectVisitData,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
