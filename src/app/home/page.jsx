"use client";
import React from "react";
import Footer from "../../components/footer.jsx";
import Header from "../../components/Header/Header.js";
import Link from "next/link.js";
const page = () => {
  return (
    <>
      <Header active="home" />
      <div className="min-h-[100vh]">
        <div
          className="bg-gradient-to-b from-[#70307E25] to-[#D9D9D9
          0] flex justify-center items-center flex-col py-2"
        >
          <img src="./homeBanner.svg" className="my-8 w-[82%]"></img>
          <div className="w-[70%] md:w-[68%] flex flex-col justify-center items-center gap-4">
            <p className=" text-center text-2xl sm:text-3xl md:text-4xl sm:leading-normal md:leading-relaxed">
              Catalysing Change : Women{" "}
              <span className="text-[#70307E]">Empowering</span> the Next Wave
            </p>
            <p className=" text-center text-base sm:text-lg md:text-xl">
              The conference organized by Electrical and Electronics Department,{" "}
              <br></br>
              <span className="font-medium">
                Ajay Kumar Garg Engineering College, Ghaziabad,
              </span>
              <br></br>
              will be held in offline  mode from{" "}
              <span className="text-[#70307E] font-medium">
                5th-6th April 2024.
              </span>
            </p>
            <button className="bg-[#70307E] text-white font-medium rounded-2xl px-5 py-3">
              <Link href="/registration" className="no-underline text-white">
                Register &rarr;
              </Link>
            </button>
          </div>
        </div>
        <div className="flex flex-col px-10 sm:px-28 py-8 gap-12">
          <div className="flex bg-[#70307E10] rounded-2xl px-8 py-4 lg:px-16 lg:py-10 justify-between items-center">
            <div className="text-base w-full lg:max-w-[380px]">
              <p className="text-[#70307E] text-3xl mb-3 lg:my-2">
                About AKGEC
              </p>
              <img
                src="./aboutakgec.png"
                className="block lg:hidden w-full"
              ></img>
              <p className="my-6 font-light lg:pr-10 text-justify">
                Ajay Kumar Garg Engineering College (AKGEC), Ghaziabad, Uttar
                Pradesh is approved by AICTE and affiliated to Dr. A.P.J. Abdul
                Kalam Technical University, Lucknow. The college, established in
                1998, has six Engineering Departments offering B.Tech programs
                in twelve disciplines. The college also offers postgraduate
                programs in Computer Application...
              </p>
              <button className="border-[#70307E] border-1 rounded p-2">
                <Link href="/about" className="no-underline text-black">
                  Read more &rarr;
                </Link>
              </button>
            </div>
            <div>
              <img src="./aboutakgec.png" className="hidden lg:block"></img>
            </div>
          </div>
          <div className="flex bg-[#70307E10] rounded-2xl px-8 py-4 lg:px-16 lg:py-10 justify-between items-center">
            <div className="text-base w-full lg:max-w-[380px]">
              <p className="text-[#70307E] text-3xl mb-3 lg:my-2">
                About Women in Power Conference
              </p>
              <img src="./grlPow.png" className="block lg:hidden w-full"></img>
              <p className="my-6 font-light lg:pr-10 text-justify">
                The conference on Women in Power is driven by a profound
                motivation to acknowledge and celebrate the invaluable
                contributions of women in engineering, technology, research, and
                innovation. Through a dedicated showcase of their achievements,
                the conference seeks to amplify awareness of the substantial
                impact the women have had on the industry, academics. ...
              </p>
              <button className="border-[#70307E] border-1 rounded p-2">
                <Link href="/about" className="no-underline text-black">
                  Read more &rarr;
                </Link>
              </button>
            </div>
            <div>
              <img src="./grlPow.png" className="hidden lg:block"></img>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col py-12">
          <div className="w-[80%] lg:w-[62%] flex flex-col gap-10">
            <div className="flex flex-col justify-center items-center gap-2 px-2 md:px-8 xl:px-20">
              <p className="text-[#70307E] text-xl sm:text-2xl md:text-3xl font-medium">
                Call for Participation
              </p>
              <p className="text-center text-base sm:text-lg md:text-xl">
                Student participation (both girls & boys) is being invited for
                the following competitive activities:
              </p>
              <div className="flex flex-col w-full sm:flex-row sm:flex-wrap justify-center items-center mt-2 gap-6">
                <span className="border-1 border-[#70307E] rounded w-full text-center sm:w-auto py-3 px-4 text-base sm:text-lg md:text-xl">
                  Paper Presentation
                </span>
                <span className="border-1 border-[#70307E] rounded w-full text-center sm:w-auto py-3 px-4 text-base  sm:text-lg md:text-xl">
                  Poster Presentations
                </span>
                <span className="border-1 border-[#70307E] rounded w-full text-center sm:w-auto py-3 px-4 text-base sm:text-lg md:text-xl">
                  Debate
                </span>
                <span className="border-1 border-[#70307E] rounded w-full text-center sm:w-auto py-3 px-4 text-base sm:text-lg md:text-xl">
                  Rangoli Making Competetion
                </span>
              </div>
            </div>
            <p className="text-sm sm:text-base md:text-lg text-center">
              For submission, please send the paper and poster to the following
              email address:{" "}
              <a href="mailto:eee.events@akgec.ac.in" className="text-[#70307E] no-underline">eee.events@akgec.ac.in</a>{" "}
              with CC to{" "}
              <a href="mailto:bhargavavani@akgec.ac.in" className="text-[#70307E] no-underline">bhargavavani@akgec.ac.in</a>{" "}
              <br></br>
              <br></br>
              <p className="italic font-bold">
                All accepted and presented contributions will be featured in the
                electronic magazine of the conference, which will be shared with
                all the participants.
              </p>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
