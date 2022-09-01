import React from 'react';
import ReactPixel from 'react-facebook-pixel';
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

Survey.StylesManager.ThemeColors['modern']['$main-color'] = 'var(--color-primary)';
Survey.StylesManager.ThemeColors['modern']['$header-color'] = 'var(--color-primary-dark)';
Survey.StylesManager.ThemeColors['modern']['$header-background-color'] =
  'var(--color-primary-dark)';
Survey.StylesManager.ThemeColors['modern']['$body-container-background-color'] =
  'var(--color-primary)';
Survey.StylesManager.ThemeColors['modern']['$answer-background-color'] = 'var(--color-tint-1)';
Survey.StylesManager.ThemeColors['modern']['$progress-buttons-color'] = 'var(--color-tint-3)';
Survey.StylesManager.applyTheme('modern');

export const reviewHtml = `
<section class="questionnaire__thank-you">
  <h2 className="heading-tertiary">Almost There!</h2>
  <p className="paragraph">
    The only step left is to upload selfies for your dermatologist to see. These are private and will never be shared.
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

  componentDidUpdate() {
    const { visit, updateVisitAsync } = this.props;

    if (visit.photo_id_added && visit.status !== 'filled_out') {
      updateVisitAsync(visit.visit_id, {
        status: 'filled_out',
      });
    }
  }

  onComplete = async (survey, options) => {
    const {
      history,
      visit: { visit_id },
    } = this.props;
    const saveQuestionnaire = await saveQuestionnaireResponse(visit_id, survey.data);

    ReactPixel.track('Lead', {
      content_name: 'Questionnaire Submitted',
      content_ids: [visit_id],
      value: 2,
      currency: 'USD',
    });

    if (saveQuestionnaire.error) {
      console.log(saveQuestionnaire.message);
    } else {
      history.push(`/visits/${visit_id}/selfies`);
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Questionnaire));
