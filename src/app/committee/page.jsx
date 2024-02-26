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
      <div className='flex flex-col justify-center items-center py-10 px-10 md:px-20 gap-10'>
        <div className='w-[100%] flex flex-col justify-center items-center '>
        <p className='text-lg sm:text-2xl font-bold'>Chief Patron</p>
        <table className='w-[100%] md:w-[90%] text-sm sm:text-base'>
        <tr className='border-1 border-black'>
        <td className='border-1 border-black w-[40%]'>Dr. R.K. Agrawal</td>
        <td className='border-1 border-black'>Director General, AKGEC, Ghaziabad</td>
        </tr>
        </table>
        </div>
        <div className='w-[100%] flex flex-col justify-center items-center '>
        <p className='text-lg sm:text-2xl font-bold'>Convener</p>
        <table className='  w-[100%] md:w-[90%] text-sm sm:text-base'>
        <tr className='border-1 border-black'>
        <td className='border-1 border-black w-[40%]'>Dr. Hemant Ahuja</td>
        <td className='border-1 border-black'>Director, AKGEC, Ghaziabad</td>
        </tr>
        </table>
        </div>
        <div className='w-[100%] flex flex-col justify-center items-center '>
        <p className='text-lg sm:text-2xl font-bold'>Co-ordinator</p>
        <table className='  w-[100%] md:w-[90%] text-sm sm:text-base'>
        <tr className='border-1 border-black'>
        <td className='border-1 border-black w-[40%]'>Dr. Vani Bhargava</td>
        <td className='border-1 border-black'>Associate Professor, EN, AKGEC Ghaziabad</td>
        </tr>
        </table>
        </div>
        <div className='w-[100%] flex flex-col justify-center items-center '>
        <p className='text-lg sm:text-2xl  font-bold'>Publicity Committee</p>
        <table className='  w-[100%] md:w-[90%] text-sm sm:text-base'>
        {publicity.map((item)=>
        <tr className='border-1 border-black'>
        <td className='border-1 border-black w-[40%]'>{item.name}</td>
        <td className='border-1 border-black'>{item.desg}</td>
        </tr>
        )}
        </table>
        </div>
        <div className='w-[100%] flex flex-col justify-center items-center '>
        <p className='text-lg sm:text-2xl font-bold'>Student Activities Committee</p>
        <table className='  w-[100%] md:w-[90%] text-sm sm:text-base'>
        {studentAct.map((item)=>
        <tr className='border-1 border-black'>
        <td className='border-1 border-black w-[40%]'>{item.name}</td>
        <td className='border-1 border-black'>{item.desg}</td>
        </tr>
        )}
        </table>
        </div>
        <div className='w-[100%] flex flex-col justify-center items-center '>
        <p className='text-lg sm:text-2xl  font-bold'>Hospitality Committee</p>
        <table className='border-1 border-black w-[100%] md:w-[90%] text-sm sm:text-base'>
        {hospitality.map((item)=>
        <tr className='border-1 border-black'>
        <td className='border-1 border-black w-[40%]'>{item.name}</td>
        <td className='border-1 border-black '>{item.desg}</td>
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
