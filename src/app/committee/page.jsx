"use client";
import React from 'react'
import Header from '../../components/Header/Header.js'
import Footer from '@/src/components/footer.jsx';
import './page.css'
const page = () => {

const publicity=[
  {
  name:"Dr. Anupama Sharma ",
  desg:"Professor, IT, AKGEC, Ghaziabad"
  },
  {
    name:"Dr. Namrata Gangil",
    desg:"Associate Professor, IT, AKGEC, Ghaziabad"
  },
  {
    name:"Ms. Nidhi Singh",
    desg:"Assistant Professor, EN AKGEC, Ghaziabad"
  },
  {
    name:"Ms. Ritika Singh",
    desg:"(Student member)"
  },
  {
    name:"Ms. Manya Aggarwal",
    desg:"(Student member)"
  },
  {
    name:"Mr. Siddharth Singh ",
    desg:" (Student member)"
  },
  {
    name:"Mr. Sameer Chhonker",
    desg:"(Student member)"
  },
  {
    name:"Mr Abhay Tripathi",
    desg:"(Student member)"
  },
]

const hospitality=[
  {
  name:"Ms. Nidhi Singh  ",
  desg:"Assistant Professor, EN, AKGEC Ghaziabad "
  },
  {
    name:"Ms. Nupur Mittal",
    desg:"Assistant Professor, EN, AKGEC Ghaziabad"
  },
  {
    name:"Ms. Aditi Rai ",
    desg:"(student member)"
  },
  {
    name:"Ms. Anvesha Pandey",
    desg:"(Student member)"
  },
  {
    name:"Ms. Manya Aggarwal",
    desg:"(Student member)"
  },
  {
    name:"Ms. Shatakshi ",
    desg:" (Student member)"
  },
  {
    name:"Mr. Om Goswami",
    desg:"(Student member)"
  },
  {
    name:"Mr. Rahul Gupta",
    desg:"(Student member)"
  },
  {
    name:"Mr. Rishabh Baranwal",
    desg:"(Student member)"
  },
  {
    name:"Mr. Saksham Dhingra",
    desg:"(Student member)"
  }
]

const studentAct=[
  {
  name:"Dr. Anuradha ",
  desg:"Associate Professor, CS, AKGEC Ghaziabad"
  },
  {
    name:"Dr. Bandana",
    desg:"Assistant Professor, AS&H, AKGEC Ghaziabad "
  },
  {
    name:"Dr. Himani Garg",
    desg:"Professor, ECE, AKGEC Ghaziabad"
  },
  {
    name:"Dr. Neeti Maheshwari",
    desg:"Assistant Professor, AS&H, AKGEC Ghaziabad"
  },
  {
    name:"Dr. Nitya Sharma",
    desg:" Assistant Professor, AS&H, AKGEC Ghaziabad"
  },
  {
    name:"Dr. Rashmi Sharma",
    desg:"Associate Professor, IT, AKGEC Ghaziabad"
  },
  {
    name:"Dr. Ruchi Gupta",
    desg:"Professor, IT, AKGEC Ghaziabad "
  },
  {
    name:"Dr. Sarju Pandita",
    desg:"Professor, AKGIM Ghaziabad"
  },
  {
    name:"Dr. Sarojbala",
    desg:"Associate Professor, MCA, AKGEC Ghaziabad"
  },
  {
    name:"Dr. Shivani Agrawal",
    desg:"Assistant Professor, IT, AKGEC Ghaziabad "
  },
  {
    name:"Dr. Shiwani Agrawal",
    desg:"Associate Professor, AS&H, AKGEC Ghaziabad "
  },
  {
    name:"Ms. Navjyoti Sharma",
    desg:"Assistant Professor, EN, AKGEC Ghaziabad "
  },
  {
    name:"Ms. Satakshi Agarwal",
    desg:"Assistant Professor, AKGIM Ghaziabad"
  },
  {
    name:"Ms. Nupur Mittal",
    desg:"Assistant Professor, EN, AKGEC Ghaziabad"
  },
  {
    name:"Ms. Tukur Gupta",
    desg:"Assistant professor, ECE, AKGEC Ghaziabad "
  },
  {
    name:"Ms. Anvesha Pandey",
    desg:"(student member)"
  },
  {
    name:"Ms. Garima Pal",
    desg:"(student member)"
  },
  {
    name:"Ms. Kanak Gehlaut",
    desg:"(student member)"
  },
  {
    name:"Ms. Mansi Singh",
    desg:"(student member)"
  },
  {
    name:"Ms. Manya Aggarwal",
    desg:"(student member)"
  },
  {
    name:"Ms. Mehak Monga ",
    desg:"(student member)"
  },
  {
    name:"Ms. Muskan Gupta ",
    desg:"(student member)"
  },
  {
    name:"Ms. Stuti Srivastava",
    desg:"(student member)"
  },
  {
    name:"Mr. Abhishek Jaiswal",
    desg:"(student member)"
  },
  {
    name:"Mr. Aman Prakash Verma",
    desg:"(student member)"
  },
  {
    name:"Mr. Rahul Gupta",
    desg:"(student member)"
  },
  {
    name:"Mr. Rishabh Baranwal",
    desg:"(student member)"
  },
  {
    name:"Mr. Sameer Chhonkar ",
    desg:"(student member)"
  },
  {
    name:"Ms. Siddharth Singh",
    desg:"(student member)"
  },
]

  return (
    <>
      <Header active="committee" />
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
      <Footer />
</>
  )
}
export default page
