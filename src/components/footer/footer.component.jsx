import React from 'react';
import logo from '../../assets/logo-white.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="flex">
          <div className="footer__logo">
            <img src={logo} alt="logo" className="footer__logo" />
          </div>

          <div className="footer__info">
            <ul className="footer__list--contact">
              <li>
                <h1>Contact</h1>
              </li>
              <li>contact@medicall.com</li>
              <li>401 Park Drive, Suite 1009 Boston, MA 02115</li>
            </ul>
            <ul className="footer__list--legal">
              <li>
                <h1>About us</h1>
              </li>
              <li>Terms</li>
              <li>Privacy</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
