import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CheckoutContainer from '../../components/checkout/checkout.container';
import Footer from '../../components/footer/footer.component';
import Header from '../../components/header/header.component';

class CheckoutPage extends Component {
  render() {
    return (
      <div>
        <Header />

        <CheckoutContainer />

        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(null, null)(CheckoutPage));
