import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as HappySVG } from '../../assets/svg/SVG/happy.svg';
import { selectVisitData } from '../../redux/visit/visit.selectors';
import CustomButton from '../custom-button/custom-button.component';

class CostEstimate extends React.Component {
  handleSubmit = async (event) => {
    event.preventDefault();
    const {
      history,
      visit: { visit_id },
    } = this.props;
    history.push(`/visits/questions/${visit_id}`);
  };

  render() {
    const { visit } = this.props;

    return (
      <section className="cost-estimate">
        <div className="container">
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
              Your next steps will be to answer some questions and then pay for
              your visit.
            </p>
          </div>

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
