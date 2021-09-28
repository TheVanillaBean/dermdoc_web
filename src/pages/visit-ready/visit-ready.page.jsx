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
            <h1>Hooray! You have successfully paid for this visit.</h1>
            <p>
              You will recieve a diagnosis and any prescriptions (if applicable) within 24 hours.
            </p>
            <p>
              If you have any questions, please email contact@medicall.com for same-day responses.
            </p>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default withRouter(VisitReady);
