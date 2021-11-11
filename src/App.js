import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import '../src/assets/css/main.css/main.css';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import HomePage from './pages/homepage/homepage.page';
import LegalPage from './pages/legal/legal.pages';
import VisitLandingPage from './pages/visit-landing/visit-landing.page';
import WaitlistPage from './pages/waitlist/waitlist.page';
import ZipcodeCheckPage from './pages/zipcode-check/zipcode-check.page';
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
        <Route exact path='/waitlist' component={WaitlistPage} />
        {/* <Route exact path='/services' component={ServicesPages} /> */}
        <Route exact path='/get_started' component={ZipcodeCheckPage} />
        {/* <Route
          exact
          path='/cf-pittsfield'
          render={() => (
            <GymPromotionPage gym='Pittsfield' coupon_code='cfpittsfield' zipcode='01201' />
          )}
        />
        <Route
          exact
          path='/cf-southie'
          render={() => <GymPromotionPage gym='Southie' coupon_code='cfsouthie' zipcode='02127' />}
        />
        <Route
          exact
          path='/cf-new-england'
          render={() => (
            <GymPromotionPage gym='New England' coupon_code='cfnewengland' zipcode='01760' />
          )}
        />
        <Route
          exact
          path='/cf-daybreak'
          render={() => (
            <GymPromotionPage gym='Daybreak' coupon_code='cfdaybreak' zipcode='01778' />
          )}
        />
        <Route
          exact
          path='/cf-lowell'
          render={() => <GymPromotionPage gym='Lowell' coupon_code='cflowell' zipcode='01852' />}
        /> */}
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
