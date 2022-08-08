import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createStructuredSelector } from 'reselect';
import { auth, createUserProfileDocument, NON_PERSISTANCE } from '../../firebase/firebase.utils';
import { selectVisitData } from '../../redux/visit/visit.selectors';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: '',
      email: '',
      password: '',
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.setPersistence(NON_PERSISTANCE);
      const { user } = await auth.createUserWithEmailAndPassword(email, password);

      await createUserProfileDocument(user, { email });

      this.setState({
        email: '',
        password: '',
      });
    } catch (e) {
      let errorText = 'An error occured with sign up';
      if (e.code === 'auth/email-already-in-use') {
        errorText = 'This email is already associated with an account.';
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
        <form className='sign-up__form' onSubmit={this.handleSubmit}>
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
        <div className='sign-up__buttons'>
          <CustomButton className='btn btn--full' type='submit'>
            Let’s Do This!
          </CustomButton>
        </div>
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
