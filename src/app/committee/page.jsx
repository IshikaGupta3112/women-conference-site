"use client";
import React from 'react'
import Header from '../../components/Header/Header.js'
import Footer from '@/src/components/footer.jsx';
import './page.css'
import {hospitality, publicity, studentAct} from './data.js';
const page = () => {

  return (
    <>
      <Header active="committee" />
      <div className='min-h-[100vh]'>
      <div className='flex flex-col justify-center items-center py-10 px-20 gap-10'>
        <div className='w-[100%] flex flex-col justify-center items-center '>
        <table className='border-1 border-black w-[100%] md:w-[90%] text-sm sm:text-base'>
        <tr className='border-1 border-black'>
        <th className='border-1 border-black'>Chief Patron</th>
        <th className='border-1 border-black'>Convener</th>
        <th className='border-1 border-black'>Co-ordinator</th>
        </tr>
        <tr className='border-1 border-black'>
        <td className='border-1 border-black'>Dr. R.K. Agrawal</td>
        <td className='border-1 border-black'>Dr. Hemant Ahuja</td>
        <td className='border-1 border-black'>Dr Vani Bhargava</td>
        </tr>
        <tr className='border-1 border-black'>
        <td className='border-1 border-black'>Director General, AKGEC, Ghaziabad</td>
        <td className='border-1 border-black'>Director, AKGEC, Ghaziabad</td>
        <td className='border-1 border-black'> Associate Professor, EN, AKGEC Ghaziabad</td>
        </tr>
        </table>
        </div>
        <div className='w-[100%] flex flex-col justify-center items-center '>
        <p className='text-lg sm:text-2xl  font-bold'>Publicity Committee</p>
        <table className='border-1 border-black w-[100%] md:w-[90%] text-sm sm:text-base'>
        {publicity.map((item)=>
        <tr className='border-1 border-black'>
        <td className='border-1 border-black'>{item.name}</td>
        <td className='border-1 border-black'>{item.desg}</td>
        </tr>
        )}
        </table>
        </div>
        <div className='w-[100%] flex flex-col justify-center items-center '>
        <p className='text-lg sm:text-2xl font-bold'>Student Activities Committee</p>
        <table className='border-1 border-black w-[100%] md:w-[90%] text-sm sm:text-base'>
        {studentAct.map((item)=>
        <tr className='border-1 border-black'>
        <td className='border-1 border-black'>{item.name}</td>
        <td className='border-1 border-black'>{item.desg}</td>
        </tr>
        )}
        </table>
        </div>
        <div className='w-[100%] flex flex-col justify-center items-center '>
        <p className='text-lg sm:text-2xl  font-bold'>Hospitality Committee</p>
        <table className='border-1 border-black  w-[100%] md:w-[90%] text-sm sm:text-base'>
        {hospitality.map((item)=>
        <tr className='border-1 border-black'>
        <td className='border-1 border-black'>{item.name}</td>
        <td className='border-1 border-black'>{item.desg}</td>
        </tr>
        )}
        </table>
        </div>
      </div>
      </div>
      <Footer />
</>
  )
}
export default page
