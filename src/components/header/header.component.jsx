import React from 'react';
import { IoCloseOutline, IoMenuOutline } from 'react-icons/io5';
import { Link, withRouter } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { ReactComponent as Logo } from '../../assets/img/logo-dark.svg';

class Header extends React.Component {
  state = {
    nav_open: '',
  };

  handleClick = () => {
    const { history } = this.props;

    document.body.classList.remove('sticky');

    history.push(`/get_started`);
  };

  render() {
    const { isWaitlistLandingPage = false } = this.props;
    const { nav_open } = this.state;
    return (
      <header className={`header ${nav_open}`}>
        <Link to='/' aria-label='Dermdoc logo'>
          <Logo className='logo' alt='Dermdoc logo' />
        </Link>

        <nav className='main-nav'>
          <ul className='main-nav-list'>
            <li>
              <HashLink
                className='main-nav-link'
                scroll={(el) => {
                  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  this.setState({ nav_open: '' });
                }}
                to='/#ingredients'>
                Ingredients
              </HashLink>
            </li>
            <li>
              <HashLink
                className='main-nav-link'
                scroll={(el) => {
                  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  this.setState({ nav_open: '' });
                }}
                to='/#how'>
                How it works
              </HashLink>
            </li>
            <li>
              <HashLink
                className='main-nav-link'
                scroll={(el) => {
                  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  this.setState({ nav_open: '' });
                }}
                to='/#pricing'>
                Pricing
              </HashLink>
            </li>
            <li>
              <HashLink
                className='main-nav-link'
                scroll={(el) => {
                  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  this.setState({ nav_open: '' });
                }}
                to='/#faq'>
                FAQ
              </HashLink>
            </li>

            {isWaitlistLandingPage ? (
              <li>
                <HashLink
                  className='main-nav-link nav-cta'
                  scroll={(el) => {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    this.setState({ nav_open: '' });
                  }}
                  to='#bottom-waitlist'>
                  Join Waitlist
                </HashLink>
              </li>
            ) : (
              <li>
                <Link className='main-nav-link nav-cta' onClick={this.handleClick} to='#'>
                  Get Started
                </Link>
              </li>
            )}
          </ul>
        </nav>

        <button
          className='btn-mobile-nav'
          aria-label='Mobile navigation open/close'
          onClick={() => {
            if (nav_open) {
              this.setState({ nav_open: '' });
            } else {
              this.setState({ nav_open: 'nav-open' });
            }
          }}>
          <IoMenuOutline className='icon-mobile-nav' name='menu-outline' />
          <IoCloseOutline className='icon-mobile-nav' name='close-outline' />
        </button>
      </header>
    );
  }
}

export default withRouter(Header);
