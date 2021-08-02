import React from 'react';
import { connect } from 'react-redux';
import Footer from '../../components/footer/footer.component';
import NavigationBar from '../../components/navigation-bar/navigation-bar.component';
import QuestionnaireContainer from '../../components/questionnaire/questionnaire.container';
import { fetchVisitStartAsync } from '../../redux/visit/visit.actions';

class QuestionsPage extends React.Component {
  componentDidMount() {
    if (this.props.doctor == null) {
      const { match, fetchVisitStartAsync } = this.props;
      const visitID = match.params.visit_id;
      fetchVisitStartAsync(visitID);
    }
  }

  render() {
    return (
      <div>
        <header className="header">
          <div className="container">
            <NavigationBar />
          </div>
        </header>

        <QuestionnaireContainer />

        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchVisitStartAsync: (visit_id) => dispatch(fetchVisitStartAsync(visit_id)),
});

export default connect(null, mapDispatchToProps)(QuestionsPage);
