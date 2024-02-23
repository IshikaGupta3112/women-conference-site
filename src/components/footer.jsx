import React from 'react'
import "../app/globals.css"
import "bootstrap/dist/css/bootstrap.min.css"; 
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
    {/* <div className=''> */}
    <ul className='flex flex-col gap-3 md:text-left'>
     <li className='text-base md:text-lg font-medium'>Quick Links</li> 
     <li className='text-sm md:text-base'>Home</li> 
     <li className='text-sm md:text-base'>About</li> 
     <li className='text-sm md:text-base'>Committee</li> 
     <li className='text-sm md:text-base'>Keynote Speakers</li> 
    </ul>
    </div>
    {/* </div> */}
    <div className="border-t-2 border-gray"></div>
    <div className='text-xs sm:text-sm md:text-base d-flex align-items-center pt-2 pb-2 justify-content-center footer-bottom text-black'>
        Designed &amp; Developed by &nbsp;&nbsp; <img src='silogo.svg'/>&nbsp;&nbsp; <a href="https://silive.in" rel="noreferrer" className="no-underline" target="_blank"><span className='text-[#2499F9] text-xs sm:text-sm md:text-base'>SOFTWARE</span><span className="text-black text-xs sm:text-sm md:text-base"> INCUBATOR</span></a>
    </div>
    </>
  )
}

export default Footer
