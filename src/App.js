import { Component } from 'react';
import ReactPixel from 'react-facebook-pixel';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import '../src/assets/css/main.css/main.css';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import ChooseStatePage from './pages/choose-state/choose-state.page';
import HomePage from './pages/homepage/homepage.page';
import IngredientsPage from './pages/ingredients/ingredients.component';
import LegalPage from './pages/legal/legal.pages';
import VisitLandingPage from './pages/visit-landing/visit-landing.page';
import WaitlistPage from './pages/waitlist/waitlist.page';
import { setCurrentUser } from './redux/user/user.actions';
import { selectVisitData } from './redux/visit/visit.selectors';

ReactPixel.init('702584800918603', {}, { debug: true, autoConfig: true });

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
        <Route exact path='/ingredients' component={IngredientsPage} />
        <Route exact path='/waitlist' component={WaitlistPage} />
        <Route exact path='/get_started' component={ChooseStatePage} />
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
