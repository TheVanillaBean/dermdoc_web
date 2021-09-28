import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import 'survey-react/modern.css';
import { fetchQuestionsStartAsync } from '../../redux/questionnaire/questionnaire.actions';
import { selectVisitData } from '../../redux/visit/visit.selectors';

class PhotosUpload extends React.Component {
  render() {
    return <div>photos upload component</div>;
  }
}

const mapStateToProps = createStructuredSelector({
  visit: selectVisitData,
});

const mapDispatchToProps = (dispatch) => ({
  fetchQuestionsStartAsync: (symptom) => dispatch(fetchQuestionsStartAsync(symptom)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PhotosUpload));
