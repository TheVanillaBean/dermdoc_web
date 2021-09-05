import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <a href="#">
        <img src="img/logo.png" alt="Medicall logo" class="logo" />
      </a>

      <nav className="main-nav">
        <ul class="main-nav-list">
          <li>
            <a className="main-nav-link" href="#">
              Our Doctors
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#">
              How it works
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#">
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
    </header>
  );
};

export default Header;
