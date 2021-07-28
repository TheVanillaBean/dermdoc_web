import DoctorActionTypes from './doctors.types';

//SINGLE DOCTOR ACTIONS

export const fetchDoctorStart = () => ({
  type: DoctorActionTypes.FETCH_DOCTOR_START,
});

export const fetchDoctorSuccess = (DoctorMap) => ({
  type: DoctorActionTypes.FETCH_DOCTOR_SUCCESS,
  payload: DoctorMap,
});

export const fetchDoctorFailure = (errorMessage) => ({
  type: DoctorActionTypes.FETCH_DOCTOR_FAILURE,
  payload: errorMessage,
});

export const fetchDoctorStartAsync = () => {
  return (dispatch) => {};
};

//DOCTORS LIST ACTIONS

export const fetchDoctorsListStart = () => ({
  type: DoctorActionTypes.FETCH_DOCTORS_LIST_START,
});

export const fetchDoctorsListSuccess = (DoctorsListMap) => ({
  type: DoctorActionTypes.FETCH_DOCTORS_LIST_SUCCESS,
  payload: DoctorsListMap,
});

export const fetchDoctorsListFailure = (errorMessage) => ({
  type: DoctorActionTypes.FETCH_DOCTORS_LIST_FAILURE,
  payload: errorMessage,
});

export const fetchDoctorsListStartAsync = () => {
  return (dispatch) => {};
};
