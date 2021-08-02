import QuestionActionTypes from './questionnaire.types';

const INITIAL_STATE = {
  questions: null,
  isFetchingQuestions: true,
  questionsErrorMessage: undefined,
};

const questionnaireReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case QuestionActionTypes.FETCH_QUESTIONS_START:
      return {
        ...state,
        isFetchingQuestions: true,
      };
    case QuestionActionTypes.FETCH_QUESTIONS_SUCCESS:
      return {
        ...state,
        isFetchingQuestions: false,
        questions: action.payload,
      };
    case QuestionActionTypes.FETCH_QUESTIONS_FAILURE:
      return {
        ...state,
        isFetchingQuestions: false,
        questionsErrorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default questionnaireReducer;
