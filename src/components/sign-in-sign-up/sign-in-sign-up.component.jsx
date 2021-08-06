import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInSignUp = () => (
  <div className="auth-page">
    <div className="container">
      <div className="flex">
        <SignIn />
        <SignUp />
      </div>
    </div>
  </div>
);

export default SignInSignUp;
