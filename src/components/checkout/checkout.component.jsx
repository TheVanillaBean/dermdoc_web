import ReactPixel from '@bettercart/react-facebook-pixel';
import React from 'react';
import { withCookies } from 'react-cookie';
import { IoInformationCircle } from 'react-icons/io5';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import 'survey-react/modern.css';
import WomenHoldingProduct from '../../assets/img/women-holding-product.jpg';
import { fetchCheckoutURLStartAsync } from '../../redux/checkout/checkout.actions';
import {
  selectCheckoutErrorMessage,
  selectCheckoutIsFetchingURL,
  selectCheckoutURL,
} from '../../redux/checkout/checkout.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { updateVisitAsync } from '../../redux/visit/visit.actions';
import { selectVisitData } from '../../redux/visit/visit.selectors';
import { configureAnalyticsObject } from '../../utils/analytics-helper';
import CTAButton from '../cta/cta.component';

class Checkout extends React.Component {
  state = {
    submitted: false,
  };

  componentDidMount() {
    const {
      currentUser,
      visit: { visit_id },
      fetchCheckoutURLStartAsync,
    } = this.props;
    if (currentUser) {
      fetchCheckoutURLStartAsync(currentUser.idToken, visit_id);
    }
  }

  handleSubmit = async () => {
    const { submitted } = this.state;
    const { currentUser, stripeCheckoutURL, visit, updateVisitAsync } = this.props;

    if (submitted) {
      return;
    }
    this.setState({ submitted: true });

    const { cookies } = this.props;
    const analyticsData = await configureAnalyticsObject(cookies);
    analyticsData.event_id = `${visit.visit_id}-InitiateCheckout`;

    updateVisitAsync(visit.visit_id, {
      analytics_data: {
        source_url: analyticsData.source_url,
        fbp: analyticsData.fbp,
        client_ip: analyticsData.client_ip,
        client_user_agent: analyticsData.client_user_agent,
        checkout_pressed_once: true,
        event_id: analyticsData.event_id,
      },
    });

    ReactPixel.track(
      'InitiateCheckout',
      {
        content_name: 'InitiateCheckout',
        content_ids: [visit.visit_id],
        value: 4,
        currency: 'USD',
      },
      { eventID: analyticsData.event_id }
    );

    if (currentUser && stripeCheckoutURL) {
      window.location.replace(stripeCheckoutURL);
    }
  };

  componentDidUpdate() {
    const { submitted } = this.state;
    const { isFetchingURL } = this.props;
    if (submitted && !isFetchingURL) {
      this.setState({ submitted: false });
    }
  }

  render() {
    const { stripeErrorMessage, submitted } = this.props;

    if (stripeErrorMessage) {
      return this.stripeErrorUI(stripeErrorMessage);
    } else {
      return (
        <div className='checkout-container'>
          <div className='container checkout-container__header'>
            <h1 className='heading-secondary margin-bottom-ex-sm'>
              Time for the big reveal <br />
              (drumroll)
            </h1>
            <p className='heading-tertiary'>
              Try your personalized cream for 3 months. Just cover{' '}
              <span className='text-primary-color'>$9.99</span> for shipping and handling.
            </p>

            <div className='checkout-container__pricing-box'>
              <img
                className='checkout-container__pricing-box__img'
                src={WomenHoldingProduct}
                alt='Women Holding Product'
              />
              <div className='checkout-container__pricing-box__details'>
                <h1 className='heading-secondary'>Personalized Skin Cream</h1>
                <p className='heading-tertiary text-primary-color'>
                  <span className='strike-through text-grey-color'>$59.97</span> $9.99 (three months
                  supply)
                </p>
              </div>
            </div>

            <div className='checkout-container__info-box'>
              <IoInformationCircle className='checkout-container__info-box--img' />
              <p className='checkout-container__info-box--text '>
                Love your personalized cream in 90 days or get your money back.
              </p>
            </div>

            <CTAButton
              additionalClassName='margin-center'
              buttonText='Continue'
              handleClick={this.handleSubmit}
            />
          </div>
          {submitted ? this.checkoutLoadingUI() : null}
        </div>
      );
    }
  }

  stripeErrorUI(stripeErrorMessage) {
    return (
      <div className='container spinner-overlay'>
        <h1 className='heading-tertiary'>{stripeErrorMessage}</h1>
      </div>
    );
  }

  checkoutLoadingUI() {
    return (
      <div className='spinner-overlay'>
        <h2>Loading your checkout. Please wait...</h2>
        <div className='spinner-container' />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  visit: selectVisitData,
  currentUser: selectCurrentUser,
  stripeCheckoutURL: selectCheckoutURL,
  isFetchingURL: selectCheckoutIsFetchingURL,
  stripeErrorMessage: selectCheckoutErrorMessage,
});

const mapDispatchToProps = (dispatch) => ({
  updateVisitAsync: (visitID, updatedVisitData) =>
    dispatch(updateVisitAsync(visitID, updatedVisitData)),
  fetchCheckoutURLStartAsync: (idToken, visitID) =>
    dispatch(fetchCheckoutURLStartAsync(idToken, visitID)),
});

export default withRouter(withCookies(connect(mapStateToProps, mapDispatchToProps)(Checkout)));
