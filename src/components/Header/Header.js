import React, { useState } from 'react';
import './Navbar.css'
import '../../app/globals.css'
import Navbar from './Navbar'

function Header(props) {
  return (
    <>
      <Navbar active={props.active} />
    </>
  );
}

export default Header;