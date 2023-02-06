import { createSelector } from 'reselect';

const selectCheckout = (state) => state.checkout;

export const selectCheckoutErrorMessage = createSelector(
  [selectCheckout],
  (checkout) => checkout.stripeErrorMessage
);

export const selectCheckoutIsFetchingSecret = createSelector(
  [selectCheckout],
  (checkout) => checkout.isFetchingSecret
);

export const selectCheckoutClientSecret = createSelector(
  [selectCheckout],
  (checkout) => checkout.stripeClientSecret
);
