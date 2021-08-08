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
  return async (dispatch) => {
    dispatch(fetchVisitStart());

    await fetchVisitData(visitID, dispatch);
  };
};

export const updateVisitAsync = (visitID, updatedVisitData) => {
  return async (dispatch) => {
    dispatch(fetchVisitStart());

    const updateVisitAPICall = await updateVisit(visitID, updatedVisitData);

    if (!updateVisitAPICall.error) {
      await fetchVisitData(visitID, dispatch);
    } else {
      dispatch(fetchVisitFailure(updateVisitAPICall.message));
    }
  };
};

const fetchVisitData = async (visitID, dispatch) => {
  const documentRef = firestore.collection('visits').doc(visitID);
  try {
    const visitSnapshot = await documentRef.get();
    const visitMap = convertVisitSnapshotToMap(visitSnapshot.data());
    dispatch(fetchVisitSuccess(visitMap[0]));
  } catch (e) {
    dispatch(
      fetchVisitFailure(
        'We could not find information for this visit. Please contact omar@medicall.com for fast assistance.'
      )
    );
  }
};
