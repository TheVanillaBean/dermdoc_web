import {
  convertVisitSnapshotToMap,
  firestore,
} from '../../firebase/firebase.utils';
import VisitActionTypes from './visit.types';

export const fetchVisitStart = () => ({
  type: VisitActionTypes.FETCH_VISIT_START,
});

export const fetchVisitSuccess = (visitMap) => ({
  type: VisitActionTypes.FETCH_VISIT_SUCCESS,
  payload: visitMap,
});

export const fetchVisitFailure = (errorMessage) => ({
  type: VisitActionTypes.FETCH_VISIT_FAILURE,
  payload: errorMessage,
});

export const fetchDoctorStartAsync = (visitID) => {
  return (dispatch) => {
    dispatch(fetchVisitStart());

    const collectionRef = firestore
      .collection('visits')
      .where('visit_id', '==', visitID);

    collectionRef
      .get()
      .then(async (snapshot) => {
        const visitMap = convertVisitSnapshotToMap(snapshot);
        dispatch(fetchVisitSuccess(visitMap[0]));
        // dispatch(fetchDoctorsListFailure('Error'));
      })
      .catch((error) => {
        dispatch(fetchVisitFailure(error.message));
      });
  };
};
