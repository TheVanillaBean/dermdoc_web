import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createStructuredSelector } from 'reselect';
import { auth, NON_PERSITANCE } from '../../firebase/firebase.utils';
import { selectVisitData } from '../../redux/visit/visit.selectors';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
class SignIn extends Component {
  constructor(props) {
    super(props);

    const { visit } = this.props;

    const {
      original_patient_information: { email },
    } = visit;

    this.state = {
      email: email,
      password: '',
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.setPersistence(NON_PERSITANCE);
      await auth.signInWithEmailAndPassword(email, password);
    } catch (e) {
      let errorText = 'An error occured with sign in';
      if (e.code === 'auth/wrong-password') {
        errorText = 'Wrong password for account.';
      } else if (e.code === 'auth/user-not-found') {
        errorText = 'We could not find a user with this email.';
      } else if (e.code === 'auth/user-disabled') {
        errorText = 'This account has been disabled.';
      } else if (e.code === 'auth/invalid-email') {
        errorText = 'This email is invalid';
      } else if (e.code === 'auth/too-many-requests') {
        errorText =
          'You have made too many requests. Please try again in 5 minutes.';
      }
      toast.error(errorText);
    }

    this.setState({ password: '' });
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleForgotPassword = async () => {
    try {
      await auth.sendPasswordResetEmail(this.state.email);
      toast.success(
        `A password reset email has just been sent to ${this.state.email}!`
      );
    } catch (e) {
      let errorText = 'An error occured';
      if (e.code === 'auth/user-not-found') {
        errorText = 'We could not find a user with this email.';
      } else if (e.code === 'auth/invalid-email') {
        errorText = 'This email is invalid';
      }
      toast.error(errorText);
    }
  };

  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            disabled
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />
          <div className="buttons">
            <CustomButton className="custom-button" type="submit">
              Sign in
            </CustomButton>
            <CustomButton
              className="custom-button"
              onClick={this.handleForgotPassword}
            >
              Forgot password
            </CustomButton>
          </div>
        </form>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  visit: selectVisitData,
});

export default withRouter(connect(mapStateToProps)(SignIn));
