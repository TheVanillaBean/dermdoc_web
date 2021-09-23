import React from 'react';
import { withRouter } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomButton from '../../components/custom-button/custom-button.component';
import Footer from '../../components/footer/footer.component';
import FormInput from '../../components/form-input/form-input.component';
import Header from '../../components/header/header.component';
import { joinWaitlistWithEmail } from '../../firebase/firebase.utils';

class WaitlistPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email } = this.state;

    try {
      const joinWaitlist = await joinWaitlistWithEmail(email);

      if (joinWaitlist.error) {
        toast.error(joinWaitlist.message);
      } else {
        toast.success('You have joined the waitlist!');
      }

      this.setState({
        email: '',
      });
    } catch (e) {
      let errorText = e.message;

      toast.error(errorText);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { email } = this.state;
    return (
      <div>
        <Header />

        <div className='container margin-bottom-md'>
          <div className='not-in-area'>
            <p>Dr. Badri is only licensed in Massachusetts.</p>
            <br />
            <p>
              If you join our waitlist, we will send you a 50% discount when we onboard a doctor in
              your state.
            </p>
          </div>

          <form className='sign-up-form' onSubmit={this.handleSubmit}>
            <FormInput
              type='email'
              name='email'
              value={email}
              onChange={this.handleChange}
              label='Email'
              required
            />
            <CustomButton className='custom-button' type='submit'>
              JOIN WAITLIST
            </CustomButton>
          </form>

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

        <Footer />
      </div>
    );
  }
}

export default withRouter(WaitlistPage);
