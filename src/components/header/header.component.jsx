import React from 'react';
import { IoCloseOutline, IoMenuOutline } from 'react-icons/io5';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Logo from '../../assets/img/logo.png';
import { updateVisitReason } from '../../redux/search/search.actions';

class Header extends React.Component {
  handleClick = () => {
    const { history, updateVisitReason } = this.props;

    document.body.classList.remove('sticky');

    updateVisitReason('Acne');
    history.push(`get_started`);
  };

  render() {
    const { isWaitlistLandingPage = false } = this.props;
    return (
      <header className='header'>
        <Link to='/'>
          <img src={Logo} alt='Medicall logo' className='logo' />
        </Link>

        <nav className='main-nav'>
          <ul className='main-nav-list'>
            <li>
              <HashLink className='main-nav-link' smooth to='#how'>
                How it works
              </HashLink>
            </li>
            <li>
              <HashLink className='main-nav-link' smooth to='#pricing'>
                Pricing
              </HashLink>
            </li>
            <li>
              <HashLink className='main-nav-link' smooth to='#ingredients'>
                Ingredients
              </HashLink>
            </li>
            <li>
              <HashLink className='main-nav-link' smooth to='#faq'>
                FAQ
              </HashLink>
            </li>

            {isWaitlistLandingPage ? (
              <li>
                <HashLink className='main-nav-link nav-cta' smooth to='#bottom-waitlist'>
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

        <button className='btn-mobile-nav'>
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
