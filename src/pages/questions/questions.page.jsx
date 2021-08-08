import React from 'react';
import { connect } from 'react-redux';
import Footer from '../../components/footer/footer.component';
import NavigationBar from '../../components/navigation-bar/navigation-bar.component';
import QuestionnaireContainer from '../../components/questionnaire/questionnaire.container';

class QuestionsPage extends React.Component {
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

export default connect(null, null)(QuestionsPage);
