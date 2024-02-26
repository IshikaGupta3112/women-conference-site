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
        <table className='w-[100%] md:w-[90%] text-sm sm:text-base'>
        <tr className=''>
        <th className=''>Chief Patron</th>
        <th className=' '>Convener</th>
        <th className=' '>Co-ordinator</th>
        </tr>
        <tr className=' '>
        <td className=' '>Dr. R.K. Agrawal</td>
        <td className=' '>Dr. Hemant Ahuja</td>
        <td className=' '>Dr Vani Bhargava</td>
        </tr>
        <tr className=' '>
        <td className=' '>Director General, AKGEC, Ghaziabad</td>
        <td className=' '>Director, AKGEC, Ghaziabad</td>
        <td className=' '> Associate Professor, EN, AKGEC Ghaziabad</td>
        </tr>
        </table>
        </div>
        <div className='w-[100%] flex flex-col justify-center items-center '>
        <p className='text-lg sm:text-2xl  font-bold'>Publicity Committee</p>
        <table className='  w-[100%] md:w-[90%] text-sm sm:text-base'>
        {publicity.map((item)=>
        <tr className=' '>
        <td className=' '>{item.name}</td>
        <td className=' '>{item.desg}</td>
        </tr>
        )}
        </table>
        </div>
        <div className='w-[100%] flex flex-col justify-center items-center '>
        <p className='text-lg sm:text-2xl font-bold'>Student Activities Committee</p>
        <table className='  w-[100%] md:w-[90%] text-sm sm:text-base'>
        {studentAct.map((item)=>
        <tr className=' '>
        <td className=' '>{item.name}</td>
        <td className=' '>{item.desg}</td>
        </tr>
        )}
        </table>
        </div>
        <div className='w-[100%] flex flex-col justify-center items-center '>
        <p className='text-lg sm:text-2xl  font-bold'>Hospitality Committee</p>
        <table className='   w-[100%] md:w-[90%] text-sm sm:text-base'>
        {hospitality.map((item)=>
        <tr className=' '>
        <td className=' '>{item.name}</td>
        <td className=' '>{item.desg}</td>
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
