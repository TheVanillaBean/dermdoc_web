import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CheckoutContainer from '../../components/checkout/checkout.container';
import Footer from '../../components/footer/footer.component';
import NavigationBar from '../../components/navigation-bar/navigation-bar.component';
import { fetchVisitStartAsync } from '../../redux/visit/visit.actions';

class CheckoutPage extends Component {
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

        <CheckoutContainer />

        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchVisitStartAsync: (visit_id) => dispatch(fetchVisitStartAsync(visit_id)),
});

export default withRouter(connect(null, mapDispatchToProps)(CheckoutPage));

//https://us-central1-medicall-dev-58c31.cloudfunctions.net/api/checkout/create-checkout-session
//https://acfb9630196f.ngrok.io/medicall-dev-58c31/us-central1/api/checkout/create-checkout-session

// String idToken = await auth.currentUserIdToken();

// var params = {
//   "consultId": consultId,
// };

// final response = await http.post(
//   Uri.parse(settings.stripeCheckoutSessionURL),
//   body: json.encode(params),
//   headers: {
//     HttpHeaders.authorizationHeader: "Bearer $idToken",
//     HttpHeaders.contentTypeHeader: "application/json",
//   },
// );

// if (response.statusCode != 200) {
//   throw response.statusCode.toString();
// }

// final responseJson = json.decode(response.body);
// String url = responseJson['url'];

// return url;
