import React from 'react';
import logo from '../locq-logo-white.png';

const Logo = (props) => {
  return <img src={logo} alt="logo" style={props.style}></img>;
}

export default Logo;