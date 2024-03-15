'use client'
import Header from "../../components/Header/Header"
import Footer from "../../components/footer"
import { Table } from "react-bootstrap";
import React from 'react'
import './page.css'
const page = () => {
    return (
        <div>
            <Header active="registration" />
            <div className='min-h-[100vh]'>
            <div className="flex flex-col justify-center items-center px-6 py-10 sm:p-10 gap-12">
            <div className="flex flex-col justify-center items-center w-[100%] sm:w-[90%] md:w-[70%]">
            <p className="text-[#70307E] text-2xl font-medium">Important Dates</p>
            <table className="text-sm sm:text-base">
            <tr>
            <td className="border-1 border-black">Paper and Poster Submission </td>
            <td >25th March 2024</td>
            </tr>
            <tr className="border-1 border-black">
            <td className="border-1 border-black">Acceptance Notification</td>
            <td>30th March 2024</td>
            </tr>
            <tr className="border-1 border-black">
            <td className="border-1 border-black">Rangoli and Debate Participation</td>
            <td>25th March 2024</td>
            </tr>
            <tr className="border-1 border-black">
            <td className="border-1 border-black">Final Registration </td>
            <td>31st March 2024</td>
            </tr>
            </table>
            </div>
            <div className="flex flex-col justify-center items-center sm:w-[90%]">
            <p className="text-[#70307E] text-2xl font-medium">Registration Fee</p>
            <table className="text-sm sm:text-base border-1 border-black">
            <tr className="border-1 border-black">
            <th className="border-1 border-black">Registration category</th>
            <th>Registration fee</th>
            </tr>
            <tr className="border-1 border-black">
            <td className="border-1 border-black">Delegates from Academics and Industry(Non IEEE members)</td>
            <td >Rs. 1000/-</td>
            </tr>
            <tr className="border-1 border-black">
            <td className="border-1 border-black">Delegates from Academics and Industry(IEEE members)</td>
            <td>Rs. 800/-</td>
            </tr>
            <tr className="border-1 border-black">
            <td className="border-1 border-black">Student Participation Paper & Poster (Single participant)</td>
            <td>Rs. 500/-</td>
            </tr>
            <tr className="border-1 border-black">
            <td className="border-1 border-black">Student Participation Paper & Poster (In a team of two)</td>
            <td>Rs. 800/-</td>
            </tr>
            <tr className="border-1 border-black">
            <td className="border-1 border-black">Student Participation *Rangoli (Single participant)</td>
            <td>Rs. 300/-</td>
            </tr>
            <tr className="border-1 border-black">
            <td className="border-1 border-black">Student Participation *Rangoli (In a team of two)</td>
            <td>Rs. 500/-</td>
            </tr>
            <tr className="border-1 border-black">
            <td className="border-1 border-black">Debate Participation (Single participant)</td>
            <td>Rs. 500/-</td>
            </tr>
            <tr className="border-1 border-black">
            <td className="border-1 border-black">Debate Participation (In a team of two, with one member in position and the other in opposition)</td>
            <td>Rs. 800/-</td>
            </tr>
            <tr className="border-1 border-black">
            <td className="border-1 border-black">Additional Student Member (In paper and Poster)</td>
            <td>Rs. 400/-</td>
            </tr>
            <tr className="border-1 border-black">
            <td className="border-1 border-black">Additional Student Member (In Rangoli)</td>
            <td>Rs. 250/-</td>
            </tr>
            </table>
            <p className="text-[#70307E] md:w-[80%] lg:w-[55%] text-center mt-3 font-medium"> 
*Rangoli participants will bring their own dry Rangoli colours and the required accessories. The Rangoli must be confined within an area of 2.5 feet x 2.5 feet.</p>
            <p className="text-[#70307E] font-normal md:w-[80%] lg:w-[55%] text-center">The registration fee covers the conference kit, meals, tea, and other related amenities,
excluding accommodation.</p>
            </div>
            <div className="flex flex-col justify-center items-center sm:w-[90%] md:w-[70%]">
            <p className="text-[#70307E] text-2xl font-medium">Registration Links</p>
            <table className="text-sm sm:text-base border-1 border-black">
            <tr className="border-1 border-black">
            <td className="border-1 border-black">For Student Participants</td>
            <td ><a href="https://forms.gle/aBk5gaYnjmXjEiM97" className="underline text-[#70307E] font-bold" target='_blank'>Form Link</a></td>
            </tr>
            <tr className="border-1 border-black">
            <td className="border-1 border-black">Delegate Registration</td>
            <td><a href="https://forms.gle/NDsnxrNg6883Sv1L7" className="underline text-[#70307E] font-bold" target='_blank'>Form Link</a></td>
            </tr>
            </table>
            </div>
            <div className="flex flex-col justify-center items-center sm:w-[90%] md:w-[70%]">
            <p className="text-[#70307E] text-2xl font-medium">Payment Details</p>
            <table className="text-sm sm:text-base border-1 border-black">
            <tr>
            <th colSpan={2} className="text-center">Details of IMPS/UPI/RTGS/NEFT:</th>
            </tr>
            <tr className="border-1 border-black">
            <td className="border-1 border-black">Name of beneficiary</td>
            <td >Ajay Kumar Garg Engineering College</td>
            </tr>
            <tr className="border-1 border-black">
            <td className="border-1 border-black">Name of the Bank</td>
            <td>Kotak Mahindra Bank Ltd.</td>
            </tr>
            <tr className="border-1 border-black">
            <td className="border-1 border-black">Branch Address</td>
            <td>30 & 31 Navyug Market, P.B. No. 75, Ghaziabad-201001(U.P.)-INDIA</td>
            </tr>
            <tr className="border-1 border-black">
            <td className="border-1 border-black">Branch Code</td>
            <td>5295</td>
            </tr>
            <tr className="border-1 border-black">
            <td className="border-1 border-black">Bank Account No.</td>
            <td>508010250461</td>
            </tr>
            <tr className="border-1 border-black">
            <td className="border-1 border-black">Type of Bank Account</td>
            <td>Savings Bank Accounts</td>
            </tr>
            <tr className="border-1 border-black">
            <td className="border-1 border-black">RSTG/NEFT/IFSC Code</td>
            <td>KKBK0005295</td>
            </tr>
            <tr className="border-1 border-black">
            <td className="border-1 border-black">Contact No.</td>
            <td>0120-2790969</td>
            </tr>
            </table>
            </div>
            </div>
            </div>
        <Footer />
    </div>
    )
}

export default page