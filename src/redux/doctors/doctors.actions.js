import {
  convertDoctorsListSnapshotToMap,
  firestore,
} from '../../firebase/firebase.utils';
import { areProvidersInArea } from '../search/search.utils';
import DoctorActionTypes from './doctors.types';

//SINGLE DOCTOR ACTIONS

export const fetchDoctorStart = () => ({
  type: DoctorActionTypes.FETCH_DOCTOR_START,
});

export const fetchDoctorSuccess = (doctorMap) => ({
  type: DoctorActionTypes.FETCH_DOCTOR_SUCCESS,
  payload: doctorMap,
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

export const fetchDoctorsListStartAsync = (insuranceBrand, zipcode) => {
  return (dispatch) => {
    dispatch(fetchDoctorsListStart());

    const state = areProvidersInArea(zipcode);

    if (state != null) {
      const collectionRef = firestore
        .collection('users')
        .where('type', '==', 'PROVIDER')
        .where('stripe_connect_authorized', '==', true)
        .where('mailing_state', '==', state)
        .where('accepted_insurances', 'array-contains', insuranceBrand);

      collectionRef
        .onSnapshot(async (snapshot) => {
          const doctorsMap = convertDoctorsListSnapshotToMap(snapshot);
          dispatch(fetchDoctorsListSuccess(doctorsMap));
        })
        .catch((error) => {
          dispatch(fetchDoctorsListFailure(error.message));
        });
    } else {
      dispatch(
        fetchDoctorsListFailure('There are currently no doctors in your area.')
      );
    }
  };
};
