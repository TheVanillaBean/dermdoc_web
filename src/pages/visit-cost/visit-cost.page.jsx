import React from 'react';
import { connect } from 'react-redux';
import CostEstimateContainer from '../../components/cost-estimate/cost-estimate.container';
import Footer from '../../components/footer/footer.component';
import Header from '../../components/header/header.component';

class VisitCostPage extends React.Component {
  render() {
    return (
      <div>
        <Header />

        <CostEstimateContainer />

        <Footer />
      </div>
    );
  }
}

export default connect(null, null)(VisitCostPage);
