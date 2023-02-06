import axios from 'axios';
import CheckoutActionTypes from './checkout.types';
const { REACT_APP_CHECKOUT_URL } = process.env;
export const fetchCheckoutClientSecretStart = () => ({
  type: CheckoutActionTypes.FETCH_STRIPE_CLIENT_SECRET_START,
});

export const fetchCheckoutClientSecretSuccess = (url) => ({
  type: CheckoutActionTypes.FETCH_STRIPE_CLIENT_SECRET_SUCCESS,
  payload: url,
});

export const fetchCheckoutClientSecretFailure = (errorMessage) => ({
  type: CheckoutActionTypes.FETCH_STRIPE_CLIENT_SECRET_FAILURE,
  payload: errorMessage,
});

export const fetchCheckoutClientSecretStartAsync = (idToken, visitID) => {
  return async (dispatch) => {
    dispatch(fetchCheckoutClientSecretStart());

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${idToken}`,
    };

    try {
      const fetchStripeURL = await axios.post(
        REACT_APP_CHECKOUT_URL,
        {
          visitId: visitID,
        },
        {
          headers: headers,
        }
      );

      if (fetchStripeURL.status === 200) {
        const clientSecret = fetchStripeURL.data.clientSecret;
        dispatch(fetchCheckoutClientSecretSuccess(clientSecret));
      } else {
        dispatch(
          fetchCheckoutClientSecretFailure(
            'There was an error with your checkout. Please email contact@dermdoc.com.'
          )
        );
      }
    } catch (e) {
      dispatch(
        fetchCheckoutClientSecretFailure(
          'There was an error with your checkout. Please email contact@dermdoc.com.'
        )
      );
    }
  };
};
