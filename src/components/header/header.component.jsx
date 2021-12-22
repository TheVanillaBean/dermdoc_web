import React from 'react';
import { IoCloseOutline, IoMenuOutline } from 'react-icons/io5';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Logo from '../../assets/img/logo.png';
import { updateVisitReason } from '../../redux/search/search.actions';

class Header extends React.Component {
  state = {
    nav_open: '',
  };

  handleClick = () => {
    const { history, updateVisitReason } = this.props;

    document.body.classList.remove('sticky');

    updateVisitReason('Acne');
    history.push(`get_started`);
  };

  render() {
    const { isWaitlistLandingPage = false } = this.props;
    const { nav_open } = this.state;
    return (
      <header className={`header ${nav_open}`}>
        <Link to='/'>
          <img src={Logo} alt='Medicall logo' className='logo' />
        </Link>

        <nav className='main-nav'>
          <ul className='main-nav-list'>
            <li>
              <HashLink
                className='main-nav-link'
                scroll={(el) => {
                  el.scrollIntoView({ behavior: 'smooth', block: 'end' });
                  this.setState({ nav_open: '' });
                }}
                to='#how'>
                How it works
              </HashLink>
            </li>
            <li>
              <HashLink
                className='main-nav-link'
                scroll={(el) => {
                  el.scrollIntoView({ behavior: 'smooth', block: 'end' });
                  this.setState({ nav_open: '' });
                }}
                to='#pricing'>
                Pricing
              </HashLink>
            </li>
            <li>
              <HashLink
                className='main-nav-link'
                scroll={(el) => {
                  el.scrollIntoView({ behavior: 'smooth', block: 'end' });
                  this.setState({ nav_open: '' });
                }}
                to='#ingredients'>
                Ingredients
              </HashLink>
            </li>
            <li>
              <HashLink
                className='main-nav-link'
                scroll={(el) => {
                  el.scrollIntoView({ behavior: 'smooth', block: 'end' });
                  this.setState({ nav_open: '' });
                }}
                to='#faq'>
                FAQ
              </HashLink>
            </li>

            {isWaitlistLandingPage ? (
              <li>
                <HashLink
                  className='main-nav-link nav-cta'
                  scroll={(el) => {
                    el.scrollIntoView({ behavior: 'smooth', block: 'end' });
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
          onClick={() => {
            this.setState({ nav_open: 'nav-open' });
          }}>
          <IoMenuOutline className='icon-mobile-nav' name='menu-outline' />
          <IoCloseOutline className='icon-mobile-nav' name='close-outline' />
        </button>
      </header>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateVisitReason: (reason) => dispatch(updateVisitReason(reason)),
});

export default withRouter(connect(null, mapDispatchToProps)(Header));
