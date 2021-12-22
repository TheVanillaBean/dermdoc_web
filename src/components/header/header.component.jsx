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

    updateVisitReason('Acne');
    history.push(`get_started`);
  };

  render() {
    return (
      <header className='header'>
        <Link to='/'>
          <img src={Logo} alt='Medicall logo' className='logo' />
        </Link>

        <nav className='main-nav'>
          <ul className='main-nav-list'>
            <li>
              <HashLink className='main-nav-link' to='/az#how'>
                How it works
              </HashLink>
            </li>
            <li>
              <HashLink className='main-nav-link' to='/az#pricing'>
                Pricing
              </HashLink>
            </li>
            <li>
              <HashLink className='main-nav-link' to='/az#ingredients'>
                Ingredients
              </HashLink>
            </li>
            <li>
              <HashLink className='main-nav-link' to='/az#faq'>
                FAQ
              </HashLink>
            </li>
            <li>
              <HashLink className='main-nav-link nav-cta' to='/az'>
                Join Waitlist
              </HashLink>
            </li>
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
