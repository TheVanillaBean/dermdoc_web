import React from 'react';
import { IoCloseOutline, IoMenuOutline } from 'react-icons/io5';
import Logo from '../../assets/img/logo.png';

const Header = () => {
  return (
    <header className="header">
      <a href="#">
        <img src={Logo} alt="Medicall logo" className="logo" />
      </a>

      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <a className="main-nav-link" href="#doctors">
              Our Doctors
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#how">
              How it works
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#testimonials">
              Testimonials
            </a>
          </li>
          <li>
            <a className="main-nav-link nav-cta" href="#">
              Get Started
            </a>
          </li>
        </ul>
      </nav>

      <button className="btn-mobile-nav">
        <IoMenuOutline className="icon-mobile-nav icon-mobile-nav-menu" />
        <IoCloseOutline className="icon-mobile-nav icon-mobile-nav-close" />
      </button>
    </header>
  );
};

export default Header;
