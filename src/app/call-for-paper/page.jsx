"use client";
import React from "react";
import { useState } from "react";
import Footer from "../../components/footer.jsx";
import Header from "../../components/Header/Header.js";
const page = () => {
  const [selectedTrack, setSelectedTrack] = useState('1');
  const [selectedTrackname, setSelectedTrackname] = useState('Smart grid, Renewable energy and sustainable development');
  const [topiclist, setTopicList] = useState([
    "Integration of Renewable Energy Sources in Smart Grids",
    "Microgrid Development for Rural Electrification",
    "Energy Storage Technologies for Smart Grids:",
    "Cybersecurity in Smart Grids",
    "Demand Response Strategies in Sustainable Development",
    "Blockchain Applications for Renewable Energy Transactions",
    "Smart Grids and Electric Vehicle Integration",
    "Data Analytics for Sustainable Grid Operations",
    "Renewable Energy for Sustainable Water Management",
    "Grid Resilience in the Face of Climate Change",
    "Social and Environmental Impacts of Smart Grid Implementation",
    "Community-Based Renewable Energy Projects",
    "Policy and Regulatory Frameworks for Smart Grids",
    "Green Buildings and Smart Grid Integration",
    "Circular Economy Approaches in Smart Grids",
    ])
  const [selectedTopic, setSelectedTopic] = useState('1');
  const [selectedTopicname, setSelectedTopicname] = useState("Poster & Rangoli Themes");
  const [selectedGuide, setSelectedGuide] = useState("Guidelines for Paper");
  const [selectedGuidename, setSelectedGuidename] = useState("1");

  const handleTrackClick = (option) => {
    setSelectedTrack(option);
    const obj=paperTracks.find((item)=>item.id==option);
    setSelectedTrackname(obj.name);
    setTopicList(obj.list);
  };
  const handleTopicClick = (option) => {
    setSelectedTopic(option);
  };
  const handleGuideClick = (option) => {
    setSelectedGuide(option);
  };
  const paperTracks = [
    {
      id: "1",
      name: "Smart grid, Renewable energy and sustainable development",
      list:[
      "Integration of Renewable Energy Sources in Smart Grids",
      "Microgrid Development for Rural Electrification",
      "Energy Storage Technologies for Smart Grids:",
      "Cybersecurity in Smart Grids",
      "Demand Response Strategies in Sustainable Development",
      "Blockchain Applications for Renewable Energy Transactions",
      "Smart Grids and Electric Vehicle Integration",
      "Data Analytics for Sustainable Grid Operations",
      "Renewable Energy for Sustainable Water Management",
      "Grid Resilience in the Face of Climate Change",
      "Social and Environmental Impacts of Smart Grid Implementation",
      "Community-Based Renewable Energy Projects",
      "Policy and Regulatory Frameworks for Smart Grids",
      "Green Buildings and Smart Grid Integration",
      "Circular Economy Approaches in Smart Grids",
      ]
    },
    {
      id: "2",
      name: "Empowering Entrepreneurship",
      list:[
        "Impact of Education on Entrepreneurial Success",
        "Women Empowerment through Entrepreneurship",
        "Role of Incubators and Accelerators in Entrepreneurial Ecosystems",
        "Social Entrepreneurship for Community Development",
        "Entrepreneurial Finance and Access to Capital",
        "Government Policies and Entrepreneurial Ecosystems",
        "Technology and Innovation in Entrepreneurship",
        "Corporate Social Responsibility (CSR) and Entrepreneurship",
        "Entrepreneurial Mindset and Skill Development",
        "E-commerce and Entrepreneurship",
        "Innovations in Entrepreneurial Education",
        "Entrepreneurial Ecosystems in Developing Countries",
        "Corporate Entrepreneurship and Entrepreneurship",
        "Green and Sustainable Entrepreneurship",
        ]
    },
    {
      id: "3",
      name: "Advancing and cutting edge technologies",
    },
    {
      id: "4",
      name: "Work life balance, stress management and mental health",
    },
    {
      id: "5",
      name: "Tech for Good: Innovations in Finance, Education, and Agriculture for Humanitarian Impact",
    },
  ];
  const topics = [
    {
      id: "1",
      name: "Poster & Rangoli Themes",
    },
    {
      id: "2",
      name: "Debate Topics",
    },
  ];
  const guidelines = [
    {
      id: "1",
      name: "Guidelines for Paper",
    },
    {
      id: "2",
      name: "Guidelines for Poster Paper",
    },
    {
      id:"3",
      name:"Guidelines for Rangoli"
    }
  ];
  return (
    <>
      <Header active="call-for-paper" />
      <div className="flex gap-12">
      <div className="h-screen overflow-y-auto w-[30%] -mb-6">
      <div className="w-[100%] border-r-2 border-gray  p-4">
        <div className="flex flex-col gap-4">
        <div className="flex flex-col justify-center items-left px-2 ">
          <p className="text-[#FE508D] text-xl font-medium">Paper tracks</p>
          {paperTracks.map((item) => (
            <div onClick={() =>handleTrackClick(item.id)} className={`w-[100%] rounded-xl p-3 my-2 cursor-pointer ${selectedTrack === item.id ? 'bg-[#FE508D] text-white' : 'bg-[#F5F5F5] text-black'}`} >
              {item.id}. {item.name}
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center items-left px-2">
          <p className="text-[#FE508D] text-xl font-medium">Topics & Themes</p>
          {topics.map((item) => (
            <div onClick={() => handleTopicClick(item.id)} className={`w-[100%] rounded-xl p-3 my-2 cursor-pointer ${selectedTopic === item.id ? 'bg-[#FE508D] text-white' : 'bg-[#F5F5F5] text-black'}`} >
              {item.name}
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center items-left px-2">
          <p className="text-[#FE508D] text-xl font-medium" >Guidelines</p>
          {guidelines.map((item) => (
            <div  onClick={() => handleGuideClick(item.id)} className={`w-[100%] rounded-xl p-3 my-2 cursor-pointer ${selectedGuide === item.id ? 'bg-[#FE508D] text-white' : 'bg-[#F5F5F5] text-black'}`}>
              {item.name}
            </div>
          ))}
        </div>
        </div>
      </div>
      </div>
      <div className="flex flex-col py-4 gap-2">
      <p className="text-[#FE508D] text-2xl font-medium">
     {selectedTrackname}
      </p>
     <ul list-style={"disc"} className="flex flex-col gap-2">
     {topiclist.map((item)=><li>{item}</li>)}
      </ul>
      </div>
      </div>
      <Footer />
    </>
  );
};
export default page;
