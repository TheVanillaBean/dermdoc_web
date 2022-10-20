import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { withCookies } from 'react-cookie';
import { IoInformationCircle } from 'react-icons/io5';
import { isPossiblePhoneNumber } from 'react-phone-number-input';
import Input from 'react-phone-number-input/input';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createStructuredSelector } from 'reselect';
import WomenHoldingProduct from '../../assets/img/women-holding-product.jpg';
import { updateVisit } from '../../firebase/firebase.utils';
import { fetchCheckoutClientSecretStartAsync } from '../../redux/checkout/checkout.actions';
import {
  selectCheckoutClientSecret,
  selectCheckoutErrorMessage,
  selectCheckoutIsFetchingSecret,
} from '../../redux/checkout/checkout.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { updateVisitAsync } from '../../redux/visit/visit.actions';
import { selectVisitData } from '../../redux/visit/visit.selectors';
import { trackInitiateCheckout } from '../../utils/analytics-helper';
import FormInput from '../form-input/form-input.component';
import ShippingAutoComplete from '../shipping-autocomplete/shipping-autocomplete.component';
import CheckoutForm from './checkout-form.component';
const { REACT_APP_STRIPE_PUBLISHABLE_KEY } = process.env;
const stripePromise = loadStripe(REACT_APP_STRIPE_PUBLISHABLE_KEY);

class Checkout extends React.Component {
  state = {
    showCheckout: false,
    name: '',
    phone: '',
    shouldValidate: true,
    address1: '',
    address2: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'US',
    suggestions: { result: [] },
    error: '',
  };

  componentDidMount() {
    const {
      currentUser,
      visit: { visit_id, name, phone_number, shipping_address },
      fetchCheckoutClientSecretStartAsync,
    } = this.props;
    if (currentUser) {
      fetchCheckoutClientSecretStartAsync(currentUser.idToken, visit_id);
      if (name) {
        this.setState({ name: name });
      }

      if (phone_number) {
        this.setState({ phone: phone_number });
      }

      if (shipping_address) {
        this.setState({
          address1: shipping_address.line1,
          address2: shipping_address.line2,
          city: shipping_address.city,
          state: shipping_address.state,
          zipCode: shipping_address.postal_code,
        });
      }
    }
  }

  options = {};

  componentDidUpdate() {
    const { showCheckout } = this.state;
    const { cookies, currentUser, selectCheckoutClientSecret, visit, updateVisitAsync } =
      this.props;

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

    if (currentUser && selectCheckoutClientSecret) {
      this.options = {
        clientSecret: selectCheckoutClientSecret,
        appearance: {
          theme: 'stripe',
          variables: {
            colorPrimary: '#688db1',
            colorBackground: '#f9f9f9',
            colorText: '#363331',
            fontFamily: 'Montserrat, sans-serif',
            borderRadius: '15px',
          },
          rules: {
            '.Input': {
              border: '0.5px solid #363331',
              marginBottom: '10px',
            },
            '.Label': {
              letterSpacing: '0.75px',
              fontWeight: '500',
            },
          },
        },
      };
      this.setState({ showCheckout: true });
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handlePhoneChange = (number) => {
    this.setState({ phone: number });
  };

  isStateValid = () => {
    const { name, phone, address1, city, state, zipCode } = this.state;

    if (name.length === 0) {
      return { error: true, msg: 'Please enter your name' };
    }

    if (!isPossiblePhoneNumber(phone)) {
      return { error: true, msg: 'Please enter a valid phone number' };
    }

    if (address1.length === 0 || city.length === 0 || state.length === 0 || zipCode.length === 0) {
      return { error: true, msg: 'Please enter a valid shipping address' };
    }

    return { error: false, msg: '' };
  };

  handlePayBtnPressed = async (stripe, elements, event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const isStateValid = this.isStateValid();
    const { name, phone, address1, address2, city, state, zipCode } = this.state;
    const { visit } = this.props;

    if (isStateValid.error) {
      toast.error(isStateValid.msg);
      return;
    }

    const updateVisitRequest = await updateVisit(visit.visit_id, {
      name: name,
      phone_number: phone,
      shipping_address: {
        line1: address1,
        line2: address2,
        city: city,
        state: state,
        postal_code: zipCode,
        country: 'US',
      },
    });

    if (updateVisitRequest.error) {
      toast.error(updateVisitRequest.message);
      return;
    }

    console.log();

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.href}/visits/selfies`,
      },
    });
  };

  render() {
    const { stripeErrorMessage, selectCheckoutIsFetchingSecret } = this.props;
    const { showCheckout, name, phone, state } = this.state;

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

            <div className='shipping-info-container margin-bottom-md'>
              <div className='heading-secondary margin-bottom-sm'>Shipping Information</div>
              <form className='shipping-info-container--form'>
                <FormInput
                  type='name'
                  name='name'
                  value={name}
                  onChange={this.handleChange}
                  label='Name'
                  placeholder='Jane Doe'
                  required
                />
                <div className='form-input-container'>
                  <label className={'form-input-container__label heading-tertiary'}>Phone</label>
                  <Input
                    className={`form-input-container__input`}
                    country='US'
                    value={phone}
                    onChange={this.handlePhoneChange}
                    placeholder='(555) 123-4567'
                  />
                </div>
                <ShippingAutoComplete
                  updateState={(state) => this.setState(state)}
                  state={this.state}
                />
              </form>
            </div>

            {selectCheckoutIsFetchingSecret || !showCheckout || !state ? null : (
              <Elements options={this.options} stripe={stripePromise}>
                <CheckoutForm handlePayBtnPressed={this.handlePayBtnPressed} />)
              </Elements>
            )}
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
  selectCheckoutClientSecret: selectCheckoutClientSecret,
  selectCheckoutIsFetchingSecret: selectCheckoutIsFetchingSecret,
  stripeErrorMessage: selectCheckoutErrorMessage,
});

const mapDispatchToProps = (dispatch) => ({
  updateVisitAsync: (visitID, updatedVisitData) =>
    dispatch(updateVisitAsync(visitID, updatedVisitData)),
  fetchCheckoutClientSecretStartAsync: (idToken, visitID) =>
    dispatch(fetchCheckoutClientSecretStartAsync(idToken, visitID)),
});

export default withRouter(withCookies(connect(mapStateToProps, mapDispatchToProps)(Checkout)));
