import React from "react";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiJavascript, SiCplusplus, SiC, SiMongodb, SiPostman } from "react-icons/si";

const Skill = () => {
  // Icons array representing technologies
  const icons = [
    <FaNodeJs className="w-[80px] h-[50px]  px-3 text-green-500" />,
    <FaReact className="w-[80px] h-[50px]  px-3 text-blue-500" />,
    <SiJavascript className="w-[80px] h-[50px]  px-3 text-yellow-500" />,
    <FaPython className="w-[80px] h-[50px]  px-3 text-blue-400" />,
    <SiCplusplus className="w-[80px] h-[50px]  px-3 text-purple-500" />,
    <SiC className="w-[80px] h-[50px]  px-3 text-blue-700" />,
    <SiMongodb className="w-[80px] h-[50px]  px-3 text-green-600" />,
    <SiPostman className="w-[80px] h-[50px]  px-3 text-orange-500" />,
  ];

  return (
    <div className="bg-[#11071F] flex flex-col overflow-hidden  items-center h-screen">
      {/* Scrolling Container */}
    <p className="text-3xl pb-5 ">Skills I have Learned!</p>
      <div className="infinite-move-skill-container sm:w-1/2 p-5 flex overflow-hidden ">
        <div className="infinite-move-skill flex">
          {icons}
          {icons} {/* Duplicate for seamless scrolling */}
        </div>
      </div>
      <div className="w-[400px] text-white text-center mt-4">2</div>
    </div>
  );
};

export default Skill;
