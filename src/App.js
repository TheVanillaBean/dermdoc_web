import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import '../src/assets/css/main.css/main.css';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import AuthPage from './pages/auth/auth.pages';
import DoctorDetailPage from './pages/doctor-detail/doctor-detail.page';
import DoctorSearchPage from './pages/doctor-search/doctor-search.page';
import HomePage from './pages/homepage/homepage.page';
import QuestionsPage from './pages/questions/questions.page';
import VisitOverviewPage from './pages/visit-overview/visit-overview.page';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      }

      setCurrentUser(userAuth);
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
        <Route
          path="/visits/overview/:visit_id"
          component={VisitOverviewPage}
        />
        <Route path="/visits/questions/:visit_id" component={QuestionsPage} />
        <Route path="/auth" component={AuthPage} />
        <Route exact path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
