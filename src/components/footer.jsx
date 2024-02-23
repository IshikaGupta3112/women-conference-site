import React from 'react'
import "../app/globals.css"
import "bootstrap/dist/css/bootstrap.min.css"; 
import Link from 'next/link';
const Footer = () => {
  return (
    <>
    <div className='flex px-10 sm:px-20 py-4 border-t-2 border-gray items-center sm:items-start sm:justify-start sm:gap-20 md:gap-56 flex-col sm:flex-row'>
    <div className='sm:w-1/2 md:w-1/3'>
    <div className='flex gap-3'>
    <div>
    <img src="./akgec.png" height={"72px"} width={"72px"}></img>
    </div>
      <div>
    <p className='text-lg lg:text-xl font-medium'>Ajay Kumar Garg Engineering College</p>
    <p className='text-sm lg:text-base'>(Affiliated to Dr. APJ Abdul Kalam Technical University, Lucknow, UP, College Code - 027)</p>
    </div>
    </div>
    </div>
     <ul className='sm:hidden flex flex-col gap-3 text-center'>
     <Link href='/home' className='no-underline text-black'><li className='text-sm md:text-base'>Home</li></Link>
     <Link href='/about' className='no-underline text-black'><li className='text-sm md:text-base'>About</li> </Link>
     <Link href='/committee' className='no-underline text-black'><li className='text-sm md:text-base'>Committee</li> </Link>
     <Link href='/speakers' className='no-underline text-black'><li className='text-sm md:text-base'>Keynote Speakers</li> </Link>
    </ul>
    <ul className='hidden sm:flex flex-col gap-3'>
     <li className='text-base md:text-lg font-medium'>Quick Links</li> 
     <Link href='/home' className='no-underline text-black'><li className='text-sm md:text-base'>Home</li></Link>
     <Link href='/about' className='no-underline text-black'><li className='text-sm md:text-base'>About</li> </Link>
     <Link href='/committee' className='no-underline text-black'><li className='text-sm md:text-base'>Committee</li> </Link>
     <Link href='/speakers' className='no-underline text-black'><li className='text-sm md:text-base'>Keynote Speakers</li> </Link>
    </ul>
    </div>
    <div className="border-t-2 border-gray"></div>
    <div className='text-xs sm:text-sm md:text-base d-flex align-items-center pt-2 pb-2 justify-content-center footer-bottom text-black'>
        Designed &amp; Developed by &nbsp;&nbsp; <img src='silogo.svg'/>&nbsp;&nbsp; <a href="https://silive.in" rel="noreferrer" className="no-underline" target="_blank"><span className='text-[#2499F9] text-xs sm:text-sm md:text-base'>SOFTWARE</span><span className="text-black text-xs sm:text-sm md:text-base"> INCUBATOR</span></a>
    </div>
    </>
  )
}

export default Footer
