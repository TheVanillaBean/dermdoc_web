import React from 'react';
import { withRouter } from 'react-router-dom';
import 'survey-react/modern.css';
import Footer from '../../components/footer/footer.component';
import Header from '../../components/header/header.component';

class VisitReady extends React.Component {
  render() {
    return (
      <div>
        <Header />

        <div className='container'>
          <div className='visit-paid-container margin-bottom-lg'>
            <h1>Hooray! Your payment was successful.</h1>
            <p>You will receive an email with more details on your custom cream shortly.</p>
            <p>
              If you have any questions, please email contact@dermdoc.com for same-day responses.
            </p>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default withRouter(VisitReady);
