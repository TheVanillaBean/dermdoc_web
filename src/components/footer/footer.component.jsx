import React from 'react';
import { Link } from 'react-router-dom';
import HIPAABadge from '../../assets/img/hipaa-badge.png';
import Logo from '../../assets/img/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container grid grid--footer">
        <div className="logo-col">
          <Link to="/" className="footer-logo">
            <img src={Logo} alt="Omnifood logo" className="logo" />
          </Link>

          <img className="hipaa-icon" src={HIPAABadge} alt="HIPAA Bage" />

          <p className="copyright">
            Copyright &copy; <span className="year"></span> by Medicall, Inc.
            All Rights Reserved.
          </p>
        </div>
        <div className="address-col">
          <p className="footer-heading">Contact Us</p>
          <address className="contacts">
            <p className="address">
              401 Park Drive, Suite 1009 Boston, MA 02115
            </p>
            <p>
              <a className="footer-link" href="mailto:contact@medicall.com">
                contact@medicall.com
              </a>
            </p>
          </address>
        </div>
        <nav className="nav-col">
          <p className="footer-heading">Company</p>
          <ul className="footer-nav">
            <li>
              <Link to="/" className="footer-link">
                About Medicall
              </Link>
            </li>
            <li>
              <Link to="/terms" className="footer-link">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="footer-link">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/consent" className="footer-link">
                Telehealth Consent
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
