import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { firestore } from '../../firebase/firebase.utils';
import { selectVisitData } from '../../redux/visit/visit.selectors';

class CheckoutPage extends Component {
  state = {
    visitPaid: false,
  };

  unsubscribeFromVisitSnapshot = null;

  componentDidMount() {
    const {
      visit: { visit_id },
      history,
    } = this.props;
    this.unsubscribeFromVisitSnapshot = firestore
      .collection('visits')
      .doc(visit_id)
      .onSnapshot((doc) => {
        if (doc.exists) {
          const visit = doc.data();
          if (visit.status === 'authenticated') {
            history.push(`/checkout/${visit_id}`);
          }
        }
      });
  }

  componentWillUnmount() {
    this.unsubscribeFromVisitSnapshot();
  }

  render() {
    const {
      visit: { status },
    } = this.props;
    return (
      <div className="checkout-page">
        <div className="container">
          <div className="flex">
            <h1>Status: {status}</h1>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  visit: selectVisitData,
});

export default withRouter(connect(mapStateToProps, null)(CheckoutPage));
