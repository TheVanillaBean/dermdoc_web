import { SearchActionTypes } from './search.types';

export const updateZipCode = (zipcode) => ({
  type: SearchActionTypes.UPDATE_ZIP_CODE,
  payload: zipcode,
});

export const updateVisitReason = (visitReason) => ({
  type: SearchActionTypes.UPDATE_VISIT_REASON,
  payload: visitReason,
});

export const updateInsuranceType = (insuranceType) => ({
  type: SearchActionTypes.UPDATE_INSURANCE_TYPE,
  payload: insuranceType,
});

export const updateDoctors = (doctors) => ({
  type: SearchActionTypes.UPDATE_DOCTORS,
  payload: doctors,
});

export const updateDoctor = (doctor) => ({
  type: SearchActionTypes.UPDATE_DOCTOR,
  payload: doctor,
});