import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import '../src/assets/css/main.css/main.css';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import AuthPage from './pages/auth/auth.pages';
import CheckoutPage from './pages/checkout/checkout.pages';
import DoctorDetailPage from './pages/doctor-detail/doctor-detail.page';
import DoctorSearchPage from './pages/doctor-search/doctor-search.page';
import HomePage from './pages/homepage/homepage.page';
import QuestionsPage from './pages/questions/questions.page';
import VisitCostPage from './pages/visit-overview/visit-overview.page';
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
        <Route exact path="/" component={HomePage} />
        <Route exact path="/search-doctors" component={DoctorSearchPage} />
        <Route path="/doctors/:doctor_route" component={DoctorDetailPage} />
        <Route path="/visits/cost/:visit_id" component={VisitCostPage} />
        <Route path="/visits/questions/:visit_id" component={QuestionsPage} />
        <Route path="/auth/:visit_id" component={AuthPage} />
        <Route path="/visits/checkout/:visit_id" component={CheckoutPage} />
        <Route exact path="*">
          <Redirect to="/" />
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
