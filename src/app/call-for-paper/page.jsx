"use client";
import React from "react";
import { useState } from "react";
import Footer from "../../components/footer.jsx";
import Header from "../../components/Header/Header.js";
import { paperTracks, topics, guidelines } from './data.js';
import './page.css'

const page = () => {
  const [selectedTrack, setSelectedTrack] = useState('1');
  const [selectedTrackname, setSelectedTrackname] = useState(paperTracks[0].name);
  const [tracklist, setTrackList] = useState(paperTracks[0].list);
  const [selectedTopic, setSelectedTopic] = useState('21');
  const [selectedTopicname, setSelectedTopicname] = useState(topics[0].name);
  const [topicList ,setTopicList]=useState(topics[0].list)
  const [selectedGuide, setSelectedGuide] = useState("11");
  const [selectedGuidename, setSelectedGuidename] = useState(guidelines[0].name);
  const [guideList, setGuideList] = useState(guidelines[0].list);
  // const [guideHead, setGuideList] = useState(guidelines[0].list);
  // const [guideCo, setGuideList] = useState(guidelines[0].list);

  const handleTrackClick = (option) => {
    setSelectedTrack(option);
    const obj=paperTracks.find((item)=>item.id==option);
    setSelectedTrackname(obj.name);
    setTrackList(obj.list);
  };
  const handleTopicClick = (option) => {
    setSelectedTopic(option);
    const obj=topics.find((item)=>item.id==option);
    setSelectedTopicname(obj.name);
    setTopicList(obj.list);
  };
  const handleGuideClick = (option) => {
    setSelectedGuide(option);
    const obj=guidelines.find((item)=>item.id==option);
    setSelectedGuidename(obj.name);
    setGuideList(obj.list);
  };

  return (
    <>
      <Header active="call-for-paper" />
      <div className="min-h-100[vh]">
      <div className="flex flex-col md:flex-row gap-4">
      <div className="md:h-screen md:overflow-y-auto md:w-[30%] scrollBar">
      <div className="w-[100%] border-r-2 border-gray  p-4">
        <div className="flex flex-col gap-4">
        <div className="flex flex-col justify-center items-left px-2 ">
          <p className="text-[#FE508D] text-base lg:text-xl font-medium">Paper tracks</p>
          {paperTracks.map((item) => (
            <div onClick={() =>handleTrackClick(item.id)} className={`text-sm lg:text-base w-[100%] rounded-xl p-3 my-2 cursor-pointer ${selectedTrack === item.id ? 'bg-[#FE508D] text-white' : 'bg-[#F5F5F5] text-black'}`} >
              {item.id}. {item.name}
            </div>
          ))}
        </div>
        <div className="flex flex-col py-4 gap-2 md:hidden">
      <p className="text-[#FE508D] text-xl lg:text-2xl font-medium">
     {selectedTrackname}
      </p>
     <ul className="flex flex-col gap-2 text-sm lg:text-base list-disc">
     {tracklist.map((item)=><li>{item}</li>)}
      </ul>
      <div className="flex flex-col text-sm lg:text-base">
      <span>Paper template :</span>
      <span>Please use IEEE two column paper template A4 Doc Microsoft word available at the following link:</span>
      <a href='https://www.ieee.org/conferences/publishing/templates.html'>Link</a>
      </div>
      </div>
        <div className="flex flex-col justify-center items-left px-2">
          <p className="text-[#FE508D] text-base lg:text-xl font-medium">Topics & Themes</p>
          {topics.map((item) => (
            <div onClick={() => handleTopicClick(item.id)} className={`text-sm lg:text-base w-[100%] rounded-xl p-3 my-2 cursor-pointer ${selectedTopic === item.id ? 'bg-[#FE508D] text-white' : 'bg-[#F5F5F5] text-black'}`} >
              {item.name}
            </div>
          ))}
        </div>
        <div className="md:hidden flex flex-col py-4 gap-2">
      <p className="text-[#FE508D] text-xl lg:text-2xl font-medium">
     {selectedTopicname}
      </p>
     <ul className="flex flex-col gap-2 text-sm lg:text-base list-disc ">
     {topicList.map((item)=><li>{item}</li>)}
      </ul>
      </div>
        <div className="flex flex-col justify-center items-left px-2">
          <p className="text-[#FE508D] text-base lg:text-xl font-medium" >Guidelines</p>
          {guidelines.map((item) => (
            <div  onClick={() => handleGuideClick(item.id)} className={`text-sm lg:text-base w-[100%] rounded-xl p-3 my-2 cursor-pointer ${selectedGuide === item.id ? 'bg-[#FE508D] text-white' : 'bg-[#F5F5F5] text-black'}`}>
              {item.name}
            </div>
          ))}
        </div>
        <div className="md:hidden flex flex-col py-4 gap-2">
      <p className="text-[#FE508D] text-xl lg:text-2xl font-medium">
     {selectedGuidename}
      </p>
     <ul className="flex flex-col gap-2 text-sm lg:text-base list-disc">
     {guideList.map((item)=><li>{item}</li>)}
      </ul>
      </div>
        </div>
      </div>
      </div>
      <div className="hidden md:flex flex-col md:h-screen md:overflow-y-auto md:w-[60%] scrollBar md:p-0">
      <div className="flex flex-col py-4 gap-2">
      <p className="text-[#FE508D] text-xl lg:text-2xl font-medium">
     {selectedTrackname}
      </p>
     <ul className="flex flex-col gap-2 text-sm lg:text-base list-disc">
     {tracklist.map((item)=><li>{item}</li>)}
      </ul>
      </div>
      <div className="flex flex-col text-sm lg:text-base">
      <span>Paper template :</span>
      <span>Please use IEEE two column paper template A4 Doc Microsoft word available at the following link:</span>
      <a href='https://www.ieee.org/conferences/publishing/templates.html'>Link</a>
      </div>
      <div className="hidden md:flex flex-col py-4 gap-2 ">
      <p className="text-[#FE508D] text-xl lg:text-2xl font-medium">
     {selectedTopicname}
      </p>
     <ul className="flex flex-col gap-2 text-sm lg:text-base list-disc">
     {topicList.map((item)=><li>{item}</li>)}
      </ul>
      </div>
      <div className="hidden md:flex flex-col py-4 gap-2">
      <p className="text-[#FE508D] text-xl lg:text-2xl font-medium">
     {selectedGuidename}
      </p>
     <ul className="flex flex-col gap-2 text-sm lg:text-base list-disc">
     {guideList.map((item)=><li>{item}</li>)}
      </ul>
      </div>
      </div>
      </div>
      </div>
      <Footer />
    </>
  );
};
export default page;
