import React from 'react';
import { connect } from 'react-redux';
import Footer from '../../components/footer/footer.component';
import NavigationBar from '../../components/navigation-bar/navigation-bar.component';
import SignInSignUpContainer from '../../components/sign-in-sign-up/sign-in-sign-up.container';
import { fetchVisitStartAsync } from '../../redux/visit/visit.actions';

class AuthPage extends React.Component {
  componentDidMount() {
    const { match, fetchVisitStartAsync } = this.props;
    const visitID = match.params.visit_id;
    fetchVisitStartAsync(visitID);
  }

  render() {
    return (
      <div>
        <header className="header">
          <div className="container">
            <NavigationBar />
          </div>
        </header>

        <SignInSignUpContainer />

        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchVisitStartAsync: (visit_id) => dispatch(fetchVisitStartAsync(visit_id)),
});

export default connect(null, mapDispatchToProps)(AuthPage);
