import React from 'react';
import PropTypes from 'prop-types';

import logo from '../../logo.svg';

function Header(props) {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo"/>
      <h1 className="App-title">WindowScroller</h1>
    </header>
  );
}

Header.displayName = 'Header';
Header.propTypes = {};
Header.defaultProps = {};

export default Header;
