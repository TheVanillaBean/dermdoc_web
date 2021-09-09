import React from 'react';
import { connect } from 'react-redux';
import Footer from '../../components/footer/footer.component';
import Header from '../../components/header/header.component';
import QuestionnaireContainer from '../../components/questionnaire/questionnaire.container';

class QuestionsPage extends React.Component {
  render() {
    return (
      <div>
        <Header />

        <QuestionnaireContainer />

        <Footer />
      </div>
    );
  }
}

export default connect(null, null)(QuestionsPage);
