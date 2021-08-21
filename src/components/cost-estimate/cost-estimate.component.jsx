import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as HappySVG } from '../../assets/svg/SVG/happy.svg';
import { ReactComponent as SadSVG } from '../../assets/svg/SVG/sad.svg';
import { selectVisitData } from '../../redux/visit/visit.selectors';
import CustomButton from '../custom-button/custom-button.component';

class CostEstimate extends React.Component {
  handleSubmit = async (event) => {
    event.preventDefault();
    const {
      history,
      visit: { visit_id },
    } = this.props;
    history.push(`/visits/${visit_id}/questions`);
  };

  insuranceErrorUI = () => {
    const { visit } = this.props;

    return (
      <React.Fragment>
        <div className="cost-estimate__header">
          <h1>Oh No!</h1>

          <div className="cost-estimate__header__image">
            <SadSVG />
          </div>
        </div>
        <div className="cost-estimate__details">
          <p>
            Unfortuantely, we were not able to determine your copay
            automatically. This can occur with certain insurance plans that
            require manual cost estimate retrieval (especially Medicare).
          </p>
          <p>
            No worries though! We have just notified our medical support staff
            of this issue and we will be manually running your insurance
            shortly.
          </p>
          <p>
            You should be expecting an email within a few hours (1-3) with
            further clarifications.
          </p>
          <br />
          <p>
            In the meantime, you can still finish answering questions, but will
            only be required to pay once we notify you of your copay.
          </p>
        </div>
      </React.Fragment>
    );
  };

  insuranceValidUI = () => {
    const { visit } = this.props;

    return (
      <React.Fragment>
        <div className="cost-estimate__header">
          <h1>Insurance Accepted</h1>

          <div className="cost-estimate__header__image">
            <HappySVG />
          </div>
        </div>

        <div className="cost-estimate__details">
          <p>Your insurance plan covers your {visit.visit_reason} visit!</p>
          <p>
            Your cost:{' '}
            <span className="cost-estimate__details__cost-span">
              ${visit.insurance_info.cost_estimate}
            </span>
          </p>

          <p>
            {visit.insurance_info.cost_estimate > 0
              ? 'Your next steps will be to answer some questions and then pay for your visit.'
              : 'Your next steps will be to answer some questions and then create an account.'}
          </p>
        </div>
      </React.Fragment>
    );
  };

  render() {
    const { visit } = this.props;

    return (
      <section className="cost-estimate">
        <div className="container">
          {visit.insurance_info.error
            ? this.insuranceErrorUI()
            : this.insuranceValidUI()}

          <CustomButton className="btn" onClick={this.handleSubmit}>
            Answer Questions
          </CustomButton>
        </div>
      </section>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  visit: selectVisitData,
});

export default withRouter(connect(mapStateToProps)(CostEstimate));
