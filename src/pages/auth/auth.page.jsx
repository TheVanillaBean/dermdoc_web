import React from 'react';
import { connect } from 'react-redux';
import Footer from '../../components/footer/footer.component';
import NavigationBar from '../../components/navigation-bar/navigation-bar.component';
import SignInSignUpContainer from '../../components/sign-in-sign-up/sign-in-sign-up.container';

class AuthPage extends React.Component {
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

export default connect(null, null)(AuthPage);
