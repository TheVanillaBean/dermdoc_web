import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CheckoutContainer from '../../components/checkout/checkout.container';
import Footer from '../../components/footer/footer.component';
import NavigationBar from '../../components/navigation-bar/navigation-bar.component';

class CheckoutPage extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <div className="container">
            <NavigationBar />
          </div>
        </header>

        <CheckoutContainer />

        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(null, null)(CheckoutPage));
