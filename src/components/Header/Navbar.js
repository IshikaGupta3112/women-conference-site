import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Navbar.css'
import Link from 'next/link';

function Navigationbar(props) {
  return (
    <>
    <Navbar collapseOnSelect expand="md" bg="blue" className='py-0'>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className='nav-options w-full flex py-3 justify-around border-b-2 border-gray'>
            <div className='flex items-center gap-2 justify-center'>
            <img src="womenLogo.svg" height={"32px"} width={"32px"}/>
            <p className='text-base lg:text-lg font-medium mb-0'>Women in Power</p>
            </div>
            <div className='flex w-[750px] lg:w-[830px] justify-around'>
            <Link href='/' className={props.active === 'home' ? 'activeLink active d-flex align-items-center' : 'inactiveLink inactive d-flex align-items-center'}>Home</Link>
            <Link href='/about' className={props.active === 'about' ? 'active activeLink d-flex align-items-center' : 'inactiveLink inactive d-flex align-items-center'}>About</Link>
            <Link href='/call-for-paper' className={props.active === 'call' ? 'active activeLink d-flex align-items-center' : 'inactiveLink inactive d-flex align-items-center'}>Call for Paper & Activities</Link>
            <Link href='/committee' className={props.active === 'committee' ? 'active activeLink d-flex align-items-center' : 'inactiveLink inactive d-flex align-items-center'}>Committee</Link>
            <Link href='/speakers' className={props.active==='speakers'?'active activeLink d-flex align-items-center':'inactiveLink inactive d-flex align-items-center'}>Speakers</Link>
            <Link href='/registration' className={props.active === 'registration' ? 'active activeLink d-flex align-items-center' : 'inactiveLink inactive d-flex align-items-center'}>Registration</Link>
            <Link href='/accomodation' className={props.active === 'accomodation' ? 'active activeLink d-flex align-items-center' : 'inactiveLink inactive d-flex align-items-center'}>Accomodation</Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Navigationbar;
