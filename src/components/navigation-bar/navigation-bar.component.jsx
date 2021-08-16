import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const NavigationBar = () => {
  return (
    <nav className="nav-bar">
      <Link to="/">
        <img src={logo} alt="Medicall logo" className="logo" />
      </Link>
      <ul className="nav-list">
        <li className="nav-list__item">
          <Link className="nav-list__link" to="/terms">
            Terms
          </Link>
        </li>
        <li className="nav-list__item">
          <Link className="nav-list__link" to="/privacy">
            Privacy
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
