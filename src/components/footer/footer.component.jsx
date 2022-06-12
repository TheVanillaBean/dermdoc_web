import React from 'react';
import { Link } from 'react-router-dom';
import HIPAABadge from '../../assets/img/hipaa-badge.png';
import Logo from '../../assets/img/logo-blue.svg';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container grid grid--footer'>
        <div className='logo-col'>
          <Link to='/' className='footer-logo'>
            <img src={Logo} alt='Dermdoc logo' className='logo' />
          </Link>

          <img className='hipaa-icon' src={HIPAABadge} alt='HIPAA Bage' />

          <p className='copyright'>
            Copyright &copy; <span className='year'>2022</span>
            <br />
            DermDoc is a subsidiary of Medicall, Inc. All Rights Reserved.
          </p>
        </div>
        <div className='address-col'>
          <p className='footer-heading'>Contact Us</p>
          <address className='contacts'>
            <p className='address'>401 Park Drive, Suite 1009 Boston, MA 02215</p>
            <p>
              <a className='footer-link' href='mailto:contact@medicall.com'>
                contact@dermdoc.com
              </a>
            </p>
          </address>
        </div>
        <nav className='nav-col'>
          <p className='footer-heading'>Company</p>
          <ul className='footer-nav'>
            <li>
              <Link to='/terms' className='footer-link'>
                Terms of Service
              </Link>
            </li>
            <li>
              <Link to='/privacy' className='footer-link'>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to='/consent' className='footer-link'>
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
