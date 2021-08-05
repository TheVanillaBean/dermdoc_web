import React from 'react';
import Footer from '../../components/footer/footer.component';
import NavigationBar from '../../components/navigation-bar/navigation-bar.component';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const AuthPage = () => (
  <div>
    <header className="header">
      <div className="container">
        <NavigationBar />
      </div>
    </header>

    <div className="auth-page">
      <div className="container">
        <div className="flex">
          <SignIn />
          <SignUp />
        </div>
      </div>
    </div>

    <Footer />
  </div>
);

export default AuthPage;
