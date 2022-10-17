import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
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
import { trackInitiateCheckout } from '../../utils/analytics-helper';
import CheckoutForm from './checkout-form.component';
const stripePromise = loadStripe('pk_test_SY5CUKXzjYT67upOTiLGuoVD00INR5IkJL');
class Checkout extends React.Component {
  state = {
    showCheckout: false,
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

  options = {};

  handleSubmit = async () => {};

  componentDidUpdate() {
    const { showCheckout } = this.state;
    const { cookies, currentUser, stripeCheckoutURL, visit, updateVisitAsync } = this.props;

    if (showCheckout) {
      return;
    }

    // const analyticsData = configureAnalyticsObject(cookies);
    // analyticsData.event_id = `${visit.visit_id}-InitiateCheckout`;

    // updateVisitAsync(visit.visit_id, {
    //   analytics_data: {
    //     source_url: analyticsData.source_url,
    //     fbp: analyticsData.fbp,
    //     client_ip: analyticsData.client_ip,
    //     client_user_agent: analyticsData.client_user_agent,
    //     event_id: analyticsData.event_id,
    //   },
    // });

    trackInitiateCheckout({ visit_id: visit.visit_id });

    if (currentUser && stripeCheckoutURL) {
      this.options = {
        clientSecret: stripeCheckoutURL,
        appearance: {
          theme: 'stripe',
        },
      };
      this.setState({ showCheckout: true });
    }
  }

  render() {
    const { stripeErrorMessage, submitted } = this.props;
    const { showCheckout } = this.state;

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

            <div className='checkout-container__info-box margin-bottom-sm'>
              <IoInformationCircle className='checkout-container__info-box--img' />
              <p className='checkout-container__info-box--text '>
                Love your personalized cream in 90 days or get your money back.
              </p>
            </div>

            {showCheckout && (
              <Elements options={this.options} stripe={stripePromise}>
                <CheckoutForm />
              </Elements>
            )}
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
