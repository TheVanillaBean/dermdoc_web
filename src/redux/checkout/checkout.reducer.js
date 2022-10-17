import CheckoutActionTypes from './checkout.types';

const INITIAL_STATE = {
  stripeClientSecret: null,
  isFetchingSecret: true,
  stripeErrorMessage: undefined,
};

const checkoutReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CheckoutActionTypes.FETCH_STRIPE_CLIENT_SECRET_START:
      return {
        ...state,
        isFetchingSecret: true,
      };
    case CheckoutActionTypes.FETCH_STRIPE_CLIENT_SECRET_SUCCESS:
      return {
        ...state,
        isFetchingSecret: false,
        stripeClientSecret: action.payload,
      };
    case CheckoutActionTypes.FETCH_STRIPE_CLIENT_SECRET_FAILURE:
      return {
        ...state,
        isFetchingSecret: false,
        stripeErrorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default checkoutReducer;
