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

    const documentRef = firestore
      .collection('services')
      .doc('dermatology')
      .collection('symptoms')
      .doc(symptom)
      .collection('questionaire')
      .doc('screening-questions');

    documentRef
      .get()
      .then(async (snapshot) => {
        if (snapshot.exists) {
          const questionsMap = convertQuestionnaireSnapshotToMap(
            symptom,
            snapshot.data()
          );
          dispatch(fetchQuestionsSuccess(questionsMap));
        } else {
          dispatch(fetchQuestionsFailure('Failed to load questions'));
        }
      })
      .catch((error) => {
        dispatch(fetchQuestionsFailure(error.message));
      });
  };
};
