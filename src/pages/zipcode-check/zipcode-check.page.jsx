import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import { createStructuredSelector } from 'reselect';
import CustomButton from '../../components/custom-button/custom-button.component';
import Footer from '../../components/footer/footer.component';
import Header from '../../components/header/header.component';
import LegalCheckbox from '../../components/legal-checkbox/legal-checkbox.component';
import { createVisit } from '../../firebase/firebase.utils';
import { updateZipCode } from '../../redux/search/search.actions';
import { selectState, selectVisitReason, selectZipCode } from '../../redux/search/search.selectors';

class ZipCodeCheck extends Component {
  state = {
    doctorsAvailable: false,
    termsChecked: false,
  };

  handleZipcodeChange = (event) => {
    const { updateZipCode } = this.props;
    const { value } = event.target;
    updateZipCode(value);
  };

  handleTermsCheckboxChange = (event) => {
    const { checked } = event.target;
    this.setState({ termsChecked: checked });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { mailing_state } = this.props;

    if (mailing_state !== 'MA') {
      this.setState({ doctorsAvailable: false });
      const { history } = this.props;
      history.push('/waitlist');
    } else {
      this.setState({ doctorsAvailable: true });
    }
  };

  createNewVisit = async () => {
    if (!this.state.termsChecked) {
      toast.info(
        'You must agree to the terms and conditions, privacy policy, and telehealth consent before continuing.'
      );

      return;
    }

    const { visitReason } = this.props;

    try {
      const newVisit = await createVisit(visitReason);

      if (newVisit.error) {
        toast.error(newVisit.message);
      } else {
        const { history } = this.props;
        history.push(`/visits/${newVisit.visitId}/questions`);
      }
    } catch (e) {
      let errorText = e.message;

      toast.error(errorText);
    }
  };

  render() {
    const { zipcode, visitReason } = this.props;

    return (
      <div>
        <Header />

        <section className='section-services' id='services'>
          <div className='container center-text'>
            <span className='subheading'>First things first</span>
            <h2 className='heading-secondary'>Check if Medicall has doctors in your state</h2>
          </div>
          <div className='container center-text margin-bottom-md'>
            <input
              class='zipcode-input'
              type='number'
              name='zipcode'
              value={zipcode}
              onChange={this.handleZipcodeChange}
              placeholder='What is your zipcode'
              required
            />
            <CustomButton className='btn btn--full' onClick={this.handleSubmit}>
              Continue
            </CustomButton>
          </div>
          <div className='container center-text margin-bottom-md'>
            <LegalCheckbox
              value={this.state.termsChecked}
              handleChange={this.handleTermsCheckboxChange}
              required
            />
          </div>
          {this.state.doctorsAvailable && (
            <div className='container center-text margin-bottom-md'>
              <span className='subheading'>We are in your state!</span>

              <CustomButton
                className='btn btn--full'
                onClick={() => this.createNewVisit(visitReason)}>
                Continue with your {visitReason} visit
              </CustomButton>
            </div>
          )}
        </section>

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

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  zipcode: selectZipCode,
  mailing_state: selectState,
  visitReason: selectVisitReason,
});

const mapDispatchToProps = (dispatch) => ({
  updateZipCode: (zipcode) => dispatch(updateZipCode(zipcode)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ZipCodeCheck));
