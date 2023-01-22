import { Component, lazy, Suspense } from 'react';
import { withCookies } from 'react-cookie';
import { connect } from 'react-redux';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import '../src/assets/css/main.css/main.css';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { updateVisitAsync } from './redux/visit/visit.actions';
import { selectVisitData } from './redux/visit/visit.selectors';
const ChooseStatePage = lazy(() => import('./pages/choose-state/choose-state.page'));
const IngredientsPage = lazy(() => import('./pages/ingredients/ingredients.component'));
const LegalPage = lazy(() => import('./pages/legal/legal.pages'));
const VisitCancelPage = lazy(() => import('./pages/visit-cancel/visit-cancel.page'));
const VisitLandingPage = lazy(() => import('./pages/visit-landing/visit-landing.page'));
const WaitlistPage = lazy(() => import('./pages/waitlist/waitlist.page'));
const { REACT_APP_FB_PIXEL_ID, REACT_APP_TIKTOK_PIXEL_ID } = process.env;
const HomePage = lazy(() => import('./pages/homepage/homepage.page'));

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser, history } = this.props;

    // ReactPixel.init(REACT_APP_FB_PIXEL_ID, {}, { debug: true, autoConfig: true });
    // TiktokPixel.init(REACT_APP_TIKTOK_PIXEL_ID);

    // this.unlistenRoutes = history.listen((location, action) => {
    //   if (!location.hash) {
    //     //hash means like #how (same page different section)
    //     // ReactPixel.pageView();
    //     // TiktokPixel.pageView();
    //   }
    // });

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

  async componentDidUpdate() {
    const { currentUser, visit, updateVisitAsync } = this.props;

    // if (currentUser && visit && !visit.patient_id) {
    //   const { cookies } = this.props;
    //   const analyticsData = await configureAnalyticsObject(cookies);
    //   analyticsData.event_id = `${visit.visit_id}-CompleteRegistration`;

    //   updateVisitAsync(visit.visit_id, {
    //     patient_id: currentUser.id,
    //     email: currentUser.email,
    //     analytics_data: {
    //       source_url: analyticsData.source_url,
    //       fbp: analyticsData.fbp,
    //       client_ip: analyticsData.client_ip,
    //       client_user_agent: analyticsData.client_user_agent,
    //       event_id: analyticsData.event_id,
    //     },
    //   });

    //   trackCompleteRegistration({
    //     visit_id: visit.visit_id,
    //   });
    // }
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
    this.unlistenRoutes();
  }

  render() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/ingredients' component={IngredientsPage} />
          <Route exact path='/waitlist' component={WaitlistPage} />
          <Route exact path='/get_started' component={ChooseStatePage} />
          <Route path='/visits/:visit_id' component={VisitLandingPage} />
          <Route exact path='/cancel' component={VisitCancelPage} />
          <Route path='/privacy' render={() => <LegalPage page='privacy' />} />
          <Route path='/terms' render={() => <LegalPage page='terms' />} />
          <Route path='/consent' render={() => <LegalPage page='consent' />} />
          <Route exact path='*'>
            <Redirect to='/' />
          </Route>
        </Switch>
      </Suspense>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  visit: selectVisitData,
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  updateVisitAsync: (visitID, updatedVisitData) =>
    dispatch(updateVisitAsync(visitID, updatedVisitData)),
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default withRouter(withCookies(connect(mapStateToProps, mapDispatchToProps)(App)));
