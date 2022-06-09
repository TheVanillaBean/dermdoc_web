import {
  convertQuestionnaireSnapshotToPageMap,
  firestore,
  mergePagesIntoSurveySchema,
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
  return async (dispatch) => {
    dispatch(fetchQuestionsStart());

    const generalMedicalHistoyDoc = firestore
      .collection('services')
      .doc('dermatology')
      .collection('symptoms')
      .doc('General Medical History')
      .collection('questionaire')
      .doc('screening-questions');

    const symptomDoc = firestore
      .collection('services')
      .doc('dermatology')
      .collection('symptoms')
      .doc(symptom)
      .collection('questionaire')
      .doc('screening-questions');

    try {
      const generalMedicalHistoyQuestions = await generalMedicalHistoyDoc.get();
      const symptomQuestions = await symptomDoc.get();

      if (generalMedicalHistoyQuestions.exists && symptomQuestions.exists) {
        const medicalHistoryPage = convertQuestionnaireSnapshotToPageMap(
          'Medical History',
          generalMedicalHistoyQuestions.data()
        );
        const symptomPage = convertQuestionnaireSnapshotToPageMap(
          symptom,
          symptomQuestions.data(),
          true
        );
        const survey = mergePagesIntoSurveySchema([medicalHistoryPage, symptomPage]);
        dispatch(fetchQuestionsSuccess(survey));
      } else {
        dispatch(fetchQuestionsFailure('Failed to load questions'));
      }
    } catch (e) {
      dispatch(fetchQuestionsFailure(e));
    }
  };
};
