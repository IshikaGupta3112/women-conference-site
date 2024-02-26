import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Navbar.css'
import Link from 'next/link';

function Navigationbar(props) {
  const [expanded, setExpanded]=useState(false);
  return (
    <>
    <Navbar collapseOnSelect expand="md" className='py-0 border-b-2 border-gray'>
        <Navbar.Brand className='py-3 pl-4 md:pl-1 lg:pl-8'>
          <div className='flex items-center lg:gap-1'>
          <Link href='/home'><img src="womenLogo.svg" className='w-[32px]' alt="Women in Power Logo" /></Link>
          <p className='text-base md:text-sm lg:text-lg font-medium mb-0'>Women in Power</p>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(!expanded)} />
        <Navbar.Collapse id="responsive-navbar-nav" className={expanded ? 'show' : ''}>
          <Nav className={expanded ? 'flex-column py-2 border-t-2 gray justify-center items-center w-full pr-4 md:pr-1 lg:pr-8' : 'ml-auto pr-4 md:pr-1 lg:pr-8'}>
          <Link href='/' className={props.active === 'home' ? 'activeLink active d-flex align-items-center mx-[7px] lg:mx-2' : 'inactiveLink inactive d-flex align-items-center mx-[7px] lg:mx-2'}>Home</Link>
            <Link href='/about' className={props.active === 'about' ? 'active activeLink d-flex align-items-center mx-[7px] lg:mx-2' : 'inactiveLink inactive d-flex align-items-center mx-[7px] lg:mx-2'}>About</Link>
            <Link href='/call-for-paper' className={props.active === 'call-for-paper' ? 'active activeLink d-flex align-items-center mx-[7px] lg:mx-2' : 'inactiveLink inactive d-flex align-items-center mx-[7px] lg:mx-2'}>Call for Paper & Activities</Link>
            <Link href='/committee' className={props.active === 'committee' ? 'active activeLink d-flex align-items-center mx-[7px] lg:mx-2' : 'inactiveLink inactive d-flex align-items-center mx-[7px] lg:mx-2'}>Committee</Link>
            <Link href='/speakers' className={props.active==='speakers'?'active activeLink d-flex align-items-center mx-[7px] lg:mx-2':'inactiveLink inactive d-flex align-items-center mx-[7px] lg:mx-2'}>Speakers</Link>
            <Link href='/registration' className={props.active === 'registration' ? 'active activeLink d-flex align-items-center mx-[7px] lg:mx-2' : 'inactiveLink inactive d-flex align-items-center mx-[7px] lg:mx-2'}>Registration</Link>
            <Link href='/accomodation' className={props.active === 'accomodation' ? 'active activeLink d-flex align-items-center mx-[7px] lg:mx-2' : 'inactiveLink inactive d-flex align-items-center mx-[7px] lg:mx-2'}>Accomodation</Link>
            </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Navigationbar;
