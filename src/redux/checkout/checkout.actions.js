import axios from 'axios';
import CheckoutActionTypes from './checkout.types';

export const fetchCheckoutURLStart = () => ({
  type: CheckoutActionTypes.FETCH_STRIPE_URL_START,
});

export const fetchCheckoutURLSuccess = (url) => ({
  type: CheckoutActionTypes.FETCH_STRIPE_URL_SUCCESS,
  payload: url,
});

export const fetchCheckoutURLFailure = (errorMessage) => ({
  type: CheckoutActionTypes.FETCH_STRIPE_URL_FAILURE,
  payload: errorMessage,
});

export const fetchCheckoutURLStartAsync = (idToken, visitID) => {
  return async (dispatch) => {
    dispatch(fetchCheckoutURLStart());

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${idToken}`,
    };

    try {
      const fetchStripeURL = await axios.post(
        `https://acfb9630196f.ngrok.io/medicall-dev-58c31/us-central1/api/checkout/create-checkout-session`,
        {
          visitId: visitID,
        },
        {
          headers: headers,
        }
      );

      if (fetchStripeURL.status === 200) {
        const url = fetchStripeURL.data.url;
        dispatch(fetchCheckoutURLSuccess(url));
      } else {
        dispatch(
          fetchCheckoutURLFailure(
            'There was an error with your checkout. Please contact omar@medicall.com.'
          )
        );
      }
    } catch (e) {
      dispatch(
        fetchCheckoutURLFailure(
          'There was an error with your checkout. Please contact omar@medicall.com'
        )
      );
    }
  };
};
