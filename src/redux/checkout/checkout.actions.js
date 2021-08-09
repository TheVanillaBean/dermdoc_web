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

export const fetchCheckoutURLStartAsync = (visitID) => {
  return async (dispatch) => {
    dispatch(fetchCheckoutURLStart());

    dispatch(fetchCheckoutURLSuccess());

    dispatch(fetchCheckoutURLFailure());
  };
};
