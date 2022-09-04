import { Component } from 'react';
import ReactPixel from 'react-facebook-pixel';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import { createStructuredSelector } from 'reselect';
import CustomButton from '../../components/custom-button/custom-button.component';
import Footer from '../../components/footer/footer.component';
import Header from '../../components/header/header.component';
import { createVisit } from '../../firebase/firebase.utils';
import { updateMailingState } from '../../redux/user/user.actions';
import { selectMailingState } from '../../redux/user/user.selectors';

ReactPixel.pageView();

class ChooseState extends Component {
  state = {
    submitted: false,
  };

  handleStateButtonPressed = (state) => {
    const { updateUserMailingState, history } = this.props;

    updateUserMailingState(state);

    if (state === 'NONE') {
      history.push('/waitlist');
      return;
    }

    this.createNewVisit(state);
  };

  createNewVisit = async (state) => {
    if (this.state.submitted) {
      return;
    }

    this.setState({ submitted: true });

    try {
      const newVisit = await createVisit('Acne', state);

      ReactPixel.track('ViewContent', {
        content_name: 'New Visit Initiated',
        content_ids: [newVisit.visitId],
        value: 1,
        currency: 'USD',
      });

      if (newVisit.error) {
        toast.error(newVisit.message);
        this.setState({ submitted: false });
      } else {
        const { history } = this.props;
        history.push(`/visits/${newVisit.visitId}`);
      }
    } catch (e) {
      let errorText = e.message;

      toast.error(errorText);
      this.setState({ submitted: false });
    }
  };

  render() {
    return (
      <div>
        <Header />

        <div className='choose-state-container'>
          <div className='container choose-state-container__header'>
            <h1 className='heading-secondary margin-bottom-ex-sm'>
              Your 3 month trial starts here
            </h1>
            <p className='heading-tertiary'>Select which state you currently live in</p>
          </div>
          <div className='container choose-state-container__buttons'>
            <CustomButton
              className='btn btn--full'
              onClick={() => this.handleStateButtonPressed('CA')}>
              I live in California
            </CustomButton>
            <CustomButton
              className='btn btn--full'
              onClick={() => this.handleStateButtonPressed('MA')}>
              I live in Massachusetts
            </CustomButton>
            <CustomButton
              className='btn btn--full'
              onClick={() => this.handleStateButtonPressed('NONE')}>
              I don’t live in either state
            </CustomButton>
          </div>
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

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  mailingState: selectMailingState,
});

const mapDispatchToProps = (dispatch) => ({
  updateUserMailingState: (state) => dispatch(updateMailingState(state)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChooseState));
