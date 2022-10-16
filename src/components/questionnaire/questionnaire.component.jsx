import React from 'react';
import { withCookies } from 'react-cookie';
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
import { updateVisitAsync } from '../../redux/visit/visit.actions';
import { selectVisitData } from '../../redux/visit/visit.selectors';
import { configureAnalyticsObject, trackLead } from '../../utils/analytics-helper';

Survey.StylesManager.ThemeColors['modern']['$main-color'] = 'var(--color-primary)';
Survey.StylesManager.ThemeColors['modern']['$header-color'] = 'var(--color-primary-dark)';
Survey.StylesManager.ThemeColors['modern']['$header-background-color'] =
  'var(--color-primary-dark)';
Survey.StylesManager.ThemeColors['modern']['$body-container-background-color'] =
  'var(--color-primary)';
Survey.StylesManager.ThemeColors['modern']['$answer-background-color'] = 'var(--color-tint-1)';
Survey.StylesManager.ThemeColors['modern']['$progress-buttons-color'] = 'var(--color-tint-3)';
Survey.StylesManager.applyTheme('modern');

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
      location,
      visit: { visit_id },
    } = this.props;
    const { cookies } = this.props;
    const analyticsData = await configureAnalyticsObject(cookies);
    analyticsData.event_id = `${visit_id}-Lead`;

    const saveQuestionnaire = await saveQuestionnaireResponse(visit_id, survey.data, analyticsData);

    trackLead({ visit_id: visit_id });

    if (saveQuestionnaire.error) {
      console.log(saveQuestionnaire.message);
    } else {
      history.push(`/visits/${visit_id}/checkout${location.search}`);
    }
  };

  render() {
    const { questions, questionsError, questionsIsFetching } = this.props;

    if (questionsError) {
      return (
        <div className='spinner-overlay'>
          <h1>{questionsError}</h1>
        </div>
      );
    } else {
      if (questionsIsFetching) {
        return (
          <div className='spinner-overlay'>
            <div className='spinner-container' />
          </div>
        );
      } else {
        const model = new Survey.Model(questions);

        return (
          <section className='questionnaire'>
            <div className='container'>
              <h1 className='heading-tertiary center-text'>
                The following questions will help your dermatologist design your custom cream.
              </h1>

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
  updateVisitAsync: (visitID, updatedVisitData) =>
    dispatch(updateVisitAsync(visitID, updatedVisitData)),
  fetchQuestionsStartAsync: (symptom) => dispatch(fetchQuestionsStartAsync(symptom)),
});

export default withRouter(withCookies(connect(mapStateToProps, mapDispatchToProps)(Questionnaire)));
