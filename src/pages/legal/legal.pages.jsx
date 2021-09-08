import React from 'react';
import Footer from '../../components/footer/footer.component';
import Header from '../../components/header/header.component';
import { consent_text, privacy_text, terms_text } from './legal.text';

class LegalPage extends React.Component {
  render() {
    const { page } = this.props;
    let legalText = '';
    let legalHeader = '';
    if (page === 'privacy') {
      legalHeader = 'Privacy Policy';
      legalText = privacy_text;
    } else if (page === 'terms') {
      legalHeader = 'Terms and Conditions';
      legalText = terms_text;
    } else if (page === 'consent') {
      legalHeader = 'Consent to Telemedicine';
      legalText = consent_text(new Date().toLocaleDateString());
    }
    return (
      <div>
        <Header />

        <div className="legal-container">
          <div className="container">
            <h1 className="legal-container__header">{legalHeader}</h1>
            <p className="legal-container__text">{legalText}</p>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default LegalPage;
