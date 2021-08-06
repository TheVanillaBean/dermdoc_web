import React from 'react';
import { connect } from 'react-redux';
import CostEstimateContainer from '../../components/cost-estimate/cost-estimate.container';
import Footer from '../../components/footer/footer.component';
import NavigationBar from '../../components/navigation-bar/navigation-bar.component';
import { fetchVisitStartAsync } from '../../redux/visit/visit.actions';

class VisitOverviewPage extends React.Component {
  componentDidMount() {
    const { match, fetchVisitStartAsync } = this.props;
    const visitID = match.params.visit_id;
    fetchVisitStartAsync(visitID);
  }

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

const mapDispatchToProps = (dispatch) => ({
  fetchVisitStartAsync: (visit_id) => dispatch(fetchVisitStartAsync(visit_id)),
});

export default connect(null, mapDispatchToProps)(VisitOverviewPage);
