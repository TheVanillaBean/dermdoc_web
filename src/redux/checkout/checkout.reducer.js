import CheckoutActionTypes from './checkout.types';

const INITIAL_STATE = {
  stripeCheckoutURL: null,
  isFetchingURL: true,
  stripeErrorMessage: undefined,
};

const checkoutReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CheckoutActionTypes.FETCH_STRIPE_URL_START:
      return {
        ...state,
        isFetchingURL: true,
      };
    case CheckoutActionTypes.FETCH_STRIPE_URL_SUCCESS:
      return {
        ...state,
        isFetchingURL: false,
        stripeCheckoutURL: action.payload,
      };
    case CheckoutActionTypes.FETCH_STRIPE_URL_FAILURE:
      return {
        ...state,
        isFetchingURL: false,
        stripeErrorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default checkoutReducer;
