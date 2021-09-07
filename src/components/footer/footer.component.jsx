import React from 'react';
import HIPAABadge from '../../assets/img/hipaa-badge.png';
import Logo from '../../assets/img/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container grid grid--footer">
        <div className="logo-col">
          <a href="#" className="footer-logo">
            <img src={Logo} alt="Omnifood logo" className="logo" />
          </a>

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
              <a className="footer-link" href="#">
                About Medicall
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Terms of Service
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Privacy Policy
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Telehealth Consent
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
