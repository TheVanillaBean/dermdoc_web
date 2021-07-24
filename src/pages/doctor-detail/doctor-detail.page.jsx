import "@nylas/components-agenda";
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import DoctorCard from "../../components/doctor-card/doctor-card.component";
import Footer from "../../components/footer/footer.component";
import NavigationBar from "../../components/navigation-bar/navigation-bar.component";
import {
  selectDoctor,
  selectInsuranceBrand,
  selectVisitReason,
  selectZipCode,
} from "../../redux/search/search.selectors";

const { REACT_APP_WEB_APP_DOMAIN_URL, REACT_APP_NYLAS_AGENDA_ID } = process.env;
class DoctorDetail extends React.Component {
  componentDidMount() {}

  render() {
    const { insuranceBrand, visitReason, doctor, zipcode } = this.props;
    const { uid, provider_bio, calendar_id } = this.props.doctor;
    const url = `${REACT_APP_WEB_APP_DOMAIN_URL}/visit-flow-steps?puid=${uid}&symptom=${visitReason}&insurance=${insuranceBrand}&zip=${zipcode}`;

    return (
      <div>
        <header className="header">
          <div className="container">
            <NavigationBar />
          </div>
        </header>

        <section className="doctor-profile">
          <div className="container">
            <div className="doctor-profile__sections">
              <DoctorCard
                showInsurances={true}
                key={uid}
                doctor={doctor}
                buttonText="Schedule a Health Visit"
                handleClick={() => {
                  window.location.href = url;
                }}
              />
              <div className="additional-info">
                <div className="additional-info__bio">
                  <h1 className="additional-info__bio--name">Bio</h1>
                  <p className="additional-info__bio--bio-text">{provider_bio}</p>
                </div>

                <div className="additional-info__schedule">
                  <h1 className="additional-info__schedule__header">Monthly Availability</h1>

                  <nylas-agenda
                    id={REACT_APP_NYLAS_AGENDA_ID}
                    calendar_ids={calendar_id}
                    selected_date={Date()}
                    header_type="day"
                    auto_time_box
                    allow_date_change
                    eagerly_fetch_events
                    show_as_busy
                    show_no_events_message
                    theme="theme-5"
                  ></nylas-agenda>
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
