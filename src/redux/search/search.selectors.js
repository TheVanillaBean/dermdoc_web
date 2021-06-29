import { createSelector } from 'reselect';
import { areProvidersInArea, getState } from './search.utils';

const search = (state) => state.search;

export const selectZipCode = createSelector([search], (search) => search.zip_code);

export const selectState = createSelector([selectZipCode], (zipcode) => getState(zipcode));

export const selectAreProvidersInArea = createSelector([selectZipCode], (zipcode) => areProvidersInArea(zipcode));

export const selectInsuranceBrand = createSelector([search], (search) => search.insurance_brand);

export const selectVisitReason = createSelector([search], (search) => search.visit_reason);

export const selectDoctors = createSelector([search], (search) => search.doctors);

export const selectDoctor = createSelector([search], (search) => search.doctor);
