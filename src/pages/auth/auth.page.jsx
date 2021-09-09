import React from 'react';
import { connect } from 'react-redux';
import Footer from '../../components/footer/footer.component';
import Header from '../../components/header/header.component';
import SignInSignUpContainer from '../../components/sign-in-sign-up/sign-in-sign-up.container';

class AuthPage extends React.Component {
  render() {
    return (
      <div>
        <Header />

        <SignInSignUpContainer />

        <Footer />
      </div>
    );
  }
}

export default connect(null, null)(AuthPage);
