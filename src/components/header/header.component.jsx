import React from 'react';
import { IoCloseOutline, IoMenuOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Logo from '../../assets/img/logo.png';

const Header = () => {
  return (
    <header className='header'>
      <Link to='/'>
        <img src={Logo} alt='Medicall logo' className='logo' />
      </Link>

      <nav className='main-nav'>
        <ul className='main-nav-list'>
          <li>
            <HashLink className='main-nav-link' to='/#how'>
              How it works
            </HashLink>
          </li>
          <li>
            <HashLink className='main-nav-link' to='/#pricing'>
              Pricing
            </HashLink>
          </li>
          <li>
            <HashLink className='main-nav-link' to='/#services'>
              Our Services
            </HashLink>
          </li>
          <li>
            <HashLink className='main-nav-link' to='/#about'>
              Featured Derm
            </HashLink>
          </li>
          <li>
            <Link
              className='main-nav-link nav-cta'
              to='/services'
              onClick={() => {
                window.fathom.trackGoal('5WKASRQK', 0);
              }}>
              Get Started
            </Link>
          </li>
        </ul>
      </nav>

      <button className='btn-mobile-nav'>
        <IoMenuOutline className='icon-mobile-nav' name='menu-outline' />
        <IoCloseOutline className='icon-mobile-nav' name='close-outline' />
      </button>
    </header>
  );
};

export default Header;
