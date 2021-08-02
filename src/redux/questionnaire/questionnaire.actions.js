import {
  convertQuestionnaireSnapshotToMap,
  firestore,
} from '../../firebase/firebase.utils';
import QuestionnaireActionTypes from './questionnaire.types';

export const fetchQuestionsStart = () => ({
  type: QuestionnaireActionTypes.FETCH_QUESTIONS_START,
});

export const fetchQuestionsSuccess = (questionsMap) => ({
  type: QuestionnaireActionTypes.FETCH_QUESTIONS_SUCCESS,
  payload: questionsMap,
});

export const fetchQuestionsFailure = (errorMessage) => ({
  type: QuestionnaireActionTypes.FETCH_QUESTIONS_FAILURE,
  payload: errorMessage,
});

export const fetchQuestionsStartAsync = (symptom) => {
  return (dispatch) => {
    dispatch(fetchQuestionsStart());

    const collectionRef = firestore
      .collection('services')
      .doc('dermatology')
      .collection('symptoms')
      .doc(symptom)
      .collection('questionaire');

    collectionRef
      .get()
      .then(async (snapshot) => {
        const questionsMap = convertQuestionnaireSnapshotToMap(snapshot);
        dispatch(fetchQuestionsSuccess(questionsMap[0]));
        // dispatch(fetchDoctorsListFailure('Error'));
      })
      .catch((error) => {
        dispatch(fetchQuestionsFailure(error.message));
      });
  };
};
