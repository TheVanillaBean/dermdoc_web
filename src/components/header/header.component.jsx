import React from 'react';
import logo from '../../assets/logo-letter.png';
import {
  HeaderContainer,
  LogoContainer,
  OptionLink,
  OptionsContainer,
} from './header.styles';

const Header = () => (
  <HeaderContainer>
    <LogoContainer to="/">
      <img height="40px" width="40px" src={logo} alt="Medicall Logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/list-practice">List your practice</OptionLink>
      <OptionLink to="/help">Help</OptionLink>
      <OptionLink to="/login">Log in</OptionLink>
    </OptionsContainer>
  </HeaderContainer>
);

export default Header;
