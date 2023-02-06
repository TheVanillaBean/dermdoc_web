import React from 'react';
import { withRouter } from 'react-router-dom';
import Footer from '../../components/footer/footer.component';
import Header from '../../components/header/header.component';

class VisitError extends React.Component {
  render() {
    return (
      <div>
        <Header />

        <div className='visit-paid-container container'>
          <h1 className='heading-secondary'>&#128556; Oh no!</h1>
          <p className='heading-tertiary'>
            There is an issue with your visit. Please email contact@dermdoc.com and we will assist
            you with this issue.
          </p>
        </div>

        <Footer />
      </div>
    );
  }
}

export default withRouter(VisitError);
