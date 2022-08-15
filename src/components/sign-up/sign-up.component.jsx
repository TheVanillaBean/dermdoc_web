import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createStructuredSelector } from 'reselect';
import LegalCheckbox from '../../components/legal-checkbox/legal-checkbox.component';
import { auth, createUserProfileDocument, NON_PERSISTANCE } from '../../firebase/firebase.utils';
import { selectVisitData } from '../../redux/visit/visit.selectors';
import CTAButton from '../cta/cta.component';
import FormInput from '../form-input/form-input.component';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: '',
      email: '',
      password: '',
      submitted: false,
      termsChecked: false,
    };
  }

  handleTermsCheckboxChange = (event) => {
    const { checked } = event.target;
    this.setState({ termsChecked: checked });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password, submitted, termsChecked } = this.state;

    if (!termsChecked) {
      toast.info(
        'You must agree to the terms and conditions, privacy policy, and telehealth consent before continuing.'
      );

      return;
    }

    if (submitted) {
      return;
    }

    this.setState({ submitted: true });

    if (email.length === 0) {
      toast.error('Please enter an email');
    }

    if (password.length === 0) {
      toast.error('Please enter a password');
    }

    try {
      await auth.setPersistence(NON_PERSISTANCE);
      const { user } = await auth.createUserWithEmailAndPassword(email, password);

      await createUserProfileDocument(user, { email });

      this.setState({
        email: '',
        password: '',
        submitted: false,
      });
    } catch (e) {
      let errorText = 'An error occured with sign up';
      if (e.code === 'auth/email-already-in-use') {
        await auth.signInWithEmailAndPassword(email, password);

        this.setState({
          email: '',
          password: '',
          submitted: false,
        });

        return;
      } else if (e.code === 'auth/operation-not-allowed') {
        errorText =
          'We could not create an account for you. Please contact omar@medicall.com for fast support.';
      } else if (e.code === 'auth/weak-password') {
        errorText = 'This password is too weak. Passwords need a minimum of 6 characters.';
      } else if (e.code === 'auth/invalid-email') {
        errorText = 'This email is invalid';
      } else if (e.code === 'auth/too-many-requests') {
        errorText = 'You have made too many requests. Please try again in 5 minutes.';
      }
      toast.error(errorText);

      this.setState({
        password: '',
        submitted: false,
      });
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className='sign-up'>
        <form className='sign-up__form'>
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='Email address'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            label='Password'
            required
          />
        </form>
        <div className='margin-bottom-reg'>
          <LegalCheckbox
            value={this.state.termsChecked}
            handleChange={this.handleTermsCheckboxChange}
            required
          />
        </div>
        <CTAButton
          additionalClassName='margin-center'
          buttonText='Let’s Do This!'
          handleClick={this.handleSubmit}
        />

        <ToastContainer
          position='top-right'
          bodyClassName='toastBody'
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

export default withRouter(connect(mapStateToProps)(SignUp));
