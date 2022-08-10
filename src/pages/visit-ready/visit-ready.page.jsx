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

        <div className='visit-paid-container container'>
          <h1 className='heading-secondary'>Hooray! Your payment was successful.</h1>
          <p className='heading-tertiary'>
            You will receive an email with more details on your custom cream shortly.
          </p>
          <p className='heading-tertiary'>
            If you have any questions, please email contact@dermdoc.com for same-day responses.
          </p>
        </div>

        <Footer />
      </div>
    );
  }
}

export default withRouter(VisitReady);
