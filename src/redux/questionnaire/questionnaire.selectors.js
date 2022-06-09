import { createSelector } from 'reselect';

const questionnaire = (state) => state.questionnaire;

export const selectQuestionnaireErrorMessage = createSelector(
  [questionnaire],
  (questionnaire) => questionnaire.questionsErrorMessage
);

export const selectIsQuestionnaireFetching = createSelector(
  [questionnaire],
  (questionnaire) => questionnaire.isFetchingQuestions
);

export const selectQuestions = createSelector(
  [questionnaire],
  (questionnaire) => questionnaire.questions
);
