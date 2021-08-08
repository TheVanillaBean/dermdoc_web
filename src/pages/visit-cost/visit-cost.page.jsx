import React from 'react';
import { connect } from 'react-redux';
import CostEstimateContainer from '../../components/cost-estimate/cost-estimate.container';
import Footer from '../../components/footer/footer.component';
import NavigationBar from '../../components/navigation-bar/navigation-bar.component';

class VisitCostPage extends React.Component {
  render() {
    return (
      <div>
        <header className="header">
          <div className="container">
            <NavigationBar />
          </div>
        </header>

        <CostEstimateContainer />

        <Footer />
      </div>
    );
  }
}

export default connect(null, null)(VisitCostPage);
