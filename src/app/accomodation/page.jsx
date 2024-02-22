"use client";
import React from "react";
import Footer from "../../components/footer.jsx";
import Header from "../../components/Header/Header.js";
const page = () => {
  return (
    <>
      <Header active="call-for-paper" />
      <div className="min-h-[100vh]">
      <div className="flex flex-col justify-center items-center px-10 sm:px-20 lg:px-32 py-10">
        <p className="text-[#FE508D] text-2xl font-medium">Accomodation</p>
        <p className="text-base lg:text-lg">
          Delegates from Academia & Industry can choose to stay on-campus (in
          the Visitor Guest House) with lodging options for up to 12
          participants in our six well-appointed guest house rooms. The rate for
          these rooms is Rs 1500 per day per room. 
          </p>
          <p className="text-base lg:text-lg">
        External student participants
          may choose accommodation in the girls' and boys' hostels on a
          first-come, first-served basis.For accommodation query please contact
          Ms Kanak Gahlaut (8218853619) or Mr Sameer Chhonkar (9557706463)
        </p>
      </div>
      </div>
      <Footer />
    </>
  );
};
export default page;