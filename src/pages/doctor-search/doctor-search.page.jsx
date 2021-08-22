import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createStructuredSelector } from 'reselect';
import CustomButton from '../../components/custom-button/custom-button.component';
import DoctorListContainer from '../../components/doctors-list/doctors-list.container';
import Footer from '../../components/footer/footer.component';
import FormInput from '../../components/form-input/form-input.component';
import NavigationBar from '../../components/navigation-bar/navigation-bar.component';
import { joinWaitlistWithEmail } from '../../firebase/firebase.utils';
import { fetchDoctorsListStartAsync } from '../../redux/doctors/doctors.actions';
import {
  selectInsuranceBrand,
  selectState,
  selectZipCode,
} from '../../redux/search/search.selectors';

class DoctorSearchPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
    };
  }

  componentDidMount() {
    const { fetchDoctorsListStartAsync, insuranceBrand, zipcode } = this.props;

    fetchDoctorsListStartAsync(insuranceBrand, zipcode);
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email } = this.state;

    try {
      const joinWaitlist = await joinWaitlistWithEmail(
        email,
        this.props.mailing_state
      );

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
    if (this.props.mailing_state !== 'MA') {
      const { email } = this.state;
      return (
        <div>
          <header className="header">
            <div className="container">
              <NavigationBar />
            </div>
          </header>

          <div className="container">
            <div className="not-in-area">
              <p>Medicall only has doctors in Massachusetts currently</p>
              <p>
                If you join our waitlist, we will send you a 20% discount when
                we are in your area
              </p>
            </div>

            <form className="sign-up-form" onSubmit={this.handleSubmit}>
              <FormInput
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                label="Email"
                required
              />
              <CustomButton className="custom-button" type="submit">
                JOIN WAITLIST!
              </CustomButton>
            </form>
            <ToastContainer
              position="top-right"
              bodyClassName="toastBody"
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
    return (
      <div>
        <header className="header">
          <div className="container">
            <NavigationBar />
          </div>
        </header>

        <DoctorListContainer />

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  zipcode: selectZipCode,
  insuranceBrand: selectInsuranceBrand,
  mailing_state: selectState,
});

const mapDispatchToProps = (dispatch) => ({
  fetchDoctorsListStartAsync: (insuranceBrand, zipcode) =>
    dispatch(fetchDoctorsListStartAsync(insuranceBrand, zipcode)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DoctorSearchPage)
);
