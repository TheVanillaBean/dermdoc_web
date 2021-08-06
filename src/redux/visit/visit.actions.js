import {
  convertVisitSnapshotToMap,
  firestore,
  updateVisit,
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

export const fetchVisitStartAsync = (visitID) => {
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

export const updateVisitAsync = (visitID, updatedVisitData) => {
  return async (dispatch) => {
    dispatch(fetchVisitStart());

    const updateVisitAPICall = await updateVisit(visitID, updatedVisitData);

    if (!updateVisitAPICall.error) {
      const collectionRef = firestore
        .collection('visits')
        .where('visit_id', '==', visitID);

      const visit = await collectionRef.get();
      const visitMap = convertVisitSnapshotToMap(visit);
      dispatch(fetchVisitSuccess(visitMap[0]));
    } else {
      dispatch(fetchVisitFailure(updateVisitAPICall.message));
    }
  };
};
