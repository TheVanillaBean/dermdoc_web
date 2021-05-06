import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDoctor } from '../../redux/search/search.selectors';
import { HomePageContainer } from './doctor-detail.styles';
class DoctorDetail extends React.Component {
  componentDidMount() {}

  render() {
    const {
      routeName,
      first_name,
      last_name,
      accepted_insurances,
    } = this.props.doctor;
    return (
      <HomePageContainer>
        <h1>
          Doctor-Detail {routeName} {first_name} {last_name}{' '}
          {accepted_insurances}
        </h1>
      </HomePageContainer>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  doctor: selectDoctor,
});

export default connect(mapStateToProps)(DoctorDetail);
