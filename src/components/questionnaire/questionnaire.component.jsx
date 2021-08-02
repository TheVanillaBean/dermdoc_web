import React from 'react';
import { createStructuredSelector } from 'reselect';
import { fetchQuestionsStartAsync } from '../../redux/questionnaire/questionnaire.actions';
import {
  selectIsQuestionnaireFetching,
  selectQuestionnaireErrorMessage,
  selectQuestions,
} from '../../redux/questionnaire/questionnaire.selectors';
import { selectVisitData } from '../../redux/visit/visit.selectors';

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

  render() {
    const { visit, questions, questionsError, questionsIsFetching } =
      this.props;

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
        return <section className="cost-estimate"></section>;
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
