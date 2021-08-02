import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectVisit } from '../../redux/visit/visit.selectors';

class CostEstimate extends React.Component {
  render() {
    const { visit } = this.props;

    return <section className="cost-estimate"></section>;
  }
}

const mapStateToProps = createStructuredSelector({
  visit: selectVisit,
});

export default withRouter(connect(mapStateToProps)(CostEstimate));
