import { createSelector } from 'reselect';

const selectCheckout = (state) => state.checkout;

export const selectCheckoutErrorMessage = createSelector(
  [selectCheckout],
  (checkout) => checkout.stripeErrorMessage
);

export const selectCheckoutIsFetchingURL = createSelector(
  [selectCheckout],
  (checkout) => checkout.isFetchingURL
);

export const selectCheckoutURL = createSelector(
  [selectCheckout],
  (checkout) => checkout.stripeCheckoutURL
);
