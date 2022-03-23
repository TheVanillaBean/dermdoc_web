import React, { Component } from 'react';
import ReactPixel from 'react-facebook-pixel';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import { createStructuredSelector } from 'reselect';
import CustomButton from '../../components/custom-button/custom-button.component';
import Footer from '../../components/footer/footer.component';
import Header from '../../components/header/header.component';
import LegalCheckbox from '../../components/legal-checkbox/legal-checkbox.component';
import { createVisit, logZipCode } from '../../firebase/firebase.utils';
import { updateZipCode } from '../../redux/search/search.actions';
import { selectState, selectVisitReason, selectZipCode } from '../../redux/search/search.selectors';
ReactPixel.pageView();

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

  handleZipcodeSubmit = async (event) => {
    event.preventDefault();

    const { mailing_state, zipcode } = this.props;

    await logZipCode(zipcode, mailing_state);

    if (mailing_state !== 'MA' && mailing_state !== 'CA') {
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

    const { visitReason, mailing_state } = this.props;

    try {
      const newVisit = await createVisit(visitReason, mailing_state);

      ReactPixel.track('ViewContent', {
        content_name: 'New Visit Initiated',
        content_ids: [newVisit.visitId],
        value: 0.5,
        currency: 'USD',
      });

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
          {!this.state.doctorsAvailable ? (
            <div>
              <div className='container center-text margin-bottom-md'>
                <h1 className='heading-primary'>Verify your zip-code</h1>
                <p className='heading-tertiary'>
                  So we can choose a dermatologist licensed in your state
                </p>
              </div>

              <div className='zipcode container center-text margin-bottom-sm'>
                <input
                  className='zipcode-input'
                  type='number'
                  name='zipcode'
                  value={zipcode}
                  onChange={this.handleZipcodeChange}
                  placeholder='What is your zipcode?'
                  required
                />
                <CustomButton className='btn btn--full' onClick={this.handleZipcodeSubmit}>
                  Continue
                </CustomButton>
              </div>
            </div>
          ) : (
            <div className='container center-text margin-bottom-md'>
              <h1 className='heading-primary margin-bottom-sm'>
                &#127881; Hooray! We are in your area!
              </h1>
              <p className='heading-tertiary margin-bottom-md'>
                Next, you’ll complete a <span className='text-primary-color'>free</span> online
                visit. This involves answering questions about your health and sharing photos so
                your doctor can <span className='text-primary-color'>customize</span> your skin
                cream (or oral medication).
              </p>

              <CustomButton
                className='btn btn--full margin-bottom-sm'
                onClick={() => this.createNewVisit(visitReason)}>
                Begin your journey
              </CustomButton>

              <div className='container center-text margin-bottom-md'>
                <LegalCheckbox
                  value={this.state.termsChecked}
                  handleChange={this.handleTermsCheckboxChange}
                  required
                />
              </div>
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
