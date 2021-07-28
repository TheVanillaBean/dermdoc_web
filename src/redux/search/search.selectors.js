import { createSelector } from 'reselect';
import { getState } from './search.utils';

const search = (state) => state.search;

export const selectZipCode = createSelector(
  [search],
  (search) => search.zip_code
);

export const selectState = createSelector([selectZipCode], (zipcode) =>
  getState(zipcode)
);

export const selectInsuranceBrand = createSelector(
  [search],
  (search) => search.insurance_brand
);

export const selectVisitReason = createSelector(
  [search],
  (search) => search.visit_reason
);
