import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import * as Survey from 'survey-react';
import 'survey-react/modern.css';
import { saveQuestionnaireResponse } from '../../firebase/firebase.utils';
import { fetchQuestionsStartAsync } from '../../redux/questionnaire/questionnaire.actions';
import {
  selectIsQuestionnaireFetching,
  selectQuestionnaireErrorMessage,
  selectQuestions,
} from '../../redux/questionnaire/questionnaire.selectors';
import { selectVisitData } from '../../redux/visit/visit.selectors';

Survey.StylesManager.ThemeColors['modern']['$main-color'] = '#90024c';
Survey.StylesManager.ThemeColors['modern']['$header-color'] = '#8e201d';
Survey.StylesManager.ThemeColors['modern']['$header-background-color'] =
  '#8e201d';
Survey.StylesManager.ThemeColors['modern']['$body-container-background-color'] =
  '#90024c';
Survey.StylesManager.ThemeColors['modern']['$answer-background-color'] =
  '#ebb9ae';
Survey.StylesManager.ThemeColors['modern']['$progress-buttons-color'] =
  '#8e201d';
Survey.StylesManager.applyTheme('modern');

export const reviewHtml = `
<section class="questionnaire__thank-you">
  <h2>Almost There!</h2>
  <p>
    Your visit is almost booked! The only step left is to create a password for your account. This insures
    that you can securely and privately proceed with this visit.
  </p>

</section>
`;
class Questionnaire extends React.Component {
  componentDidMount() {
    const {
      visit: { visit_reason },
      fetchQuestionsStartAsync,
    } = this.props;
    fetchQuestionsStartAsync(visit_reason);
  }

  onComplete = async (survey, options) => {
    const {
      history,
      visit: { visit_id },
    } = this.props;
    const saveQuestionnaire = await saveQuestionnaireResponse(
      visit_id,
      survey.data
    );
    if (saveQuestionnaire.error) {
      console.log(saveQuestionnaire.message);
    } else {
      history.push(`/visits/${visit_id}/auth`);
    }
  };

  render() {
    const { questions, questionsError, questionsIsFetching } = this.props;

    if (questionsError) {
      return (
        <div className="spinner-overlay">
          <h1>{questionsError}</h1>
        </div>
      );
    } else {
      if (questionsIsFetching) {
        return (
          <div className="spinner-overlay">
            <div className="spinner-container" />
          </div>
        );
      } else {
        const model = new Survey.Model(questions);

        return (
          <section className="questionnaire">
            <div className="container">
              <div className="questionnaire__header">
                <h1>
                  Please fill out the following questions. This will help your
                  doctor provider better care during your upcoming video visit.
                  You can return to the questions at anytime.
                </h1>
              </div>

              <Survey.Survey model={model} onComplete={this.onComplete} />
            </div>
          </section>
        );
      }
    }
  }
}

const mapStateToProps = createStructuredSelector({
  visit: selectVisitData,
  questions: selectQuestions,
  questionsError: selectQuestionnaireErrorMessage,
  questionsIsFetching: selectIsQuestionnaireFetching,
});

const mapDispatchToProps = (dispatch) => ({
  fetchQuestionsStartAsync: (symptom) =>
    dispatch(fetchQuestionsStartAsync(symptom)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Questionnaire)
);
