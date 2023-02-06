import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import {
  selectIsVisitFetching,
  selectVisitErrorMessage,
} from '../../redux/visit/visit.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import Questionnaire from './questionnaire.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsVisitFetching,
  errorMessage: selectVisitErrorMessage,
});

const QuestionnaireContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(Questionnaire);

export default QuestionnaireContainer;
