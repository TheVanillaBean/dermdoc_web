import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import DoctorCard from '../../components/doctor-card/doctor-card.component';
import Footer from '../../components/footer/footer.component';
import NavigationBar from '../../components/navigation-bar/navigation-bar.component';
import {
  selectDoctor,
  selectInsuranceBrand,
  selectVisitReason,
  selectZipCode,
} from '../../redux/search/search.selectors';
const { REACT_APP_WEB_APP_DOMAIN_URL } = process.env;
class DoctorDetail extends React.Component {
  componentDidMount() {
    console.log('Did mount');
    if (this.props.doctor == null) {
      console.log('Did not mount');
    }
  }

  render() {
    const { insuranceBrand, visitReason, doctor, zipcode } = this.props;
    const { uid, accepted_insurances, provider_bio } = this.props.doctor;
    const url = `${REACT_APP_WEB_APP_DOMAIN_URL}/visit-flow-steps?puid=${uid}&symptom=${visitReason}&insurance=${insuranceBrand}&zip=${zipcode}`;

    return (
      <div>
        <header class="header">
          <div class="container">
            <NavigationBar />
          </div>
        </header>

        <section class="doctor-profile">
          <div class="container">
            <div class="doctor-profile__sections">
              <DoctorCard
                showInsurances={false}
                doctor={doctor}
                buttonText="Schedule a Health Visit"
                handleClick={() => {
                  window.location.href = url;
                }}
              />
              <div class="additional-info">
                <div class="additional-info__bio">
                  <h1 class="additional-info__bio--name">Bio</h1>
                  <p class="additional-info__bio--bio-text">{provider_bio}</p>
                </div>

                <div class="additional-info__insurances">
                  <h1>Accepted Insurances:</h1>
                  {accepted_insurances.map((insurance) => (
                    <p class="additional-info--insurance-name">{insurance}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  doctor: selectDoctor,
  insuranceBrand: selectInsuranceBrand,
  visitReason: selectVisitReason,
  zipcode: selectZipCode,
});

export default connect(mapStateToProps)(DoctorDetail);
