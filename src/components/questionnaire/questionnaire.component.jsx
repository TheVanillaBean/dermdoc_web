import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import * as Survey from 'survey-react';
import 'survey-react/modern.css';
import { fetchQuestionsStartAsync } from '../../redux/questionnaire/questionnaire.actions';
import {
  selectIsQuestionnaireFetching,
  selectQuestionnaireErrorMessage,
  selectQuestions,
} from '../../redux/questionnaire/questionnaire.selectors';
import { selectVisitData } from '../../redux/visit/visit.selectors';

Survey.StylesManager.applyTheme('modern');
class Questionnaire extends React.Component {
  componentDidMount() {
    const {
      visit: { visit_reason },
      fetchQuestionsStartAsync,
    } = this.props;
    fetchQuestionsStartAsync(visit_reason);
  }

  handleSubmit = async (event) => {
    event.preventDefault();
  };

  onComplete(survey, options) {
    //Write survey results into database
    console.log('Survey results: ' + JSON.stringify(survey.data));
  }

  render() {
    const { questions, questionsError, questionsIsFetching } = this.props;

    if (questionsError) {
      return (
        <div className="spinner-overlay">
          <h1>questionsError</h1>
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
